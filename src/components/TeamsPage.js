import React, { useState } from 'react';
import './TeamsPage.css';
import TeamCard from './TeamCard';

function TeamsPage() {
  const [activeTeam, setActiveTeam] = useState('organising');

  const LeadOrganisers = [
    { name: 'Vasu Bhatia', post: 'President', image: '/PICS/Teams/vasu%20bhatia.jpg', linkedin: 'https://www.linkedin.com/in/vasu-bhatia/' },
    { name: 'Ashmit', post: 'Vice President', image: '/PICS/Teams/Ashmit.jpg', linkedin: null },
    { name: 'Moksha', post: 'General Secretary', image: '/PICS/Teams/moksh.jpeg', linkedin: 'https://www.linkedin.com/in/moksha-sharma-a232bb21b/' },
    { name: 'Parth Singh', post: 'Tech Master', image: '/PICS/Teams/Parth.jpg', linkedin: null },
  ];

  const organisingHeads = [
    { name: 'Riya', post: 'PR Head', image: '/PICS/Teams/riya.jpg', linkedin: null },
    { name: 'Adil', post: 'Tech Head', image: '/PICS/Teams/adil.png', linkedin: null },
    { name: 'Gauranvi', post: 'Creative Head', image: '/PICS/Teams/gauranvi.webp', linkedin: null },
    { name: 'Abhimanyu', post: 'UI Head', image: '/PICS/Teams/Abhi.jpeg', linkedin: null },
    { name: 'Vishesh', post: 'Multimedia Head', image: '/PICS/Teams/Vishesh.JPG', linkedin: null },
    { name: 'Anushka', post: 'Socialmedia Head', image: '/PICS/Teams/anushka.png', linkedin: null },
    { name: 'Alankrit', post: 'Operations Head', image: '/PICS/Teams/Alankrit.JPG', linkedin: null },
    { name: 'Sneha', post: 'Vigilance Head', image: '/PICS/Teams/sneha.jpg', linkedin: null },
    { name: 'Adya', post: 'Hospitality Head', image: '/PICS/Teams/Adya.jpg', linkedin: null },
    { name: 'Akshat', post: 'Sponsorship Head', image: '/PICS/Teams/Akshat.webp', linkedin: null },
    { name: 'Prikshit', post: 'Mulimedia Co-Head', image: '/PICS/Teams/Prikshit.jpg', linkedin: null },
  ];

  const organisingTeam = [
    { name: 'Sahil', post: 'Pr Team', image: '/PICS/Teams/sahil.jpg', linkedin: null },
    { name: 'Nirali', post: 'Pr Team', image: '/PICS/Teams/nirali.jpg', linkedin: null },
    { name: 'Sarthak', post: 'Pr Team', image: '/PICS/Teams/Sarthak.jpg', linkedin: null },
    { name: 'Anand', post: 'Sponsorship Team', image: '/PICS/Teams/anand.jpg', linkedin: null },
    { name: 'Abhinav', post: 'Sponsorship Team', image: '/PICS/Teams/AbhinavChauhan.jpg', linkedin: null },
    { name: 'Harman', post: 'Sponsorship Team', image: '/PICS/Teams/harman.jpg', linkedin: null },
    { name: 'Arindam', post: 'Tech Team', image: '/PICS/Teams/Arindam.jpg', linkedin: null },
    { name: 'Laksh', post: 'Tech Team', image: '/PICS/Teams/Laksh.jpg', linkedin: null },
    { name: 'Naina', post: 'Tech Team', image: '/PICS/Teams/Naina.jpg', linkedin: null },
    { name: 'Anmol', post: 'Tech Team', image: '/PICS/Teams/Anmol.jpg', linkedin: null },
    { name: 'Dwij', post: 'Tech Team', image: '/PICS/Teams/Dwij.jpg', linkedin: null },
    { name: 'Anika', post: 'Operations Team', image: '/PICS/Teams/AnikaAgarwal.jpg', linkedin: null },
    { name: 'Prakhar', post: 'Operations Team', image: '/PICS/Teams/Prakhar.jpg', linkedin: null },
    { name: 'Vaasu', post: 'Operations Team', image: '/PICS/Teams/Vaasu.jpg', linkedin: null },
    { name: 'Mansi', post: 'Operations Team', image: null, linkedin: null },
    { name: 'Anshika', post: 'Vigilance Team', image: '/PICS/Teams/Anshika.jpg', linkedin: null },
    { name: 'Kshitij', post: 'Vigilance Team', image: '/PICS/Teams/kshitij].jpg', linkedin: null },
    { name: 'Sakshi', post: 'Vigilance Team', image: '/PICS/Teams/Sakshi.png', linkedin: null },
    { name: 'Rashi', post: 'Vigilance Team', image: '/PICS/Teams/Rashi.jpg', linkedin: null },
    { name: 'Pragyadeep', post: 'Vigilance Team', image: null, linkedin: null },
    { name: 'Ekisha', post: 'Multimedia Team', image: null, linkedin: null },
    { name: 'Akshat', post: 'Social Media Team', image: '/PICS/Teams/AkshatGarg.jpg', linkedin: null },
    { name: 'Ananya', post: 'Social Media Team', image: '/PICS/Teams/Ananyagoel.jpg', linkedin: null },
    { name: 'Rupesh', post: 'Creative Team', image: '/PICS/Teams/Rupesh.png', linkedin: null },
    { name: 'Khushi', post: 'Creative Team', image: '/PICS/Teams/Khushi.jpg', linkedin: null },
    { name: 'Vaishnavi', post: 'Creative Team', image: '/PICS/Teams/Vaishnavi.jpg', linkedin: null },
    { name: 'Khwahish', post: 'Hospitality Team', image: '/PICS/Teams/Khwahish.jpg', linkedin: null },
    { name: 'Nandini', post: 'Hospitality Team', image: '/PICS/Teams/Nandini.jpg', linkedin: null },
    { name: 'Riya', post: 'Hospitality Team', image: null, linkedin: null },
    { name: 'Gouri', post: 'Hospitality Team', image: '/PICS/Teams/gouri.jpg', linkedin: null },
    { name: 'Tanay', post: 'Hospitality Team', image: '/PICS/Teams/Tanay.jpg', linkedin: null },
    { name: 'Saanvi', post: 'Hospitality Team', image: '/PICS/Teams/saanvi.jpeg', linkedin: null },
  ]

  const judgingTeam = Array(14).fill(null).map((_, i) => ({
    name: 'Announcing Soon',
    post: 'Judge'
  }));

  return (
    <div className="teams-page">
      <div className="teams-content">
        <div className="team-division-header">
          <div className="team-gradient-bar">
            <div className="gradient-rect"></div>
            <div className="team-division-tabs">
              <div 
                className={`team-tab ${activeTeam === 'organising' ? 'active' : ''}`}
                onClick={() => setActiveTeam('organising')}
              >
                <div className="team-tab-text">Organising Team</div>
                <div className="team-tab-underline"></div>
              </div>
              <div 
                className={`team-tab ${activeTeam === 'judging' ? 'active' : ''}`}
                onClick={() => setActiveTeam('judging')}
              >
                <div className="team-tab-text">Judging Team</div>
                <div className="team-tab-underline"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="team-sections">
          {activeTeam === 'organising' ? (
            <div className="organising-team-sections">
              <div className="team-section">
                <h2 className="team-section-title">Lead Organisers</h2>
                <div className="team-scroll-container">
                  <div className="scroll-gradient-mask"></div>
                  <div className="team-scroll-content">
                    <div className="team-cards-row">
                      {LeadOrganisers.map((member, index) => (
                        <TeamCard key={index} name={member.name} post={member.post} image={member.image} linkedin={member.linkedin} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="team-section">
                <h2 className="team-section-title">Organising Heads</h2>
                <div className="team-scroll-container">
                  <div className="scroll-gradient-mask"></div>
                  <div className="team-scroll-content">
                    <div className="team-cards-row">
                      {organisingHeads.map((member, index) => (
                        <TeamCard key={index} name={member.name} post={member.post} image={member.image} linkedin={member.linkedin} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="team-section">
                <h2 className="team-section-title">Organising Team</h2>
                <div className="team-scroll-container">
                  <div className="scroll-gradient-mask"></div>
                  <div className="team-scroll-content">
                    <div className="team-cards-row">
                      {organisingTeam.map((member, index) => (
                        <TeamCard key={index} name={member.name} post={member.post} image={member.image} linkedin={member.linkedin}/>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="team-section">
                <h2 className="team-section-title">Volunteers</h2>
                <div className="team-scroll-container">
                  <div className="scroll-gradient-mask"></div>
                  <div className="team-scroll-content">
                    <div className="team-cards-row">
                      {organisingTeam.map((member, index) => (
                        <TeamCard key={index} name={'coming'} post={'soon'} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="judging-team-section">
              <div className="judging-team-grid">
                {judgingTeam.map((member, index) => (
                  <TeamCard key={index} name={member.name} post={member.post} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeamsPage;
