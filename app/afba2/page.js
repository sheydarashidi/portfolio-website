"use client";

import "./afba2.css";

export default function Afba2Page() {
  return (
    <main className="afba2-main">
      <div className="header-photo">
        <img src="/afba2/1.jpg" alt="AFBA #2 Header" />
      </div>

      <div className="header-content">
        {/* Main title with emoji injected via CSS */}
        <h1 className="afba2-title">Afba #2</h1>

        <table className="project-info-table">
          <tbody>
            <tr>
              <td className="table-icon">
                <img src="/afba2/tags.png" alt="Tags" />
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
                <img src="/afba2/date.png" alt="Date" />
              </td>
              <td className="table-label">Date</td>
              <td className="table-value">2022</td>
            </tr>

            <tr>
              <td className="table-icon">
                <img src="/afba2/collaborators.png" alt="Collaborators" />
              </td>
              <td className="table-label">Collaborators</td>
              <td className="table-value">Afba Institute</td>
            </tr>

            <tr>
              <td className="table-icon">
                <img src="/afba2/myrole.png" alt="My Role" />
              </td>
              <td className="table-label">My Role</td>
              <td className="table-value">
                For this project, I developed a visual identity concept for Afba, a parenting mental health support initiative. The design communicates the idea that children's personalities are shaped by both parents equally, much like DNA combines from both sides. I designed 2 iterations for this project.
              </td>
            </tr>
          </tbody>
        </table>

        {/* Project Images */}
        <div className="image-container">
          <img src="/afba2/2.jpg" alt="AFBA Image 2" className="project-image" />
        </div>

        <div className="image-container">
          <img src="/afba2/3.jpg" alt="AFBA Image 3" className="project-image" />
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
          <a href="/afba1" className="see-more-item">
            <img src="/afba1/1.jpg" alt="AFBA #1" />
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
          <a href="/social-media" className="see-more-item">
            <img src="/Socialmedia/1.jpeg" alt="Social Media Content" />
          </a>
          <a href="/true-iran" className="see-more-item">
            <img src="/trueiran/1.jpg" alt="True Colors of Iran" />
          </a>
          <a href="/papco" className="see-more-item">
            <img src="/Papco/1.jpg" alt="Papco" />
          </a>
          <a href="/eram-zoo" className="see-more-item">
            <img src="/eramzoo/1.jpg" alt="Eram Zoo" />
          </a>
        </div>
      </div>
    </main>
  );
}
