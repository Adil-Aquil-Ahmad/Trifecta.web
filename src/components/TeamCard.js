import React from 'react';
import './TeamCard.css';

function TeamCard({ name, post, image, linkedin }) {
  const handleImageClick = () => {
    if (linkedin) {
      window.open(linkedin, '_blank');
    }
  };

  return (
    <div className="team-card">
      <div 
        className="team-member-image" 
        style={{ backgroundImage: image ? `url(${image})` : 'none', cursor: linkedin ? 'pointer' : 'none' }}
        onClick={handleImageClick}
      >
        {linkedin && (
          <div className="linkedin-badge">
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.637h3.554v1.364c.429-.662 1.196-1.608 2.906-1.608 2.122 0 3.714 1.388 3.714 4.373v5.508zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.707 0-.955.771-1.71 1.958-1.71 1.187 0 1.914.757 1.948 1.71 0 .949-.761 1.707-1.991 1.707zm1.581 11.597H3.635V9.27h3.283v11.182zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
            </svg>
          </div>
        )}
      </div>
      <div className="team-member-info">
        <div className="member-name">{name}</div>
        <div className="member-post">{post}</div>
      </div>
    </div>
  );
}

export default TeamCard;