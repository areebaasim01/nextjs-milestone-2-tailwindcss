import Navbar from '@/app/layout'; // Assuming Navbar is a separate component
import Footer from '@/app/layout'; // Assuming Footer is a separate component
import Image from "next/image";



export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen">
      

      {/* Decorative Image */}
      <div className="flex justify-center py-8">
        <Image
          src="/contact.jpeg"
          alt="Decorative Image"
          width={1000}
          height={80}
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Contact Section */}
      <div className="max-w-3xl mx-auto my-10 bg-white p-8 rounded-lg shadow-lg">
  <h1 className="text-4xl font-bold text-black text-center mb-6 font-sans">
    Get in Touch
  </h1>
  <p className="text-lg leading-relaxed text-black text-justify mb-8">
    Have questions, feedback, or just want to get in touch? We’d love to hear from you! Reach out to us anytime—we’re here to assist with anything you need. Whether it’s inquiries about our services, collaborations, or general support, we’re just a message away. Connect with us through the form below or via our social media channels. Let’s make great things happen together!
  </p>
  <div className="text-lg text-black leading-relaxed">
    <p className="mb-4">
      <strong>Email: </strong>
      <a
        href="mailto:ansarirukhsana841@gmail.com"
        className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
      >
        ansarirukhsana841@gmail.com
      </a>
    </p>
    <p>
      <strong>Phone: </strong>
      <span>03175897934</span>
    </p>
  </div>
</div>


    
    </div>
  );
}
