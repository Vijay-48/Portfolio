import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: "Android Development Intern",
      company: "Prodigy InfoTech",
      period: "2023",
      description: "Developed Android applications and gained hands-on experience with mobile development."
    },
    {
      title: "Front-End Web Development",
      company: "IBM SkillsBuild Internship",
      period: "2023",
      description: "Worked on web development projects using modern frameworks and best practices."
    },
    {
      title: "Salesforce Developer Virtual Internship",
      company: "Salesforce",
      period: "2023",
      description: "Completed Apex Specialist and Process Automation Superbadges."
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 relative bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="flex gap-4 bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-700/30 transition-colors"
            >
              <div className="flex-shrink-0">
                <Briefcase className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-blue-400">{exp.company}</p>
                <p className="text-gray-400">{exp.period}</p>
                <p className="text-gray-300 mt-2">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}