// About.js

import React from 'react';
import Navbar from '../components/Navbar'; // Import your Navbar component

const About = () => {
  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
      <h1 className="text-3xl font-bold mt-4">About Us</h1>
      <p className="mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        aliquet libero eu ex convallis, ac vulputate dolor ultrices.
        Curabitur hendrerit, odio eu vestibulum aliquam, elit libero
        bibendum urna, et fringilla tortor purus in elit.
      </p>
      {/* Add more content here */}
    </div>
  );
};

export default About;
