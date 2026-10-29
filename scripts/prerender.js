// Runs after `vite build`: fills each built page with its server-rendered HTML,
// writes a page per project at /project/<slug>/ and generates the sitemap.
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'

const dist = new URL('../dist/', import.meta.url)
const ssrDir = new URL('../dist-ssr/', import.meta.url)
const { render, projects, siteUrl } = await import(new URL('entry-server.js', ssrDir).href)

const escape = (text) =>
  text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const fill = (html, route) => {
  if (!html.includes('<div id="root"></div>')) throw new Error('Empty #root not found in template')
  return html.replace('<div id="root"></div>', `<div id="root">${render(route)}</div>`)
}

// Swaps the content of a head tag that the template is known to contain
const setTag = (html, pattern, value) => {
  if (!pattern.test(html)) throw new Error(`Head tag not found: ${pattern}`)
  return html.replace(pattern, (_match, start, end) => `${start}${escape(value)}${end}`)
}

const pages = { home: '', web: 'web/', hardware: 'hardware/', workshops: 'workshops/' }
for (const [page, path] of Object.entries(pages)) {
  const file = new URL(`${path}index.html`, dist)
  await writeFile(file, fill(await readFile(file, 'utf8'), { page }))
}

const projectFile = new URL('project/index.html', dist)
const template = await readFile(projectFile, 'utf8')

for (const project of projects) {
  const title = `${project.title} — Urs Schmidt`
  const url = `${siteUrl}/project/${project.slug}/`
  let html = fill(template, { page: 'project', slug: project.slug })
  html = setTag(html, /(<title>)[^<]*(<\/title>)/, title)
  html = setTag(html, /(<meta property="og:title" content=")[^"]*(")/, title)
  html = setTag(html, /(<meta name="description" content=")[^"]*(")/, project.description)
  html = setTag(html, /(<meta property="og:description" content=")[^"]*(")/, project.description)
  html = html.replace(
    '<meta name="author"',
    `<link rel="canonical" href="${url}" />\n    <meta property="og:url" content="${url}" />\n    <meta name="author"`,
  )
  const dir = new URL(`project/${project.slug}/`, dist)
  await mkdir(dir, { recursive: true })
  await writeFile(new URL('index.html', dir), html)
}

// /project/ itself only redirects old ?id= links or shows "not found"
await writeFile(
  projectFile,
  fill(template, { page: 'project', slug: null }).replace(
    '<meta name="author"',
    '<meta name="robots" content="noindex" />\n    <meta name="author"',
  ),
)

const urls = [...Object.values(pages), ...projects.map((project) => `project/${project.slug}/`)]
await writeFile(
  new URL('sitemap.xml', dist),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((path) => `  <url><loc>${siteUrl}/${path}</loc></url>`).join('\n')}
</urlset>
`,
)

await rm(ssrDir, { recursive: true })
console.log(`Prerendered ${Object.keys(pages).length} pages and ${projects.length} projects`)
