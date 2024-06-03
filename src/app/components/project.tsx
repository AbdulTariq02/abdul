import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import p1 from '../../../public/assest/projects/Screenshot 2024-05-25 161136.png'
import p2 from '../../../public/assest/projects/screen.png'
import p3 from '../../../public/assest/projects/facabook clone.png'
const Project = () => {
  
  return (
    <div id="Project" >
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24  mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-blue-900">
        My Projects
      </h1>

    </div>
    <div className="flex flex-wrap -m-8 mx-5">
      {/* project1 */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={p1}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Weather Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              WEATHER
            </h1>
            <p className="leading-relaxed">
            This is the project which I've created for those who check the weather.
            </p>
            <Link href={"https://my-r05mxb70h-abdul-wahabs-projects-c8c7f4b8.vercel.app/"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
              View Project ..
            </p>
            </Link>
          </div>
        </div>
      </div>
      {/* project2 */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={p2}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Tic Tac Toe Game
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Funny Game
            </h1>
            <p className="leading-relaxed">
            Tic Tac Toe is a classic, simple, and widely recognized two-player game
            </p>
            <Link href={"https://tic-toegame-1zhefs3m1-abdul-wahabs-projects-c8c7f4b8.vercel.app/"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
              View Project ..
            </p>
            </Link>
          </div>
        </div>
      </div>
      {/* project3 */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="face"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={p3}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Facebook clone
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              clone
            </h1>
            <p className="leading-relaxed">
            Its a facebook clone its very beautiful. it is only mobile responsive clone.
            </p>
            <Link href={"https://facebookclone-14yfjyi9z-abdul-wahabs-projects-c8c7f4b8.vercel.app/"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
              View Project ..
            </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Project
