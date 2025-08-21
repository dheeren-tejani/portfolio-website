import React from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';
import profile from '../data/profile.json';

const ProfileBanner: React.FC = () => {
  // Map static data to expected fields
  const bannerData = {
    headline: profile.title, // e.g., 'Frontend Developer'
    profileSummary: profile.bio, // e.g., 'A passionate web developer and lifelong learner.'
    resumeLink: { url: '#' }, // Placeholder, update with your resume link
    linkedinLink: profile.social?.linkedin || '#',
    backgroundImage: { url: '' }, // Not used in this component, but required by type
  };

  const handlePlayClick = () => {
    window.open(bannerData.resumeLink.url, '_blank');
  };

  const handleLinkedinClick = () => {
    window.open(bannerData.linkedinLink, '_blank');
  };

  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline" id='headline'>{bannerData.headline}</h1>
        <p className="banner-description">
          {bannerData.profileSummary}
        </p>

        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="Linkedin" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
