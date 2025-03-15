import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}



export default function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
    const location = useLocation();
    const navigate = useNavigate();
    // Update activeSection when URL changes
    useEffect(() => {
      const sectionFromURL = location.hash.replace("#", ""); // Get section from URL hash
      if (sectionFromURL) {
        setActiveSection(sectionFromURL);
      }
    }, [location.hash, setActiveSection]);
  
    // Function to handle section changes and update URL
    const handleSectionClick = (section: string) => {
      setActiveSection(section);
      navigate(`#${section}`); // Update URL hash
    };
  

  return (
    <>  
        <nav className="max-w-40 font-gabarito font-semibold text-sm tracking-widest text-gray-400">
          <div className={`pt-4 hover:text-sky-400 hover:translate-x-6 transition delay-100 cursor-pointer
            ${activeSection === 'about' ? 'text-sky-400 translate-x-6' : ''} `}
            onClick={() => handleSectionClick('about')}>
            <a className="flex items-center">
              ABOUT &nbsp;
              <span className={`relative flex size-2 transition duration-150 ${activeSection === 'about' ? 'opacity-80' : 'opacity-0'}`}>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-40"></span>
                <span className="relative inline-flex size-2 rounded-full bg-sky-500"></span>
              </span>
            </a>
          </div>

          <div className={`pt-4 hover:text-sky-400 hover:translate-x-6 transition delay-100 cursor-pointer
            ${activeSection === 'experience' ? 'text-sky-400 translate-x-6' : ''} `}
            onClick={() => handleSectionClick('experience')}>
            <a className="flex items-center">
              EXPERIENCE &nbsp;
              <span className={`relative flex size-2 transition duration-150 ${activeSection === 'experience' ? 'opacity-80' : 'opacity-0'}`}>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-40"></span>
                <span className="relative inline-flex size-2 rounded-full bg-sky-500"></span>
              </span>
            </a>
          </div>

          <div className={`pt-4 hover:text-sky-400 hover:translate-x-6 transition delay-100 cursor-pointer
            ${activeSection === 'projects' ? 'text-sky-400 translate-x-6' : ''} `}
            onClick={() => handleSectionClick('projects')}>
            <a className="flex items-center">
              PROJECTS &nbsp;
              <span className={`relative flex size-2 transition duration-150 ${activeSection === 'projects' ? 'opacity-80' : 'opacity-0'}`}>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-40"></span>
                <span className="relative inline-flex size-2 rounded-full bg-sky-500"></span>
              </span>
            </a>
            </div>

          <div className="pt-4 hover:text-sky-400 hover:translate-x-6 transition delay-100 cursor-pointer flex">
            <a href="/documents/resume.pdf" target="_blank" className="flex items-center">
              MY RESUME &nbsp;
            </a>
          </div>

          <div className="pt-4 hover:text-sky-400 hover:translate-x-6 transition delay-100 cursor-pointer flex">
            <a href="/documents/cover_letter.pdf" target="_blank" className="flex items-center">
              COVER LETTER &nbsp;
            </a>
          </div>
        </nav>
    </>
  );
}