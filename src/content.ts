// All portfolio content lives here — edit this file to update the site.

export type Skill = {
  name: string
  note?: string
}

export type Project = {
  title: string
  description?: string
  tags?: string[]
  link?: string
  repo?: string
}

export type Experience = {
  role: string
  company: string
  period: string
  summary?: string
}

export const profile = {
  name: 'Urs Laurel Schmidt',
  role: 'Web Developer',
  tagline: 'Building for the web — and repairing, recycling and wiring up everything else.',
  about: [
    "Hi, I'm Urs. I'm primarily a web developer, but I also enjoy building, repairing, and recycling things with electronics, robotics, modular synths, woodworking, and much more. Check out my projects on Hackaday if you would like to know more.",
    "I enjoy boxing and other sports, and I walk long distances. I'm into all kinds of music, concerts, and records, ranging from Jazz to Punk. I care about the climate crisis, social justice, dark literature, and my balcony.",
  ],
  focus: ['Web Development', 'Electronics', 'Robotics', 'Woodworking'],
  email: 'urslaurel.schmidt@gmail.com',
  links: [
    { label: 'GitHub', href: 'https://github.com/ZenVega' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/urs-schmidt/' },
    { label: 'Hackaday', href: 'https://hackaday.io/ZenVega' },
  ],
}

export const skills: Skill[] = [
  { name: 'HTML / CSS', note: 'styling usually implemented with tailwind or styled-components' },
  { name: 'JavaScript / TypeScript', note: 'working with typescript every day' },
  { name: 'p5.js', note: 'made a lot of animations and little games' },
  { name: 'React.js', note: 'main js framework usually via next.js' },
  { name: 'Vue.js', note: 'used professionally as well' },
  { name: 'Storybook & Storyblok', note: 'professional use for component development' },
  { name: 'Node.js', note: 'writing scripts to improve workflow' },
  { name: 'Git', note: 'I work with GitHub and GitLab' },
  { name: 'Python', note: 'some micropython, did a DataScience Bootcamp some time ago' },
  { name: 'C / C++', note: 'to work with all sorts of microcontrollers' },
  { name: 'MongoDB / Supabase', note: "worked with these but I'm rather in the FrontEnd so far" },
  { name: 'Flask / FastAPI', note: 'build a handful of backends a while ago' },
  { name: 'Illustrator / Photoshop / Figma', note: 'useful to make quick fixes on UX material' },
  { name: 'KiCad', note: 'sketching schematics for electronics projects' },
  { name: 'Fusion360', note: 'modelling for 3D-printing' },
]

export const projects: Project[] = [
  { title: 'strickt dagegen', link: 'https://stricktdagegen.club/' },
  { title: 'ROBO + ROBERTA', link: 'https://roboundroberta.de/' },
  { title: 'Make Your Own Ring', link: 'https://makeyourownring.nl/' },
  { title: 'daninikitenko.com/thus', link: 'https://daninikitenko.com/thus' },
]

export const experience: Experience[] = [
  { role: 'Web Developer', company: 'Technologiestiftung Berlin', period: '2022 — now' },
  { role: 'Scrum Master Certificate', company: 'CSM® Training', period: '2023' },
  { role: 'Web Developer', company: 'diva-e', period: '2021 — 2022' },
  { role: 'Web Developer', company: 'stern105', period: '2021 — 2022' },
  {
    role: 'Digital Shaper Program',
    company: 'TechLabs',
    period: '2020',
    summary: '6 month data science bootcamp',
  },
  {
    role: 'Hacktoberfest 2020',
    company: 'Open Source',
    period: '2020',
    summary: 'contributing to open source',
  },
  { role: 'Full Stack Web Development Course', company: 'Codecademy', period: '2020' },
]

export const beforeCoding: Experience[] = [
  {
    role: 'Co-Founder',
    company: 'TennisBar',
    period: '2016 — 2019',
    summary:
      'A cozy place in Berlin/Neukölln including a little venue for concerts and an atelier. Working with a team of 14 people.',
  },
  {
    role: 'B.Sc. Landscape Architecture',
    company: 'TU Berlin',
    period: '2009 — 2015',
  },
  {
    role: 'Film Art Department, Advertisement & TV',
    company: 'Freelance',
    period: '2008 — 2020',
    summary:
      'Working in all kinds of disciplines such as production designer, set builder, set dresser, swing gang, property assistant, construction and driver.',
  },
]

export type Workshop = {
  title: string
  event: string
  date: string
  location: string
  cohosts?: string[]
  description: string[]
  links?: { label: string; href: string }[]
}

export const workshops: Workshop[] = [
  {
    title: 'macro_GOAT — DIY Macropad',
    event: '3rd Open Source Hardware Conference (OSHOP 2026)',
    date: '23 — 24 September 2026',
    location: 'Halle (Saale)',
    description: [
      'A workshop around the macro_GOAT: a custom macropad built around an RP2040-Zero with a 16-LED WS2812B array, hot-swap switches, and up to four optional EC11 rotary encoders.',
      'The hardware is fully open source — KiCad project, gerbers, SMD stencil and bill of materials are published, and the firmware is a QMK keymap shared with the Disarray Desnarler.',
    ],
    links: [
      { label: 'OSHOP conference 2026', href: 'https://www.oshop-network.de/konferenz-2026/' },
      {
        label: 'Project docs on GitHub',
        href: 'https://github.com/ZenVega/disarray_desnarler_docs/tree/main/macro_GOAT',
      },
      { label: 'QMK firmware', href: 'https://github.com/ZenVega/qmk_disarray_desnarler' },
    ],
  },
  {
    title: 'Disarray Desnarler — Build and flash your DIY Macropad',
    event: '39th Chaos Communication Congress (39C3)',
    date: 'Day 3 · 29 December 2025, 14:30 — 16:30',
    location: 'Hardware Hacking Area, Hamburg',
    cohosts: ['Hillary', 'Julia', 'fablab|nk'],
    description: [
      'A two-hour workshop where participants solder and flash their own macropad (aka mini keyboard) and configure it to their personal requirements. No prior knowledge required.',
      'The initial goal was to help people discover workspace management on their OS, but the macropad can be customized however you like: favorite keyboard shortcuts, launching apps with one button, software control, or even a MIDI-over-USB controller for music equipment.',
    ],
    links: [
      {
        label: 'Event on events.ccc.de',
        href: 'https://events.ccc.de/congress/2025/hub/en/event/detail/disarray-desnarler-diy-macropad_uogd',
      },
      { label: 'Project on Hackaday', href: 'https://hackaday.io/project/204536-disarray-desnarler' },
      { label: 'Build & code docs on GitHub', href: 'https://github.com/ZenVega/disarray_desnarler_docs' },
    ],
  },
  {
    title: 'Satisfying-Senseless-Sonic Add-On (SSSAO)',
    event: 'Hackaday Europe 2025',
    date: 'Sat 15 March 2025, 17:00 — 19:00',
    location: 'MotionLab, Berlin',
    cohosts: ['Graham Booth'],
    description: [
      'Build a noise-making device on the I2C proto-petal badge add-on from the Hackaday swag bag, and get to grips with low-cost open-hardware RISC-V microcontrollers along the way.',
      'Participants solder a motor circuit to their proto petal, add sonically resonating items for the motor to actuate, program the onboard CH32V003 microcontroller using cnlohr\'s ch32v003fun library, then join the badge orchestra — with a Pico rhythmically sequencing up to six add-ons.',
    ],
    links: [{ label: 'Workshop on hackaday.io', href: 'https://hackaday.io/europe2025#workshops' }],
  },
]
