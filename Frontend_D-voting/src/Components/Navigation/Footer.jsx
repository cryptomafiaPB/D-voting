import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import icons from react-icons

function Footer() {
  return (
    <footer className="bg-indigo-600 shadow-lg justify-between">
      <div className="container mx-auto px-4 py-6 flex flex-col items-start md:items-center">
        <div className="text-white font-bold text-2xl md:text-2xl mb-4 text-left md:text-center hover:text-black transition duration-300">
          D-Voting
        </div>

        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-left md:text-center w-full md:w-auto">
          <li className="w-full md:w-auto">
            <Link
              to="/"
              className="text-white hover:text-black transition duration-300"
            >
              Home
            </Link>
          </li>
          <li className="w-full md:w-auto">
            <Link
              to="/register-voter"
              className="text-white hover:text-black transition duration-300"
            >
              Register Voter
            </Link>
          </li>
          <li className="w-full md:w-auto">
            <Link
              to="/register-candidate"
              className="text-white hover:text-black transition duration-300"
            >
              Register Candidate
            </Link>
          </li>
          <li className="w-full md:w-auto">
            <Link
              to="/get-voter"
              className="text-white hover:text-black transition duration-300"
            >
              Voter List
            </Link>
          </li>
          <li className="w-full md:w-auto">
            <Link
              to="/get-candidate"
              className="text-white hover:text-black transition duration-300"
            >
              Candidate List
            </Link>
          </li>
          <li className="w-full md:w-auto">
            <Link
              to="/voting"
              className="text-white hover:text-black transition duration-300"
            >
              Voting
            </Link>
          </li>
          <li className="w-full md:w-auto">
            <Link
              to="/login-election-commision"
              className="text-white hover:text-black transition duration-300"
            >
              Election Commission
            </Link>
          </li>
        </ul>

        {/* Social Media Icons Section */}
        <div className="flex space-x-6 mt-4">
          <a
            href="https://github.com/swappy-sutar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-black transition duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.instagram.com/swappy_sutar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-black transition duration-300"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/swapnil-sutar-2948971b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-black transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        <div className="text-white text-sm mt-6 flex flex-col items-center md:flex-row justify-between w-full md:w-auto">
          <div className="mb-2 md:mb-0">
            <a
              href="https://er-swappy.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition duration-300 text-lg"
            >
              Created By Er.Swappy❤️
            </a>
          </div>
          <div className="text-sm">
            © {new Date().getFullYear()} D-Voting. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
