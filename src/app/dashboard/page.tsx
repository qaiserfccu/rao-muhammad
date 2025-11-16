'use client';

import { useRouter } from 'next/navigation';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaUsers, FaUserShield, FaSignOutAlt } from 'react-icons/fa';

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
      });
      
      router.push('/login');
      router.refresh();
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  return (
    <Section className="bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/50 dark:from-blue-950 dark:via-indigo-950/30 dark:to-purple-950/50 min-h-screen">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Dashboard
            </h1>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              <FaSignOutAlt />
              Logout
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/family">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/80 dark:bg-gray-800/50 p-8 rounded-xl shadow-lg backdrop-blur-sm border border-indigo-100/20 dark:border-indigo-700/20 hover:shadow-xl transition-all cursor-pointer"
              >
                <FaUsers className="w-12 h-12 text-indigo-600 dark:text-indigo-400 mb-4" />
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  Family Pages
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Access and manage family member portfolios
                </p>
              </motion.div>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-gray-800/50 p-8 rounded-xl shadow-lg backdrop-blur-sm border border-indigo-100/20 dark:border-indigo-700/20"
            >
              <FaUserShield className="w-12 h-12 text-green-600 dark:text-green-400 mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                Your Role
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Superuser - Full access to all family content
              </p>
            </motion.div>
          </div>

          <div className="mt-8 bg-white/80 dark:bg-gray-800/50 p-8 rounded-xl shadow-lg backdrop-blur-sm border border-indigo-100/20 dark:border-indigo-700/20">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Welcome!
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You now have access to the protected family pages. As a superuser, you can view and manage all family member portfolios.
            </p>
            <div className="flex gap-4">
              <Link
                href="/family"
                className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
              >
                Go to Family Pages
              </Link>
              <Link
                href="/"
                className="px-6 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
