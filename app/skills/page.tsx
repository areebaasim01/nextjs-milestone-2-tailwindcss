import Navbar from '@/app/layout'; // Assuming Navbar is a separate component
import Footer from '@/app/layout';
import Image from "next/image";




export default function Skills() {
    return (
      <div className=" ">
    
  
        <div className="max-w-6xl ml-[10px] ">
          {/* Skills Grid */}
          <div className="grid grid-cols-[1fr_auto_1fr]  items-center">
            {/* Frameworks & Libraries Image */}
            <div className="flex justify-center items-center  ">
              <Image src="/SKILL.png" alt="skills"  width={1000} height={500} />
            </div>
  
            {/* Divider */}
            <div className=" w- h-full mx-auto"></div>
  
            {/* Skills Section */}
            <div className="text-left ">
              <h1 className="text-3xl font-extrabold text-[35px]  ml-[110px] text-black mb-4">Frameworks & Libraries</h1>
              <div className="grid grid-cols-2 gap-4">
                {/* Individual Skill Items */}
                <div className="flex flex-col items-center text-center">
                  <Image src="/react.png" alt="React" width={90} height={90} />
                  <p className="text-lg font-semibold mt-2 text-gray-700">React</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Image src="/nextjs.png" alt="Next.js" width={90} height={90} />
                  <p className="text-lg font-semibold mt-2 text-gray-700">Next.js</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Image src="/git.png" alt="Git" width={90} height={90} />
                  <p className="text-lg font-semibold mt-2 text-gray-700">Git</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Image 
                  src="/tailwind.png"
                   alt="Tailwind CSS" 
                   width={90} 
                   height={90} 
                   />
                  <p className="text-lg font-semibold mt-2 text-gray-700">Tailwind CSS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
      
      </div>
    );
  }
  