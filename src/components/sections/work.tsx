import { PROJECTS } from '@/lib/data';
import ProjectDetails from '@/components/data-display/project-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import SparklesText from '@/components/ui/sparkles-text';

const WorkSection = () => {
  return (
    <Container>
      <div className="flex flex-col items-center gap-4" id="projects">
        <Typography variant="h2" className="mb-2 text-4xl font-bold text-gray-900 dark:text-white">
          <SparklesText
            text="Projects"
            className="mb-2 text-4xl font-bold text-gray-900 dark:text-white"
            sparklesCount={4}
          />
        </Typography>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Some of the noteworthy projects I have built:
        </Typography>
      </div>

      {PROJECTS?.map((project, index) => (
        <ProjectDetails
          key={index}
          {...project}
          layoutType={index % 2 === 0 ? 'default' : 'reverse'}
        />
      ))}
    </Container>
  );
};

export default WorkSection;
