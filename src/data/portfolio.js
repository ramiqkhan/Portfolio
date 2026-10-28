import blackstream from '../assets/projects/blackstream.webp';
import idealwatches from '../assets/projects/idealwatches.webp';
import iqra from '../assets/projects/iqra.webp';
import houston from '../assets/projects/houston.webp';
import herbalyze from '../assets/projects/herbalyze.webp';
import crafttech from '../assets/projects/crafttech.webp';
import garden from '../assets/projects/garden.webp';
import construction from '../assets/projects/construction.webp';
import sports from '../assets/projects/sports.webp';
import dacake from '../assets/projects/dacake.webp';
import ventura from '../assets/projects/ventura.webp';
import zak from '../assets/projects/zak.webp';

export const profile = {
  name: 'Muhammad Ramiq Khan',
  role: 'Full Stack Developer',
  email: 'mramiqkhan66@gmail.com',
  phone: '+92 346 1112148',
  phoneHref: 'tel:+923461112148',
  location: 'Karachi, Pakistan',
  github: 'https://github.com/ramiqkhan',
  githubHandle: 'ramiqkhan',
  linkedin: 'https://www.linkedin.com/in/mramiqkhan/',
  linkedinHandle: 'mramiqkhan',
  currentRole: 'Head Developer at Craft Tech',
};

export const navLinks = [
  { id: 'projects', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export const featuredProjects = [
  {
    title: 'Blackstream Limo',
    category: 'Luxury Chauffeur & Transportation',
    theme: 'limo',
    location: 'Chicago, USA',
    url: 'https://blackstreamlimo.com/',
    domain: 'blackstreamlimo.com',
    image: blackstream,
    subtitle: 'Luxury Chauffeur Experience · Chicago, USA',
    tagline:
      'A premium transportation website combining luxury brand presentation, vehicle discovery, and a streamlined booking experience.',
    // Short, verified contributions (checked against the live site and its API)
    contributions: [
      'Responsive React frontend with light and dark themes',
      'Fleet catalogue served by an Express REST API',
      'Booking flow wired to a bookings API and Moovs',
      'Testimonials and Cloudinary-hosted vehicle imagery',
      'Vercel deployment with SEO and Open Graph setup',
    ],
    stack: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Node.js', 'Express', 'MongoDB', 'Cloudinary', 'Moovs', 'Vercel'],
    caseStudy: [
      {
        label: 'Frontend',
        text: 'React single-page app built with Vite and Tailwind CSS v4, with client-side routing through React Router and a light/dark theme.',
      },
      {
        label: 'Backend',
        text: 'Separate Express REST API deployed on Vercel, exposing vehicles, bookings and testimonials endpoints consumed by the frontend.',
      },
      {
        label: 'Data & media',
        text: 'MongoDB collections modelled with Mongoose; vehicle photography delivered through Cloudinary.',
      },
      {
        label: 'Integrations',
        text: 'Moovs operator widget for reservations, plus canonical, Open Graph and Search Console setup for local search visibility.',
      },
    ],
  },
  {
    title: 'Ideal Watches',
    category: 'Premium Watch E-commerce',
    theme: 'watches',
    location: 'Pakistan',
    url: 'https://idealwatches.shop/',
    domain: 'idealwatches.shop',
    image: idealwatches,
    subtitle: 'Luxury Watch Boutique · Pakistan',
    tagline:
      'A premium e-commerce experience built from the ground up, combining elegant product presentation with the functionality needed to run an online watch store.',
    contributions: [
      'UI/UX and React storefront implementation',
      '360+ watch catalogue with product, brand and collection pages',
      'Search, wishlist, cart and Cash on Delivery checkout',
      'Express REST API and MongoDB for products and orders',
      'Order tracking and Vercel production deployment',
    ],
    stack: ['React', 'Vite', 'Framer Motion', 'Swiper', 'Node.js', 'Express', 'MongoDB', 'Cloudinary', 'Vercel'],
    caseStudy: [
      {
        label: 'Frontend',
        text: 'React and Vite storefront with Swiper carousels, Framer Motion transitions and a cart persisted in local storage.',
      },
      {
        label: 'Backend',
        text: 'Express REST API on Vercel covering watches, straps, sales, search, contact enquiries, orders and order tracking.',
      },
      {
        label: 'Data & media',
        text: 'MongoDB product catalogue of 360+ watches with detailed specifications; product imagery hosted on Cloudinary.',
      },
      {
        label: 'Commerce',
        text: 'Cash on Delivery checkout, order tracking by reference, WhatsApp contact and structured data for search engines.',
      },
    ],
  },
];

export const projects = [
  {
    title: 'Iqra Traders',
    type: 'Full stack',
    category: 'web',
    url: 'https://iqratraders.com/',
    domain: 'iqratraders.com',
    image: iqra,
    description:
      'Laptop and tech e-commerce store with product search, deals, reviews and order placement backed by its own REST API.',
    tags: ['React', 'Tailwind CSS', 'Express', 'REST API'],
  },
  {
    title: 'Houston Easy Repairs',
    type: 'Full stack',
    category: 'web',
    url: 'https://houstoneasyrepairs.com/',
    domain: 'houstoneasyrepairs.com',
    image: houston,
    description:
      'Home-repair services website with an appointment booking form, service and location pages, and a Node.js backend for enquiries.',
    tags: ['React', 'React Router', 'Node.js', 'Express'],
  },
  {
    title: 'Herbalyze',
    type: 'Full stack',
    category: 'web',
    url: 'https://www.theherbalyze.com/',
    domain: 'theherbalyze.com',
    image: herbalyze,
    description:
      'Herbal wellness store with product catalogue, deals, order tracking and a blog with comments, all served from a custom API.',
    tags: ['React', 'Tailwind CSS', 'Express', 'REST API'],
  },
  {
    title: 'Craft Tech',
    type: 'Full stack',
    category: 'web',
    url: 'https://crafttech.crafttechco.com',
    domain: 'crafttech.crafttechco.com',
    image: crafttech,
    description:
      'Company website for Craft Tech with portfolio showcase, client reviews and a contact form connected to an API endpoint.',
    tags: ['React', 'REST API'],
  },
  {
    title: 'Da Cakes Houston',
    type: 'Frontend',
    category: 'web',
    url: 'https://da-cake.vercel.app/same-day',
    domain: 'da-cake.vercel.app',
    image: dacake,
    description:
      'Bakery storefront with same-day and next-day ordering paths, a cake gallery and custom-quote entry points.',
    tags: ['React', 'Responsive UI'],
  },
  {
    title: "Lula's Garden",
    type: 'Frontend',
    category: 'web',
    url: 'https://garden-plum-sigma.vercel.app/',
    domain: 'garden-plum-sigma.vercel.app',
    image: garden,
    description:
      'Gift-box shop with seasonal campaign carousel, category navigation and a clean product collection layout.',
    tags: ['React', 'Vite'],
  },
  {
    title: 'Rise Construction',
    type: 'Frontend',
    category: 'web',
    url: 'https://construction-liard-two.vercel.app/',
    domain: 'construction-liard-two.vercel.app',
    image: construction,
    description:
      'Bold construction company website with full-bleed hero, specialties, portfolio and contact sections.',
    tags: ['React', 'Vite'],
  },
  {
    title: 'VenturaAxis Consulting',
    type: 'Frontend',
    category: 'web',
    url: 'https://ventura-fawn-gamma.vercel.app/',
    domain: 'ventura-fawn-gamma.vercel.app',
    image: ventura,
    description:
      'Corporate site for a supply-chain and logistics consultancy with a split-layout hero and service overview.',
    tags: ['React', 'Responsive UI'],
  },
  {
    title: 'ZAK',
    type: 'Frontend',
    category: 'web',
    url: 'https://zak-seven.vercel.app/',
    domain: 'zak-seven.vercel.app',
    image: zak,
    description:
      'Brand website for a heritage flavour manufacturer with multi-page navigation, product and recipe sections.',
    tags: ['React', 'React Router'],
  },
  {
    title: 'Rising Stars of Baltimore',
    type: 'Frontend',
    category: 'web',
    url: 'https://sports-amber-eight.vercel.app/',
    domain: 'sports-amber-eight.vercel.app',
    image: sports,
    description:
      'Nonprofit website for a youth basketball initiative, covering mission, projects, events and ways to get involved.',
    tags: ['React', 'React Router'],
  },
  {
    title: 'FBR Invoice App',
    type: 'Mobile app',
    category: 'mobile',
    url: null,
    domain: 'React Native · Expo',
    image: null,
    description:
      'Mobile invoicing app built with React Native and Expo, with fast data-entry forms and locally stored invoice records.',
    tags: ['React Native', 'Expo'],
  },
];

// Skills showcase: each tech has an icon key (mapped in Skills.jsx) and the
// names it appears under in project stacks / role stacks, for "Used in".
export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    summary: 'Responsive, component-driven interfaces — from luxury brand sites to complete storefronts.',
    items: [
      { name: 'React.js', icon: 'react', aliases: ['React', 'React.js'] },
      { name: 'JavaScript (ES6+)', icon: 'javascript' },
      { name: 'HTML5', icon: 'html' },
      { name: 'CSS3', icon: 'css' },
      { name: 'Tailwind CSS', icon: 'tailwind', aliases: ['Tailwind CSS'] },
      { name: 'React Router', icon: 'router', aliases: ['React Router'] },
      { name: 'Framer Motion', icon: 'framer', aliases: ['Framer Motion'] },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Engineering',
    summary: 'REST APIs behind catalogues, bookings, orders, enquiries and authentication.',
    items: [
      { name: 'Node.js', icon: 'node', aliases: ['Node.js'] },
      { name: 'Express.js', icon: 'express', aliases: ['Express', 'Express.js'] },
      { name: 'REST APIs', icon: 'api', aliases: ['REST API', 'REST APIs', 'Express', 'Express.js'] },
      { name: 'JWT authentication & authorization', icon: 'jwt', aliases: ['JWT'] },
      { name: 'Nodemailer / SMTP', icon: 'mail' },
    ],
  },
  {
    id: 'database',
    title: 'Databases',
    summary: 'Document models behind product catalogues, vehicle fleets, orders and content.',
    items: [
      { name: 'MongoDB', icon: 'mongodb', aliases: ['MongoDB'] },
      // Mongoose is only verified for Blackstream (its API returns Mongoose's __v field)
      { name: 'Mongoose', icon: 'mongoose', usedIn: ['Blackstream Limo'] },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    summary: 'Cross-platform mobile apps built from a single React codebase.',
    items: [
      { name: 'React Native', icon: 'react', aliases: ['React Native'] },
      { name: 'Expo', icon: 'expo', aliases: ['Expo'] },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Deployment',
    summary: 'Versioning, API testing, media delivery, integrations and production deploys.',
    items: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'Postman', icon: 'postman' },
      { name: 'Vercel', icon: 'vercel', aliases: ['Vercel'] },
      { name: 'Cloudinary', icon: 'cloudinary', aliases: ['Cloudinary'] },
      { name: 'Moovs', icon: 'booking', aliases: ['Moovs'] },
      { name: 'SendGrid / Mailgun', icon: 'mailgun' },
    ],
  },
];

export const experience = [
  {
    org: 'Craft Tech',
    period: 'Nov 2025 — Present',
    current: true,
    note: 'Intern to lead developer in nine months.',
    roles: [
      {
        title: 'Full Stack Lead Developer',
        period: 'Nov 2025 — Present',
        points: [
          'Lead full-stack development of the Craft Tech Dashboard, a production business management system used for daily operations.',
          'Architect and build REST APIs, authentication, and reporting modules using Node.js, Express.js, and MongoDB.',
          'Design admin dashboards and internal tools with React.js and Tailwind CSS, translating business requirements into working features.',
          'Run code reviews and guide architecture decisions with the development team, improving code consistency and deployment reliability.',
        ],
        stack: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
      },
    ],
  },
  {
    org: 'Freelance',
    period: 'Ongoing',
    roles: [
      {
        title: 'Freelance Full Stack Developer',
        period: 'Ongoing',
        points: [
          'Take on independent client projects — business websites, e-commerce stores and booking platforms — from requirements to deployment.',
          'Build React frontends backed by Node.js and Express APIs with MongoDB, deployed on Vercel.',
        ],
        stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Vercel'],
      },
    ],
  },
  {
    org: 'Scalech',
    period: 'Feb 2025 — Nov 2025',
    roles: [
      {
        title: 'Mobile App & Web Developer',
        period: 'May 2025 — Nov 2025',
        points: [
          'Built and shipped production web and mobile applications end-to-end using React.js, React Native, Node.js, and MongoDB.',
          'Developed REST APIs, JWT authentication, and CRUD modules powering multiple client-facing products.',
          'Built responsive, cross-device UI and improved app performance through debugging, testing, and release management.',
        ],
        stack: ['React.js', 'React Native', 'Node.js', 'MongoDB', 'JWT'],
      },
      {
        title: 'Mobile App & Web Development Intern',
        period: 'Feb 2025 — May 2025',
        points: [
          "Built the company's startup website from scratch in React.js, taken live for public launch.",
          'Integrated frontend with backend APIs and MongoDB databases, handling data flow across the stack.',
        ],
        stack: ['React.js', 'REST APIs', 'MongoDB'],
      },
    ],
  },
];

export const education = {
  degree: 'BS Software Engineering',
  school: 'SZABIST',
  note: 'Coursework in data structures and algorithms, object-oriented programming and database systems.',
};

export const foundations = ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Java', 'C++', 'C#', 'Python'];
