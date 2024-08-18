import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import html from "../../../public/assest/pictures/download.png"
import css from "../../../public/assest/pictures/download.jpg"
import java from "../../../public/assest/pictures/download (1).jpg"
import typescript from "../../../public/assest/pictures/download (1).png"
import next from "../../../public/assest/pictures/download (2).png"
import python from "../../../public/assest/pictures/download (2).jpg"
function Skills() {
  return (
    <div id= 'Skills'>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-blue-900 mb-4">
        My Skills
      </h1>
      
      <div className="flex mt-6 justify-center">
        {/* <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" /> */}
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className=" mx-auto w-[20rem] rounded-full">
         <Image src={html} alt='html'
          width={500}
          height={500}
         />
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-2xl title-font font-medium mb-3">
        Html
          </h2>
          <p className="leading-relaxed text-base">
          HTML stands for Hyper Text Markup Language
HTML is the standard markup language for creating Web pages
HTML describes the structure of a Web page
HTML consists of a series of elements
HTML elements tell the browser how to display the content
HTML elements label pieces of content such as this is a heading, this is a paragraph, this is a link, etc.
          </p>
          <a href='https://www.w3schools.com/html/default.asp' className="mt-3 text-indigo-500 inline-flex items-center">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="mx-auto w-[13rem] rounded-full">
        <Image src={css} alt='css'
          width={400}
          height={200}
         />
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-2xl title-font font-medium mb-3">
          Css
          </h2>
          <p className="leading-relaxed text-base">
          CSS stands for Cascading Style Sheets
CSS describes how HTML elements are to be displayed on screen, paper, or in other media
CSS saves a lot of work. It can control the layout of multiple web pages all at once
External stylesheets are stored in CSS files
          </p>
          <a href='https://www.w3schools.com/css/default.asp' className="mt-3 text-indigo-500 inline-flex items-center">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="mx-auto w-[13rem] rounded-full">
        <Image src={java} alt='css'
          width={400}
          height={200}
         />
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-2xl title-font font-medium mb-3">
            Javascript
          </h2>
          <p className="leading-relaxed text-base">
          JavaScript is the worlds most popular programming language.

JavaScript is the programming language of the Web.

JavaScript is easy to learn.

This tutorial will teach you JavaScript from basic to advanced
          </p>
          <a href='https://www.w3schools.com/js/default.asp' className="mt-3 text-indigo-500 inline-flex items-center">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center ">
        <div className="mx-auto w-[13rem] rounded-full">
        <Image src={typescript} alt='css'
          width={400}
          height={200}
         />
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-2xl title-font font-medium mb-3">
          Typescript
          </h2>
          <p className="leading-relaxed text-base">
          TypeScript is a syntactic superset of JavaScript which adds static typing.

This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.

TypeScript being a Syntactic Superset means that it shares the same base syntax as JavaScript, but adds something to it.
          </p>
          <a href='https://www.w3schools.com/typescript/index.php' className="mt-3 text-indigo-500 inline-flex items-center">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="mx-auto w-[20rem] rounded-full">
        <Image src={next} alt='css'
          width={500}
          height={500}
         />
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-2xl title-font font-medium mb-3">
          Next.js
          </h2>
          <p className="leading-relaxed text-base">
          Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.
          Under the hood, Next.js also abstracts and automatically configures tooling needed for React, like bundling, compiling, and more
          Whether you are an individual developer or part of a larger team, Next.js can help you build interactive, dynamic, and fast React applications.
          </p>

          <a href='https://nextjs.org/docs' className="mt-3 text-indigo-500 inline-flex items-center">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="mx-auto w-[13rem] rounded-full">
        <Image src={python} alt='css'
          width={400}
          height={200}
         />
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-2xl title-font font-medium mb-3">
          Python
          </h2>
          <p className="leading-relaxed text-base">
          Python can be used on a server to create web applications.
Python can be used alongside software to create workflows.
Python can connect to database systems. It can also read and modify files.
Python can be used to handle big data and perform complex mathematics.
Python can be used for rapid prototyping, or for production-ready software development.
          </p>
          <a href='https://www.w3schools.com/python/default.asp' className="mt-3 text-indigo-500 inline-flex items-center">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      
      
    </div>
    <Link href={"/"}>
    <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
      Go to Home
    </button>
    </Link>
  </div>
</section>

    </div>
  )
}

export default Skills

