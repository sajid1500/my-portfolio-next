// components/Footer.js
const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 text-white text-center">
      <div className="container mx-auto">
        <p>© {new Date().getFullYear()} Sajid Chowdhury. All rights reserved.</p>
        {/* Add social media links here */}
        <div className="mt-2">
          <a href="https://github.com/sajid1500" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-gray-300">GitHub</a>
          <a href="https://www.linkedin.com/in/sajid-chowdhury-dev/" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-gray-300">LinkedIn</a>
          {/* Add more social links as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;