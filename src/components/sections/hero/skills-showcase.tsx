import Link from 'next/link';
import { type ReactNode } from 'react';

type Skill = {
  name: string;
  url: string;
  icon: ReactNode;
};

type SkillsShowcaseProps = {
  skills: Skill[];
};

const SkillsShowcase = ({ skills }: SkillsShowcaseProps) => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {skills.map((skill) => (
        <Link
          key={skill.name}
          href={skill.url}
          target="_blank"
          rel="noopener noreferrer"
          className="border-border bg-card hover:bg-accent flex items-center gap-2 rounded-lg border px-4 py-2 transition-colors"
          tabIndex={0}
          aria-label={`View ${skill.name} documentation`}
        >
          {skill.icon}
          <span className="text-sm font-medium">{skill.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default SkillsShowcase;
