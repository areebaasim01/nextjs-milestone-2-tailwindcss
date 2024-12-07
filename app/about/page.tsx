import Navbar from '@/app/layout'; // Assuming Navbar is a separate component
import Footer from '@/app/layout'; // Assuming Footer is a separate component

export default function About() {
  return (
    <div>
      {/* Navbar */}
      
      
      {/* About Content */}
      <div className="max-w-4xl mx-auto p-8 bg-gray-50 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">About Me</h1>
        <p className="text-lg text-gray-600 leading-relaxed text-justify">
          Hi, I’m Areeba Ansari, a passionate Web Developer and Sociologist with a unique blend of technical expertise and social insight. I specialize in crafting modern, user-friendly websites using technologies like HTML, CSS, TypeScript, and Next.js. My background in sociology helps me design digital solutions that are not only functional but also inclusive and empathetic, ensuring they cater to diverse audiences and societal needs. With a strong foundation in front-end development, I focus on creating seamless, responsive experiences that engage users and drive results. I'm always exploring new tools and techniques to enhance my skills and stay ahead of the curve in the ever-evolving tech landscape. Whether it’s building dynamic web applications or analyzing user behavior, I’m committed to creating solutions that merge the power of technology with a deep understanding of people.
        </p>
      </div>

      
    </div>
  );
}



