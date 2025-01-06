import { EXPERIENCES } from '@/lib/data';
import ExperienceDetails from '@/components/data-display/experience-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import SparklesText from '../ui/sparkles-text';

const ExperienceSection = () => {
  return (
    <Container className="bg-gray-50/50">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Typography variant="h2" className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            <SparklesText text="Success Stories & Results" className="text-4xl font-bold text-gray-900 dark:text-white mb-2" sparklesCount={4} />
          </Typography>
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Here is a quick summary of my most recent experiences:
        </Typography>
      </div>

      {EXPERIENCES?.map((experience, index) => (
        <ExperienceDetails {...experience} key={index} />
      ))}
    </Container>
  );
};

export default ExperienceSection;
