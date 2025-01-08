import { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code2, Layout, Server, Wrench } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Skills - Jaskaran Singh',
  description: 'Explore my technical skills and expertise in web development.',
};

const skills = {
  frontend: [
    { name: 'React.js', level: 95 },
    { name: 'Next.js', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'JavaScript', level: 95 },
    { name: 'HTML5/CSS3', level: 90 },
    { name: 'TailwindCSS', level: 95 },
    { name: 'Material-UI', level: 85 },
    { name: 'Redux', level: 85 },
    { name: 'React Query', level: 80 },
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Express.js', level: 85 },
    { name: 'Python', level: 75 },
    { name: 'Django', level: 70 },
    { name: 'RESTful APIs', level: 90 },
    { name: 'GraphQL', level: 80 },
    { name: 'PostgreSQL', level: 85 },
    { name: 'MongoDB', level: 80 },
    { name: 'Redis', level: 75 },
  ],
  devops: [
    { name: 'Git', level: 90 },
    { name: 'Docker', level: 80 },
    { name: 'AWS', level: 75 },
    { name: 'CI/CD', level: 80 },
    { name: 'Linux', level: 85 },
    { name: 'Nginx', level: 75 },
    { name: 'Vercel', level: 90 },
    { name: 'Netlify', level: 85 },
  ],
  tools: [
    { name: 'VS Code', level: 95 },
    { name: 'Postman', level: 90 },
    { name: 'Figma', level: 80 },
    { name: 'Jest', level: 85 },
    { name: 'React Testing Library', level: 85 },
    { name: 'Chrome DevTools', level: 90 },
    { name: 'npm/yarn/pnpm', level: 90 },
  ],
};

const SkillCard = ({ name, level }: { name: string; level: number }) => (
  <div className="mb-4">
    <div className="mb-2 flex items-center justify-between">
      <span className="font-medium">{name}</span>
      <span className="text-sm text-muted-foreground">{level}%</span>
    </div>
    <Progress value={level} className="h-2" />
  </div>
);

const SkillsPage = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <PageHeader
        title="Skills & Expertise"
        description="A comprehensive overview of my technical skills and areas of expertise."
      />

      <Tabs defaultValue="frontend" className="mt-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="frontend" className="flex items-center gap-2">
            <Layout className="h-4 w-4" />
            Frontend
          </TabsTrigger>
          <TabsTrigger value="backend" className="flex items-center gap-2">
            <Server className="h-4 w-4" />
            Backend
          </TabsTrigger>
          <TabsTrigger value="devops" className="flex items-center gap-2">
            <Code2 className="h-4 w-4" />
            DevOps
          </TabsTrigger>
          <TabsTrigger value="tools" className="flex items-center gap-2">
            <Wrench className="h-4 w-4" />
            Tools
          </TabsTrigger>
        </TabsList>

        <TabsContent value="frontend">
          <Card className="p-6">
            <h3 className="mb-6 text-xl font-semibold">Frontend Development</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {skills.frontend.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="backend">
          <Card className="p-6">
            <h3 className="mb-6 text-xl font-semibold">Backend Development</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {skills.backend.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="devops">
          <Card className="p-6">
            <h3 className="mb-6 text-xl font-semibold">DevOps & Deployment</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {skills.devops.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="tools">
          <Card className="p-6">
            <h3 className="mb-6 text-xl font-semibold">Tools & Testing</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {skills.tools.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="mt-8 p-6">
        <h3 className="mb-4 text-xl font-semibold">Professional Certifications</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border p-4">
            <h4 className="font-medium">AWS Certified Developer</h4>
            <p className="text-sm text-muted-foreground">Amazon Web Services</p>
          </div>
          <div className="rounded-lg border p-4">
            <h4 className="font-medium">Professional Scrum Master</h4>
            <p className="text-sm text-muted-foreground">Scrum.org</p>
          </div>
          <div className="rounded-lg border p-4">
            <h4 className="font-medium">React Developer Certification</h4>
            <p className="text-sm text-muted-foreground">Meta (formerly Facebook)</p>
          </div>
          <div className="rounded-lg border p-4">
            <h4 className="font-medium">Google Analytics Certification</h4>
            <p className="text-sm text-muted-foreground">Google</p>
          </div>
        </div>
      </Card>
    </main>
  );
};

export default SkillsPage;
