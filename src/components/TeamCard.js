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
      </div>
      <div className="team-member-info">
        <div className="member-name">{name}</div>
        <div className="member-post">{post}</div>
      </div>
    </div>
  );
}

export default TeamCard;