import React from 'react';

import Header from './Header';
import Footer from './Footer';

import './Home.css';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="home">
        <h2>Hi, I'm Ray Chung</h2>
        <p>Former Solutions Engineer at Jetlore, Inc.</p>
      </div>
      <div>
        <h3>About Me</h3>

        <p>I recently moved down to Los Angeles from the Bay Area.</p>
        <p>I enjoy dancing, traveling and DJing.</p>
        <p>
          Dance: I used to dance on a competitive urban dance team in San Jose called Syndicate. Currently I am just
          taking dance classes occasionally, but I hope to join a new team around here soon!
        </p>
        <p>
          Travel: I try to travel internationally at least twice a year and domestically whenever I can. My most recent
          international trip was to Japan (Tokyo and Osaka) last fall, and domestically I recently went to Portland for
          a week in January.
        </p>
        <p>
          DJ: I only started messing with a DJ controller this year and have only played for fun at house parties, but if your company happy hour ever needs someone to spin I'm here!
        </p>
      </div>
      <div>
        <h3>Contact</h3>
        <p>Mail me at <a href="mailto:raychung02@gmail.com" target="_blank">raychung02@gmail.com</a></p>
        <p>Call me at <a href="tel:+15103585635" target="_blank">(510)-358-5635</a></p>
        <p>Visit my <a href="https://www.linkedin.com/in/raychung02/" target="_blank">LinkedIn</a></p>
        <p>View my work on <a href="https://github.com/raychung02" target="_blank">GitHub</a></p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
