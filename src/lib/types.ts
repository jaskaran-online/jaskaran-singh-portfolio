import { StaticImageData } from 'next/image';

export type TechDetails = {
  label: string;
  logo: string;
  darkModeLogo?: string;
  url: string;
};

export type ProjectDetails = {
  name: string;
  description: string;
  url?: string;
  projectDetails?: string;
  previewImage: string | StaticImageData;
  technologies: string[];
};

export type ExperienceDetails = {
  logo: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  logoAlt: string;
  position: string;
  startDate: Date;
  endDate?: Date;
  currentlyWorkHere?: boolean;
  summary: string[];
};

export type TestimonialDetails = {
  personName: string;
  personAvatar: StaticImageData;
  title: string;
  testimonial: string;
  source: 'twitter' | 'linkedin' | 'student' | 'personal';
};
