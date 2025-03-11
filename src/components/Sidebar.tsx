export default function Sidebar() {
  return (
    <>  
        <nav className="font-gabarito font-semibold text-sm tracking-widest text-gray-400">
          <div className="pt-4 hover:text-teal-300 hover:translate-x-4 transition delay-150"><a href="https://www.google.com">ABOUT</a></div>
          <div className="pt-4 hover:text-teal-300 hover:translate-x-4 transition delay-150"><a href="https://www.google.com">EXPERIENCE</a></div>
          <div className="pt-4 hover:text-teal-300 hover:translate-x-4 transition delay-150"><a href="https://www.google.com">PROJECTS</a></div>
          <div className="pt-4 hover:text-teal-300 hover:translate-x-4 transition delay-150"><a href="/public/documents/resume.pdf" target="_blank">RESUME</a></div>
          <div className="pt-4 hover:text-teal-300 hover:translate-x-4 transition delay-150"><a href="https://www.google.com">LET'S TALK</a></div>
        </nav>
    </>
  );
}