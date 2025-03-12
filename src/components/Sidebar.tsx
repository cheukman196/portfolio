interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Sidebar({ activeSection, setActiveSection }: SidebarProps) {

  return (
    <>  
        <nav className="max-w-40 font-gabarito font-semibold text-sm tracking-widest text-gray-400">
          <div className={`pt-4 hover:text-teal-300 hover:translate-x-6 transition delay-100 cursor-pointer
            ${activeSection === 'about' ? 'text-teal-300 translate-x-6' : ''} `}
            onClick={() => setActiveSection('about')}>
            <a>ABOUT</a>
          </div>
          <div className={`pt-4 hover:text-teal-300 hover:translate-x-6 transition delay-100 cursor-pointer
            ${activeSection === 'experience' ? 'text-teal-300 translate-x-6' : ''} `}
            onClick={() => setActiveSection('experience')}>
            <a>EXPERIENCE</a>
          </div>
          <div className={`pt-4 hover:text-teal-300 hover:translate-x-6 transition delay-100 cursor-pointer
            ${activeSection === 'projects' ? 'text-teal-300 translate-x-6' : ''} `}
            onClick={() => setActiveSection('projects')}>
            <a>PROJECTS</a>
            </div>
          <div className={`pt-4 hover:text-teal-300 hover:translate-x-6 transition delay-100 cursor-pointer
            ${activeSection === 'contact' ? 'text-teal-300 translate-x-6' : ''} `}
            onClick={() => setActiveSection('contact')}>
            <a>LET'S TALK</a>
          </div>
          <div className="pt-4 hover:text-teal-300 hover:translate-x-6 transition delay-100 cursor-pointer">
            <a href="/public/documents/resume.pdf" target="_blank">MY RESUME</a>
          </div>
        </nav>
    </>
  );
}