import React from 'react'
import Link from 'next/link'
const Menu = () => {
  return (
    <nav>
        <ul className='flex justify-between'>
            <li><Link href="/">HealthFake</Link></li>
            <div className='flex'>
            <li><Link href="/about">About Mrgic</Link></li>
            <li><Link href="/login">Register</Link></li>
            </div>
            
        </ul>
    </nav>
  )
}

export default Menu