import React from 'react'
import Image from 'next/image'
import Logo from "../assets/Logo.png";
import Link from 'next/link';

const Navbar = () => {
    return (
        <header className='absolute top-0 left-0 right-0 py-3'>
            <div className="container mx-auto px-[15px]">
                <nav className='flex items-center'>
                    <div className="nav-logo">
                        <a href="/">
                            <Image
                                src={Logo}
                                alt='FitIn Logo'
                            />
                        </a>
                    </div>
                    <div className="flex items-center navbar-collapsed flex-grow-1">
                        <div className='mx-auto p-[10px] flex backdrop-blur-3xl items-center rounded-full'>
                            <ul className='flex'>
                                <li><Link className='nav-links py-[21px] hover:text-primary px-[20px]' href="">Home</Link></li>
                                <li><Link className='nav-links py-[21px] px-[20px]' href="">About Us</Link></li>
                                <li><Link className='nav-links py-[21px] px-[20px]' href="">Features</Link></li>
                                <li><Link className='nav-links py-[21px] px-[20px]' href="">WorkOuts</Link></li>
                                <li><Link className='nav-links py-[21px] px-[20px]' href="">Trainers</Link></li>
                                <li><Link className='nav-links py-[21px] px-[20px]' href="">Testimonials</Link></li>
                            </ul>
                            <div className="nav-btn">
                                <Link href=''>Search</Link>
                                <Link href=''>Cart</Link>
                            </div>
                        </div>
                        <div className="auth-btn">
                            <Link href="">Login/Create Account</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
