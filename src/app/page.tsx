import { Suspense } from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Loading from '@/components/loading';

// Dynamic imports for better code splitting
const HeroSection = dynamic(() => import('@/components/sections/hero'), {
  loading: () => <Loading />
});
const AboutMeSection = dynamic(() => import('@/components/sections/about-me'), {
  loading: () => <Loading />
});
const SkillsSection = dynamic(() => import('@/components/sections/skills'), {
  loading: () => <Loading />
});
const WorkSection = dynamic(() => import('@/components/sections/work'), {
  loading: () => <Loading />
});
const TestimonialsSection = dynamic(() => import('@/components/sections/testimonials'), {
  loading: () => <Loading />
});
const ContactSection = dynamic(() => import('@/components/sections/contact'), {
  loading: () => <Loading />
});
const ServicesSection = dynamic(() => import('@/components/sections/services'), {
  loading: () => <Loading />
});

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <AboutMeSection />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <SkillsSection />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <WorkSection />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <ContactSection />
      </Suspense>
    </>
  );
}
