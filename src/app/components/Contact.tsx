import React from 'react';

const Contact = () => {
  return (
    <div>
      <div id="contact" className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-16">
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-500 text-transparent bg-clip-text text-center">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-300 mt-4 max-w-3xl text-center">
          We’re here to help! Send us a message, and we’ll get in touch with you shortly.
        </p>
        <form className="mt-12 w-full max-w-3xl bg-gray-900/50 border border-purple-500/30 rounded-2xl p-10 shadow-xl backdrop-blur-lg" 
          style={{ opacity: 1, transform: "none" }}>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <input type="text" required className="w-full p-4 bg-gray-800/70 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md" placeholder="Your Name" name="name" defaultValue="" />
            </div>

            <div className="relative">
              <input type="email" required className="w-full p-4 bg-gray-800/70 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md" placeholder="Your Email" name="email" defaultValue="" />
            </div>
          </div>

          <div className="relative mt-6">
            <input type="text" required className="w-full p-4 bg-gray-800/70 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md" placeholder="Subject" name="subject" defaultValue="" />
          </div>

          <div className="relative mt-6">
            <textarea name="message" required className="w-full p-4 bg-gray-800/70 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 h-36 resize-none shadow-md" placeholder="Your Message"></textarea>
          </div>

          <button type="submit" className="mt-6 w-full bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white font-semibold py-4 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl">
            Send Message
          </button>

        </form>
      </div>
    </div>
  );
}

export default Contact;
