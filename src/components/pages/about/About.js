import React from 'react';
import AboutIntro from './AboutIntro';
import AboutMission from './AboutMission';
import AboutStory from './AboutStory';
import AboutMilestone from './AboutMilestone';

import './About.css'; // nếu bạn có CSS dùng chung

const About = () => {
  return (
    <div className="about-container">
      <AboutIntro />
      <AboutMission />
      <AboutStory />
      <AboutMilestone />
    </div>
  );
};

export default About;
