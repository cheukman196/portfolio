export default function Intro() {
  return (
    <>
        <div className="font-gabarito text-white flex flex-col">
          <p className="text-6xl opacity-90 font-bold">Cedric Sit</p>
          <p className="text-2xl opacity-90 mt-3 text-sky-500">Full Stack Developer</p>
          <p className="font-roboto font-[400] opacity-90 text-white">
          Toronto, Canada
          </p>
          <p className="font-roboto font-[400] opacity-70 my-3 max-w-sm">
            I like to build scalable web solutions
            that are user-oriented and robust.
          </p>


          <div className="mx-5 my-3 opacity-90">
            <img src="/images/pic.jpg" className="rounded-full w-40 h-40 object-cover" alt="profile"/>
          </div>
        </div>
    </>
  );
}