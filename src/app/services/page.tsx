import { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Code2,
  Layout,
  Server,
  Smartphone,
  Database,
  Cloud,
  Users,
  Search,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services - Jaskaran Singh',
  description: 'Professional web development services offered by Jaskaran Singh.',
};

const services = [
  {
    title: 'Web Application Development',
    description: 'Full-stack web applications built with modern technologies.',
    icon: Layout,
    features: [
      'Custom web applications',
      'E-commerce solutions',
      'Content Management Systems',
      'Progressive Web Apps (PWA)',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'Frontend Development',
    description: 'Beautiful and responsive user interfaces.',
    icon: Code2,
    features: [
      'Responsive design',
      'Interactive UIs',
      'Performance optimization',
      'Cross-browser compatibility',
    ],
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Redux'],
  },
  {
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications.',
    icon: Smartphone,
    features: [
      'React Native apps',
      'iOS & Android',
      'Push notifications',
      'Offline support',
    ],
    technologies: ['React Native', 'Expo', 'Firebase', 'Redux'],
  },
  {
    title: 'Backend Development',
    description: 'Scalable and secure backend solutions.',
    icon: Server,
    features: [
      'API development',
      'Database design',
      'Authentication',
      'Cloud integration',
    ],
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'Redis'],
  },
  {
    title: 'Database Solutions',
    description: 'Efficient data management systems.',
    icon: Database,
    features: [
      'Database design',
      'Data migration',
      'Performance tuning',
      'Backup solutions',
    ],
    technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma'],
  },
  {
    title: 'DevOps Services',
    description: 'Streamlined deployment and operations.',
    icon: Cloud,
    features: [
      'CI/CD pipelines',
      'Docker containers',
      'Cloud deployment',
      'Monitoring setup',
    ],
    technologies: ['AWS', 'Docker', 'GitHub Actions', 'Nginx'],
  },
  {
    title: 'Technical Consultation',
    description: 'Expert guidance for your projects.',
    icon: Users,
    features: [
      'Architecture planning',
      'Code review',
      'Team mentoring',
      'Best practices',
    ],
    technologies: ['Agile', 'Git', 'Jira', 'Confluence'],
  },
  {
    title: 'SEO Optimization',
    description: 'Improve your web presence.',
    icon: Search,
    features: [
      'Technical SEO',
      'Performance optimization',
      'Meta tags setup',
      'Analytics integration',
    ],
    technologies: ['Next.js', 'Google Analytics', 'Schema.org', 'Lighthouse'],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const ServiceCard = ({
  title,
  description,
  icon: Icon,
  features,
  technologies,
}: (typeof services)[0]) => {
  return (
    <div variants={item}>
      <Card className="h-full p-6 transition-all hover:shadow-lg">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-lg bg-primary/10 p-2 text-primary">
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="mb-4 text-muted-foreground">{description}</p>
        <ul className="mb-4 space-y-2 text-sm">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          <p className="mb-2 text-sm font-medium">Technologies:</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-secondary px-3 py-1 text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

const ServicesPage = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <PageHeader
        title="Services"
        description="Professional web development services tailored to your needs."
      />

      <div
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>

      <Card className="mt-12 p-8 text-center">
        <h3 className="mb-4 text-2xl font-semibold">Ready to Start Your Project?</h3>
        <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
          Let's discuss how I can help you achieve your goals. I'm committed to delivering
          high-quality solutions that meet your specific needs.
        </p>
        <Link href="/contact">
          <Button size="lg" className="min-w-[200px]">
            Get in Touch
          </Button>
        </Link>
      </Card>
    </main>
  );
};

export default ServicesPage;
