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
    location: 'Chicago, USA',
    url: 'https://blackstreamlimo.com/',
    domain: 'blackstreamlimo.com',
    image: blackstream,
    summary:
      'A full-stack website for a Chicago chauffeur company: a premium brand presence, a fleet catalogue driven by a live API, and a booking flow that turns visitors into reservations.',
    challenge:
      'Luxury transport is sold on trust and first impressions. The site had to feel as refined as the service, present the fleet clearly, and make reserving a ride effortless on any device.',
    highlights: [
      'Fleet catalogue served from an Express REST API, with category filters and vehicle detail views',
      'Booking flow with vehicle pre-selection, connected to a bookings API and the Moovs reservation platform',
      'Customer testimonials and vehicle imagery loaded from the backend and Cloudinary',
      'Light and dark themes, plus SEO and Open Graph metadata for local search',
    ],
    stack: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Node.js', 'Express', 'MongoDB', 'Cloudinary', 'Vercel'],
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
    category: 'E-commerce & Digital Retail',
    location: 'Pakistan',
    url: 'https://idealwatches.shop/',
    domain: 'idealwatches.shop',
    image: idealwatches,
    summary:
      'A full-stack storefront for authentic luxury watches that feels like a boutique while handling the complete shopping journey: browse, search, cart, checkout and order tracking.',
    challenge:
      'Buying a high-value watch online demands confidence. The store needed premium product presentation, fast search across a large multi-brand catalogue, and a checkout built around Cash on Delivery.',
    highlights: [
      'Catalogue of 360+ watches, straps, collections and sale campaigns served by an Express REST API',
      'Product search, persistent cart and a checkout that creates orders through the API',
      'Order tracking by reference so customers can follow delivery without an account',
      'Cloudinary-hosted imagery, Swiper carousels and Framer Motion transitions',
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

export const skillGroups = [
  {
    title: 'Frontend',
    icon: 'frontend',
    items: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'React Router', 'Framer Motion'],
  },
  {
    title: 'Backend',
    icon: 'backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT authentication & authorization', 'Nodemailer / SMTP'],
  },
  {
    title: 'Database',
    icon: 'database',
    items: ['MongoDB', 'Mongoose'],
  },
  {
    title: 'Mobile',
    icon: 'mobile',
    items: ['React Native', 'Expo'],
  },
  {
    title: 'Tools & Deployment',
    icon: 'tools',
    items: ['Git', 'GitHub', 'Postman', 'Vercel', 'Cloudinary', 'Moovs', 'SendGrid / Mailgun'],
  },
];

export const foundations = ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Java', 'C++', 'C#', 'Python'];
