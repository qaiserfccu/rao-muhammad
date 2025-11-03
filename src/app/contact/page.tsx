'use client';

import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Section className="bg-gradient-to-br from-violet-50/50 via-fuchsia-50/30 to-pink-50/50 dark:from-violet-950 dark:via-fuchsia-950/30 dark:to-pink-950/50">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-pink-600 dark:from-violet-400 dark:to-pink-400 bg-clip-text text-transparent mb-6">Get in Touch</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Have a question or want to work together? Feel free to reach out using
              the form below.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6 bg-white/80 dark:bg-gray-800/50 p-8 rounded-2xl shadow-xl backdrop-blur-sm border border-violet-100/20 dark:border-violet-700/20">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/50 dark:bg-gray-900/50 border border-violet-200 dark:border-violet-800 rounded-lg focus:ring-2 focus:ring-violet-500 dark:focus:ring-violet-400 focus:border-transparent backdrop-blur-sm transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/50 dark:bg-gray-900/50 border border-violet-200 dark:border-violet-800 rounded-lg focus:ring-2 focus:ring-violet-500 dark:focus:ring-violet-400 focus:border-transparent backdrop-blur-sm transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/50 dark:bg-gray-900/50 border border-violet-200 dark:border-violet-800 rounded-lg focus:ring-2 focus:ring-violet-500 dark:focus:ring-violet-400 focus:border-transparent backdrop-blur-sm transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 bg-white/50 dark:bg-gray-900/50 border border-violet-200 dark:border-violet-800 rounded-lg focus:ring-2 focus:ring-violet-500 dark:focus:ring-violet-400 focus:border-transparent backdrop-blur-sm transition-all"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white px-6 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl dark:from-violet-500 dark:to-pink-500 dark:hover:from-violet-400 dark:hover:to-pink-400"
              >
                Send Message
              </button>
            </form>
          </div>
        </Container>
      </Section>

      <Section delay={0.2} className="bg-gradient-to-br from-pink-50/50 via-rose-50/30 to-violet-50/50 dark:from-pink-950 dark:via-rose-950/30 dark:to-violet-950/50">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-violet-600 dark:from-pink-400 dark:to-violet-400 bg-clip-text text-transparent">Other Ways to Connect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white/80 dark:bg-gray-800/50 rounded-xl shadow-xl backdrop-blur-sm border border-pink-100/20 dark:border-pink-700/20 transform hover:scale-105 transition-all">
                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-pink-600 to-violet-600 dark:from-pink-400 dark:to-violet-400 bg-clip-text text-transparent">Contact Information</h3>
                <p className="text-gray-700 dark:text-gray-300">Email: qaiserfcc@gmail.com</p>
                <p className="text-gray-700 dark:text-gray-300">Phone: +966 56 1869834</p>
                <p className="mt-2">
                  <a 
                    href="https://linkedin.com/in/qaiserfcc" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-gradient-to-r from-pink-600 to-violet-600 dark:from-pink-400 dark:to-violet-400 bg-clip-text text-transparent font-medium hover:opacity-80 transition-opacity"
                  >
                    LinkedIn Profile
                  </a>
                </p>
              </div>
              <div className="p-6 bg-white/80 dark:bg-gray-800/50 rounded-xl shadow-xl backdrop-blur-sm border border-pink-100/20 dark:border-pink-700/20 transform hover:scale-105 transition-all">
                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-pink-600 to-violet-600 dark:from-pink-400 dark:to-violet-400 bg-clip-text text-transparent">Location</h3>
                <p className="text-gray-700 dark:text-gray-300">Riyadh, Saudi Arabia</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}