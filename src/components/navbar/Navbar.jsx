'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '@styles/navbar/Navbar.css';

import logoColor from '@public/assets/images/navbar/trafy-white-logo.png';

import hamburgerIcon from '@public/assets/images/navbar/hamburger-white.svg';
import closeIcon from '@public/assets/images/navbar/close-white.svg';
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigation = (targetPath) => {
    setMenuOpen(false);
    document.body.classList.remove("overflow");
  
    if (targetPath.startsWith("#")) {
      const element = document.querySelector(targetPath);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(targetPath); // Use Next.js navigation
    }
  };

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container" ref={menuRef}>
        <Link href='/' className="navbar-logo">
          <Image src={logoColor} alt="trafy logo" />
        </Link>

        <div className="navbar-contents">
          <div className="navbar-research" onClick={() => handleNavigation('/research/evolve-intelligence-transmutable-resilient-ai')}>
            Research
          </div>
          {/* <div className="navbar-resources" onClick={() => handleNavigation('https://blog.trafy.ai/')}>
            Resources
          </div> */}
          <div className="navbar-community" onClick={() => handleNavigation('/')}>
            Community
          </div>
          <Link href='http://app.trafy.ai/' className="navbar-button">
            Signup
            {/* <Image src={arrow} alt="chat-icon" width={16} height={16} /> */}
          </Link>
        </div>

        <div className="navbar-contents-menu">
          <Image src={menuOpen ? closeIcon : hamburgerIcon} alt={menuOpen ? 'close-icon' : 'hamburger-icon'}
            width={24} height={24} onClick={() => setMenuOpen(!menuOpen)}/>
        </div>
      </div>
      <div className={`navbar-contents-drop ${menuOpen ? 'open' : ''}`}>
        <div className="navbar-contents-mobile">
          <div className="navbar-research" onClick={() => handleNavigation('/research/evolve-intelligence-transmutable-resilient-ai')}>
            Research
          </div>
          {/* <div className="navbar-resources" onClick={() => handleNavigation('https://blog.trafy.ai/')}>
            Resources
          </div> */}
          <div className="navbar-community" onClick={() => handleNavigation('/')}>
            Community
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
