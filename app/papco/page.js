"use client";

import "./papco.css";

export default function PapcoPage() {
  return (
    <main className="papco-main">
      <div className="header-photo">
        <img src="/Papco/1.jpg" alt="Papco Header" />
      </div>

      <div className="header-content">
        {/* Main title with emoji injected via CSS */}
        <h1 className="papco-title">Papco Truck Wrap</h1>

        <table className="project-info-table">
          <tbody>
            <tr>
              <td className="table-icon">
                <img src="/Papco/tags.png" alt="Tags" />
              </td>
              <td className="table-label">Tags</td>
              <td className="table-value">
                <div className="tags-container">
                  <span className="tag tag-illustration">Illustration</span>
                </div>
              </td>
            </tr>

            <tr>
              <td className="table-icon">
                <img src="/Papco/date.png" alt="Date" />
              </td>
              <td className="table-label">Date</td>
              <td className="table-value">2020</td>
            </tr>

            <tr>
              <td className="table-icon">
                <img src="/Papco/collaborators.png" alt="Collaborators" />
              </td>
              <td className="table-label">Collaborators</td>
              <td className="table-value">PAPCO Inc., CNT House</td>
            </tr>

            <tr>
              <td className="table-icon">
                <img src="/Papco/myrole.png" alt="My Role" />
              </td>
              <td className="table-label">My Role</td>
              <td className="table-value">
                I designed a factory-inspired illustration that combines geometric patterns, machinery, and people to symbolize productivity and creativity. The Papco logo is woven seamlessly into the artwork, making it both functional and visually striking. Applied to a truck, the design transforms it into a moving canvas that reinforces the brand's identity in a bold and dynamic way.
              </td>
            </tr>
          </tbody>
        </table>

        {/* Project Images */}
        <div className="image-container">
          <img src="/Papco/2.jpg" alt="Papco Image 2" className="project-image" />
        </div>

        <div className="image-container">
          <img src="/Papco/3.jpg" alt="Papco Image 3" className="project-image" />
        </div>

        <div className="image-container">
          <img src="/Papco/4.jpeg" alt="Papco Image 4" className="project-image" />
        </div>

        <div className="image-container">
          <img src="/Papco/5.jpeg" alt="Papco Image 5" className="project-image" />
        </div>

        <div className="image-container">
          <img src="/Papco/6.jpg" alt="Papco Image 6" className="project-image" />
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
              <td className="bottom-table-value">Creating this truck wrap was a long, detailed process that took hours of experimentation, sketching, and refinement, but it was genuinely fun and deeply engaging work. Building the factory-inspired illustration, blending geometric forms with machinery and people, and integrating the Papco logo seamlessly into the visual felt like solving a creative puzzle. Seeing the final artwork come together as a bold, moving expression of the brand made every hour worth it.</td>
            </tr>
          </tbody>
        </table>

        {/* Wanna see more section */}
        <div className="see-more-divider"></div>
        <h2 className="see-more-title">Wanna see more?</h2>
        <div className="see-more-gallery">
          <a href="/social-media" className="see-more-item">
            <img src="/Socialmedia/1.jpeg" alt="Social Media Content" />
          </a>
          <a href="/afba2" className="see-more-item">
            <img src="/afba2/1.jpg" alt="AFBA #2" />
          </a>
          <a href="/eram-zoo" className="see-more-item">
            <img src="/eramzoo/1.jpg" alt="Eram Zoo" />
          </a>
          <a href="/haironik" className="see-more-item">
            <img src="/Haironik/1.jpg" alt="Haironik" />
          </a>
          <a href="/astromunch" className="see-more-item">
            <img src="/astromunch/1.jpg" alt="Astromunch" />
          </a>
          <a href="/motion-graphics" className="see-more-item">
            <img src="/motion/1.jpg" alt="Motion Graphics" />
          </a>
          <a href="/true-iran" className="see-more-item">
            <img src="/trueiran/1.jpg" alt="True Colors of Iran" />
          </a>
          <a href="/afba1" className="see-more-item">
            <img src="/afba1/1.jpg" alt="AFBA #1" />
          </a>
        </div>
      </div>
    </main>
  );
}
