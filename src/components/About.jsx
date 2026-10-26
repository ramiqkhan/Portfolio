import { Section, SectionHeading, Reveal } from './ui';
import { profile } from '../data/portfolio';

const strengths = [
  { title: 'Frontend engineering', text: 'React interfaces, reusable components and responsive layouts that hold up on every screen.' },
  { title: 'Backend & APIs', text: 'Node.js and Express REST APIs, authentication and third-party integrations.' },
  { title: 'Data', text: 'MongoDB and Mongoose models behind catalogues, bookings, orders and content.' },
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

export default function About() {
  return (
    <Section id="about" className="light-band border-t border-line-soft">
      <SectionHeading
        index="02"
        label="About"
        title={
          <>
            Engineer by training, <span className="serif-accent">product builder</span> by practice.
          </>
        }
      />

      <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <div className="space-y-6 text-base leading-[1.8] text-pretty text-muted sm:text-[1.0625rem]">
            <p>
              I'm a Software Engineering graduate and full stack developer with nearly two years of professional experience
              building real digital products. As Head Developer at Craft Tech, I take projects from first conversation to
              production: interface, API, database and deployment.
            </p>
            <p>
              Most of my work sits where design meets engineering — booking platforms, e-commerce stores and business
              websites where the interface has to feel premium and the system behind it has to be dependable. I'm as
              comfortable refining a layout in React as I am modelling data in MongoDB or tracing a bug in an Express route.
            </p>
            <p className="text-fg">
              I care about clean, maintainable code, software that solves the actual business problem, and shipping work I'd
              be proud to put my name on.
            </p>
          </div>

          <dl className="mt-12 grid grid-cols-1 border-t border-line sm:grid-cols-2">
            {facts.map((f) => (
              <div key={f.label} className="border-b border-line-soft py-5 sm:odd:pr-8 sm:even:pl-8 sm:even:border-l sm:even:border-l-line-soft">
                <dt className="label mb-1.5">{f.label}</dt>
                <dd className="text-[0.9375rem] text-fg">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-5">
          <p className="label mb-5">What I bring</p>
          <ul className="border-t border-line">
            {strengths.map((s, i) => (
              <li key={s.title} className="flex gap-5 border-b border-line-soft py-5">
                <span className="pt-0.5 text-[11px] text-gold tabular-nums">0{i + 1}</span>
                <div>
                  <h3 className="text-[0.9375rem] font-semibold text-fg">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
