'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Card } from '@/components/ui/card';

import ContactForm from '@/components/contact/contact-form';
import { SocialLinks } from '@/components/contact/social-links';
import Map from '@/components/contact/map';

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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const ContactContent = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="mt-8 grid gap-8 lg:grid-cols-2"
    >
      <motion.div variants={item} className="space-y-8">
        <Card className="p-6">
          <h2 className="mb-6 text-2xl font-semibold">Get in Touch</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 rounded-lg p-2">
                <Mail className="text-primary h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <a
                  href="mailto:hello@jaskaran.in"
                  className="text-muted-foreground hover:text-primary text-sm"
                >
                  hello@jaskaran.in
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 rounded-lg p-2">
                <Phone className="text-primary h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <a
                  href="tel:+919876543210"
                  className="text-muted-foreground hover:text-primary text-sm"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 rounded-lg p-2">
                <MapPin className="text-primary h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">Location</p>
                <p className="text-muted-foreground text-sm">Amritsar, Punjab, India</p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="mb-4 text-lg font-medium">Connect with me</h3>
            <SocialLinks />
          </div>
        </Card>
        <Map />
      </motion.div>

      <motion.div variants={item}>
        <Card className="p-6">
          <h2 className="mb-6 text-2xl font-semibold">Send a Message</h2>
          <ContactForm />
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ContactContent;
