import apple from "@/public/apple-store.png"
import octave from "@/public/octave.png"
import bot from "@/public/treasury-bot.png"
import opencontent from "@/public/opencontent.png"
import hackathon from "@/public/daobox-hackathon-ui.png"
import tribe from "@/public/tribes.webp"

export const placesWorkedData = [
  {
    link: 'https://www.daobox.app/',
    date: '2023 ─ PRESENT',
    position: 'Frontend Developer',
    company: 'Daobox',
    description:
      'We are a development studio working at the intersection of blockchain and artificial intelligence. Our objective is to ensure that DAOs are within the reach of all communities, fostering a governance framework that is transparent and inclusive for individuals and organizations alike.',
    technologies: [
      'React',
      'NextJS',
      'TailwindCSS',
      'Typescript',
      'Wagmi',
      'Cypress',
    ],
  },
  {
    link: 'https://www.bankless.community/',
    date: '2021 ─ PRESENT',
    position: 'Software Developer',
    company: 'Bankless Dao',
    description:
      'A decentralized autonomous organization that acts as a steward of the Bankless Movement progressing the world towards a future of greater freedom.',
    technologies: [
      'React',
      'Typescript',
      'NextJS',
      'TailwindCSS',
      'DiscordJS',
      'NodeJS',
    ],
  },
  {
    link: 'https://igowithigho.org/',
    date: 'July 2022 ─ October 2022',
    position: 'Software Developer',
    company: 'iGOwithIGHO',
    description:
      'We are passionate about international students, and our goal is to connect prospective international students to universities and colleges abroad.',
    technologies: [
      'NextJS',
      'Tailwindcss',
      'Javascript',
      'Sanity',
      'Wordpress',
    ],
  },
]

export const projectsData = [
    {
      link: 'https://github.com/DAObox/tribeOs',
      image: tribe,
      title: 'TribeOS',
      description:
        'TribeOS is a Decentralized Autonomous Organization (DAO) building tool built on the aragon OSx',
      technologies: ['NextJS', 'Tailwindcss', 'Aragon', 'Lens Protocol'],
    },
    {
      link: 'https://opencontent-studio.vercel.app/',
      image: opencontent,
      title: 'OpenContent',
      description: 'This is a decentralized content management system.',
      technologies: [
        'NextJS',
        'Tailwindcss',
        'EtherJS',
        'Thegraph Protocol',
        'Filecoin',
        'Solidity',
        'Polygon',
      ],
    },
    {
      link: 'https://daoglobal-hackathon-7wqwnwzyx-dao-box.vercel.app/members',
      image: hackathon,
      title: 'Daobox Hackathon UI',
      description: 'The user interface for daobox hackathon',
      technologies: ['NextJS', 'Tailwindcss', 'Lens Protocol', 'Rainbowkit'],
      nolink: true,
    },
    {
      link: 'https://github.com/Spade-Social-Org/spade-treasury-discord-bot',
      image: bot,
      title: 'Crypto Wallet Tracking And Notification Bot',
      description:
        'This is a specialized crypto bot meticulously designed to monitor blockchain wallet address activity, providing timely notifications to users or designated Discord communities. Its purpose is to keep stakeholders informed of pertinent blockchain events without engaging in trading activities.',
      technologies: ['NodeJS', 'Moralis', 'DiscordJS'],
    },
  {
    link: 'https://apple-store-livid.vercel.app/',
    image: apple,
    title: 'Apple Store Clone',
    description: 'A simple apple store landing page clone',
    technologies: [
      'Javascript',
      'NextJS',
      'Tailwindcss',
      'Vercel',
      'Framer Motion',
      'Sanity',
    ],
  },
  {
    link: 'https://octave-mu.vercel.app/',
    image: octave,
    title: 'Octave',
    description: 'A simple social media platform',
    technologies: ['NextJs', 'Tailwindcss', 'Vercel', 'Firebase', 'Recoil'],
  },
]
