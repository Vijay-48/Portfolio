import { Scene } from './components/Scene';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';

function App() {
  return (
    <main className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-white">
      <div className="fixed inset-0">
        <Scene />
      </div>
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </div>
    </main>
  );
}

export default App;