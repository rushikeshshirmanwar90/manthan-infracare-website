"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import logo from "@/public/logo-mini.png"
import Image from "next/image"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-800/95 backdrop-blur-sm shadow-lg h-[6rem] border-b border-amber-400/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between h-12">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                src={logo}
                alt="Logo"
                width={48}
                height={48}
                className="h-12 w-12 rounded-md hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="text-amber-300 hover:text-amber-400 font-medium transition-colors duration-300 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#projects" className="text-amber-300 hover:text-amber-400 font-medium transition-colors duration-300 relative group">
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#about" className="text-amber-300 hover:text-amber-400 font-medium transition-colors duration-300 relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#services" className="text-amber-300 hover:text-amber-400 font-medium transition-colors duration-300 relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#contact" className="text-amber-300 hover:text-amber-400 font-medium transition-colors duration-300 relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block flex-shrink-0">
            <Link
              href="#contact"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 text-slate-800 font-semibold hover:from-amber-300 hover:to-amber-400 hover:shadow-lg hover:shadow-amber-400/25 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-amber-300 hover:text-amber-400 flex-shrink-0 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 flex flex-col space-y-4 border-t border-amber-400/20 mt-4 bg-slate-800/95 backdrop-blur-sm rounded-lg">
            <Link
              href="/"
              className="text-amber-300 hover:text-amber-400 font-medium transition-colors duration-300 py-2 px-4 rounded-md hover:bg-slate-700/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#projects"
              className="text-amber-300 hover:text-amber-400 font-medium transition-colors duration-300 py-2 px-4 rounded-md hover:bg-slate-700/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#about"
              className="text-amber-300 hover:text-amber-400 font-medium transition-colors duration-300 py-2 px-4 rounded-md hover:bg-slate-700/50"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-amber-300 hover:text-amber-400 font-medium transition-colors duration-300 py-2 px-4 rounded-md hover:bg-slate-700/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#contact"
              className="text-amber-300 hover:text-amber-400 font-medium transition-colors duration-300 py-2 px-4 rounded-md hover:bg-slate-700/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 text-slate-800 font-semibold hover:from-amber-300 hover:to-amber-400 transition-all duration-300 inline-block w-fit mt-2 mx-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Navbar