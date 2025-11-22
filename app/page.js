"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./page.css";

const FULL_SPLASH_TEXT = "Hello Detective!";

export default function Home() {
  // Check if user has visited before (navigation from other pages)
  const [showSplash, setShowSplash] = useState(true);
  const [splashText, setSplashText] = useState("");
  const [isDesktop, setIsDesktop] = useState(true); // Start with desktop assumption
  const [isMounted, setIsMounted] = useState(true); // Start as mounted to show immediately
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [showButton, setShowButton] = useState(false);

  // Check session storage on mount to determine if splash should be shown
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasVisited = sessionStorage.getItem('hasVisitedHome') === 'true';
      if (hasVisited) {
        setShowSplash(false);
      } else {
        sessionStorage.setItem('hasVisitedHome', 'true');
      }
    }
  }, []);

  // Typewriter states for home page titles
  const [testimonyText, setTestimonyText] = useState("");
  const [accomplicesText, setAccomplicesText] = useState("");
  const [evidenceText, setEvidenceText] = useState("");
  const [contactText, setContactText] = useState("");
  const [showTestimonyCursor, setShowTestimonyCursor] = useState(true);
  const [showAccomplicesCursor, setShowAccomplicesCursor] = useState(true);
  const [showEvidenceCursor, setShowEvidenceCursor] = useState(true);
  const [showContactCursor, setShowContactCursor] = useState(true);
  const [buttonText1, setButtonText1] = useState("");
  const [buttonText2, setButtonText2] = useState("");
  const [showButtons, setShowButtons] = useState(false);

  // Detect desktop vs mobile - runs immediately on mount
  useEffect(() => {
    const checkSize = () => {
      if (typeof window !== "undefined") {
        setIsDesktop(window.innerWidth > 600);
      }
    };
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  // Manage body overflow and scroll position based on splash screen state
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (showSplash) {
        // When splash is active: allow scroll on desktop for zoom, prevent on mobile
        if (isDesktop) {
          document.body.style.overflow = "auto";
        } else {
          document.body.style.overflow = "hidden";
        }
        window.scrollTo(0, 0);
      } else {
        // When splash closes: enable scrolling and reset to top
        document.body.style.overflow = "auto";
        window.scrollTo(0, 0);
      }
    }

    return () => {
      if (typeof window !== "undefined") {
        document.body.style.overflow = "auto";
      }
    };
  }, [showSplash, isDesktop]);

  // Mobile: Auto-start typewriter after a short delay
  useEffect(() => {
    if (!isDesktop && showSplash && !showTypewriter) {
      const timer = setTimeout(() => {
        setShowTypewriter(true);
      }, 500); // Start after 500ms on mobile
      return () => clearTimeout(timer);
    }
  }, [isDesktop, showSplash, showTypewriter]);

  // Track scroll position to trigger typewriter when zoom completes (desktop only)
  useEffect(() => {
    if (!isDesktop) return;

    const handleScroll = () => {
      // When scroll reaches 600px (zoom complete), start typewriter
      if (window.scrollY >= 600 && !showTypewriter) {
        setShowTypewriter(true);
      }
      // Reset if user scrolls back up
      if (window.scrollY < 600 && showTypewriter) {
        setShowTypewriter(false);
        setShowButton(false);
        setSplashText("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDesktop, showTypewriter]);

  // Typewriter effect for "Hello Detective!" (both desktop and mobile)
  useEffect(() => {
    if (showTypewriter) {
      let i = 0;
      setSplashText("");

      const totalChars = FULL_SPLASH_TEXT.length;
      if (totalChars === 0) return;

      const duration = 1500; // 1.5 seconds for typing effect
      const intervalTime = duration / totalChars;

      const id = setInterval(() => {
        i += 1;
        const newText = FULL_SPLASH_TEXT.slice(0, i);
        setSplashText(newText);
        if (i >= totalChars) {
          clearInterval(id);
          // Show button after typing completes
          setTimeout(() => {
            setShowButton(true);
          }, 150); // 150ms delay after typing finishes (reduced from 300ms)
        }
      }, intervalTime);

      return () => clearInterval(id);
    }
  }, [showTypewriter]);

  // Typewriter effect for "Testimony" title - triggers when home page loads
  useEffect(() => {
    if (!showSplash) {
      const testimonyString = "Testimony";
      let i = 0;
      setTestimonyText("");
      setShowTestimonyCursor(true);

      const duration = 800; // 0.8 seconds
      const intervalTime = duration / testimonyString.length;

      const id = setInterval(() => {
        i += 1;
        setTestimonyText(testimonyString.slice(0, i));
        if (i >= testimonyString.length) {
          clearInterval(id);
          // Hide cursor after typing completes
          setTimeout(() => setShowTestimonyCursor(false), 300);
        }
      }, intervalTime);

      return () => clearInterval(id);
    }
  }, [showSplash]);

  // Typewriter effect for "Accomplices" title - triggers when user scrolls to section
  useEffect(() => {
    if (!showSplash && !accomplicesText) {
      const handleScroll = () => {
        // Check if accomplices section is in viewport
        const accomplicesSection = document.querySelector('.accomplices-section');
        if (accomplicesSection) {
          const rect = accomplicesSection.getBoundingClientRect();
          // Trigger when section enters viewport (top of section is visible)
          const isVisible = rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0;

          if (isVisible) {
            const accomplicesString = "Accomplices";
            let i = 0;
            setAccomplicesText("");
            setShowAccomplicesCursor(true);

            const duration = 1000; // 1 second
            const intervalTime = duration / accomplicesString.length;

            const id = setInterval(() => {
              i += 1;
              setAccomplicesText(accomplicesString.slice(0, i));
              if (i >= accomplicesString.length) {
                clearInterval(id);
                // Hide cursor after typing completes
                setTimeout(() => setShowAccomplicesCursor(false), 300);
              }
            }, intervalTime);

            window.removeEventListener("scroll", handleScroll);
          }
        }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      // Also check immediately in case section is already visible
      handleScroll();

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [showSplash, accomplicesText]);

  // Typewriter effect for "The Evidence" title - triggers when user scrolls to section
  useEffect(() => {
    if (!showSplash && !evidenceText) {
      const handleScroll = () => {
        // Check if evidence section is in viewport
        const evidenceSection = document.querySelector('.evidence-section');
        if (evidenceSection) {
          const rect = evidenceSection.getBoundingClientRect();
          // Trigger when section enters viewport (top of section is visible)
          const isVisible = rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0;

          if (isVisible) {
            const evidenceString = "The Evidence";
            let i = 0;
            setEvidenceText("");
            setShowEvidenceCursor(true);

            const duration = 1000; // 1 second
            const intervalTime = duration / evidenceString.length;

            const id = setInterval(() => {
              i += 1;
              setEvidenceText(evidenceString.slice(0, i));
              if (i >= evidenceString.length) {
                clearInterval(id);
                // Hide cursor after typing completes
                setTimeout(() => setShowEvidenceCursor(false), 300);
              }
            }, intervalTime);

            window.removeEventListener("scroll", handleScroll);
          }
        }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      // Also check immediately in case section is already visible
      handleScroll();

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [showSplash, evidenceText]);

  // Typewriter effect for "Get In Touch" title - triggers when user scrolls to section
  useEffect(() => {
    if (!showSplash && !contactText) {
      const handleScroll = () => {
        // Check if contact section is in viewport
        const contactSection = document.querySelector('.contact-section');
        if (contactSection) {
          const rect = contactSection.getBoundingClientRect();
          // Trigger when section enters viewport (top of section is visible)
          const isVisible = rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0;

          if (isVisible) {
            const contactString = "Get In Touch";
            let i = 0;
            setContactText("");
            setShowContactCursor(true);

            const duration = 1000; // 1 second
            const intervalTime = duration / contactString.length;

            const id = setInterval(() => {
              i += 1;
              setContactText(contactString.slice(0, i));
              if (i >= contactString.length) {
                clearInterval(id);
                // Hide cursor after typing completes
                setTimeout(() => setShowContactCursor(false), 300);
              }
            }, intervalTime);

            window.removeEventListener("scroll", handleScroll);
          }
        }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      // Also check immediately in case section is already visible
      handleScroll();

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [showSplash, contactText]);

  // Typewriter effect for buttons - triggers on first scroll
  useEffect(() => {
    if (!showSplash && !showButtons) {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setShowButtons(true);

          // First button typewriter
          const button1String = "The Evidence";
          let i1 = 0;
          const duration1 = 600;
          const intervalTime1 = duration1 / button1String.length;

          const id1 = setInterval(() => {
            i1 += 1;
            setButtonText1(button1String.slice(0, i1));
            if (i1 >= button1String.length) {
              clearInterval(id1);

              // Second button starts after first completes
              setTimeout(() => {
                const button2String = "Get In Touch";
                let i2 = 0;
                const duration2 = 600;
                const intervalTime2 = duration2 / button2String.length;

                const id2 = setInterval(() => {
                  i2 += 1;
                  setButtonText2(button2String.slice(0, i2));
                  if (i2 >= button2String.length) {
                    clearInterval(id2);
                  }
                }, intervalTime2);
              }, 100);
            }
          }, intervalTime1);

          window.removeEventListener("scroll", handleScroll);
        }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [showSplash, showButtons]);

  // === Framer Motion scroll-based animation (DESKTOP) ===
  const { scrollY } = useScroll();

  // Image zoom: 2.5x at scrollY = 0 → 1.0 at scrollY = 600px
  const scale = useTransform(scrollY, [0, 600], [2.5, 1.0]);

  return (
    <main className="main-content">
      {/* Only render after device detection to avoid flash */}
      {isMounted && (
        <>
          {/* Splash screen overlay */}
          {showSplash && (
            <>
              {/* Scroll spacer for desktop - allows page to scroll while splash is fixed */}
              {isDesktop && <div className="splash-scroll-spacer" />}
              
              <div className="splash-screen">
                {/* Both desktop and mobile use splashscreen.jpg */}
                {isDesktop ? (
                  <motion.div
                    className="splash-image-container"
                    style={{ scale }}
                  >
                    <img
                      src="/home/splashscreen.jpg"
                      alt="Splash zoom"
                      className="splash-image splash-image-desktop"
                    />
                  </motion.div>
                ) : (
                  <div className="splash-image-container">
                    <img
                      src="/home/splashscreen.jpg"
                      alt="Splash screen"
                      className="splash-image splash-image-mobile"
                    />
                  </div>
                )}

                {/* Text and button group - centered */}
                {showTypewriter && (
                  <div className="splash-content-group">
                    {/* Typewriter text */}
                    <h2 className="splash-typewriter-text">
                      {splashText}
                      <span className="typewriter-cursor">|</span>
                    </h2>

                    {/* Button - slides up from bottom */}
                    {/* Always render but with opacity 0 when hidden to maintain layout */}
                    <motion.button
                      className="splash-button splash-open-file-button"
                      initial={{ opacity: 0, y: 30 }}
                      animate={showButton ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                      onClick={() => setShowSplash(false)}
                      style={{ pointerEvents: showButton ? 'auto' : 'none' }}
                    >
                      Open Folder
                    </motion.button>
                  </div>
                )}
              </div>
            </>
          )}

      {/* Home page content – only after splash is closed */}
      {!showSplash && (
        <>
          <div className="content-wrapper">
          {/* HERO SECTION */}
          <section className="home-container">
            <div className="home-text">
              <div className="testimony-content">
                <h1 className="testimony-title">
                  {testimonyText}
                  {showTestimonyCursor && <span className="typewriter-cursor">|</span>}
                </h1>

                <p className="testimony-paragraph">
                  You caught me. I am, in fact, guilty!
                  <span className="paragraph-gap" />
                  My passion for design got me into trouble again and my projects
                  are all the evidence you need!
                  <span className="paragraph-gap" />
                  I'm a Design Researcher and a Graphic Designer with a passion for visual storrytelling.
                  <span className="paragraph-gap" />
                  I work across mediums, print, digital, and spatial to create engaging visual experiences. I also have a knack for motion graphics and UI/UX design.
                </p>

                <div className="home-buttons">
                  <a href="#projects" className="splash-button">{buttonText1}</a>
                  <a href="mailto:srashidides@gmail.com" className="splash-button">{buttonText2}</a>
                </div>
              </div>
            </div>

            <div className="polaroid-wrapper">
              <img
                src="/home/polaroid.png"
                alt="Polaroid evidence"
                className="polaroid-image"
              />
            </div>
          </section>

          {/* ACCOMPLICES + LOGO GRID */}
          <section className="accomplices-section">
            <h2 className="accomplices-title">
              {accomplicesText}
              {showAccomplicesCursor && <span className="typewriter-cursor">|</span>}
            </h2>

            <div className="logo-grid">
              <a
                href="https://www2.gov.bc.ca/gov/content/home"
                target="_blank"
                rel="noopener noreferrer"
                className="logo-box"
              >
                <img src="/home/bcservicelogo.png" alt="BC Service" />
              </a>

              <a
                href="https://www.bipocfoundation.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="logo-box"
              >
                <img src="/home/bipoclogo.png" alt="BIPOC Foundation" />
              </a>

              <a
                href="https://www.ecuad.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="logo-box"
              >
                <img src="/home/eculogo.png" alt="ECU" />
              </a>

              <a
                href="https://desis.ecuad.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="logo-box"
              >
                <img src="/home/desislogo.png" alt="DESIS" />
              </a>

              <a
                href="https://cfilproject.webflow.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="logo-box"
              >
                <img src="/home/cfillogo.png" alt="CFIL" />
              </a>

              <div className="logo-box">
                <img src="/home/cilogo.png" alt="CI" />
              </div>

              <a
                href="https://vancouver.ca/green-vancouver/circular-food-innovation-lab.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="logo-box"
              >
                <img
                  src="/home/cityofvancouverlogo.png"
                  alt="City of Vancouver"
                />
              </a>

              <a
                href="https://www.ism-ac.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="logo-box"
              >
                <img src="/home/ismlogo.png" alt="ISM" />
              </a>
            </div>
          </section>

          {/* THE EVIDENCE SECTION */}
          <section className="evidence-section" id="projects">
            <h2 className="evidence-title">
              {evidenceText}
              {showEvidenceCursor && <span className="typewriter-cursor">|</span>}
            </h2>

            {/* Project polaroids grid */}
            <div className="projects-grid">
              <a href="/astromunch" className="project-polaroid">
                <img src="/home/astromunch.png" alt="Astromunch Project" />
              </a>
              <a href="/eram-zoo" className="project-polaroid">
                <img src="/home/eramzoo.png" alt="Eram Zoo Project" />
              </a>
              <a href="/papco" className="project-polaroid">
                <img src="/home/papco.png" alt="Papco Project" />
              </a>
              <a href="/afba1" className="project-polaroid">
                <img src="/home/afba1.png" alt="AFBA Project 1" />
              </a>
              <a href="/afba2" className="project-polaroid">
                <img src="/home/afba2.png" alt="AFBA Project 2" />
              </a>
              <a href="/true-iran" className="project-polaroid">
                <img src="/home/trueiran.png" alt="True Iran Project" />
              </a>
              <a href="/haironik" className="project-polaroid">
                <img src="/home/haironik.png" alt="Haironik Project" />
              </a>
              <a href="/social-media" className="project-polaroid">
                <img src="/home/socialmedia.png" alt="Social Media Project" />
              </a>
              <a href="/motion-graphics" className="project-polaroid">
                <img src="/home/motiongraphic.png" alt="Motion Graphics Project" />
              </a>
            </div>
          </section>
          </div>
        </>
      )}
        </>
      )}
    </main>
  );
}