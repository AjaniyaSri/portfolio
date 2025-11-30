import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-transparent text-slate-100">
      <Navbar />
      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-4 pb-16 pt-10 md:pt-16">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="certificates">
          <Certificates />
        </section>
        <section id="contact" className="pb-4">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}
