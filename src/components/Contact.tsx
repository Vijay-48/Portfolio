import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.a
            href="mailto:nameisvijju001@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gray-700/50 transition-all hover:scale-105"
          >
            <Mail className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-300 text-center">nameisvijju001@gmail.com</p>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gray-700/50 transition-all hover:scale-105"
          >
            <Phone className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-gray-300">+91 7993115215</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gray-700/50 transition-all hover:scale-105"
          >
            <MapPin className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-gray-300 text-center">Hyderabad, Telangana, India</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}