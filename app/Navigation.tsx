"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const scrollHideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle scroll for both mobile nav and desktop menu visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setShowMobileNav(false);
        setShowMenu(false);
      } else {
        // Scrolling up
        setShowMobileNav(true);
        setShowMenu(true);

        // Hide desktop menu after 2 seconds of no scrolling
        if (scrollHideTimeoutRef.current) {
          clearTimeout(scrollHideTimeoutRef.current);
        }
        scrollHideTimeoutRef.current = setTimeout(() => {
          setShowMenu(false);
        }, 2000);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
      if (scrollHideTimeoutRef.current) {
        clearTimeout(scrollHideTimeoutRef.current);
      }
    };
  }, [lastScrollY]);

  return (
    <>
      {/* Mobile Logo */}
      <motion.a
        href="/"
        className="mobile-logo"
        aria-label="Home"
        initial={{ y: 0 }}
        animate={{ y: showMobileNav ? 0 : -80 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <img src="/favicon.png" alt="Logo" />
      </motion.a>

      {/* Mobile Menu Button */}
      <motion.button
        className="mobile-menu-button"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        aria-label="Toggle menu"
        initial={{ y: 0 }}
        animate={{ y: showMobileNav ? 0 : -80 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <img src="/menu.png" alt="Menu" />
      </motion.button>

      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <motion.div
          className="mobile-menu-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setShowMobileMenu(false)}
        >
          <motion.div
            className="mobile-menu-content"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="mobile-menu-items">
              <li><a href="/" onClick={() => setShowMobileMenu(false)}>Home</a></li>
              <li>
                <a
                  href="/#projects"
                  onClick={(e) => {
                    if (window.location.pathname === '/') {
                      e.preventDefault();
                      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                    }
                    setShowMobileMenu(false);
                  }}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/home/Sheyda-Rashidi-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowMobileMenu(false)}
                >
                  CV
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      )}

      {/* Invisible hover zone at the very top */}
      <div
        className="menu-hover-zone"
        onMouseEnter={() => {
          setShowMenu(true);
          if (hideTimeoutRef.current) {
            clearTimeout(hideTimeoutRef.current);
          }
        }}
      />

      {/* Navigation Menu (Desktop) */}
      <motion.nav
        className="navigation-menu"
        initial={{ y: -40 }}
        animate={{ y: showMenu ? 0 : -40 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onMouseEnter={() => {
          setShowMenu(true);
          if (hideTimeoutRef.current) {
            clearTimeout(hideTimeoutRef.current);
          }
        }}
        onMouseLeave={() => {
          hideTimeoutRef.current = setTimeout(() => {
            setShowMenu(false);
          }, 500);
        }}
      >
        <div className="menu-container">
          <ul className="menu-items">
            <li><a href="/">Home</a></li>
            <li>
              <a
                href="/#projects"
                onClick={(e) => {
                  if (window.location.pathname === '/') {
                    e.preventDefault();
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/home/Sheyda-Rashidi-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                CV
              </a>
            </li>
          </ul>
        </div>
      </motion.nav>
    </>
  );
}
