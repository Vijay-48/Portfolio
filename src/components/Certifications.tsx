import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export function Certifications() {
  const certifications = [
    {
      provider: "IBM SkillsBuild",
      items: [
        "Web Development Fundamentals",
        "Project Management Fundamentals"
      ]
    },
    {
      provider: "AWS",
      items: [
        "Machine Learning Foundations"
      ]
    },
    {
      provider: "Salesforce",
      items: [
        "Apex Specialist",
        "Process Automation Specialist"
      ]
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 relative bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Certifications</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.provider}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-700/50 transition-all hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-semibold">{cert.provider}</h3>
              </div>
              <ul className="space-y-2">
                {cert.items.map((item) => (
                  <li key={item} className="text-gray-300 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}