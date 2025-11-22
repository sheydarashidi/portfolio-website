"use client";

import "./true-iran.css";

export default function TrueIranPage() {
  return (
    <main className="true-iran-main">
      <div className="header-photo">
        <img src="/trueiran/1.jpg" alt="True Colors of Iran Header" />
      </div>

      <div className="header-content">
        {/* Main title with emoji injected via CSS */}
        <h1 className="true-iran-title">True Colors of Iran</h1>

        <table className="project-info-table">
          <tbody>
            <tr>
              <td className="table-icon">
                <img src="/trueiran/tags.png" alt="Tags" />
              </td>
              <td className="table-label">Tags</td>
              <td className="table-value">
                <div className="tags-container">
                  <span className="tag tag-ui-ux-design">UI & UX Design</span>
                  <span className="tag tag-web-design">Web Design</span>
                  <span className="tag tag-visual-identity">Visual Identity</span>
                  <span className="tag tag-illustration">Illustration</span>
                  <span className="tag tag-book-design">Book Design</span>
                </div>
              </td>
            </tr>

            <tr>
              <td className="table-icon">
                <img src="/trueiran/date.png" alt="Date" />
              </td>
              <td className="table-label">Date</td>
              <td className="table-value">2020</td>
            </tr>

            <tr>
              <td className="table-icon">
                <img src="/trueiran/collaborators.png" alt="Collaborators" />
              </td>
              <td className="table-label">Collaborators</td>
              <td className="table-value">Art University</td>
            </tr>

            <tr>
              <td className="table-icon">
                <img src="/trueiran/myrole.png" alt="My Role" />
              </td>
              <td className="table-label">My Role</td>
              <td className="table-value">
                The True Colors of Iran project was created to counter negative media portrayals and highlight the country's rich cultural heritage, from historical architecture to handicrafts and natural landscapes. Designed as a visual tourism campaign, it aimed to showcase the beauty and diversity of Iran to international audiences and shift perspectives. This project was especially meaningful to me, as it served as a small contribution to representing my home country more authentically.
              </td>
            </tr>
          </tbody>
        </table>

        {/* Mood Board Image */}
        <div className="image-container">
          <h2 className="image-title">Mood Board</h2>
          <img src="/trueiran/2.jpg" alt="Mood Board" className="project-image" />
        </div>

        {/* Concept Section */}
        <table className="concept-table">
          <tbody>
            <tr>
              <td className="concept-label">Concept</td>
              <td className="concept-value">
                The concept highlights Iran's layered identity, which goes beyond a surface view and requires deeper discovery and experience to be fully understood. Inspired by monuments, layers, and vibrant colors, the logo was designed to represent the richness and complexity of Iranian culture.
              </td>
            </tr>
          </tbody>
        </table>

        {/* Project Images */}
        <div className="image-container">
          <img src="/trueiran/3.png" alt="True Iran Image 3" className="project-image" />
        </div>

        <div className="image-container">
          <img src="/trueiran/4.png" alt="True Iran Image 4" className="project-image" />
        </div>

        <div className="image-container">
          <img src="/trueiran/5.jpg" alt="True Iran Image 5" className="project-image" />
        </div>

        {/* App and Web Design Section */}
        <table className="concept-table">
          <tbody>
            <tr>
              <td className="concept-label">App and Web Design</td>
              <td className="concept-value">
                This travel app was designed to enhance the experience of visiting Iran by tailoring recommendations to different types of tourists through a survey-based system. It provides practical services such as finding accommodations, transportation, restrooms, and Wi-Fi, while also helping users discover cultural sites based on their preferences. The goal was to make traveling in Iran easier, more enjoyable, and more accessible for both casual visitors and cultural explorers.
              </td>
            </tr>
          </tbody>
        </table>

        {/* App Images 6-12 */}
        <div className="image-container">
          <img src="/trueiran/6.jpg" alt="True Iran Image 6" className="project-image" />
        </div>

        <div className="image-container">
          <img src="/trueiran/7.jpg" alt="True Iran Image 7" className="project-image" />
        </div>

        <div className="image-container">
          <img src="/trueiran/8.jpeg" alt="True Iran Image 8" className="project-image" />
        </div>

        <div className="image-container">
          <img src="/trueiran/9.jpg" alt="True Iran Image 9" className="project-image" />
        </div>

        <div className="image-container">
          <img src="/trueiran/10.jpg" alt="True Iran Image 10" className="project-image" />
        </div>

        {/* AR Section */}
        <table className="concept-table">
          <tbody>
            <tr>
              <td className="concept-label">AR</td>
              <td className="concept-value">
                As an experiential feature, I envisioned using augmented reality to let visitors see historical sites in their past form. By activating the camera within the app, users could view each monument as it once was, creating a deeper and more immersive cultural experience.
              </td>
            </tr>
          </tbody>
        </table>

        {/* AR Images */}
        <div className="image-container">
          <img src="/trueiran/13.jpg" alt="True Iran AR Image 13" className="project-image" />
        </div>

        <div className="image-container">
          <img src="/trueiran/14.jpg" alt="True Iran AR Image 14" className="project-image" />
        </div>

        {/* Bottom table with Tools and Reflections */}
        <table className="bottom-info-table">
          <tbody>
            <tr>
              <td className="bottom-table-label">🧰  Tools I used</td>
              <td className="bottom-table-value">
                ✅ Adobe Illustrator<br />
                ✅ Figma<br />
                ✅ Adobe Photoshop
              </td>
            </tr>
            <tr>
              <td className="bottom-table-label">✍🏻  Reflections</td>
              <td className="bottom-table-value">The True Colors of Iran project was deeply personal and creatively fulfilling. It gave me the opportunity to counter negative stereotypes and showcase the rich, layered beauty of my home country through design. From developing a visual identity inspired by monuments and vibrant colors to designing a travel app with features like personalized recommendations and augmented reality, every element was crafted to make Iran's culture more accessible and engaging. This project reminded me how design can serve as a bridge between perception and reality, helping people discover the authentic stories behind a place. It was both a professional challenge and a meaningful contribution to representing Iran with honesty and pride.</td>
            </tr>
          </tbody>
        </table>

        {/* Wanna see more section */}
        <div className="see-more-divider"></div>
        <h2 className="see-more-title">Wanna see more?</h2>
        <div className="see-more-gallery">
          <a href="/papco" className="see-more-item">
            <img src="/papco/1.jpg" alt="Papco" />
          </a>
          <a href="/motion-graphics" className="see-more-item">
            <img src="/motion/1.jpg" alt="Motion Graphics" />
          </a>
          <a href="/afba1" className="see-more-item">
            <img src="/afba1/1.jpg" alt="AFBA #1" />
          </a>
          <a href="/eram-zoo" className="see-more-item">
            <img src="/eramzoo/1.jpg" alt="Eram Zoo" />
          </a>
          <a href="/haironik" className="see-more-item">
            <img src="/haironik/1.jpg" alt="Haironik" />
          </a>
          <a href="/astromunch" className="see-more-item">
            <img src="/astromunch/1.jpg" alt="Astromunch" />
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
