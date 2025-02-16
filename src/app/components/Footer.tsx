import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaGithub, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 py-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-white">Agentia World</h2>
            <p className="mt-4 text-gray-400">
              Empowering AI-driven innovations for a smarter future.
            </p>
            <button className="mt-6 flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-5 py-2.5 rounded-xl shadow-lg shadow-purple-500/30 transition-all">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="text-lg"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M81 21.499c-12.81 0-23 10.192-23 23.002 0 12.81 10.19 23 23 23s23.002-10.19 23.002-23S93.81 21.499 81 21.499zm350 0c-12.81 0-23.002 10.192-23.002 23.002 0 12.81 10.192 23 23.002 23 12.81 0 23-10.19 23-23s-10.19-23.002-23-23.002zM110.18 73.212a41.25 41.25 0 0 1-15.11 9.781l28.666 45.867 14.983-9.988zm291.64 0l-28.539 45.66 14.983 9.988 28.666-45.867a41.25 41.25 0 0 1-15.11-9.781zm-242.966 53.87l-36.143 24.095 6.652 19.955c9.215-12.422 23.339-21.987 39.614-28.912 1.172-.5 2.37-.973 3.568-1.448zm194.292 0l-13.69 13.69c1.197.475 2.395.949 3.567 1.448 16.275 6.925 30.399 16.49 39.614 28.912l6.652-19.955zM256 144.5c-29 0-58.021 4.939-79.977 14.281-21.898 9.319-35.908 22.38-39.164 38.364L106.28 426.5h299.442l-30.58-229.355c-3.256-15.984-17.266-29.045-39.164-38.364C314.02 149.44 285 144.501 256 144.501zm-64 58c31.373 0 57 25.627 57 57s-25.627 57-57 57-57-25.627-57-57 25.627-57 57-57zm128 0c31.373 0 57 25.627 57 57s-25.627 57-57 57-57-25.627-57-57 25.627-57 57-57z"></path>
              </svg>
              AI
            </button>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-3 text-gray-400">
              <li>
                <Link href={"#/"} className="hover:text-purple-400 transition-all">
                  Home
                </Link>
              </li>
              <li>
                <Link href={"#/"} className="hover:text-purple-400 transition-all">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href={"#/"} className="hover:text-purple-400 transition-all">
                  Technologies
                </Link>
              </li>
              <li>
                <Link href={"#/"} className="hover:text-purple-400 transition-all">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* <h3 className="text-xl font-semibold text-white mt-8">Follow Us</h3> */}
        <div className="flex gap-2 mt-5">
         <Link href="https://www.instagram.com" target="_blank">
            <FaInstagram className="text-gray-400 hover:text-purple-400 text-2xl transition-all" />
          </Link>
          <Link href="https://www.linkedin.com" target="_blank">
            <FaLinkedin className="text-gray-400 hover:text-purple-400 text-2xl transition-all" />
          </Link>
          <Link href="https://github.com" target="_blank">
            <FaGithub className="text-gray-400 hover:text-purple-400 text-2xl transition-all" />
          </Link>
          <Link href="https://www.tiktok.com" target="_blank">
            <FaTiktok className="text-gray-400 hover:text-purple-400 text-2xl transition-all" />
          </Link> 
        </div>
        </div>
        <div className="flex border-t border-gray-700 justify-center items-center text-gray-400 mt-6">
          <p>�� 2023 Agentia World. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
