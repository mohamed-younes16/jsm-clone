import React from 'react'
import jsm from "@/public/jsm-logo.svg"
import Image from 'next/image'
import Link from 'next/link'
const NavBar = () => {

  return (
    <nav className='fixed z-20 w-full h-20  top-0  border-b border-white  backdrop-blur-md'>
        <div className="flex mx-auto flex-wrap h-full items-center justify-between w-2/3 py-2">
            
            <Link href={`/`} className="logo">
                <Image src={jsm} height={60} width={60} alt='logo '   />
            </Link>

            <div className="flex gap-10 text-lg flex-wrap max-sm:hidden items-center">

                <a target='_blank' href="https://www.jsmastery.pro/ultimate-next13-course" 
                className="font-semibold t text-white text-gradient_blue-purple  ">
                  Next.js 13.4 Course
                  </a>

                <a  target='_blank'  href="https://www.jsmastery.pro/full-stack-web-development-bootcamp" 
                className="font-semibold ">
                  Masterclass
                </a>

            </div>

        </div>

    </nav>
  )
}

export default NavBar