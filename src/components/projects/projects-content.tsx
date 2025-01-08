'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/projects/project-card';
import ProjectFilter from '@/components/projects/project-filter';
import {projects} from '@/config/projects';
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

const ProjectsContent = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [showFeatured, setShowFeatured] = useState<boolean>(false);

  const categories = ['All', ...new Set(projects?.map((project) => project.category))];

  const filteredProjects = projects.filter((project) => {
    const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory;
    const featuredMatch = !showFeatured || project.featured;
    return categoryMatch && featuredMatch;
  });

  return (
    <>
      <ProjectFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        showFeatured={showFeatured}
        onFeaturedChange={setShowFeatured}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filteredProjects.map((project) => (
          <motion.div key={project.title} variants={item}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>

      {filteredProjects.length === 0 && (
        <motion.div
          variants={item}
          className="mt-8 text-center"
        >
          <p className="text-muted-foreground">
            No projects found matching your criteria.
          </p>
        </motion.div>
      )}

      <motion.div
        variants={item}
        className="mt-12 text-center"
      >
        <p className="mb-4 text-muted-foreground">
          Interested in working together? Let's discuss your project!
        </p>
        <Link href="/contact">
          <Button size="lg">Get in Touch</Button>
        </Link>
      </motion.div>
    </>
  );
};

export default ProjectsContent;
