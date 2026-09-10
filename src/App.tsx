import { useEffect, useRef } from 'react';
import './App.css'
import './assets/css/index.css'
import Footer from './components/Footer'
import Projects from './components/projects/Projects'
import Experiences from './components/experiences/Experiences'
import Navbar from './components/Navbar'
import Tools from './components/Tools'

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
                className="fixed top-0 z-50 h-1 w-0 bg-primary"
                aria-hidden="true"
            />
      <Navbar />
      <Projects />
      <Experiences />
      <Tools />
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
