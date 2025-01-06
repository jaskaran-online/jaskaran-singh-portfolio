type CodeProfile = {
  name: string;
  skills: string[];
  hardWorker: boolean;
  problemSolver: boolean;
  traits: string[];
};

type CodeProfileCardProps = {
  profile: CodeProfile;
};

const CodeProfileCard = ({ profile }: CodeProfileCardProps) => {
  return (
    <div className="w-full rounded-xl border border-border bg-card p-4 font-mono">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-blue-500">const</span>
          <span className="text-purple-500">developer</span>
          <span className="text-blue-500">=</span>
          <span className="text-yellow-500">{'{'}</span>
        </div>
        <div className="ml-4">
          <div>
            <span className="text-purple-500">name:</span>{' '}
            <span className="text-green-500">"{profile.name}"</span>,
          </div>
          <div>
            <span className="text-purple-500">skills:</span>{' '}
            <span className="text-yellow-500">[</span>
            {profile.skills.map((skill, index) => (
              <span key={skill}>
                <span className="text-green-500">"{skill}"</span>
                {index < profile.skills.length - 1 && ', '}
              </span>
            ))}
            <span className="text-yellow-500">]</span>,
          </div>
          <div>
            <span className="text-purple-500">hardWorker:</span>{' '}
            <span className="text-blue-500">{profile.hardWorker.toString()}</span>,
          </div>
          <div>
            <span className="text-purple-500">problemSolver:</span>{' '}
            <span className="text-blue-500">{profile.problemSolver.toString()}</span>,
          </div>
          <div>
            <span className="text-purple-500">traits:</span>{' '}
            <span className="text-yellow-500">[</span>
            {profile.traits.map((trait, index) => (
              <span key={trait}>
                <span className="text-green-500">"{trait}"</span>
                {index < profile.traits.length - 1 && ', '}
              </span>
            ))}
            <span className="text-yellow-500">]</span>
          </div>
        </div>
        <span className="text-yellow-500">{'}'}</span>
      </div>
    </div>
  );
};

export default CodeProfileCard;
