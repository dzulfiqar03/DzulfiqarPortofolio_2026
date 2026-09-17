import { useEffect, useRef, useState } from 'react';
import './App.css'
import './index.css'
import Footer from './components/Footer'
import Projects from './components/projects/Projects'
import Experiences from './components/experiences/Experiences'
import Navbar from './components/Navbar'
import Tools from './components/Tools'
import Publications from './components/Publications';
import { ChevronUpIcon } from 'lucide-react';
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


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Membuat efek transisi gulir yang halus
    });
  };
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



      <div className={`${height === 0 ? 'hidden bottom-0 right-0 ' : 'fixed bottom-6 right-6 '} transition-transform duration-500 ease-in-out z-50 flex flex-col items-end`}>
        <button
          onClick={() => scrollToTop()}
          className={`flex items-center justify-center w-14 h-14 bg-indigo-600 text-white rounded-full shadow-2xl hover:bg-blue-700 focus:outline-none transition-transform duration-300 `}
          aria-label="Floating Action Button"
        >
          <ChevronUpIcon />
        </button>
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