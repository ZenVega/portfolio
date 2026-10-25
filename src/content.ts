// All portfolio content lives here — edit this file to update the site.

// kind picks the color, size the weight in the skills mix
export type Skill = {
  name: string
  kind: 'code' | 'hardware' | 'craft' | 'life'
  size?: 1 | 2 | 3
  note?: string
}

export type Project = {
  title: string
  description?: string
  tags?: string[]
  links?: { label: string; href: string }[]
}

export type Experience = {
  role: string
  company: string
  period?: string
  summary?: string
  details?: string[]
}

export const profile = {
  name: 'Urs Schmidt',
  alias: 'the.not.so.distant.future',
  role: 'Software Engineer',
  tagline: 'Building for the web — and repairing, recycling and wiring up everything else.',
  about: [
    "Hi, I'm Urs. I'm primarily a web developer, but I also enjoy building, repairing, and recycling things with electronics, robotics, modular synths, woodworking, and much more. Check out my projects on Hackaday if you would like to know more.",
    "I enjoy boxing and other sports, and I walk long distances. I'm into all kinds of music, concerts, and records, ranging from Jazz to Punk. I care about the climate crisis, social justice, dark literature, and my balcony.",
  ],
  focus: ['Web Development', 'Mobile Development', 'Electronics', 'Robotics', 'Woodworking'],
  email: 'urslaurel.schmidt@gmail.com',
  links: [
    { label: 'GitHub', href: 'https://github.com/ZenVega' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/urs-schmidt/' },
    { label: 'Hackaday', href: 'https://hackaday.io/ZenVega' },
  ],
}

export const skillsOverview: string[] = [
  "On the web, I mostly work with TypeScript, React and Next.js, styling with Tailwind or Styled Components, and I build mobile apps with React Native. Along the way at Technologiestiftung Berlin, diva-e and stern105 I've also shipped with Vue.js, Express, FastAPI, Storybook, Storyblok and WordPress — always in agile teams, for a while as Scrum Master.",
  "Away from the browser I like to go lower level: C and C++ from 42 Berlin, microcontrollers like the RP2040 and RISC-V chips, QMK firmware, PCB design in KiCad, and 3D modelling in Fusion360 and FreeCAD for printing. Lately that turns into macropads and noise-making badge add-ons, and into workshops where I teach other people to build them.",
  "Before coding I built film sets and props, ran a bar with a team of 14, and studied landscape architecture. That still shows: I like making things with my hands, fixing what's broken, and turning other people's trash into something new.",
]

// Not rendered at the moment — the Skills section shows skillsOverview instead.
// Deliberately shuffled — the mix is the point
export const skills: Skill[] = [
  { name: 'TypeScript', kind: 'code', size: 3, note: 'every day' },
  { name: 'soldering', kind: 'hardware', size: 3 },
  { name: 'set building', kind: 'craft', size: 2 },
  { name: 'Next.js', kind: 'code', size: 2, note: 'bread and butter' },
  { name: 'turning street trash into gadgets', kind: 'hardware', size: 1 },
  { name: 'p5.js', kind: 'code', note: 'animations & little games' },
  { name: 'modular synths', kind: 'hardware', size: 2 },
  { name: 'running a bar', kind: 'life', size: 2 },
  { name: 'KiCad', kind: 'hardware', size: 2 },
  { name: 'Tailwind', kind: 'code' },
  { name: 'boxing', kind: 'life' },
  { name: 'C / C++', kind: 'code', size: 2, note: '42 Berlin' },
  { name: 'woodworking', kind: 'craft', size: 2 },
  { name: 'QMK firmware', kind: 'hardware' },
  { name: 'React', kind: 'code', size: 3 },
  { name: 'React Native', kind: 'code', size: 2, note: 'mobile apps' },
  { name: 'teaching workshops', kind: 'life', size: 2 },
  { name: 'RISC-V microcontrollers', kind: 'hardware' },
  { name: 'Vue.js', kind: 'code' },
  { name: 'prop making', kind: 'craft' },
  { name: 'RP2040', kind: 'hardware' },
  { name: 'Scrum', kind: 'life', note: 'certified' },
  { name: 'Python', kind: 'code', note: 'micro & data science' },
  { name: 'PCB design', kind: 'hardware', size: 2 },
  { name: 'set dressing', kind: 'craft' },
  { name: 'Node.js / Express', kind: 'code' },
  { name: 'walking very long distances', kind: 'life' },
  { name: '3D printing', kind: 'hardware', size: 2 },
  { name: 'Styled Components', kind: 'code' },
  { name: 'robotics', kind: 'hardware', size: 3 },
  { name: 'landscape architecture', kind: 'craft' },
  { name: 'FastAPI / Flask', kind: 'code' },
  { name: 'managing a team of 14', kind: 'life' },
  { name: 'Fusion360 / FreeCAD', kind: 'hardware' },
  { name: 'Linux', kind: 'code', note: 'system & network programming' },
  { name: 'repairing things', kind: 'craft', size: 2 },
  { name: 'Storybook & Storyblok', kind: 'code' },
  { name: 'WS2812B blinkenlights', kind: 'hardware' },
  { name: 'record digging', kind: 'life', note: 'jazz to punk' },
  { name: 'Figma / Illustrator / Photoshop', kind: 'craft' },
  { name: 'Git', kind: 'code', note: 'GitHub & GitLab' },
  { name: 'MIDI over USB', kind: 'hardware' },
  { name: 'production design', kind: 'craft' },
  { name: 'MongoDB / Supabase', kind: 'code' },
  { name: 'open source', kind: 'life', size: 2 },
  { name: 'WordPress & jQuery', kind: 'code', note: 'we all started somewhere' },
  { name: 'Jira / Asana', kind: 'life' },
  { name: 'driving the truck', kind: 'craft' },
  { name: 'tending my balcony', kind: 'life' },
]

export const webProjects: Project[] = [
  {
    title: 'Holy Habits',
    description: "Website for Nuria's yoga, coaching and essential oils practice.",
    links: [{ label: 'holyhabits.club', href: 'https://holyhabits.club/' }],
  },
  {
    title: 'unter der hand',
    links: [{ label: 'unterderhand.berlin', href: 'https://www.unterderhand.berlin' }],
  },
  {
    title: 'ROBO + ROBERTA',
    description: 'Website for a series of picture books, audio plays and art projects about two robot friends.',
    links: [{ label: 'roboundroberta.de', href: 'https://roboundroberta.de/' }],
  },
  {
    title: 'Make Your Own Ring',
    description: 'Shop for a kit to design your own ring and have it cast in sterling silver.',
    links: [{ label: 'makeyourownring.nl', href: 'https://makeyourownring.nl/' }],
  },
  {
    title: 'Hacktoberfest',
    description: 'Open source contribution.',
    links: [{ label: 'hacktoberfest.com', href: 'https://hacktoberfest.com/' }],
  },
]

export const hardwareProjects: Project[] = [
  {
    title: 'macro_GOAT',
    description:
      'The successor to the Disarray Desnarler: a custom macropad built around an RP2040-Zero with a 16-LED WS2812B array, hot-swap switches, and up to four optional EC11 rotary encoders.',
    tags: ['RP2040', 'QMK', 'WS2812B', 'KiCad'],
    links: [
      {
        label: 'Docs',
        href: 'https://github.com/ZenVega/disarray_desnarler_docs/tree/main/macro_GOAT',
      },
      { label: 'Firmware', href: 'https://github.com/ZenVega/qmk_disarray_desnarler' },
    ],
  },  {
    title: 'Disarray Desnarler',
    description:
      'A solder-it-yourself macropad that runs on an RP2040. It runs QMK, comes with 4 keys and a fader and looks cool on your desk. Built with Hillary and Julia.',
    tags: ['RP2040', 'QMK', 'KiCad', 'DIY kit'],
    links: [
      { label: 'Hackaday', href: 'https://hackaday.io/project/204536-disarray-desnarler' },
      { label: 'Docs', href: 'https://github.com/ZenVega/disarray_desnarler_docs' },
    ],
  },

  {
    title: 'Satisfying-Senseless-Sonic Add-On',
    description:
      'A motor-driven noise maker on the Hackaday Europe badge proto petal, programmed on a CH32V003 RISC-V microcontroller — sequenced into a badge orchestra.',
    tags: ['RISC-V', 'CH32V003', 'I2C'],
    links: [{ label: 'Hackaday Europe', href: 'https://hackaday.io/europe2025#workshops' }],
  },
  {
    title: 'Gaggia Classic Scale Mod',
    description:
      'A scale built into the drip tray of a Gaggia Classic that controls how long the espresso shot pours. Load cells under the tray feed an Arduino Nano via two HX711 amplifiers; a rotary encoder sets the target weight and tares the scale. Inspired by the Gaggiuino project, whose 3D-printable load cell mount it uses.',
    tags: ['Arduino', 'load cells', 'HX711', '3D printing'],
    links: [
      { label: 'Hackaday', href: 'https://hackaday.io/project/203943-gaggia-classic-scale-mod' },
      { label: 'Code', href: 'https://github.com/ZenVega/Gaggia_Scale_Module/tree/main' },
      { label: 'Video', href: 'https://youtube.com/shorts/G5Hq_KEejkw' },
      { label: 'Gaggiuino', href: 'https://github.com/Zer0-bit/gaggiuino' },
    ],
  },
  {
    title: 'RGB LED Controls from a Vintage TV Panel',
    description:
      "Workbench lighting from a wrecked tube TV found on the street: its brightness, contrast and volume slide potentiometers now dim the red, green and blue channels of an LED strip via 555/556 timer PWM. Housed in a 3D-printed case, with the LEDs hidden in aluminium tubes behind milky glass. Schematic based on Lb_20's instructions.",
    tags: ['555 / 556 timers', 'PWM', 'upcycling', '3D printing'],
    links: [
      { label: 'Hackaday', href: 'https://hackaday.io/project/196360-rgb-led-controls-from-vintage-tv-panel' },
      { label: 'Video', href: 'https://youtu.be/5DjV9LJLL90' },
    ],
  },
]

// Shown under the hardware projects
export const moreBuilds = [
  { label: 'Hackaday', href: 'https://hackaday.io/ZenVega' },
  { label: 'Instagram', href: 'https://www.instagram.com/the.not.so.distant.future/' },
]

export const experience: Experience[] = [
  { role: 'Software Engineer', company: 'flowkey', period: '2025 — now' },
  {
    role: 'Web Developer',
    company: 'Technologiestiftung Berlin',
    period: '2022 — 2024',
    summary:
      'Working as a web developer with Next.js, Express.js, Tailwind and TypeScript, and implementing an agile routine as a Scrum Master.',
    details: [
      'AMAREX — tool for rainwater management to the increasing extreme stresses of heavy rainfall and drought',
      'Kiezbox 2.0 — alternative self-sufficient power communication network for emergencies',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'diva-e',
    period: '2021 — 2022',
    summary:
      'Next.js, Vue.js, Styled Components and TypeScript. Agency experience with big clients in an agile team.',
  },
  {
    role: 'Web Developer',
    company: 'stern105',
    period: '2021 — 2022',
    summary: 'Web developer in a small agency, working with WordPress, JavaScript and jQuery.',
  },
]

export const education: Experience[] = [
  {
    role: 'Software Engineering',
    company: '42 Berlin',
    summary:
      'Software engineering school with a focus on low level C, OOP in C++, Linux, network and system programming, algorithms and data structures.',
  },
  { role: 'Scrum Master Certificate', company: 'CSM® Training', period: '2023' },
  {
    role: 'Digital Shaper Program',
    company: 'TechLabs',
    period: '2020',
    summary: '6 month data science bootcamp',
  },
  { role: 'Full Stack Web Development Course', company: 'Codecademy', period: '2020' },
  { role: 'Landscape Architecture', company: 'TU Berlin', period: '2009 — 2015' },
]

export const beforeCoding: Experience[] = [
  {
    role: 'Founder',
    company: 'Tennis Bar',
    period: '2016 — 2019',
    summary:
      'Running a cozy place in Berlin/Neukölln, including a venue and an atelier, and managing a team of 14 people.',
  },
  {
    role: 'Film Art Department, Advertisement & TV',
    company: 'Freelance',
    period: '2008 — 2019',
    summary:
      'Working in all kinds of disciplines such as production designer, set builder, set dresser, swing gang, prop assistant, construction and driver.',
  },
]

export type Workshop = {
  title: string
  event: string
  date?: string
  location?: string
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
  {
    title: 'Learn to Solder — Build Your Mechanical Keyboard',
    event: 'FabLabNK',
    location: 'FabLabNK at 42 Berlin',
    description: ['A soldering workshop where participants build their own mechanical keyboard.'],
  },
  {
    title: 'Learn 3D Modelling with FreeCAD',
    event: 'FabLabNK',
    location: 'FabLabNK at 42 Berlin',
    description: ['An introduction to 3D modelling with the open-source CAD software FreeCAD.'],
  },
]
