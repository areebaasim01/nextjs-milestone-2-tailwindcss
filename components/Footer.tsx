import Image from 'next/image'


export default function Footer() {
  return (
    <div >

<div className="bg-whitesmoke">
  {/* Social Media Links */}
  <div className="social-media flex justify-center items-center space-x-6 py-4 "> 
    <a
      href="https://www.instagram.com/reebeow_drops"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
    >
      <Image
        src="/instaa.png"
        alt="Instagram"
        width={50}
        height={50}
        className="hover:scale-110 transition-transform"
      />
    </a>
    <a
      href="https://www.facebook.com/angel.sheeza.35/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
    >
      <Image
        src="/facebook.png"
        alt="Facebook"
        width={50}
        height={50}
        className="hover:scale-110 transition-transform"
      />
    </a>
    <a
      href="https://www.linkedin.com/in/areeba-ansari-387355222/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <Image
        src="/linkdin.png"
        alt="LinkedIn"
        width={38}
        height={40}
        className="hover:scale-110 transition-transform"
      />
    </a>
  </div>
</div>

      {/* Divider */}
      <div className="border-t border-gray-700 "></div>

      {/* Copyright Section */}
      <footer className="text-center bg-[#1a202c] text-white py-3">
        <p>&copy; {new Date().getFullYear()} Areeba. All rights reserved.</p>
      </footer>
    </div>
  );
}

