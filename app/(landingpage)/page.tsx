import React from 'react';
import './_styles/pages/_default.scss'; // Import the page-specific styles
import { FaYoutube, FaTwitter, FaReddit } from 'react-icons/fa';
import HomeImage from './_images/dashboard-screen.png';
import Image from 'next/image';

const Page: React.FC = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Create Your Own Social Performance Dashboard!</h1>
        <p>
          Analyze and improve your social media presence with real-time
          insights.
        </p>
        <div className="home-content-signup">
          <a
            className="signup-button"
            href="http://localhost:3000/api/auth/login"
          >
            Sign up now!
          </a>
          <div className="home-content-signup-platforms">
            <FaYoutube />
            <FaTwitter />
            <FaReddit />
          </div>
        </div>
      </div>
      <div className="home-image">
        <div className="image-holder">
          <Image src={HomeImage} alt="Dashboard screen" />
          <div className="image-holder-underlay"></div>
        </div>
      </div>
    </div>
  );
};

export default Page;
