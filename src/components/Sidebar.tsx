import "tailwindcss";

export default function Sidebar() {
  return (
    <>  
        <nav className="font-gabarito font-semibold text-white">
          <div className="pt-4"><a href="https://www.google.com">ABOUT</a></div>
          <div className="pt-4"><a href="https://www.google.com">EXPERIENCE</a></div>
          <div className="pt-4"><a href="https://www.google.com">PROJECTS</a></div>
          <div className="pt-4"><a href="https://www.google.com">LET'S TALK</a></div>
        </nav>
    </>
  );
}