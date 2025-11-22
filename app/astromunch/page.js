"use client";

import "./astromunch.css";

export default function AstromunchPage() {
  return (
    <main className="astromunch-main">
      <div className="header-photo">
        <img src="/astromunch/1.jpg" alt="Astromunch Header" />
      </div>

      <div className="header-content">
        {/* Main title with emoji injected via CSS */}
        <h1 className="astromunch-title">Astromunch</h1>

        <table className="project-info-table">
          <tbody>
            <tr>
              <td className="table-icon">
                <img src="/astromunch/tags.png" alt="Tags" />
              </td>
              <td className="table-label">Tags</td>
              <td className="table-value">
                <div className="tags-container">
                  <span className="tag tag-visual-identity">Visual Identity</span>
                  <span className="tag tag-package-design">Package Design</span>
                  <span className="tag tag-logo-design">Logo Design</span>
                  <span className="tag tag-motion">Motion</span>
                </div>
              </td>
            </tr>

            <tr>
              <td className="table-icon">
                <img src="/astromunch/date.png" alt="Date" />
              </td>
              <td className="table-label">Date</td>
              <td className="table-value">2025</td>
            </tr>

            <tr>
              <td className="table-icon">
                <img src="/astromunch/collaborators.png" alt="Collaborators" />
              </td>
              <td className="table-label">Collaborators</td>
              <td className="table-value">Astromunch Inc</td>
            </tr>

            <tr>
              <td className="table-icon">
                <img src="/astromunch/myrole.png" alt="My Role" />
              </td>
              <td className="table-label">My Role</td>
              <td className="table-value">
                I led the end to end creative direction and design for the
                AstroMunch brand. This included shaping the visual identity,
                developing the illustration style, and designing the full packaging
                system for a line of freeze dried fruit and yogurt snacks. I
                created playful doodle inspired graphics, selected a bold color
                palette, and built a cohesive brand language that could extend
                across packaging, stationery, and other touchpoints. I also refined
                the brand story and positioned AstroMunch as a fun, fresh, and
                approachable snack choice for both kids and adults.
              </td>
            </tr>
          </tbody>
        </table>

        {/* 2. Video */}
        <div className="video-container">
          <h2 className="video-title">Logo / Logo Reveal</h2>
          <video controls loop className="logo-reveal-video">
            <source src="/astromunch/2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* 3. Image with title */}
        <div className="image-container">
          <h2 className="image-title">Business Card</h2>
          <img src="/astromunch/3.png" alt="Business Card" className="project-image" />
        </div>

        {/* 4. Image with title */}
        <div className="image-container">
          <h2 className="image-title">Package Design</h2>
          <img src="/astromunch/4.jpg" alt="Package Design" className="project-image" />
        </div>

        {/* Images 5–9 (no titles) */}
        {[5, 6, 7, 8, 9].map((num) => (
          <div className="image-container" key={num}>
            <img
              src={`/astromunch/${num}.jpg`}
              alt={`Astromunch Image ${num}`}
              className="project-image"
            />
          </div>
        ))}

        {/* Bottom table with Tools and Reflections */}
        <table className="bottom-info-table">
          <tbody>
            <tr>
              <td className="bottom-table-label">🧰  Tools I used</td>
              <td className="bottom-table-value">
                ✅ Adobe Photoshop<br />
                ✅ Adobe Illustrator<br />
                ✅ Adobe Illustrator AI<br />
                ✅ Adobe After Effects
              </td>
            </tr>
            <tr>
              <td className="bottom-table-label">✍🏻  Reflections</td>
              <td className="bottom-table-value">AstroMunch let me experiment with playful branding and bold visual language. It taught me how small design decisions can shape a fun, cohesive user experience across packaging and digital touchpoints.</td>
            </tr>
          </tbody>
        </table>

        {/* Wanna see more section */}
        <div className="see-more-divider"></div>
        <h2 className="see-more-title">Wanna see more?</h2>
        <div className="see-more-gallery">
          <a href="/motion-graphics" className="see-more-item">
            <img src="/motion/1.jpg" alt="Motion Graphics" />
          </a>
          <a href="/true-iran" className="see-more-item">
            <img src="/trueiran/1.jpg" alt="True Colors of Iran" />
          </a>
          <a href="/papco" className="see-more-item">
            <img src="/papco/1.jpg" alt="Papco" />
          </a>
          <a href="/eram-zoo" className="see-more-item">
            <img src="/eramzoo/1.jpg" alt="Eram Zoo" />
          </a>
          <a href="/social-media" className="see-more-item">
            <img src="/Socialmedia/1.jpeg" alt="Social Media Content" />
          </a>
          <a href="/afba2" className="see-more-item">
            <img src="/afba2/1.jpg" alt="AFBA #2" />
          </a>
          <a href="/haironik" className="see-more-item">
            <img src="/haironik/1.jpg" alt="Haironik" />
          </a>
          <a href="/afba1" className="see-more-item">
            <img src="/afba1/1.jpg" alt="AFBA #1" />
          </a>
        </div>
      </div>
    </main>
  );
}
