import React from 'react';

import Header from './Header';
import Footer from './Footer';

import './Portfolio.css';

import haluan from '../assets/projects/haluan.jpg';
import enroute from '../assets/projects/enroute.jpg';
import er2015cover from '../assets/programs/er2015cover.jpg';
import er2016cover from '../assets/programs/er2016cover.jpg';
import er2017cover from '../assets/programs/er2017cover.jpg';
import pcccover from '../assets/programs/pcc-cover.jpg';

import erflyer from '../assets/flyers/enrouteflyer.jpg';
import fsacg from '../assets/flyers/fsacg.jpg';
import fsafr from '../assets/flyers/fsafr.jpg';
import haluanfall13 from '../assets/flyers/haluanauditions1314.jpg';
import haluanfall14 from '../assets/flyers/haluanauditions1415.jpg';
import haluanwin15 from '../assets/flyers/haluanwauditions1415.jpg';
import hws1 from '../assets/flyers/hws1.jpg';
import hws2 from '../assets/flyers/hws2.jpg';
import hws3 from '../assets/flyers/hws3.jpg';
import hws4 from '../assets/flyers/hws4.jpg';
import kampdinner from '../assets/flyers/kampdinner.jpg';
import pccflyer from '../assets/flyers/pccflyer.jpg';

import black92 from '../assets/clothing/92black.jpg';
import coreback1314 from '../assets/clothing/coreback1314.jpg';
import coreback1415 from '../assets/clothing/coreback1415.jpg';
import corefront1314 from '../assets/clothing/corefront1314.jpg';
import corefront1415 from '../assets/clothing/corefront1415.jpg';
import ershirt from '../assets/clothing/enrouteshirt.jpg';
import fgback from '../assets/clothing/fgback14.jpg';
import fgfront from '../assets/clothing/fgfront14.jpg';
import haluanjersey from '../assets/clothing/haluanjersey.jpg';
import pccback from '../assets/clothing/pccback.jpg';
import pccfront from '../assets/clothing/pccfront.jpg';
import white92 from '../assets/clothing/92white.jpg';

const Portfolio = () => {
  return (
    <div className="Work">
      <Header />
      <h2>Portfolio</h2>

      <section className="Work__project">
        <h3>Projects</h3>
        <div className="row">
          <div className="col-sm-6 col-md-6">
            <img className="preview" src={enroute} alt="En Route Website" />
            <h4><a href="https://raychung02.github.io/EnRouteWebsite/" target="_blank">En Route Website</a></h4>
            <p>
              Fully responsive website created for an annual urban dance showcase based in the Monterey Bay Area that I
              cofounded in 2015. This website was used for the first 2 years of the showcase (2015-2016).
            </p>
            <h5>Built With:</h5>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Javascript</li>
              <li>jQuery</li>
              <li>PHP</li>
            </ul>
            <h4><a href="https://github.com/raychung02/EnRouteWebsite">Github Repo</a></h4>
          </div>
          <div className="col-sm-6 col-md-6">
            <img className="preview" src={haluan} alt="Haluan Website" />
            <h4><a href="https://raychung02.github.io/HaluanWebsite/" target="_blank">Haluan Website</a></h4>
            <p>
              Fully responsive website created for Haluan, a competitive urban dance team based in Santa Cruz, CA. This
              website was used from 2015-2016.
            </p>
            <h5>Built With:</h5>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Javascript</li>
              <li>PHP</li>
            </ul>
            <h4><a href="https://github.com/raychung02/HaluanWebsite">Github Repo</a></h4>
          </div>
        </div>
      </section>

      <section className="Work__project">
        <h3>Event Programs</h3>
        <h4>Created using Adobe Photshop, Illustrator and Indesign.</h4>
        <div className="row">
          <div className="col-sm-6 col-md-3">
            <img className="preview" src={er2015cover} alt="En Route 2015 Program" />
            <h4><a href="../assets/programs/er2015.pdf" target="_blank">En Route 2015</a></h4>
          </div>
          <div className="col-sm-6 col-md-3">
            <img className="preview" src={er2016cover} alt="En Route 2016 Program" />
            <h4><a href="../assets/programs/er2016.pdf" target="_blank">En Route 2016</a></h4>
          </div>
          <div className="col-sm-6 col-md-3">
            <img className="preview" src={er2017cover} alt="En Route 2017 Program" />
            <h4><a href="../assets/programs/er2017.pdf" target="_blank">En Route 2017</a></h4>
          </div>
          <div className="col-sm-6 col-md-3">
            <img className="preview" src={pcccover} alt="PCC Program" />
            <h4><a href="../assets/programs/pcc.pdf.pdf" target="_blank">PCC 2014</a></h4>
          </div>
        </div>
      </section>

      <section className="Work__project">
        <h3>Event Flyers</h3>
        <h4>Created using Adobe Photshop and Illustrator.</h4>
        <div className="row">
          <div className="col-sm-6 col-md-3">
            <img className="preview" src={erflyer} alt="En Route 2015 Flyer" />
            <img className="preview" src={pccflyer} alt="PCC 2014 Flyer" />
            <img className="preview" src={hws1} alt="Haluan Workshop 1" />
            <img className="preview" src={hws2} alt="Haluan Workshop 2" />
          </div>
          <div className="col-sm-6 col-md-3">
            <img className="preview" src={fsafr} alt="FSA Fall Reception" />
            <img className="preview" src={haluanfall13} alt="Haluan Fall Auditions 2013" />
            <img className="preview" src={hws3} alt="Haluan Workshop 3" />
            <img className="preview" src={hws4} alt="Haluan Workshop 4" />
          </div>
          <div className="col-md-6">
            <img className="preview" src={fsacg} alt="FSA Community Gathering" />
            <img className="preview" src={kampdinner} alt="Kamp Dinner" />
            <img className="preview" src={haluanfall14} alt="Haluan Fall Auditions 2014" />
            <img className="preview" src={haluanwin15} alt="Haluan Winter Auditions 2015" />
          </div>
        </div>
      </section>

      <section className="Work__project">
        <h3>Clothing</h3>
        <h4>Created using Adobe Photoshop and Illustrator</h4>
        <div className="row">
          <div className="col-md-6">
            <img className="preview" src={black92} alt="Haluan 92 Shirt Black" />
            <img className="preview" src={white92} alt="Haluan 92 Shirt White" />
            <img className="preview" src={ershirt} alt="En Route 2015 Shirt" />
            <img className="preview" src={haluanjersey} alt="Haluan Jersey" />
          </div>
          <div className="col-md-3">
            <img className="preview" src={corefront1314} alt="Haluan 92 Shirt Black" />
            <img className="preview" src={coreback1314} alt="Haluan 92 Shirt White" />
            <img className="preview" src={pccfront} alt="En Route 2015 Shirt" />
            <img className="preview" src={pccback} alt="Haluan Jersey" />
          </div>
          <div className="col-md-3">
            <img className="preview" src={corefront1415} alt="Haluan 92 Shirt Black" />
            <img className="preview" src={coreback1415} alt="Haluan 92 Shirt White" />
            <img className="preview" src={fgfront} alt="En Route 2015 Shirt" />
            <img className="preview" src={fgback} alt="Haluan Jersey" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Portfolio;