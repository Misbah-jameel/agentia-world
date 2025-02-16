import React from 'react';

const NeoTechnologies = () => {
  return (
    <div>
      <div id="technology" className="min-h-screen flex flex-col items-center justify-start bg-black text-white px-6 py-32 md:py-40">
        <h2 className="text-4xl sm:text-5xl pb-10 md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-500 text-transparent bg-clip-text text-center mt-12 sm:mt-16">
          AI Solutions We Offer
        </h2>
        <p className="text-base sm:text-lg text-gray-300 mt-4 max-w-3xl text-center">
          Transforming industries with intelligent AI-driven solutions.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {/* Enterprise AI */}
          <div className="p-6 bg-gray-900/40 border border-purple-500/20 rounded-xl shadow-lg backdrop-blur-sm flex flex-col items-center text-center hover:bg-gray-800/50 transition-all duration-300">
            <svg className="w-16 h-16 text-purple-400 mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
            <h3 className="text-2xl font-semibold text-purple-300">Enterprise AI</h3>
            <p className="text-gray-300 mt-2">Custom AI agents designed for enterprise-scale operations and decision-making.</p>
          </div>

          {/* Neural Operations */}
          <div className="p-6 bg-gray-900/40 border border-purple-500/20 rounded-xl shadow-lg backdrop-blur-sm flex flex-col items-center text-center hover:bg-gray-800/50 transition-all duration-300">
            <svg className="w-16 h-16 text-purple-400 mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
              <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
            </svg>
            <h3 className="text-2xl font-semibold text-purple-300">Neural Operations</h3>
            <p className="text-gray-300 mt-2">Automated workflow optimization through distributed neural networks.</p>
          </div>

          {/* Secure Intelligence */}
          <div className="p-6 bg-gray-900/40 border border-purple-500/20 rounded-xl shadow-lg backdrop-blur-sm flex flex-col items-center text-center hover:bg-gray-800/50 transition-all duration-300">
            <svg className="w-16 h-16 text-purple-400 mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
            </svg>
            <h3 className="text-2xl font-semibold text-purple-300">Secure Intelligence</h3>
            <p className="text-gray-300 mt-2">Privacy-first AI solutions with military-grade security protocols.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeoTechnologies;
