import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';

export default function Page() {
  return (
    <>
      <NavBar />
      <main className="pt-16">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}
