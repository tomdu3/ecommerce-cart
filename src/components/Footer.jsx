import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>

          <div className="text-center text-sm">
            <p>
              <FontAwesomeIcon icon={faCopyright} className="mr-1" /> {currentYear} TomiStore. All rights reserved.
            </p>
            <p className="mt-2">Made with ❤️ by TomDcoding</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

