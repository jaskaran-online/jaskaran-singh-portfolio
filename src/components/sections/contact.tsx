'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import Image from 'next/image';

import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import SparklesText from '@/components/ui/sparkles-text';
import PulsatingButton from '../ui/pulsating-button';
import { BorderBeam } from '../ui/border-beam';
import Squares from '../ui/squares';

import BG_DARK from '../../../public/images/hero/dark-bg.jpg';
import BG_LIGHT from '../../../public/images/hero/light-bg.jpg';

const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Code bracket */}
      <motion.svg
        className="absolute left-1/4 top-48 h-8 w-8 text-purple-500/40 dark:text-purple-400"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 21L3 12L9 3M15 21L21 12L15 3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>

      {/* Terminal */}
      <motion.svg
        className="absolute right-1/4 top-48 h-12 w-12 text-purple-500/80 dark:text-blue-400"
        animate={{
          y: [0, 10, 0],
          x: [0, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 17L10 11L4 5M12 19H20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>

      {/* Code Block */}
      <motion.svg
        className="absolute bottom-20 left-1/4 h-10 w-10 text-pink-500/40 dark:text-pink-400"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 18L22 12L16 6M8 6L2 12L8 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </div>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactInfo = {
    email: 'contact@jaskaran.in',
    phone: '+91 9530654704',
    location: 'Amritsar, Punjab, India',
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: formData.email,
          name: formData.name,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
        alert('Message sent successfully!');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      alert('Failed to send message. Please try again.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Container id="contact" className="relative overflow-hidden py-20">
      <FloatingIcons />
      {/* Dark theme background */}
      <Image
        src={BG_DARK}
        alt=""
        className="absolute inset-0 hidden h-full w-full object-cover opacity-80 dark:block"
        width={1920}
        height={1080}
        priority={false}
        loading="lazy"
      />
      {/* Light theme background */}
      <Image
        src={BG_LIGHT}
        alt=""
        className="absolute inset-0 block h-full w-full object-cover opacity-60 dark:hidden"
        width={1920}
        height={1080}
        priority={false}
        loading="lazy"
      />
      <Squares
        speed={0.5}
        direction="diagonal" // up, down, left, right, diagonal
        lightMode={{
          borderColor: '#E8E8E8',
          hoverFillColor: '#dac3ffab',
          backgroundColor: '#fff',
          gradientStartColor: '#F8F8F8',
          gradientEndColor: '#fff',
          backgroundOpacity: 0,
        }}
        darkMode={{
          borderColor: '#462d6dab',
          hoverFillColor: '#462d6dab',
          backgroundColor: '#111111',
          gradientStartColor: '#1A1A1A',
          gradientEndColor: '#fff',
          backgroundOpacity: 0,
        }}
        gradientStartOpacity={0}
        gradientEndOpacity={0}
        borderWidth={0.4}
        squareSize={50}
        blur={4}
      />
      <div className="relative mb-12 text-center">
        <Typography variant="h2" className="mb-4">
          <SparklesText
            text="Let's Start Your Project | Free Consultation"
            className="text-4xl font-bold text-slate-900 dark:text-white"
            sparklesCount={3}
          />
        </Typography>
        <Typography variant="subtitle" className="text-slate-600 dark:text-slate-400">
          Have a question or want to work together? Drop me a message!
        </Typography>
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        {/* Contact Information */}
        <div className="relative flex flex-col justify-center space-y-8">
          <div className="rounded-2xl bg-[transparent] p-8 pt-0">
            <Typography
              variant="h3"
              className="mb-3 text-xl font-semibold text-slate-900 dark:text-white"
            >
              Ready to Talk? Here's How to Reach Me
            </Typography>
            <Typography variant="body2" className="text-slate-600 dark:text-slate-400">
              You can reach me through the following channels.
            </Typography>
            <br /> <br />
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-purple-500 backdrop-blur-[4px] dark:from-purple-500/30 dark:to-pink-500/30">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <Typography
                    variant="body3"
                    className="w-auto bg-gradient-to-r text-gray-600 backdrop-blur-[4px] dark:text-gray-400"
                  >
                    Email
                  </Typography>
                  <div className="flex items-center gap-2">
                    <Typography
                      variant="body2"
                      className="w-auto bg-gradient-to-r font-medium   text-gray-900 backdrop-blur-[4px] dark:text-white"
                    >
                      {contactInfo.email}
                    </Typography>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/20 text-purple-500 backdrop-blur-[4px] dark:from-purple-500/30 dark:to-blue-500/30">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <Typography
                    variant="body3"
                    className="w-auto bg-gradient-to-r  text-gray-600 backdrop-blur-[4px] dark:text-gray-400"
                  >
                    Phone
                  </Typography>
                  <Typography
                    variant="body2"
                    className="bg-gradient-to-r font-medium text-gray-900  backdrop-blur-[4px] dark:text-white"
                  >
                    {contactInfo.phone}
                  </Typography>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 text-pink-500 backdrop-blur-[4px] dark:from-pink-500/30 dark:to-rose-500/30">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <Typography
                    variant="body3"
                    className="bg-gradient-to-r text-gray-600  backdrop-blur-[4px] dark:text-gray-400"
                  >
                    Location
                  </Typography>
                  <Typography
                    variant="body2"
                    className="bg-gradient-to-r font-medium text-gray-900  backdrop-blur-[4px] dark:text-white"
                  >
                    {contactInfo.location}
                  </Typography>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Typography
                variant="body2"
                className="bg-gradient-to-r text-gray-600  backdrop-blur-[4px] dark:text-gray-400"
              >
                You can also find me on these platforms!
              </Typography>
              <div className="flex gap-4">
                <a
                  href="https://github.com/jaskaran-online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-500 dark:hover:text-primary-400 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  GitHub <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com/in/jaskaran-5ingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-500 dark:hover:text-primary-400 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  LinkedIn <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 rounded-sm border border-slate-200 bg-white px-8 pb-8 pt-3 shadow-lg backdrop-blur-sm dark:border-slate-800 dark:bg-[#334155]/30 "
            onSubmit={handleSubmit}
          >
            <BorderBeam />
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg bg-transparent px-4 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:border-[0.5px] dark:border-cyan-500/20 dark:text-white dark:placeholder-slate-500 dark:ring-slate-800 dark:focus:ring-blue-400"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg bg-transparent px-4 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:border-[0.5px] dark:border-cyan-500/20 dark:text-white dark:placeholder-slate-500 dark:ring-slate-800 dark:focus:ring-blue-400"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="mt-1 block w-full rounded-lg bg-transparent px-4 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:border-[0.5px] dark:border-cyan-500/20 dark:text-white dark:placeholder-slate-500 dark:ring-slate-800 dark:focus:ring-blue-400"
                placeholder="Your message..."
              />
            </div>

            <PulsatingButton className="w-full bg-blue-500 hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-600">
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  Send Message
                  <Send className="h-4 w-4" />
                </>
              )}
            </PulsatingButton>
          </motion.form>
        </div>
      </div>
    </Container>
  );
};

export default ContactSection;
