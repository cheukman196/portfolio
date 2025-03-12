export default function Education() {
  return (
    <>  
        <section className="flex flex-col text-white font-roboto font-[350] selection:bg-teal-300 selection:text-gray-800 group/edu">
            <div className="p-5 my-2 max-w-lg flex flex-col justify-center rounded-md hover:shadow-md hover:bg-gray-500/10 border-t-1 border-t-transparent hover:border-t-gray-500/20 transition delay-150 group-hover/edu:opacity-35 hover:!opacity-100 group/item">
                <p className="opacity-70 font-medium  group-hover/item:text-teal-300/80 delay-150">Computer Programming and Analysis</p>
                <p className="opacity-70">
                    <a className="group-hover/item:opacity-100 group-hover/item:text-white hover:text-teal-500 transition delay-100" href="https://www.georgebrown.ca/programs/computer-programming-and-analysis-program-t177#how-to-apply" target="_blank">
                        George Brown College
                    </a> 
                    &nbsp;— Advanced Diploma
                </p>
                <p className="opacity-70">Graduation: Apr 2025</p>
                <p className="opacity-70">GPA: 3.89/4.00</p>
            </div>


            <div className="p-5 my-2 max-w-lg flex flex-col justify-center rounded-md hover:shadow-md hover:bg-gray-500/10 border-t-1 border-t-transparent hover:border-t-gray-500/20 transition delay-150 group-hover/edu:opacity-35 hover:!opacity-100 group/item">
                <p className="opacity-70 font-medium  group-hover/item:text-teal-300/80 transition delay-150">Bachelor of Arts (English)</p>
                <p className="opacity-70">
                    <a className="group-hover/item:opacity-100 group-hover/item:text-white hover:text-teal-500 transition delay-100" href="https://www.cuhk.edu.hk/english/index.html" target="_blank">
                        CUHK
                    </a> 
                    &nbsp;— Bachelor's Degree</p>
                <p className="opacity-70">Graduation: Nov 2018</p>
            </div>


        </section>
    </>
  );
}