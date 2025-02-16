"use client"; // Mark this component as a Client Component
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div>
     <nav className="nav-gradient bg-purple-200/50 fixed w-full z-50 border-b border-gray-800/20 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left Side: Logo and "Agentia World" */}
            <div className="flex items-center">
              <Link className="flex items-center space-x-3 group cursor-pointer" href="/">
                <div className="w-10 h-10 relative">
                  <div className="w-full h-full text-purple-400" style={{ transform: 'rotate(-5.65413deg)' }}>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      className="w-full h-full"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M81 21.499c-12.81 0-23 10.192-23 23.002 0 12.81 10.19 23 23 23s23.002-10.19 23.002-23S93.81 21.499 81 21.499zm350 0c-12.81 0-23.002 10.192-23.002 23.002 0 12.81 10.192 23 23.002 23 12.81 0 23-10.19 23-23s-10.19-23.002-23-23.002zM110.18 73.212a41.25 41.25 0 0 1-15.11 9.781l28.666 45.867 14.983-9.988zm291.64 0l-28.539 45.66 14.983 9.988 28.666-45.867a41.25 41.25 0 0 1-15.11-9.781zm-242.966 53.87l-36.143 24.095 6.652 19.955c9.215-12.422 23.339-21.987 39.614-28.912 1.172-.5 2.37-.973 3.568-1.448zm194.292 0l-13.69 13.69c1.197.475 2.395.949 3.567 1.448 16.275 6.925 30.399 16.49 39.614 28.912l6.652-19.955zM256 144.5c-29 0-58.021 4.939-79.977 14.281-21.898 9.319-35.908 22.38-39.164 38.364L106.28 426.5h299.442l-30.58-229.355c-3.256-15.984-17.266-29.045-39.164-38.364C314.02 149.44 285 144.501 256 144.501zm-64 58c31.373 0 57 25.627 57 57s-25.627 57-57 57-57-25.627-57-57 25.627-57 57-57zm128 0c31.373 0 57 25.627 57 57s-25.627 57-57 57-57-25.627-57-57 25.627-57 57-57zm-128.549 16.023c-22.754 0-41.547 18.366-41.547 40.977 0 22.611 18.793 40.977 41.547 40.977 22.754 0 41.549-18.366 41.549-40.977 0-22.611-18.795-40.977-41.549-40.977zm128 0c-22.754 0-41.547 18.366-41.547 40.977 0 22.611 18.793 40.977 41.547 40.977 22.754 0 41.549-18.366 41.549-40.977 0-22.611-18.795-40.977-41.549-40.977zm-128 17.998c13.198 0 23.549 10.269 23.549 22.979 0 12.71-10.35 22.978-23.549 22.978-13.198 0-23.549-10.268-23.549-22.978s10.351-22.979 23.55-22.979zm128 0c13.198 0 23.549 10.269 23.549 22.979 0 12.71-10.35 22.978-23.549 22.978-13.198 0-23.549-10.268-23.549-22.978s10.351-22.979 23.55-22.979zM208 330.501h96v18h-96zm-16 32h128v18H192zm-16 32h160v18H176zm-103 50v46h46v-46zm64 0v46h46v-46zm64 0v46h46v-46zm64 0v46h46v-46zm64 0v46h46v-46zm64 0v46h46v-46z"></path>
                    </svg>
                  </div>
                </div>
                <span className="text-white text-2xl font-bold tracking-tight">
                  Agentia
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mt-1">World</span>
                </span>
              </Link>
            </div>

            {/* Right Side: Navigation Links (Visible on larger screens) */}
            <div className="hidden md:flex lg:flex xl:flex items-center space-x-8">
              <Link className='nav-link text-gray-300 hover:text-white transition-color flex items-center space-x-1 text-sm font-medium' href={"/technology"}>
                <span>Technology</span>
              </Link>
              <Link className='nav-link text-gray-300 hover:text-white transition-color flex items-center space-x-1 text-sm font-medium' href={"/AI-agents"}>
                <span>AI-agents</span>
              </Link>
             
              <Link className='nav-link text-gray-300 hover:text-white transition-color flex items-center space-x-1 text-sm font-medium' href={"/#contact"}>
                <span>Contact</span>
              </Link>
              <Link href={"/"}>
              <button className='glow-button px-6 py-2.5 rounded-full text-white font-medium text-sm transition-all'>Launch Console</button>
              </Link>
            </div>

            {/* Mobile Menu Button (Visible on smaller screens) */}
            <div className='md:hidden lg:hidden xl:hidden'>
              <button
                className="text-gray-400 hover:text-white focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className='sr-only'>Open main menu</span>
                <div className="transform-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-menu block h-6 w-6"
                  >
                    <line x1="4" x2="20" y1="12" y2="12"></line>
                    <line x1="4" x2="20" y1="6" y2="6"></line>
                    <line x1="4" x2="20" y1="18" y2="18"></line>
                  </svg>
                </div>
              </button>
            </div>
          </div>

         
          {isMobileMenuOpen && (
            <div className="md:hidden lg:hidden xl:hidden">
              <div className="flex flex-col space-y-4 pt-4 pb-8">
                <Link className='nav-link text-gray-300 hover:text-white transition-color text-sm font-medium' href={"/technology"}>
                  <span>Technology</span>
                </Link>
                <Link className='nav-link text-gray-300 hover:text-white transition-color text-sm font-medium' href={"/AI-agents"}>
                  <span>AI-agents</span>
                </Link>
                
                <Link className='nav-link text-gray-300 hover:text-white transition-color text-sm font-medium' href={"/#contact"}>
                  <span>Contact</span>
                </Link>
                <Link href="/">
                  <button className='glow-button px-6 py-2.5 rounded-full text-white font-medium text-sm transition-all'>Launch Console</button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}