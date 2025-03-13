import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form Data Submitted:", formData);

    // Show success toast notification
    toast.success("Thank you for contacting us! We'll get back to you soon.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    // Reset form after submission
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
    }, 100);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
      {/* Outer Container */}
      <div className="flex flex-col md:flex-row bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-4xl w-full mx-auto space-y-6 md:space-y-0 md:space-x-8 transition-transform hover:scale-101">
        {/* Left Side: Image (Hidden on small screens) */}
        <div className="flex-shrink-0 hidden md:block">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-illustration-download-in-svg-png-gif-file-formats--call-logo-communication-phone-nallow-set-2-pack-people-illustrations-7050145.png?f=webp" // Replace with your image URL
            alt="Contact Us"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
        {/* Right Side: Form */}
        <div className="flex-grow space-y-6 w-full">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-green-600 transition-colors hover:text-green-700">
            Contact Us
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm transition-all"
              />
            </div>
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm transition-all"
              />
            </div>
            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm transition-all"
              ></textarea>
            </div>
            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full md:w-[200px] bg-green-600 text-white py-2 px-4 rounded-md font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
}

export default ContactForm;