import React from 'react'
import Link from 'next/link'
const Menu = () => {
  return (
    <nav className='py-4 border-b-4 border-black'>
        <ul className='flex justify-between'>
            <li><Link href="/">HealthFake</Link></li>
            <div className='flex'>
            <li><Link href="/about" className=''>About Mrgic</Link></li>
            <li><Link href="/login" className='py-4 px-8 border-4'>Register</Link></li>
            </div>
            
        </ul>
    </nav>
  )
}

export default Menu