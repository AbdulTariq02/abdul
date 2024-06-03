import React from 'react'
import Image from 'next/image'
import pic from "../components/ammar.jpg"
import picture from "../components/sufiyan.jpg"
import pictures from "../components/download.jpeg"
const About = () => {
  return (
    <div id="About">
      {/* <div className="flex items-center justify-center text-center bg-gradient-to-r from-fuchsia-200 via-red-200 to-cyan-200 w-[100%]"> */}
         {/* <div className="flex flex-col items-center justify-center rounded-tr-full rounded-bl-full  bg-white">  */}
         <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-blue-900">
        My Team Members
      </h1>
    
    </div>
      <div className='grid lg:grid-cols-2 md:grid-cols-1 '>
{/* ammar */}
  <div className="flex flex-wrap pt-16 justify-center sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
  <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
    <div className=" inline-flex items-center justify-center rou bg-indigo-100 text-indigo-500 mb-5 rounded-full flex-shrink-0 ">
 <Image src={pic} className='h-40 w-40 border-4 border-cyan-500 rounded-full overflow-hidden bg-gray-200"' alt="pic"/>
    </div>
   
    <div className="flex-grow">
      <h2 className="text-gray-900 text-3xl font-mono title-font font-bold mb-3">
        Ammar Qasim
      </h2>
      <p className="leading-relaxed text-xl capitalize font-serif mb-5"> this is my best friend👬and this is a good web developer for make a beautiful websites </p>
      <div>
  <a href="https://www.instagram.com/mohammad_ammar0/" className="w-14 h-14 rounded-full border-cyan-500 border text-stone-500 bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"><i className="fa fa-insta" />
  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-11 h-11 flex items-center justify-center hover:animate-pulse" viewBox="0 0 24 24">
            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
  </a> <a href="#" className="w-14 h-14 rounded-full border-cyan-500 border text-stone-500 bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"><i className="fa fa-linkedin" />
  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-11 h-11 flex items-center justify-center hover:animate-pulse " viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
            <circle cx={4} cy={4} r={2} stroke="none" />
          </svg>
  </a><a href="https://www.facebook.com/ammar.qasim.7798?mibextid=ZbWKwL" className="w-14 h-14 rounded-full border-cyan-500 border text-stone-500 bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"><i className="fa fa-facebook" />
  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 hover:animate-pulse" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg></a>
</div>

     
      </div>

    </div>
  </div>
  {/* sufiyaan */}
  <div className="flex flex-wrap justify-center pt-16 sm-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
  <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
    <div className=" inline-flex items-center justify-center rou bg-indigo-100 text-indigo-500 mb-5 rounded-full flex-shrink-0 ">
 <Image src={picture} className='h-40 w-40 border-4 border-cyan-500 rounded-full overflow-hidden bg-gray-200"' alt="pic"/>
    </div>
   
    <div className="flex-grow">
      <h2 className="text-gray-900 font-mono  text-3xl title-font font-bold mb-3">
        Sufiyan Jaweed
      </h2>
      <p className="leading-relaxed text-xl capitalize font-serif mb-5"> this is my best friend👬and this is a good web developer for make a beautiful websites </p>
      <div>
  <a href="#" className="w-14 h-14 rounded-full border-cyan-500 border text-stone-500 bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"><i className="fa fa-insta" />
  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-11 h-11 flex items-center justify-center hover:animate-pulse" viewBox="0 0 24 24">
            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
  </a> <a href="#" className="w-14 h-14 rounded-full border-cyan-500 border text-stone-500 bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"><i className="fa fa-linkedin" />
  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-11 h-11 flex items-center justify-center hover:animate-pulse " viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
            <circle cx={4} cy={4} r={2} stroke="none" />
          </svg>
  </a><a href="#" className="w-14 h-14 rounded-full border-cyan-500 border text-stone-500 bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"><i className="fa fa-facebook" />
  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 hover:animate-pulse" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg></a>
</div>

     
      </div>

    </div>
  </div>
 {/* maryam */}
 <div className="flex  flex-wrap justify-end  pt-16 sm-m-4 -mx-4 mb-5 -mt-4 md:space-y-0 space-y-6">
  <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
    <div className=" inline-flex items-center justify-center rou bg-indigo-100 text-indigo-500 mb-5 rounded-full flex-shrink-0 ">
 <Image src={pictures} className='h-40 w-40 border-4 border-cyan-500 rounded-full overflow-hidden bg-gray-200"' alt="pic"/>
    </div>
   
    <div className="flex-grow">
      <h2 className="text-gray-900 text-3xl title-font  font-bold font-mono mb-3">
        Maryam Tariq
      </h2>
      <p className="leading-relaxed text-xl capitalize font-serif mb-5"> this is my best sister👬and this is a good web developer for make a beautiful websites </p>
      <div>
  <a href="#" className="w-14 h-14 rounded-full border-cyan-500 border text-stone-500 bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"><i className="fa fa-insta" />
  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-11 h-11 hover:animate-pulse flex items-center justify-center " viewBox="0 0 24 24">
            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
  </a> <a href="https://www.linkedin.com/in/maryam-tariq-6a95ba279" className="w-14 h-14 rounded-full border-cyan-500 border text-stone-500 bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"><i className="fa fa-linkedin" />
  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-11 h-11 hover:animate-pulse flex items-center justify-center " viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
            <circle cx={4} cy={4} r={2} stroke="none" />
          </svg>
  </a><a href="https://www.facebook.com/profile.php?id=100092578890945" className="w-14 h-14 rounded-full border-cyan-500 border text-stone-500 bg-cyan-500 hover:text-white mx-1 pt-1 inline-block"><i className="fa fa-facebook" />
  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 hover:animate-pulse" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg></a>


     
      </div>

    </div>
  </div>
  </div>
  
  </div>
 

  </div>

     
     </div>

      
    

  )
}

export default About