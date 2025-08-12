import { Metadata } from 'next';
import ServicesPageContent from '@/components/services/services-page-content';

export const metadata: Metadata = {
  title: 'Services | Jaskaran Singh',
  description:
    'Professional web development services including full-stack development, mobile apps, and technical consultation.',
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
