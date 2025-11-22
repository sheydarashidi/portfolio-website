"use client";

import "./social-media.css";

export default function SocialMediaPage() {
  return (
    <main className="social-media-main">
      <div className="header-photo">
        <img src="/Socialmedia/1.jpeg" alt="Social Media Content Header" />
      </div>

      <div className="header-content">
        {/* Main title with emoji injected via CSS */}
        <h1 className="social-media-title">Social Media Content</h1>

        <table className="project-info-table">
          <tbody>
            <tr>
              <td className="table-icon">
                <img src="/Socialmedia/tags.png" alt="Tags" />
              </td>
              <td className="table-label">Tags</td>
              <td className="table-value">
                <div className="tags-container">
                  <span className="tag tag-social-media">Social Media Content</span>
                </div>
              </td>
            </tr>

            <tr>
              <td className="table-icon">
                <img src="/Socialmedia/date.png" alt="Date" />
              </td>
              <td className="table-label">Date</td>
              <td className="table-value">2020-2025</td>
            </tr>

            <tr>
              <td className="table-icon">
                <img src="/Socialmedia/collaborators.png" alt="Collaborators" />
              </td>
              <td className="table-label">Collaborators</td>
              <td className="table-value">CNT House, Carno Studio, Astromunch</td>
            </tr>

            <tr>
              <td className="table-icon">
                <img src="/Socialmedia/myrole.png" alt="My Role" />
              </td>
              <td className="table-label">My Role</td>
              <td className="table-value">
                I curated a selection of contents I've created for social media for varried brands.
              </td>
            </tr>
          </tbody>
        </table>

        {/* Thumbnail Gallery */}
        <div className="thumbnail-gallery">
          <div className="thumbnail-item">
            <img src="/Socialmedia/1.jpeg" alt="Social Media Content 1" className="thumbnail-image" />
          </div>
          <div className="thumbnail-item">
            <img src="/Socialmedia/2.jpeg" alt="Social Media Content 2" className="thumbnail-image" />
          </div>
          <div className="thumbnail-item">
            <img src="/Socialmedia/3.jpeg" alt="Social Media Content 3" className="thumbnail-image" />
          </div>
          <div className="thumbnail-item">
            <img src="/Socialmedia/4.jpg" alt="Social Media Content 4" className="thumbnail-image" />
          </div>
          <div className="thumbnail-item">
            <img src="/Socialmedia/5.jpg" alt="Social Media Content 5" className="thumbnail-image" />
          </div>
          <div className="thumbnail-item">
            <img src="/Socialmedia/6.jpg" alt="Social Media Content 6" className="thumbnail-image" />
          </div>
        </div>

        {/* Bottom table with Tools and Reflections */}
        <table className="bottom-info-table">
          <tbody>
            <tr>
              <td className="bottom-table-label">🧰  Tools I used</td>
              <td className="bottom-table-value">
                ✅ Adobe Photoshop<br />
                ✅ Adobe Illustrator<br />
                ✅ Canva
              </td>
            </tr>
            <tr>
              <td className="bottom-table-label">✍🏻  Reflections</td>
              <td className="bottom-table-value">Creating social media content for diverse brands has been an exciting creative challenge. Each project required adapting to different brand voices, visual identities, and audience expectations while maintaining consistency and engagement. From concept development to final execution, I focused on designing content that not only looks visually appealing but also communicates effectively and resonates with each brand's unique community. This experience has sharpened my ability to work quickly, think strategically about visual storytelling, and stay current with evolving social media trends and platform requirements.</td>
            </tr>
          </tbody>
        </table>

        {/* Wanna see more section */}
        <div className="see-more-divider"></div>
        <h2 className="see-more-title">Wanna see more?</h2>
        <div className="see-more-gallery">
          <a href="/eram-zoo" className="see-more-item">
            <img src="/eramzoo/1.jpg" alt="Eram Zoo" />
          </a>
          <a href="/astromunch" className="see-more-item">
            <img src="/astromunch/1.jpg" alt="Astromunch" />
          </a>
          <a href="/haironik" className="see-more-item">
            <img src="/Haironik/1.jpg" alt="Haironik" />
          </a>
          <a href="/true-iran" className="see-more-item">
            <img src="/trueiran/1.jpg" alt="True Colors of Iran" />
          </a>
          <a href="/motion-graphics" className="see-more-item">
            <img src="/motion/1.jpg" alt="Motion Graphics" />
          </a>
          <a href="/papco" className="see-more-item">
            <img src="/Papco/1.jpg" alt="Papco" />
          </a>
          <a href="/afba1" className="see-more-item">
            <img src="/afba1/1.jpg" alt="AFBA #1" />
          </a>
          <a href="/afba2" className="see-more-item">
            <img src="/afba2/1.jpg" alt="AFBA #2" />
          </a>
        </div>
      </div>
    </main>
  );
}
