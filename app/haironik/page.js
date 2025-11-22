"use client";

import "./haironik.css";

export default function HaironikPage() {
  return (
    <main className="haironik-main">
      <div className="header-photo">
        <img src="/Haironik/1.jpg" alt="Haironik Header" />
      </div>

      <div className="header-content">
        {/* Main title with emoji injected via CSS */}
        <h1 className="haironik-title">Haironik</h1>

        <table className="project-info-table">
          <tbody>
            <tr>
              <td className="table-icon">
                <img src="/Haironik/tags.png" alt="Tags" />
              </td>
              <td className="table-label">Tags</td>
              <td className="table-value">
                <div className="tags-container">
                  <span className="tag tag-visual-identity">Visual Identity</span>
                  <span className="tag tag-package-design">Package Design</span>
                </div>
              </td>
            </tr>

            <tr>
              <td className="table-icon">
                <img src="/Haironik/date.png" alt="Date" />
              </td>
              <td className="table-label">Date</td>
              <td className="table-value">2022</td>
            </tr>

            <tr>
              <td className="table-icon">
                <img src="/Haironik/collaborators.png" alt="Collaborators" />
              </td>
              <td className="table-label">Collaborators</td>
              <td className="table-value">Carno Studio, Haironik Inc.</td>
            </tr>

            <tr>
              <td className="table-icon">
                <img src="/Haironik/myrole.png" alt="My Role" />
              </td>
              <td className="table-label">My Role</td>
              <td className="table-value">
                For this project, I designed packaging concepts for Haironik, a premium hair vitamin brand. Each design explores a different visual direction, from minimal elegance to clinical precision and organic flow, while maintaining a clean, modern aesthetic that reflects health, beauty, and trust. The goal was to create packaging that communicates both the scientific credibility of the product and its promise of strong, shiny hair.
              </td>
            </tr>
          </tbody>
        </table>

        {/* Project Images */}
        <div className="image-container">
          <img src="/Haironik/2.jpg" alt="Haironik Image 2" className="project-image" />
        </div>

        <div className="image-container">
          <img src="/Haironik/3.jpg" alt="Haironik Image 3" className="project-image" />
        </div>

        <div className="image-container">
          <img src="/Haironik/4.jpg" alt="Haironik Image 4" className="project-image" />
        </div>

        <div className="image-container">
          <img src="/Haironik/5.jpg" alt="Haironik Image 5" className="project-image" />
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
              <td className="bottom-table-value">Designing packaging concepts for Haironik was a rewarding exploration of how visual style can shape a brand's identity in the health-beauty space. I enjoyed experimenting with multiple directions, from minimal and elegant to more clinical and organic, while keeping the aesthetic clean, modern, and trustworthy. The process was both creative and strategic, pushing me to balance scientific credibility with a sense of beauty, care, and the promise of healthier hair.</td>
            </tr>
          </tbody>
        </table>

        {/* Wanna see more section */}
        <div className="see-more-divider"></div>
        <h2 className="see-more-title">Wanna see more?</h2>
        <div className="see-more-gallery">
          <a href="/true-iran" className="see-more-item">
            <img src="/trueiran/1.jpg" alt="True Colors of Iran" />
          </a>
          <a href="/papco" className="see-more-item">
            <img src="/Papco/1.jpg" alt="Papco" />
          </a>
          <a href="/social-media" className="see-more-item">
            <img src="/Socialmedia/1.jpeg" alt="Social Media Content" />
          </a>
          <a href="/afba2" className="see-more-item">
            <img src="/afba2/1.jpg" alt="AFBA #2" />
          </a>
          <a href="/eram-zoo" className="see-more-item">
            <img src="/eramzoo/1.jpg" alt="Eram Zoo" />
          </a>
          <a href="/astromunch" className="see-more-item">
            <img src="/astromunch/1.jpg" alt="Astromunch" />
          </a>
          <a href="/afba1" className="see-more-item">
            <img src="/afba1/1.jpg" alt="AFBA #1" />
          </a>
          <a href="/motion-graphics" className="see-more-item">
            <img src="/motion/1.jpg" alt="Motion Graphics" />
          </a>
        </div>
      </div>
    </main>
  );
}
