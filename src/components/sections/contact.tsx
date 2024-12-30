"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Copy, ExternalLink, Type } from "lucide-react";

import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import SparklesText from "@/components/ui/sparkles-text";
import PulsatingButton from "../ui/pulsating-button";
import { BorderBeam } from "../ui/border-beam";
import Ripple from "../ui/ripple";

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
          ease: "easeInOut",
        }}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 21L3 12L9 3M15 21L21 12L15 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
          ease: "easeInOut",
        }}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 17L10 11L4 5M12 19H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
          ease: "easeInOut",
        }}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 18L22 12L16 6M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </motion.svg>


    </div>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactInfo = {
    email: "contact@jaskaran.in",
    phone: "+91 9530654704",
    location: "Amritsar, Punjab, India",
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
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      // Reset form after successful submission
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Container id="contact" className="relative overflow-hidden py-20">
      <FloatingIcons />

      <div className="mb-12 text-center">
        <Typography variant="h2" className="mb-4">
          <SparklesText text="Get in Touch" className="text-4xl font-bold text-slate-900 dark:text-white" sparklesCount={3} />
        </Typography>
        <Typography variant="subtitle" className="text-slate-600 dark:text-slate-400">
          Have a question or want to work together? Drop me a message!
        </Typography>
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        {/* Contact Information */}
        <div className="flex flex-col justify-center space-y-8">
          <div className="rounded-2xl bg-[transparent] p-8 pt-0">
            <Typography variant="h3" className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
              Contact Information
            </Typography>
            <Typography variant="body2" className="text-slate-600 dark:text-slate-400">
              You can reach me through the following channels.
            </Typography>
            <br /> <br />
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-purple-500 dark:from-purple-500/30 dark:to-pink-500/30">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <Typography variant="body3" className="text-gray-600 dark:text-gray-400">
                    Email
                  </Typography>
                  <div className="flex items-center gap-2">
                    <Typography variant="body2" className="font-medium text-gray-900 dark:text-white">
                      {contactInfo.email}
                    </Typography>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/20 text-purple-500 dark:from-purple-500/30 dark:to-blue-500/30">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <Typography variant="body3" className="text-gray-600 dark:text-gray-400">
                    Phone
                  </Typography>
                  <Typography variant="body2" className="font-medium text-gray-900 dark:text-white">
                    {contactInfo.phone}
                  </Typography>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 text-pink-500 dark:from-pink-500/30 dark:to-rose-500/30">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <Typography variant="body3" className="text-gray-600 dark:text-gray-400">
                    Location
                  </Typography>
                  <Typography variant="body2" className="font-medium text-gray-900 dark:text-white">
                    {contactInfo.location}
                  </Typography>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Typography variant="body2" className="text-gray-600 dark:text-gray-400">
                You can also find me on these platforms!
              </Typography>
              <div className="flex gap-4">
                <a
                  href="https://github.com/jaskaran-online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  GitHub <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com/in/jaskaran-online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400"
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
            className="space-y-6 bg-white dark:bg-[#334155]/30 pb-8 pt-3 px-8 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-800"
            onSubmit={handleSubmit}
          >
            <BorderBeam />
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg dark:border-[0.5px] dark:border-cyan-500/20 bg-transparent py-2 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:text-white dark:ring-slate-800 dark:focus:ring-blue-400 dark:placeholder-slate-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg dark:border-[0.5px] dark:border-cyan-500/20 bg-transparent py-2 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:text-white dark:ring-slate-800 dark:focus:ring-blue-400 dark:placeholder-slate-500"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="mt-1 block w-full rounded-lg dark:border-[0.5px] dark:border-cyan-500/20 bg-transparent py-2 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:text-white dark:ring-slate-800 dark:focus:ring-blue-400 dark:placeholder-slate-500"
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
