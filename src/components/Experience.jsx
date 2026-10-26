import { Section, SectionHeading, Reveal } from './ui';

const timeline = [
  {
    period: 'Ongoing',
    title: 'Freelance Full Stack Developer',
    org: 'Independent',
    points: [
      'Take on independent client projects — business websites, e-commerce stores and booking platforms — from requirements to deployment.',
      'Build React frontends backed by Node.js and Express APIs with MongoDB, deployed on Vercel.',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Vercel'],
  },
  {
    period: 'Nov 2025 — Present',
    title: 'Full Stack Lead Developer',
    org: 'Craft Tech',
    note: 'Progressed from intern to lead developer in nine months.',
    points: [
      'Lead full-stack development of the Craft Tech Dashboard, a production business management system used for daily operations.',
      'Architect and build REST APIs, authentication, and reporting modules using Node.js, Express.js, and MongoDB.',
      'Design admin dashboards and internal tools with React.js and Tailwind CSS, translating business requirements into working features.',
      'Run code reviews and guide architecture decisions with the development team, improving code consistency and deployment reliability.',
    ],
    stack: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
  },
  {
    period: 'May 2025 — Nov 2025',
    title: 'Mobile App & Web Developer',
    org: 'Scalech',
    points: [
      'Built and shipped production web and mobile applications end-to-end using React.js, React Native, Node.js, and MongoDB.',
      'Developed REST APIs, JWT authentication, and CRUD modules powering multiple client-facing products.',
      'Built responsive, cross-device UI and improved app performance through debugging, testing, and release management.',
    ],
    stack: ['React.js', 'React Native', 'Node.js', 'MongoDB', 'JWT'],
  },
  {
    period: 'Feb 2025 — May 2025',
    title: 'Mobile App & Web Development Intern',
    org: 'Scalech',
    points: [
      "Built the company's startup website from scratch in React.js, taken live for public launch.",
      'Integrated frontend with backend APIs and MongoDB databases, handling data flow across the stack.',
    ],
    stack: ['React.js', 'REST APIs', 'MongoDB'],
  },
  {
    period: 'Education',
    title: 'BS Software Engineering',
    org: 'SZABIST',
    points: ['Coursework in data structures and algorithms, object-oriented programming and database systems.'],
  },
];

export default function Experience() {
  return (
    <Section id="experience" className="light-band border-t border-line-soft">
      <SectionHeading index="04" label="Experience" title="Where I've been building." />

      <ol className="border-t border-line">
        {timeline.map((item) => (
          <li key={item.title}>
            <Reveal>
              <article className="grid grid-cols-1 gap-6 border-b border-line-soft py-10 sm:py-14 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-4">
                  <p className="label label-gold">{item.period}</p>
                  <p className="mt-3 font-display text-lg font-medium text-fg">{item.org}</p>
                </div>

                <div className="lg:col-span-8">
                  <h3 className="text-2xl font-semibold tracking-[-0.025em] text-fg sm:text-3xl">{item.title}</h3>

                  <ul className="mt-6 space-y-3.5">
                    {item.points.map((p) => (
                      <li key={p} className="flex gap-4 text-[0.9375rem] leading-relaxed text-muted">
                        <span className="mt-[0.7em] h-px w-3 shrink-0 bg-gold" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  {item.note && (
                    <p className="mt-7 border-l border-gold pl-4 font-serif text-xl text-fg italic">{item.note}</p>
                  )}

                  {item.stack && (
                    <ul className="mt-7 flex flex-wrap gap-2" aria-label="Technologies">
                      {item.stack.map((s) => (
                        <li key={s} className="tag">
                          {s}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
