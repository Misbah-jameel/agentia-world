import React from 'react';

const Page = () => {
  return (
    <div>
      <div id="technology" className="min-h-screen flex flex-col items-center justify-start bg-black text-white px-6 py-32 md:py-40">
        <h2 className="text-4xl sm:text-5xl pb-10 md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-500 text-transparent bg-clip-text text-center mt-12 sm:mt-16">
          Technologies We Use
        </h2>
        <p className="text-base sm:text-lg text-gray-300 mt-4 max-w-3xl text-center">
          Powering Agentia World with cutting-edge technologies for AI-driven excellence.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {/* Docker Card */}
          <div className="p-6 bg-gray-900/40 border border-purple-500/20 rounded-xl shadow-lg backdrop-blur-sm flex flex-col items-center text-center hover:bg-gray-800/50 transition-all duration-300">
            <svg className="w-16 h-16 text-purple-400 mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path d="M630.9 282.3c-5.6-2.7-13.4-3.8-23.3-3.3-4.6-4.6-10-8.9-15.8-12.8 2.7-3.9 5.5-8.2 8.1-12.6 14.2-24.6 19.1-47.5 13.6-68.1-6.5-23.7-26.5-39.5-58.3-46.7-5.9-1.4-11.7-2.2-17.3-2.8-4-19.7-13.8-37.1-29.1-51-21.8-20.5-50.2-31.3-83.9-31.3h-24.1l-5.3 7.3c-14.7 20.2-28.4 39.4-42.7 56.5H285.1l6.7-10.2c13.6-20.6 22.8-35.1 27.7-43.7l5.5-9.8H221.4c-8.5 0-15.3 6.9-15.3 15.3v281.4H37.9c-20.9 0-37.9 17-37.9 37.9v43.5h640v-43.5c0-15.1-9.2-29.6-23.1-34.6z"></path>
            </svg>
            <h3 className="text-2xl font-semibold text-purple-300">Docker</h3>
            <p className="text-gray-300 mt-2">Containerized deployment for seamless scalability.</p>
          </div>

          {/* FastAPI Card */}
          <div className="p-6 bg-gray-900/40 border border-purple-500/20 rounded-xl shadow-lg backdrop-blur-sm flex flex-col items-center text-center hover:bg-gray-800/50 transition-all duration-300">
            <svg className="w-16 h-16 text-purple-400 mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 .0387C5.3729.0384.0003 5.3931 0 11.9988c-.001 6.6066 5.372 11.9628 12 11.9625 6.628.0003 12.001-5.3559 12-11.9625-.0003-6.6057-5.3729-11.9604-12-11.96m-.829 5.4153h7.55l-7.5805 5.3284h5.1828L5.279 18.5436q2.9466-6.5444 5.892-13.0896"></path>
            </svg>
            <h3 className="text-2xl font-semibold text-purple-300">FastAPI</h3>
            <p className="text-gray-300 mt-2">High-performance backend with asynchronous capabilities.</p>
          </div>

          {/* Python Card */}
          <div className="p-6 bg-gray-900/40 border border-purple-500/20 rounded-xl shadow-lg backdrop-blur-sm flex flex-col items-center text-center hover:bg-gray-800/50 transition-all duration-300">
            <svg className="w-16 h-16 text-purple-400 mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4z"></path>
            </svg>
            <h3 className="text-2xl font-semibold text-purple-300">Python</h3>
            <p className="text-gray-300 mt-2">Powerful scripting and AI-driven solutions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
