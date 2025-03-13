import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">About Us</h3>
            <p className="text-sm text-gray-300">
              We are a company dedicated to providing the best service to our customers. Our mission is to make your life easier.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-sm text-gray-300 hover:text-yellow-400 transition duration-300">Home</a></li>
              <li><a href="/about" className="text-sm text-gray-300 hover:text-yellow-400 transition duration-300">About</a></li>
              <li><a href="/services" className="text-sm text-gray-300 hover:text-yellow-400 transition duration-300">Services</a></li>
              <li><a href="/contact" className="text-sm text-gray-300 hover:text-yellow-400 transition duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Contact Us</h3>
            <p className="text-sm text-gray-300">Email: info@example.com</p>
            <p className="text-sm text-gray-300">Phone: +123 456 7890</p>
            <p className="text-sm text-gray-300">Address: 123 Main St, City, Country</p>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition duration-300">
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition duration-300">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition duration-300">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition duration-300">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;