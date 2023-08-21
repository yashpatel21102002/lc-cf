import React, { useState } from 'react';
import { FiHome, FiBook, FiMail, FiGithub, FiFileText, FiInfo, FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            <a href="/">Your Logo</a>
          </div>
          <div className="lg:hidden">
            <button
              onClick={toggleNavbar}
              className="text-white focus:outline-none focus:text-white"
            >
              <FiMenu className="h-6 w-6" />
            </button>
          </div>
          <div className={`lg:flex ${isOpen ? 'block' : 'hidden'}`}>
            <ul className="lg:flex space-x-4 mt-4 lg:mt-0">
              <li>
                <a
                  href="/"
                  className="flex items-center hover:text-indigo-500 transition duration-300"
                >
                  <FiHome className="mr-2" /> Home
                </a>
              </li>
              <li>
                <a
                  href="/leetcode"
                  className="flex items-center hover:text-indigo-500 transition duration-300"
                >
                  <FiGithub className="mr-2" /> LeetCode
                </a>
              </li>
              <li>
                <a
                  href="/codeforces"
                  className="flex items-center hover:text-indigo-500 transition duration-300"
                >
                  <FiGithub className="mr-2" /> Codeforces
                </a>
              </li>
              <li>
                <a
                  href="/codechef"
                  className="flex items-center hover:text-indigo-500 transition duration-300"
                >
                  <FiGithub className="mr-2" /> CodeChef
                </a>
              </li>
              <li>
                <a
                  href="/other"
                  className="flex items-center hover:text-indigo-500 transition duration-300"
                >
                  <FiFileText className="mr-2" /> Other
                </a>
              </li>
              <li>
                <a
                  href="/blogs"
                  className="flex items-center hover:text-indigo-500 transition duration-300"
                >
                  <FiBook className="mr-2" /> Blogs
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="flex items-center hover:text-indigo-500 transition duration-300"
                >
                  <FiInfo className="mr-2" /> About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="flex items-center hover:text-indigo-500 transition duration-300"
                >
                  <FiMail className="mr-2" /> Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
