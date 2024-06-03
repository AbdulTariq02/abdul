"use client"
import React from 'react'
import Image from 'next/image'
import image from "../../../public/assest/pictures/wahab.png"
import Typewriter from 'typewriter-effect';
import Link from 'next/link';
const Hero = () => {
  return (
    
      

  <section className="text-gray-600 body-font ">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Hello 😊
          <br className="hidden lg:inline-block" />
          <Typewriter
  options={{
    strings: ['My name is abdulwahab tariq .','I am Web Devoloper.', 'I am UI/UX Designer.'],
    autoStart: true,
    loop: true,
  }}
/>        
</h1>
        <div className='w-[100px] h-[2px] bg-blue-600'></div>
        <p className="mb-8 leading-relaxed text-xl">
        I Am 16 Years Old I Live In Karachi, Pakistan.
         and I am a web developer
        I am proficient in HTML, CSS, JavaScript, TypeScript,
         and Next.js. Every day, I explore new challenges and
          solutions. My goal has always been to learn new
           technologies and techniques to enhance my skills. 
           I prioritize teamwork and consistently strive to 
           achieve excellent results by collaborating with others.
        </p>
        <div className="flex justify-center">
          <Link href={"#Contact"}>
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Contact
          </button>
          </Link>
         
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image
          className="object-cover object-center   mx-auto w-[20rem] rounded-full"
          alt="hero"
          width={500}
          height={500}
          src={image}
        />
      </div>
    </div>
  </section>


    
  )
}

export default Hero
