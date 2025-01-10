import { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import ProjectsContent from '@/components/projects/projects-content';

export const metadata: Metadata = {
  title: 'Projects - Jaskaran Singh',
  description: 'Showcase of my latest web development projects and applications.',
};

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with Next.js and Stripe integration.',
    image: '/projects/ecommerce.jpg',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'TailwindCSS'],
    demoUrl: 'https://demo-ecommerce.jaskaran.in',
    githubUrl: 'https://github.com/jaskaranpr/ecommerce',
    category: 'Web App',
    featured: true,
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates.',
    image: '/projects/task-manager.jpg',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    demoUrl: 'https://tasks.jaskaran.in',
    githubUrl: 'https://github.com/jaskaranpr/task-manager',
    category: 'Web App',
    featured: true,
  },
  {
    title: 'Blog Platform',
    description: 'A modern blog platform with markdown support and SEO optimization.',
    image: '/projects/blog.jpg',
    tags: ['Next.js', 'MDX', 'PostgreSQL', 'TailwindCSS'],
    demoUrl: 'https://blog.jaskaran.in',
    githubUrl: 'https://github.com/jaskaranpr/blog',
    category: 'Web App',
    featured: false,
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather dashboard with location-based forecasts.',
    image: '/projects/weather.jpg',
    tags: ['React', 'OpenWeather API', 'ChartJS', 'TailwindCSS'],
    demoUrl: 'https://weather.jaskaran.in',
    githubUrl: 'https://github.com/jaskaranpr/weather',
    category: 'Web App',
    featured: false,
  },
  {
    title: 'Social Media App',
    description: 'Mobile app for connecting and sharing moments with friends.',
    image: '/projects/social.jpg',
    tags: ['React Native', 'Firebase', 'Redux', 'Expo'],
    demoUrl: 'https://social.jaskaran.in',
    githubUrl: 'https://github.com/jaskaranpr/social',
    category: 'Mobile App',
    featured: true,
  },
  {
    title: 'Fitness Tracker',
    description: 'Cross-platform mobile app for tracking workouts and nutrition.',
    image: '/projects/fitness.jpg',
    tags: ['React Native', 'TypeScript', 'Redux', 'Firebase'],
    demoUrl: 'https://fitness.jaskaran.in',
    githubUrl: 'https://github.com/jaskaranpr/fitness',
    category: 'Mobile App',
    featured: false,
  },
  {
    title: 'AI Chat Bot',
    description: 'Intelligent chatbot powered by machine learning.',
    image: '/projects/chatbot.jpg',
    tags: ['Python', 'TensorFlow', 'Flask', 'React'],
    demoUrl: 'https://chatbot.jaskaran.in',
    githubUrl: 'https://github.com/jaskaranpr/chatbot',
    category: 'AI/ML',
    featured: true,
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio website built with Next.js and TailwindCSS.',
    image: '/projects/portfolio.jpg',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
    demoUrl: 'https://jaskaran.in',
    githubUrl: 'https://github.com/jaskaranpr/portfolio',
    category: 'Web App',
    featured: false,
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

export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <PageHeader
        title="Projects"
        description="Here are some of the projects I've worked on. Use the filters below to explore different categories."
      />
      <ProjectsContent projects={projects} container={container} />
    </main>
  );
}
