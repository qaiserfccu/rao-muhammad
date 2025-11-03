'use client';

import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaGraduationCap, FaAward } from 'react-icons/fa';

export default function FamilyAchievements() {
  const achievements = [
    {
      category: "Medical Excellence",
      items: [
        {
          name: "Dr. Faisal Nadeem",
          achievement: "Advanced Research in Pulmonology",
          description: "Published groundbreaking research on respiratory disease treatments",
          year: "2021",
          icon: FaMedal
        },
        {
          name: "Dr. Memoona Umar",
          achievement: "Excellence in Women's Healthcare",
          description: "Recognition for outstanding maternal care and gynecological services",
          year: "2020",
          icon: FaAward
        },
        {
          name: "Dr. Hira Nadeem",
          achievement: "Pharmaceutical Research Award",
          description: "Innovation in pharmaceutical care and medication management",
          year: "2022",
          icon: FaTrophy
        }
      ]
    },
    {
      category: "Public Service",
      items: [
        {
          name: "Rao Muhammad Afzal Nadeem",
          achievement: "Distinguished Service Medal",
          description: "30 years of exemplary service in Punjab Police",
          year: "2015",
          icon: FaMedal
        },
        {
          name: "Razia Afzal",
          achievement: "Educational Excellence Award",
          description: "Outstanding contribution to students' development",
          year: "2018",
          icon: FaGraduationCap
        }
      ]
    },
    {
      category: "Technology & Innovation",
      items: [
        {
          name: "Rao Muhammad Qaiser Nadeem",
          achievement: "Enterprise Solutions Development",
          description: "Leading development of mission-critical applications",
          year: "2023",
          icon: FaTrophy
        }
      ]
    }
  ];

  return (
    <Section className="bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/50 dark:from-blue-950 dark:via-indigo-950/30 dark:to-purple-950/50">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
              Family Achievements
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Celebrating our collective success and contributions across different fields
            </p>
          </div>

          {achievements.map((category, index) => (
            <div key={category.category} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.achievement}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/80 dark:bg-gray-800/50 p-6 rounded-xl shadow-lg backdrop-blur-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                          {item.year}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-1">
                          {item.achievement}
                        </h3>
                        <div className="text-indigo-600 dark:text-indigo-400 font-medium mt-1">
                          {item.name}
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mt-2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-gray-800/50 p-8 rounded-xl shadow-lg backdrop-blur-sm"
            >
              <p className="text-gray-700 dark:text-gray-300">
                These achievements represent our family's commitment to excellence and service across different sectors. 
                Each member's contribution adds to our collective legacy of making positive impacts in our respective fields.
              </p>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}