import { useEffect, useRef, useState } from 'react';
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
  const [height, setHeight] = useState(0)
  const [scroll, setScroll] = useState(0)
  useEffect(() => {

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setHeight(progress)
      setScroll(scrollTop)
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
      <div className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-700  ease-in-out ${height < scroll ? "-translate-y-20" : "translate-y-0"
        }`}>
        <Navbar />
      </div>

      <Projects />
      <div className="bg-base-200 py-10">
        <Experiences />
      </div>

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