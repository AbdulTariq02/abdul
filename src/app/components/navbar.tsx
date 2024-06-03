import React from 'react'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Navbar = () => {
  return (
    <div className='z-50 sticky top-0 bg-white'>
      <header className="text-black body-font">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
      <span className="ml-3 text-2xl font-extrabold">Portfolio</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center  ">
      <Link href={"/"} className="mr-5   hover:text-blue-800 ">Home</Link>
      <Link href={"#About"} className="mr-5   hover:text-blue-800 ">About</Link>
      <Link href={"#Skills"} className="mr-5   hover:text-blue-800 ">Skills</Link>
      <Link href={"#Project"} className="mr-5   hover:text-blue-800 ">Projects</Link>
      <Link href={"#Contact"} className="mr-5   hover:text-blue-800 ">Contact</Link>
    </nav>
    <a href="/assest/cv/abdulwahab.pdf">
     <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
    Download CV
      <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"/>
</svg>

    </button>
    </a>
  </div>
</header>
    </div>
  )
}

export default Navbar