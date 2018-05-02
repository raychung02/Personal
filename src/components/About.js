import React from 'react';

import Header from './Header';
import Footer from './Footer';

const About = () => {
  return (
    <div className="About">
      <Header />
      <p>About me</p>
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
        DJ: I only started messing with a DJ controller this year and have only played for fun at house parties, but
        you know if your company happy hour ever needs someone to spin I'm here!
      </p>
      <Footer />
    </div>
  );
}

export default About;
