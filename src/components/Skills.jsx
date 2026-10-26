import { CodeXml, Server, Database, Smartphone, Wrench } from 'lucide-react';
import { Section, SectionHeading, Reveal } from './ui';
import { skillGroups, foundations } from '../data/portfolio';

const icons = {
  frontend: CodeXml,
  backend: Server,
  database: Database,
  mobile: Smartphone,
  tools: Wrench,
};

export default function Skills() {
  return (
    <Section id="skills" className="light-skills border-t border-line-soft">
      <SectionHeading
        index="03"
        label="Skills"
        title="A full stack toolkit, proven in production."
        description="The technologies behind the projects on this page — from interface to database to deployment."
      />

      <div className="border-t border-line">
        {skillGroups.map((group, i) => {
          const Icon = icons[group.icon];
          return (
            <Reveal key={group.title} delay={i * 0.04}>
              <div className="group grid grid-cols-1 gap-5 border-b border-line-soft py-8 transition-colors duration-500 hover:bg-fg/[0.015] sm:py-10 md:grid-cols-12 md:items-center md:gap-8">
                <div className="flex items-center gap-4 md:col-span-4">
                  <span className="text-[11px] text-gold tabular-nums">0{i + 1}</span>
                  <Icon className="h-[18px] w-[18px] text-subtle transition-colors duration-500 group-hover:text-gold" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-fg sm:text-2xl">{group.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2 md:col-span-8">
                  {group.items.map((item) => (
                    <li key={item} className="tag">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-10">
        <p className="text-sm leading-relaxed text-subtle">
          <span className="label mr-3 inline-block">Foundations</span>
          {foundations.join(' · ')}
        </p>
      </Reveal>
    </Section>
  );
}
