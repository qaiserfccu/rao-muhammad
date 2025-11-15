'use client';

import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import { motion } from 'framer-motion';
import { FaUserTie, FaChalkboardTeacher, FaUserMd, FaLaptopCode, FaFemale, FaPrescription } from 'react-icons/fa';

export default function FamilyTree() {
  return (
    <Section className="bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/50 dark:from-blue-950 dark:via-indigo-950/30 dark:to-purple-950/50">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
              Family Tree
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Our family's journey through generations
            </p>
          </div>

          {/* Parents Level */}
          <div className="flex justify-center gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-64 bg-white/80 dark:bg-gray-800/50 p-6 rounded-xl shadow-lg backdrop-blur-sm"
            >
              <FaUserTie className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-center text-gray-800 dark:text-white">
                Rao Muhammad Afzal Nadeem
              </h3>
              <div className="text-center text-indigo-600 dark:text-indigo-400 text-sm mt-1">
                Retired Police Officer
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="w-64 bg-white/80 dark:bg-gray-800/50 p-6 rounded-xl shadow-lg backdrop-blur-sm"
            >
              <FaChalkboardTeacher className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-center text-gray-800 dark:text-white">
                Razia Afzal
              </h3>
              <div className="text-center text-indigo-600 dark:text-indigo-400 text-sm mt-1">
                Retired High School Teacher
              </div>
            </motion.div>
          </div>

          {/* Connecting Line */}
          <div className="w-0.5 h-12 bg-gradient-to-b from-indigo-500 to-purple-500 mx-auto -mt-6 mb-6"></div>

          {/* Children Level */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-gray-800/50 p-6 rounded-xl shadow-lg backdrop-blur-sm"
            >
              <FaUserMd className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-center text-gray-800 dark:text-white">
                Dr. Faisal Nadeem
              </h3>
              <div className="text-center text-indigo-600 dark:text-indigo-400 text-sm mt-1">
                MBBS Doctor - Pulmonologist
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-gray-800/50 p-6 rounded-xl shadow-lg backdrop-blur-sm"
            >
              <FaLaptopCode className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-center text-gray-800 dark:text-white">
                Rao Muhammad Qaiser Nadeem
              </h3>
              <div className="text-center text-indigo-600 dark:text-indigo-400 text-sm mt-1">
                Senior Full Stack Developer
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-gray-800/50 p-6 rounded-xl shadow-lg backdrop-blur-sm"
            >
              <FaFemale className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-center text-gray-800 dark:text-white">
                Dr. Memoona Umar
              </h3>
              <div className="text-center text-indigo-600 dark:text-indigo-400 text-sm mt-1">
                MBBS Doctor - Gynecologist
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-gray-800/50 p-6 rounded-xl shadow-lg backdrop-blur-sm"
            >
              <FaPrescription className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-center text-gray-800 dark:text-white">
                Dr. Hira Nadeem
              </h3>
              <div className="text-center text-indigo-600 dark:text-indigo-400 text-sm mt-1">
                Doctor of Pharmacy (Pharm D)
              </div>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-gray-800/50 p-8 rounded-xl shadow-lg backdrop-blur-sm"
            >
              <p className="text-gray-700 dark:text-gray-300">
                Our family tree represents a legacy of education, service, and professional excellence. 
                From law enforcement and education to healthcare and technology, each member contributes 
                their unique expertise to serve society.
              </p>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}