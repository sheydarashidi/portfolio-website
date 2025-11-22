"use client";

import { useState } from "react";
import "./motion-graphics.css";

export default function MotionGraphicsPage() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openVideo = (videoSrc) => {
    setSelectedVideo(videoSrc);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <main className="motion-graphics-main">
      <div className="header-photo">
        <img src="/motion/1.jpg" alt="Motion Graphics Header" />
      </div>

      <div className="header-content">
        {/* Main title with emoji injected via CSS */}
        <h1 className="motion-graphics-title">Motion Graphics</h1>

        <table className="project-info-table">
          <tbody>
            <tr>
              <td className="table-icon">
                <img src="/motion/tags.png" alt="Tags" />
              </td>
              <td className="table-label">Tags</td>
              <td className="table-value">
                <div className="tags-container">
                  <span className="tag tag-motion-graphics">Motion Graphics</span>
                </div>
              </td>
            </tr>

            <tr>
              <td className="table-icon">
                <img src="/motion/date.png" alt="Date" />
              </td>
              <td className="table-label">Date</td>
              <td className="table-value">2020-2025</td>
            </tr>

            <tr>
              <td className="table-icon">
                <img src="/motion/collaborators.png" alt="Collaborators" />
              </td>
              <td className="table-label">Collaborators</td>
              <td className="table-value">Various Clients</td>
            </tr>

            <tr>
              <td className="table-icon">
                <img src="/motion/myrole.png" alt="My Role" />
              </td>
              <td className="table-label">My Role</td>
              <td className="table-value">
                I curated a selection of motion graphics I've created for various brands and projects.
              </td>
            </tr>
          </tbody>
        </table>

        {/* Video Thumbnail Gallery */}
        <div className="thumbnail-gallery">
          <div className="thumbnail-item video-thumbnail" onClick={() => openVideo("/astromunch/2.mp4")}>
            <video className="thumbnail-video" muted>
              <source src="/astromunch/2.mp4" type="video/mp4" />
            </video>
            <div className="play-overlay">
              <div className="play-button">▶</div>
            </div>
          </div>
          <div className="thumbnail-item video-thumbnail" onClick={() => openVideo("/eramzoo/5.mp4")}>
            <video className="thumbnail-video" muted>
              <source src="/eramzoo/5.mp4" type="video/mp4" />
            </video>
            <div className="play-overlay">
              <div className="play-button">▶</div>
            </div>
          </div>
          <div className="thumbnail-item video-thumbnail" onClick={() => openVideo("/motion/2.mp4")}>
            <video className="thumbnail-video" muted>
              <source src="/motion/2.mp4" type="video/mp4" />
            </video>
            <div className="play-overlay">
              <div className="play-button">▶</div>
            </div>
          </div>
          <div className="thumbnail-item video-thumbnail" onClick={() => openVideo("/motion/3.mp4")}>
            <video className="thumbnail-video" muted>
              <source src="/motion/3.mp4" type="video/mp4" />
            </video>
            <div className="play-overlay">
              <div className="play-button">▶</div>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="video-modal" onClick={closeVideo}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={closeVideo}>×</button>
              <video controls autoPlay className="modal-video">
                <source src={selectedVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}

        {/* Bottom table with Tools and Reflections */}
        <table className="bottom-info-table">
          <tbody>
            <tr>
              <td className="bottom-table-label">🧰  Tools I used</td>
              <td className="bottom-table-value">
                ✅ Adobe After Effects<br />
                ✅ Adobe Photoshop<br />
                ✅ Adobe Illustrator
              </td>
            </tr>
            <tr>
              <td className="bottom-table-label">✍🏻  Reflections</td>
              <td className="bottom-table-value">Creating motion graphics has been one of the most dynamic and rewarding aspects of my design practice. Each project challenged me to think about storytelling through movement, timing, and visual rhythm. From conceptualizing animations to executing complex transitions, I've learned to balance technical precision with creative expression. Working across different styles and brand identities has strengthened my ability to adapt motion design principles to various contexts while maintaining engaging and purposeful animations that communicate effectively and capture attention.</td>
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
          <a href="/social-media" className="see-more-item">
            <img src="/Socialmedia/1.jpeg" alt="Social Media Content" />
          </a>
          <a href="/true-iran" className="see-more-item">
            <img src="/trueiran/1.jpg" alt="True Colors of Iran" />
          </a>
          <a href="/papco" className="see-more-item">
            <img src="/Papco/1.jpg" alt="Papco" />
          </a>
          <a href="/haironik" className="see-more-item">
            <img src="/Haironik/1.jpg" alt="Haironik" />
          </a>
          <a href="/afba2" className="see-more-item">
            <img src="/afba2/1.jpg" alt="AFBA #2" />
          </a>
          <a href="/astromunch" className="see-more-item">
            <img src="/astromunch/1.jpg" alt="Astromunch" />
          </a>
          <a href="/eram-zoo" className="see-more-item">
            <img src="/eramzoo/1.jpg" alt="Eram Zoo" />
          </a>
        </div>
      </div>
    </main>
  );
}
