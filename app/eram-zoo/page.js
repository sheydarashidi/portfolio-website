"use client";

import "./eram-zoo.css";

export default function EramZooPage() {
  return (
    <main className="eram-zoo-main">
      <div className="header-photo">
        <img src="/eramzoo/1.jpg" alt="Eram Zoo Header" />
      </div>

      <div className="header-content">
        {/* Main title with emoji injected via CSS */}
        <h1 className="eram-zoo-title">Eram Zoo</h1>

        <table className="project-info-table">
          <tbody>
            <tr>
              <td className="table-icon">
                <img src="/eramzoo/tags.png" alt="Tags" />
              </td>
              <td className="table-label">Tags</td>
              <td className="table-value">
                <div className="tags-container">
                  <span className="tag tag-brand-design">Brand Design</span>
                  <span className="tag tag-spatial-design">Spatial Design</span>
                  <span className="tag tag-illustration">Illustration</span>
                  <span className="tag tag-signage-design">Signage Design</span>
                </div>
              </td>
            </tr>

            <tr>
              <td className="table-icon">
                <img src="/eramzoo/date.png" alt="Date" />
              </td>
              <td className="table-label">Date</td>
              <td className="table-value">2020</td>
            </tr>

            <tr>
              <td className="table-icon">
                <img src="/eramzoo/collaborators.png" alt="Collaborators" />
              </td>
              <td className="table-label">Collaborators</td>
              <td className="table-value">Eram Zoo, Art University</td>
            </tr>

            <tr>
              <td className="table-icon">
                <img src="/eramzoo/myrole.png" alt="My Role" />
              </td>
              <td className="table-label">My Role</td>
              <td className="table-value">
                I redesigned the visual identity for Eram Zoo with a focus on making the experience more fun, accessible, and engaging for children. I developed a full design system—including colors, typography, icons, patterns, signage, and wayfinding—built from modular, rounded shapes inspired by how kids visually process information. The result is a cohesive, playful brand language that transforms the zoo into a bright, intuitive, and memorable environment for families.
              </td>
            </tr>
          </tbody>
        </table>

        {/* Project Images */}
        <div className="image-container">
          <img src="/eramzoo/2.jpg" alt="Eram Zoo Image 2" className="project-image" />
        </div>

        <div className="image-container">
          <img src="/eramzoo/3.jpg" alt="Eram Zoo Image 3" className="project-image" />
        </div>

        <div className="image-container">
          <img src="/eramzoo/4.jpg" alt="Eram Zoo Image 4" className="project-image" />
        </div>

        {/* Video */}
        <div className="video-container">
          <video controls loop className="logo-reveal-video">
            <source src="/eramzoo/5.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Bottom table with Tools and Reflections */}
        <table className="bottom-info-table">
          <tbody>
            <tr>
              <td className="bottom-table-label">🧰  Tools I used</td>
              <td className="bottom-table-value">
                ✅ Adobe Illustrator<br />
                ✅ Adobe Photoshop<br />
                ✅ Cinema 4D<br />
                ✅ Adobe After Effects
              </td>
            </tr>
            <tr>
              <td className="bottom-table-label">✍🏻  Reflections</td>
              <td className="bottom-table-value">Working on the Eram Zoo visual identity was genuinely energizing. The project challenged me to rethink how children perceive spaces, symbols, and color—and translate that into a system that feels playful, clear, and intuitive. Bringing together modular shapes, bold colors, and simple 2D characters was both creatively rewarding and strategically purposeful. It reminded me how powerful design can be in shaping experiences, especially for younger audiences who respond so strongly to visual cues.</td>
            </tr>
          </tbody>
        </table>

        {/* Wanna see more section */}
        <div className="see-more-divider"></div>
        <h2 className="see-more-title">Wanna see more?</h2>
        <div className="see-more-gallery">
          <a href="/haironik" className="see-more-item">
            <img src="/Haironik/1.jpg" alt="Haironik" />
          </a>
          <a href="/afba1" className="see-more-item">
            <img src="/afba1/1.jpg" alt="AFBA #1" />
          </a>
          <a href="/astromunch" className="see-more-item">
            <img src="/astromunch/1.jpg" alt="Astromunch" />
          </a>
          <a href="/motion-graphics" className="see-more-item">
            <img src="/motion/1.jpg" alt="Motion Graphics" />
          </a>
          <a href="/papco" className="see-more-item">
            <img src="/Papco/1.jpg" alt="Papco" />
          </a>
          <a href="/true-iran" className="see-more-item">
            <img src="/trueiran/1.jpg" alt="True Colors of Iran" />
          </a>
          <a href="/afba2" className="see-more-item">
            <img src="/afba2/1.jpg" alt="AFBA #2" />
          </a>
          <a href="/social-media" className="see-more-item">
            <img src="/Socialmedia/1.jpeg" alt="Social Media Content" />
          </a>
        </div>
      </div>
    </main>
  );
}
