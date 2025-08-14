import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold tracking-wide">MyPortfolio</h1>

        {/* Navigation Menu */}
        <ul className="flex space-x-6 list-none">
          <li>
            <Link
              to="/"
              className="px-4 py-2 rounded-md text-gray-300 hover:bg-blue-500 hover:text-white transition-colors duration-300 block"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="px-4 py-2 rounded-md text-gray-300 hover:bg-blue-500 hover:text-white transition-colors duration-300 block"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/education"
              className="px-4 py-2 rounded-md text-gray-300 hover:bg-blue-500 hover:text-white transition-colors duration-300 block"
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="px-4 py-2 rounded-md text-gray-300 hover:bg-blue-500 hover:text-white transition-colors duration-300 block"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="px-4 py-2 rounded-md text-gray-300 hover:bg-blue-500 hover:text-white transition-colors duration-300 block"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
