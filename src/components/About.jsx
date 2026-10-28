import { Section, Reveal } from './ui';
import { profile } from '../data/portfolio';

const capabilities = [
  { title: 'Frontend engineering', text: 'React interfaces, reusable components and responsive layouts that hold up on every screen.' },
  { title: 'Backend & APIs', text: 'Node.js and Express REST APIs, authentication and third-party integrations.' },
  { title: 'Data', text: 'MongoDB models behind catalogues, bookings, orders and content.' },
  { title: 'Commerce & booking', text: 'Carts, checkouts, order tracking and reservation flows built for real customers.' },
  { title: 'Shipping & maintenance', text: 'Deployment on Vercel, debugging in production and iterating after launch.' },
  { title: 'Business sense', text: 'Turning a client’s goals into scope, structure and an interface people trust.' },
];

const facts = [
  { label: 'Current role', value: profile.currentRole },
  { label: 'Education', value: 'BS Software Engineering, SZABIST' },
  { label: 'Based in', value: profile.location },
  { label: 'Open to', value: 'Full Stack · Frontend · React roles' },
];

function MonogramPlate() {
  return (
    <div className="monogram-plate" aria-hidden="true">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(closest-side,rgb(216_184_120/0.12),transparent_75%)]" />
      <span className="monogram-ring monogram-ring--outer" />
      <span className="monogram-ring monogram-ring--inner" />
      <span className="monogram-glyph absolute inset-0 grid place-items-center pr-[3%] text-[clamp(5.5rem,22vw,9.5rem)]">RK</span>

      <span className="crop-mark top-0 left-0 border-t border-l" />
      <span className="crop-mark top-0 right-0 border-t border-r" />
      <span className="crop-mark bottom-0 left-0 border-b border-l" />
      <span className="crop-mark right-0 bottom-0 border-r border-b" />

      <span className="label absolute top-1 left-7">Karachi, PK</span>
      <span className="label absolute top-1 right-7">Since 2025</span>
      <span className="label absolute bottom-1 left-7">Full stack</span>
      <span className="label label-gold absolute right-7 bottom-1">Craft Tech</span>
    </div>
  );
}

export default function About() {
  return (
    <Section id="about" tone="about" pattern="columns">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
        {/* Narrative */}
        <div className="lg:col-span-7">
          <Reveal>
            <div className="mb-10 flex items-center gap-4">
              <span className="label label-gold tabular-nums">02</span>
              <span className="h-px w-10 bg-gold-line" aria-hidden="true" />
              <span className="label">About — Profile</span>
            </div>
            <h2 className="text-[2.4rem] leading-[1.02] font-semibold tracking-[-0.04em] text-balance text-fg sm:text-6xl xl:text-[4.25rem]">
              Engineer by training, <span className="serif-accent">product builder</span> by practice.
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-12">
            <p className="label sm:col-span-3 sm:pt-2">
              {profile.name}
              <span className="mt-2 block text-gold normal-case tracking-normal">{profile.role}</span>
            </p>
            <div className="space-y-6 text-base leading-[1.8] text-pretty text-muted sm:col-span-9 sm:text-[1.0625rem]">
              <p className="first-letter:float-left first-letter:mt-1 first-letter:mr-3 first-letter:font-serif first-letter:text-[4.2rem] first-letter:leading-[0.8] first-letter:text-gold first-letter:italic">
                My name is Muhammad Ramiq Khan — a Software Engineering graduate, full stack developer and{' '}
                {profile.currentRole}. For nearly two years I've been building and shipping production software:
                websites, e-commerce platforms, booking systems and the APIs behind them.
              </p>
              <p>
                I work across the whole product — React interfaces, Node.js and Express APIs, MongoDB data models,
                third-party integrations and deployment — so a feature goes from idea to production without being handed
                between people.
              </p>
              <p className="border-l border-gold-line pl-5 font-serif text-[1.375rem] leading-[1.45] text-fg italic sm:text-2xl">
                I care about clean, maintainable code and software that solves the actual business problem.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Designed visual composition */}
        <Reveal delay={0.15} className="lg:col-span-5 lg:pt-6">
          <MonogramPlate />
          <dl className="mt-12 grid grid-cols-2 border-t border-line">
            {facts.map((f, i) => (
              <div
                key={f.label}
                className={`border-b border-line-soft py-5 ${i % 2 === 0 ? 'pr-4' : 'border-l border-l-line-soft pl-4 sm:pl-6'}`}
              >
                <dt className="label mb-1.5">{f.label}</dt>
                <dd className="text-sm text-fg sm:text-[0.9375rem]">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      {/* Capabilities band */}
      <Reveal className="mt-24 sm:mt-28">
        <div className="mb-8 flex items-baseline justify-between gap-6">
          <p className="label">What I bring</p>
          <span className="label hidden sm:inline">06 capabilities</span>
        </div>
        <ul className="grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <li key={c.title} className="group border-t border-line py-7 transition-colors duration-500 hover:border-gold-line">
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-2xl text-gold italic tabular-nums">0{i + 1}</span>
                <h3 className="text-lg font-semibold tracking-[-0.015em] text-fg">{c.title}</h3>
              </div>
              <p className="mt-3 pl-10 text-sm leading-relaxed text-muted">{c.text}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
