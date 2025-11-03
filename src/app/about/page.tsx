import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';

export default function About() {
  const experiences = [
    {
      year: '2023 - 2025',
      company: 'Department of Culture and Tourism, Abu Dhabi',
      role: 'Senior Full Stack Developer',
      description:
        'Led development of applications across multiple platforms, including CRM, Tamm, and .Net Core. Implemented robust full-stack solutions and optimized application performance.',
    },
    {
      year: '2021 - 2023',
      company: 'Injazat Data Systems Ltd',
      role: 'Information Specialist - Senior (Software Engineer - JEE)',
      description:
        'Developed and maintained enterprise applications, implemented microservices architecture, and optimized system performance.',
    },
    {
      year: '2018 - 2021',
      company: 'MDC Business Management Services',
      role: 'Senior Information Technology Consultant',
      description:
        'Managed Kubernetes and Docker systems, developed .NET Core applications, and implemented frontend solutions using Angular and ReactJS.',
    },
    {
      year: '2014 - 2018',
      company: 'Pakistani Employers',
      role: 'Software Engineer',
      description:
        'Developed applications using .NET, MVC framework, and WinForms. Implemented frontend solutions and managed databases using MSSQL and MySQL.',
    },
  ];

  const education = [
    {
      year: '2009 - 2013',
      degree: 'Bachelor of Computer Science',
      school: 'Forman Christian College University',
      description:
        'Strong foundation in technical and programming disciplines from a prestigious institution in Lahore, Pakistan.',
    },
    {
      year: '2007 - 2009',
      degree: 'Intermediate of Computer Science',
      school: 'Govt Islamia College of Civilines',
      description:
        'Early foundation in computer science education from Lahore, Pakistan.',
    },
  ];

  return (
    <>
      <Section className="bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/50 dark:from-blue-950 dark:via-indigo-950/30 dark:to-purple-950/50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">About Me</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Based in Riyadh, SA, I'm a seasoned Full Stack Developer with extensive experience in designing and implementing scalable software solutions across multiple industries, including government and tourism. Proficient in backend development, microservices architecture, RESTful API design, and frontend frameworks such as ReactJS and AngularJS. I hold a Bachelor's degree in Computer Science from Forman Christian College University.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Skills</h2>
                <div className="space-y-2">
                  {[
                    'Backend Development (.NET, Node.js)',
                    'Frontend (Angular, React)',
                    'Microservices Architecture',
                    'RESTful API Design',
                    'Docker & Kubernetes',
                    'Cloud (AWS/Azure)',
                    'Database Design',
                    'DevOps & CI/CD'
                  ].map((skill, index) => (
                    <div
                      key={skill}
                      className="bg-white/80 dark:bg-gray-800/50 p-3 rounded-lg shadow-md hover:shadow-xl transition-all border border-blue-100/20 dark:border-blue-700/20 backdrop-blur-sm hover:scale-105 transform cursor-pointer"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Interests</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Web Development</li>
                  <li>Cloud Architecture</li>
                  <li>UI/UX Design</li>
                  <li>Machine Learning</li>
                  <li>Open Source</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section delay={0.2} className="bg-gradient-to-br from-purple-50/50 via-indigo-50/30 to-blue-50/50 dark:from-purple-950 dark:via-indigo-950/30 dark:to-blue-950/50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.company} 
                  className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-purple-600 before:to-blue-600 before:dark:from-purple-400 before:dark:to-blue-400 before:rounded-full"
                >
                  <div className="text-sm text-gray-500 dark:text-gray-400">{exp.year}</div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{exp.role}</h3>
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent font-medium">{exp.company}</div>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section delay={0.4} className="bg-gradient-to-br from-emerald-50/50 via-teal-50/30 to-cyan-50/50 dark:from-emerald-950 dark:via-teal-950/30 dark:to-cyan-950/50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent">Education</h2>
            <div className="space-y-8">
              {education.map((edu) => (
                <div 
                  key={edu.degree} 
                  className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-emerald-600 before:to-cyan-600 before:dark:from-emerald-400 before:dark:to-cyan-400 before:rounded-full"
                >
                  <div className="text-sm text-gray-500 dark:text-gray-400">{edu.year}</div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{edu.degree}</h3>
                  <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent font-medium">{edu.school}</div>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}