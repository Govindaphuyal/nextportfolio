import Link from "next/link"

const Main = () => {
  return (
       <div id="container" className="p-20 w-auto flex px-24 justify-center relative">
    
    <div id="container" className="p-20 sm:p-16 md:p-20 lg:p-24 xl:p-20 w-auto flex flex-col md:flex-row px-4 sm:px-8 md:px-24 lg:px-24 xl:px-24 relative">
        <div className="mr-10">
           <img
             className="rounded-lg min-w-[100px] w-full h-auto md:w-auto md:h-auto"
             src="/premium_photo-1685086785077-ff65bf749544.avif"
             alt="image of myself"
           />
        </div>
        <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%]">
    <h1 className="text-white font-bold text-3xl mt-6 mb-8">
      Hey it's me,<span className='text-red-500'>Govinda Phuyal</span> 
    </h1>

    <p className="text-white w-full sm:w-[35rem] md:w-[30rem] lg:w-[25rem] mb-10">
      I'm Govinda, a intern frontend with a passion for web
      development. My tech journey started with HTML, CSS, and JavaScript,
      and I was hooked by the thrill of crafting dynamic, interactive
      websites. As I grew, Node.js and ReactJS became my go-to tools for
      building scalable applications. Feel free
      to connect if you have questions, collaboration ideas, or just want to
      discuss the latest in web development!
    </p>

    <div id="social" className="flex flex-wrap justify-start items-center gap-4">
      <a rel="noopener" target="_blank" href="https://github.com/Govindaphuyal" className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white">
          <img className="mr-2 hover:scale-105 transition duration-300 ease-in-out" src="https://ucarecdn.com/1f465c47-4849-4935-91f4-29135d8607af/github2.svg" width="20px" height="20px" alt="Github" />
          <span>Visit my Github</span>
      </a>
      <a rel="noopener" target="_blank" href="https://www.linkedin.com/in/govinda-phuyal-222344203/" className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white">
          <img className="mr-2 hover:scale-105 transition duration-300 ease-in-out" src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/linkedin.svg" width="20px" height="20px" alt="LinkedIn" />
          <span>Follow me on Linkedin</span>
      </a>
      <Link href="/image/Backend Intern.pdf" download>
      
          <button className="bg-gray-800 rounded-lg p-5 w-64  items-center gap-2 text-white">Download CV</button>
      </Link>
      
      
  </div>
  
       
       
  </div>
</div>
 
</div>

    
  )
}

export default Main