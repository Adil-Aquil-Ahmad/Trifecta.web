import React from 'react';
import './SponsorsPage.css';

function SponsorsPage() {
  // const titleSponsors = [
  //   { name: 'Company Name XYZW company Inc. LLC', logo: null },
  //   { name: 'Company Name XYZW company Inc. LLC', logo: null },
  // ];
  const MMarketMafia = [
    { name: 'Market Mafiaa \nConnections Partner', logo: '/PICS/Sponsors/6th%20logo.jpg' },
    { name: 'OppSkills \nPlatform Partner', logo: '/PICS/Sponsors/Square%20color%20Single%20Tag.svg' },
    { name: 'GlobalCert \nCertification Partner', logo: '/PICS/Sponsors/GlobalCert_Logo_No_Background2.png' },
    { name: 'Five \nGifting Partner', logo: '/PICS/Sponsors/5.jpeg' },
  ];

  // const goldSponsors = Array(4).fill(null).map((_, i) => ({
  //   name: 'Company Name XYZW company Inc. LLC',
  //   logo: null
  // }));

  // const silverSponsors = Array(8).fill(null).map((_, i) => ({
  //   name: 'Company Name XYZW company Inc. LLC',
  //   logo: null
  // }));

  return (
    <div className="sponsors-page">
      <div className="sponsors-content">
        {/* <div className="sponsor-tier">
          <h2 className="sponsor-tier-title">Title Sponsors</h2>
          <div className="sponsor-grid title-sponsors-grid">
            {titleSponsors.map((sponsor, index) => (
              <div key={index} className="sponsor-card">
                <div className="sponsor-logo" style={{ backgroundImage: sponsor.logo ? `url(${sponsor.logo})` : 'none' }}></div>
                <div className="sponsor-info">
                  <div className="sponsor-name">{sponsor.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sponsor-tier">
          <h2 className="sponsor-tier-title">Gold Sponsors</h2>
          <div className="sponsor-grid gold-sponsors-grid">
            {goldSponsors.map((sponsor, index) => (
              <div key={index} className="sponsor-card">
                <div className="sponsor-logo" style={{ backgroundImage: sponsor.logo ? `url(${sponsor.logo})` : 'none' }}></div>
                <div className="sponsor-info">
                  <div className="sponsor-name">{sponsor.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        <div className="sponsor-tier">
          <h2 className="sponsor-tier-title">Sponsors</h2>
          <div className="sponsor-grid silver-sponsors-grid">
            {MMarketMafia.map((sponsor, index) => (
              <div key={index} className="sponsor-card">
                <div className="sponsor-logo" style={{ backgroundImage: sponsor.logo ? `url(${sponsor.logo})` : 'none' }}></div>
                <div className="sponsor-info">
                  <div className="sponsor-name">{sponsor.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SponsorsPage;
