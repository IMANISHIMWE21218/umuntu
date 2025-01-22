// Contact.jsx
import React, { useState } from 'react';
import FooterComponent from '../FooterComponent ';
import Model from '../Model';

const Contact = () => {
  const [showModel, setShowModel] = useState(false);

//   const handleOpenModel = () => {
//     console.log("Modal opened");
//     setShowModel(true);
//   };

  const handleCloseModel = () => {
    setShowModel(false);
  };

  return (
    <>
      <div className=" overflow-hidden mt-32 ">
        <div className="container px-6 md:px-12 mb-12">
          <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-md md:py-16 md:px-12 backdrop-blur-[30px] border border-gray-300">
          <div className="flex flex-wrap w-full"> 
              {/* Contact Form */}
              <div className="w-full lg:w-6/12 mb-12 lg:mb-0 px-4">
                <form className="space-y-8">
                  {/* Name Input */}
                  <div className="relative">
                    <label htmlFor="nameInput" className="block text-base font-bold mb-2">Name</label>
                    <input
                      type="text"
                      id="nameInput"
                      className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-md text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-brandPrimary focus:border-brandPrimary transition duration-200"
                      placeholder="Enter your name"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <label htmlFor="emailInput" className="block text-base font-bold mb-2">Email Address</label>
                    <input
                      type="email"
                      id="emailInput"
                      className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-md text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-brandPrimary focus:border-brandPrimary transition duration-200"
                      placeholder="Enter your email"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="relative">
                    <label htmlFor="messageInput" className="block text-base font-bold mb-2">Message</label>
                    <textarea
                      id="messageInput"
                      rows="4"
                      className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-md text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-brandPrimary focus:border-brandPrimary transition duration-200"
                      placeholder="Write your message"
                    ></textarea>
                  </div>

                  {/* Checkbox */}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="copyMessage"
                      className="h-4 w-4 border-gray-300 rounded focus:ring-brandPrimary focus:ring-2"
                    />
                    <label htmlFor="copyMessage" className="ml-2 text-sm text-gray-600 font-medium">
                      Send me a copy of this message
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="btn-primary w-full">
                    Send
                  </button>
                </form>
              </div>

              {/* Support Info */}
              <div className="w-full lg:w-6/12 px-4">
                <div className="space-y-6 p-10">
                  {/* Technical Support */}
                  <div className="flex items-start">
                    <div className="shrink-0 bg-brandPrimary p-1 rounded-md text-white w-6 h-6 flex items-center justify-center"></div>
                    <div className="ml-6">
                      <p className="font-bold">Technical Support</p>
                      <p>example@gmail.com</p>
                      <p>1-600-890-4567</p>
                    </div>
                  </div>
                  {/* Address */}
                  <div className="flex items-start">
                    <div className="shrink-0 bg-brandPrimary p-1 rounded-md text-white w-6 h-6 flex items-center justify-center"></div>
                    <div className="ml-6">
                      <p className="font-bold">Address</p>
                      <p>abcd, xyz</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div id="map" className="relative h-[420px] overflow-hidden bg-cover bg-[50%] bg-no-repeat mb-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15953.79916954695!2d29.632519299999995!3d-1.50072225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dc5a43629d20ad%3A0xcedbfcad56509e1b!2sRuhengeri!5e0!3m2!1sen!2srw!4v1736927440989!5m2!1sen!2srw"
            width="100%"
            height="540"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <FooterComponent />
      </div>

      {/* Model Popup */}
      {showModel && <Model onClose={handleCloseModel} />}
    </>
  );
};

export default Contact;
