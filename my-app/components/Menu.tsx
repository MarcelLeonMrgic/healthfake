"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Menu = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="py-4 border-b-4 border-black px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold">HealthFake</Link>

        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="md:hidden p-2"
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        <ul className={`md:flex md:items-center md:gap-6 ${open ? 'flex' : 'hidden'} flex-col md:flex-row gap-2`}>
          <li>
            <Link href="/about" className="block py-2 md:py-0">About Mrgic</Link>
          </li>
          <li>
            <Link href="/login" className="block py-2 md:py-0 md:px-4 border-4">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Menu