import { useEffect, useRef } from 'react';
import './App.css'
import './index.css'
import Footer from './components/Footer'
import Projects from './components/projects/Projects'
import Experiences from './components/experiences/Experiences'
import Navbar from './components/Navbar'
import Tools from './components/Tools'
import Publications from './components/Publications';
function App() {
  const progressRef = useRef<HTMLDivElement>(null);
  useEffect(() => {

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (progressRef.current) {
        progressRef.current.style.width = `${progress}%`;
      }
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <>
      <div
        ref={progressRef}
        className="fixed top-0 left-0 z-[9999] h-1 w-0 bg-primary"
        aria-hidden="true"
      />

      <Navbar />
      <Projects />
      <Experiences />
      <Tools />
      <Publications />
      <div className="bg-base-200">
        <Footer />
      </div>

      <style>{
        `
  html,
  body {
    margin: 0;
    width: 100%;
    height: 100%;
  }
  `
      }</style>
    </>
  )
}

export default App