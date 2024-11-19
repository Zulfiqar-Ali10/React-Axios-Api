
import { useState } from 'react'
import { Menu, X, ChevronDown, } from 'lucide-react'
import { Link } from 'react-router-dom'


export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="#" className="flex items-center py-4 px-2">
                <svg className="h-8 w-8 mr-2 text-blue-400" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
                </svg>
                <span className="font-semibold text-gray-500 text-lg">NavbarLogo</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/" className="py-4 px-2 text-blue-500 border-b-4 border-blue-500 font-semibold">Home</Link>
              <Link to="/services" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Services</Link>
              <div className="relative group">
                <button className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300 inline-flex items-center">
                  <span>Products</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-50">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">Product 1</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">Product 2</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">Product 3</a>
                </div>
              </div>
              <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">About</a>
              <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Contact</a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3 ">
            <a href="#" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-blue-500 hover:text-white transition duration-300">Log In</a>
            <a href="#" className="py-2 px-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-400 transition duration-300">Sign Up</a>
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6 text-gray-500" /> : <Menu className="h-6 w-6 text-gray-500" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link to="/" className="block py-2 px-4 text-sm hover:bg-blue-500 hover:text-white transition duration-300">Home</Link>
          <Link to="/services" className="block py-2 px-4 text-sm hover:bg-blue-500 hover:text-white transition duration-300">Services</Link>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-blue-500 hover:text-white transition duration-300">Products</a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-blue-500 hover:text-white transition duration-300">About</a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-blue-500 hover:text-white transition duration-300">Contact</a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-blue-500 hover:text-white transition duration-300">Log In</a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-blue-500 hover:text-white transition duration-300">Sign Up</a>
        </div>
      )}
    </nav>
  )
}