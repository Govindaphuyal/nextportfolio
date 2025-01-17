
const about = () => {
    return (
      
          <div className="bg-black from-indigo-800 to-blue-900 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full p-8 transition-all duration-300 animate-fade-in">
          <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 text-center mb-8 md:mb-0">
                  <img src="/premium_photo-1678565879444-f87c8bd9f241.avif" alt="Profile Picture" className="rounded-full w-48 h-48 mx-auto mb-4 border-4 border-indigo-800 dark:border-blue-900 transition-transform duration-300 hover:scale-105"/>
                  <h1 className="text-2xl font-bold text-indigo-800 dark:text-white mb-2">Govinda</h1>
                  <p className="text-gray-600 dark:text-gray-300">Software Developer</p>
              </div>
              <div className="md:w-2/3 md:pl-8">
                  <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mb-4">About Me</h2>
                  <p className="text-white dark:text-gray-300 mb-6">
                      Passionate Frontend developer in web technologies. 
                      I love creating user-friendly applications and solving complex problems.
                  </p>
                  <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mb-4">Skills</h2>
                  <div className="flex flex-wrap gap-2 mb-6">
                      <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                      <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">React</span>
                      <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                      <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Nextjs</span>
                      <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">SQL</span>
                  </div>
                  <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mb-4">Contact Information</h2>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-800 dark:text-blue-900" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                          govindaphuyal40@gmail.com
                      </li>
                      <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-800 dark:text-blue-900" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          Samakhusi,Kathmandu
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      </div>
    )
  }
  
  export default about