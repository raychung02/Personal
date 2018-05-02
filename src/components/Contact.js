import React from 'react';

import Header from './Header';
import Footer from './Footer';

const Contact = () => {
  return (
    <div>
      <Header />
      <div>
        <h3>Contact Me</h3>
        <p>Mail me at <a href="mailto:raychung02@gmail.com" target="_blank">raychung02@gmail.com</a></p>
        <p>Call me at <a href="tel:+15103585635" target="_blank">(510)-358-5635</a></p>
        <p>Visit my <a href="https://www.linkedin.com/in/raychung02/" target="_blank">LinkedIn</a></p>
        <p>View my work on <a href="https://github.com/raychung02" target="_blank">GitHub</a></p>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
