import React from 'react';

import Header from './Header';
import Footer from './Footer';

import './Resume.css';

const Resume = () => {
  return (
    <div className="resume">
      <Header />

      <section className="resume__section">
        <h2>Professional Experience</h2>

        <h3>Jetlore, Inc.</h3>
        <h4>Solutions Engineer (Jul 2016 - Oct 2017)</h4>
        <p>
          Worked mostly in post-sales, from directing the technical onboarding of new clients to debugging and
          resolving issues observed by existing clients. Occasionally assisted with pre-sales, creating product demos
          for the sales team and sitting in on sales calls to address more technical questions and concerns that leads
          may have.
        </p>
        <p>Sample Demos:</p>
        <ul>
          <li><a href="http://demo.jetlore.com/nr-demo/men-clothing.html" target="_blank">Nordstrom Rack Category Page Demo</a></li>
          <li><a href="http://demo.jetlore.com/wine-demo/" target="_blank">Wine.com Home Page Demo</a></li>
          <li><a href="http://demo.jetlore.com/zl-demo/just-for-you.html" target="_blank">Zalora Just For You Demo</a></li>
          <li><a href="http://demo.jetlore.com/art-landing-page/" target="_blank">Art.com Email Landing Page Demo</a></li>
        </ul>

        <h3>iSmart Alarm, Inc.</h3>
        <h4>Marketing Analyst (Oct 2015 - Jun 2016)</h4>
        <p>
          Conducted research and managed multiple marketing campaigns in preparation for new product release. Largest
          projects that I managed were the Indiegogo and Kickstarter campaigns for the new product, which collectively
          raised over $450,000. During my time at iSmartAlarm I also realized I wanted to utilize my technical
          knowledge more in my career, so during my last couple months there I pushed for a major website redesign. I
          noticed a lot of flaws with the way the website was designed at the time that led to a lot of customers not
          making it through the purchase funnel. I was able to translate marketing and sales goals to technical specs for
          the engineering team and make the redesign process a lot more efficient.
        </p>
        <p>Crowdfund Campaigns:</p>
        <ul>
          <li><a href="https://www.indiegogo.com/projects/spot-the-coolest-smart-home-security-camera-ever--2#/" target="_blank">Indiegogo Campaign</a></li>
          <li><a href="https://www.kickstarter.com/projects/ismartalarm/spot-the-coolest-hd-smart-home-camera-ever" target="_blank">Kickstarter Campaign</a></li>
        </ul>
        <h3>Industrial Technology Research Institute</h3>
        <h4>IT Engineer Intern (Jun 2015 - Sep 2015)</h4>
        <p>
          Provided internal technical support to all departments of the company. Tasks ranged from troubleshooting issues
          on employee laptops to monitoring AWS and server heatlh.
        </p>

        <h3>En Route Urban Dance Showcase</h3>
        <h4>Business Operations Manager (Jun 2014 - Jun 2017)</h4>
        <p>
          Co-founded and successfully produced the first annual urban dance showcase in the Monterey Bay Area. Provided
          leadership and direction to all aspects of marketing, fundraising, and logistics for the first 3 years. En
          Route recently just had it's 4th annual show this past April. En Route is now hosted by Haluan, a competitive
          urban dance team based in Santa Cruz.
        </p>
      </section>

      <section className="resume__section">
        <h2>Skills</h2>

        <h3>Professional Experience</h3>
        <p>Languages: Javascript (ES6/Babel), HTML, CSS, SQL, Scala, Unix</p>
        <p>Software/Tools: Git, Cassandra, MongoDB, Postgres, Chrome Developer Tools, Charles Proxy, Datadog, Confluence, Rundeck</p>
        <p>Ticketing: JIRA, Zendesk</p>

        <h3>Working Knowledge</h3>
        <p>Jenkins, Jasmine, Webpack, React, Bootstrap</p>
      </section>

      <section className="resume__section">
        <h2>Other Work Experience</h2>

        <h4>Gen Korean BBQ (Fremont)</h4>
        <h5>Server/Barback (Oct 2017 - Mar 2018)</h5>

        <h4>Kuma Escape Room</h4>
        <h5>Game Host (Sep 2015 - Feb 2017)</h5>

        <h4>University of California, Santa Cruz</h4>
        <h5>Accounting Teaching Assistant (Sep 2012 - Jun 2013)</h5>
      </section>

      <section className="resume__section">
        <h2>Positions Held</h2>

        <h4>Haluan Hip-Hop Dance Troupe</h4>
        <h5>Director (Jun 2014 - Jun 2015)</h5>

        <h4>To Write Love On Her Arms (UCSC Chapter)</h4>
        <h5>Publicity Lead (Jun 2013 - Jun 2015)</h5>


        <h4>Filipino Student Association (UCSC)</h4>
        <h5>Media Relations (Jun 2013 - Jun 2014)</h5>
      </section>

      <section className="Resume__section">
        <h2>PDF Download</h2>
        <a className="pdf-btn btn btn-large" href={`${process.env.PUBLIC_URL}/RayChung-Resume.pdf`} target="_blank">RayChung-Resume.pdf</a>
      </section>
      <Footer />
    </div>
  );
}

export default Resume;
