"use client";

import { useState, useEffect } from "react";
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/logo.jpg"
              alt="logo"
              width={40}
              height={40}
              className="rounded-md object-cover"
              priority
            />
            <span className={`text-xl font-bold hidden sm:block ${
              scrolled ? "text-gray-900" : "text-white"}`}
            >
              SDT Develop
            </span>
          </Link>

          {/* Menu desktop */}
          <div className="hidden md:flex space-x-6">
            {["servicios", "demo", "precios", "contact"].map((item) => (
              <Link 
                key={item}
                href={`#${item}`}
                className={`transition ${
                  scrolled 
                    ? "text-gray-700 hover:text-blue-500"
                    :"text-[#cacaca] hover:text-gray-300"
                  }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </div>

          {/* Boton hamburguesa */}
          <button
            onClick={()=> setIsOpen(!isOpen)}
            className="md:hidden text-[#cacaca] hover:opacity-80 transition"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu movil */}
      {isOpen && (
        <div
          className={`md:hidden px-6 py-4 space-y-4 transition-all duration-300 ${
            scrolled ? "bg-white" : "bg-black/70 backdrop-blur-md"
          }`}          
        >
          {["services", "demo", "pricing", "contact"].map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              className={`block text-lg ${scrolled ? "text-gray-900" : "text-white"}`}
              onClick={() => setIsOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
