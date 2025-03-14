export default function Projects() {
    return (
      <>  
          <section className="pt-4">
              <ol className="md:flex md:flex-col sm:flex text-white font-roboto font-[400] selection:bg-sky-400 selection:text-gray-800">
                <li>
                    <a href="https://github.com/cheukman196/FileEase"  
                        className="min-h-100 rounded-lg border-sky-600/30 border-2 p-5 flex gap-5 justify-center hover:border-sky-400/30 transition duration:100 group">
                        <section className="flex-1 max-w-1/2">
                            <h4 className="font-gabarito text-4xl py-5 group-hover:text-sky-400 opacity-70 group-hover:opacity-100 transition duration:100 ">FileEase</h4>
                            <p className="py-2 opacity-70 group-hover:opacity-100 transition duration:100 ">FileEase is a file manager that has file browsing, bookmarking and custom directory creation features. 
                                Built using Python and PyQT6 framework, FileEase offers lightweight and self-explanatory features to manage your local files.</p>
                            <ul className="flex flex-wrap gap-1 ">
                                <li className="mr-1.5 mt-2 rounded-xl bg-sky-500/10 px-3 py-1 text-xs font-medium leading-5 text-sky-400 opacity-100">
                                    Python
                                </li>
                                <li className="mr-1.5 mt-2 rounded-xl bg-sky-500/10 px-3 py-1 text-xs font-medium leading-5 text-sky-400 opacity-100">
                                    PyQT6
                                </li>
                            </ul>
                        </section>
                        <img src="/images/projects_filease.png" alt="FileEase" className="max-w-0.8 flex-2 rounded-lg object-contain opacity-70 group-hover:opacity-100 transition duration:100 "/>
                    </a>
                </li>
              </ol>
          </section>
          
  
      </>
    );
  }