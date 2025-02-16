import React from 'react';

const Payment = () => {
  return (
    <div>
      <div className="min-h-screen bg-black text-white font-sans flex flex-col items-center justify-center px-6 py-16">
        <header className="text-center mb-12" style={{ opacity: 1, transform: 'none' }}>
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-600 drop-shadow-lg pb-4">
            Agentia World Pricing
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan for your AI-powered journey.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
          {/* Free Plan */}
          <div className="relative p-10  rounded-2xl shadow-xl border border-purple-500/30 bg-gray-900/40 backdrop-blur-xl overflow-hidden transform hover:scale-105 transition duration-500" style={{ opacity: 1, transform: 'none' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/10 blur-3xl"></div>
            <h2 className="relative text-3xl font-bold text-purple-300">Free</h2>
            <p className="relative mt-2 text-gray-400">Get started with basic AI features</p>
            <p className="relative mt-4 text-5xl font-bold text-white">
              $0
              <span className="text-lg text-gray-400">/month</span>
            </p>
            <ul className="relative mt-6 space-y-3 text-gray-300">
              <li>✓ Access to Basic AI Agent</li>
              <li>✓ Limited Queries</li>
              <li>✓ Community Support</li>
              <li> ✓ Weekly Analytics</li>
              <li></li>
            </ul>
            <button className="relative mt-6 w-full py-3 text-lg font-semibold rounded-lg shadow-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600 transition-all" >
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="relative bg-gradient-to-b from-purple-900/50 to-blue-900/30 border-2 border-purple-500 p-10 rounded-2xl  shadow-xl border border-purple-500/30 bg-gray-900/40 backdrop-blur-xl overflow-hidden transform hover:scale-105 transition duration-500" style={{ opacity: 1, transform: 'none' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/10 blur-3xl"></div>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" color="yellow" style={{ color: 'yellow' }} height="25" width="25" xmlns="http://www.w3.org/2000/svg">
              <path d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z"></path>
            </svg>
            <h2 className="relative text-3xl font-bold text-purple-300">Pro</h2>
            <p className="relative mt-2 text-gray-400">Unlock advanced AI capabilities.</p>
            <p className="relative mt-4 text-5xl font-bold text-white">
              $999
              <span className="text-lg text-gray-400">/month</span>
            </p>
            <ul className="relative mt-6 space-y-3 text-gray-300">
              <li>✓ Advanced AI Agent</li>
              <li>✓ Unlimited Queries</li>
              <li>✓ Priority Support</li>
              <li>✓ Custom AI Models</li>
            </ul>
            <button className="relative mt-6 w-full py-3 text-lg font-semibold rounded-lg shadow-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600 transition-all"  style={{ transform: 'none' }}>
              Upgrade to Pro
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="relative p-10 rounded-2xl shadow-xl border border-purple-500/30 bg-gray-900/40 backdrop-blur-xl overflow-hidden transform hover:scale-105 transition duration-500" style={{ opacity: 1, transform: 'none' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/10 blur-3xl"></div>
            <h2 className="relative text-3xl font-bold text-purple-300">Enterprise</h2>
            <p className="relative mt-2 text-gray-400">Tailored solutions for businesses.</p>
            <p className="relative mt-4 text-5xl font-bold text-white">
              Custom
              <span className="text-lg text-gray-400"></span>
            </p>
            <ul className="relative mt-6 space-y-3 text-gray-300">
              <li>✓ Dedicated AI Agents</li>
              <li>✓ Custom Integrations</li>
              <li>✓ 24/7 Premium Support</li>
              <li>✓ Scalable Infrastructure</li>
            </ul>
            <button className="relative mt-6 w-full py-3 text-lg font-semibold rounded-lg shadow-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600 transition-all" >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;