import { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import ContactContent from '@/components/contact/contact-content';

export const metadata: Metadata = {
  title: 'Contact - Jaskaran Singh',
  description: 'Get in touch with me for your next project or any queries.',
};

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <PageHeader
        title="Contact Me"
        description="Have a project in mind? Let's discuss how I can help you achieve your goals."
      />
      <ContactContent />
    </main>
  );
}
