import React from "react";
import Image from "next/image";




export default function Home() {
  return (
    <div>


      {/* Hero Section */}
      <div
        id="navbar"
        className="min-h-screen bg-no-repeat bg-cover lg:bg-[90%] bg-right flex items-center"
        style={{ backgroundImage: "url('/pic.png')", backgroundSize: "28%" }}
      >
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 h-[calc(100vh-60px)] px-6">
          {/* Introduction */}
          <div className="flex flex-col justify-center items-start lg:pl-20 text-center lg:text-left">
            <h1 className="text-[50px] sm:text-[60px] font-bold leading-tight text-black">
              I'm
              <br />
              Areeba
              <br />
              <span className="text-blue-600">A Web <br/>Developer</span>
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Crafting modern, responsive, and user-friendly web experiences.
            </p>
            <div className="mt-6">
              <a
                href="/cv.pdf"
                download="My_CV.pdf"
                className="px-8 py-4 bg-[#0000ff] text-white rounded-lg shadow-md hover:bg-[#0000ff] transition font-medium"
              >
                Download My CV
              </a>
            </div>
          </div>
          {/* Profile Image */}
          <div className="flex justify-center items-center mt-6 lg:mt-0">
            <Image
              src="/pic.png" // Path to your image
              alt="Areeba"
              width={300}
              height={300}
              className="rounded-full shadow-lg border-4 border-white"
            />
          </div>
        </div>
      </div>

      

</div>
      )
      }