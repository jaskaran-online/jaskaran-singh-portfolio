import { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import ProjectsContent from '@/components/projects/projects-content';

export const metadata: Metadata = {
  title: 'Projects - Jaskaran Singh',
  description: 'Showcase of my latest web development projects and applications.',
};

export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <PageHeader
        title="Projects"
        description="Here are some of the projects I've worked on. Use the filters below to explore different categories."
      />
      <ProjectsContent />
    </main>
  );
}
