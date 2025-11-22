"use client";

import { useState, useEffect } from "react";
import "./afba1.css";

export default function Afba1Page() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slides = [
    "/afba1/Untitled-1-01.jpg",
    "/afba1/Untitled-1-02.jpg",
    "/afba1/Untitled-1-03.jpg",
    "/afba1/Untitled-1-04.jpg",
    "/afba1/Untitled-1-05.jpg",
    "/afba1/Untitled-1-06.jpg",
    "/afba1/Untitled-1-07.jpg",
    "/afba1/Untitled-1-08.jpg",
    "/afba1/Untitled-1-09.jpg",
    "/afba1/Untitled-1-11.jpg",
    "/afba1/Untitled-1-12.jpg",
    "/afba1/Untitled-1-13.jpg",
    "/afba1/Untitled-1-14.jpg",
    "/afba1/Untitled-1-15.jpg",
    "/afba1/Untitled-1-16.jpg",
    "/afba1/Untitled-1-17.jpg",
    "/afba1/Untitled-1-18.jpg",
    "/afba1/Untitled-1-19.jpg",
    "/afba1/Untitled-1-20.jpg",
    "/afba1/Untitled-1-21.jpg",
    "/afba1/Untitled-1-22.jpg"
  ];

  // Auto-play effect
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3000); // Change slide every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <main className="afba1-main">
      <div className="header-photo">
        <img src="/afba1/1.jpg" alt="AFBA Header" />
      </div>

      <div className="header-content">
        {/* Main title with emoji injected via CSS */}
        <h1 className="afba1-title">Afba #1</h1>

        <table className="project-info-table">
          <tbody>
            <tr>
              <td className="table-icon">
                <img src="/afba1/tags.png" alt="Tags" />
              </td>
              <td className="table-label">Tags</td>
              <td className="table-value">
                <div className="tags-container">
                  <span className="tag tag-visual-identity">Visual Identity</span>
                </div>
              </td>
            </tr>

            <tr>
              <td className="table-icon">
                <img src="/afba1/date.png" alt="Date" />
              </td>
              <td className="table-label">Date</td>
              <td className="table-value">2022</td>
            </tr>

            <tr>
              <td className="table-icon">
                <img src="/afba1/collaborators.png" alt="Collaborators" />
              </td>
              <td className="table-label">Collaborators</td>
              <td className="table-value">Afba Institute</td>
            </tr>

            <tr>
              <td className="table-icon">
                <img src="/afba1/myrole.png" alt="My Role" />
              </td>
              <td className="table-label">My Role</td>
              <td className="table-value">
                For this project, I developed a visual identity concept for Afba, a parenting mental health support initiative. The design communicates the idea that children's personalities are shaped by both parents equally, much like DNA combines from both sides. I designed 2 iterations for this project.
              </td>
            </tr>
          </tbody>
        </table>

        {/* Slideshow */}
        <div className="slideshow-container">
          <div
            className="slideshow-wrapper"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <img
              src={slides[currentSlide]}
              alt={`AFBA Slide ${currentSlide + 1}`}
              className="slideshow-image"
            />

            {/* Navigation Arrows */}
            <button className="slideshow-arrow slideshow-arrow-left" onClick={prevSlide}>
              ‹
            </button>
            <button className="slideshow-arrow slideshow-arrow-right" onClick={nextSlide}>
              ›
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="slideshow-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`slideshow-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Bottom table with Tools and Reflections */}
        <table className="bottom-info-table">
          <tbody>
            <tr>
              <td className="bottom-table-label">🧰  Tools I used</td>
              <td className="bottom-table-value">
                ✅ Adobe Photoshop<br />
                ✅ Adobe Illustrator
              </td>
            </tr>
            <tr>
              <td className="bottom-table-label">✍🏻  Reflections</td>
              <td className="bottom-table-value">Designing the Afba visual identity gave me the chance to translate a deeply meaningful idea into a simple, memorable form. I loved exploring how a child's personality is shaped equally by both parents and finding a visual language that expresses that shared influence. Creating two iterations allowed me to test different ways of balancing emotion, clarity, and symbolism, and the process felt both thoughtful and creatively fulfilling.</td>
            </tr>
          </tbody>
        </table>

        {/* Wanna see more section */}
        <div className="see-more-divider"></div>
        <h2 className="see-more-title">Wanna see more?</h2>
        <div className="see-more-gallery">
          <a href="/afba2" className="see-more-item">
            <img src="/afba2/1.jpg" alt="AFBA #2" />
          </a>
          <a href="/true-iran" className="see-more-item">
            <img src="/trueiran/1.jpg" alt="True Colors of Iran" />
          </a>
          <a href="/papco" className="see-more-item">
            <img src="/Papco/1.jpg" alt="Papco" />
          </a>
          <a href="/social-media" className="see-more-item">
            <img src="/Socialmedia/1.jpeg" alt="Social Media Content" />
          </a>
          <a href="/eram-zoo" className="see-more-item">
            <img src="/eramzoo/1.jpg" alt="Eram Zoo" />
          </a>
          <a href="/motion-graphics" className="see-more-item">
            <img src="/motion/1.jpg" alt="Motion Graphics" />
          </a>
          <a href="/haironik" className="see-more-item">
            <img src="/Haironik/1.jpg" alt="Haironik" />
          </a>
          <a href="/astromunch" className="see-more-item">
            <img src="/astromunch/1.jpg" alt="Astromunch" />
          </a>
        </div>
      </div>
    </main>
  );
}
