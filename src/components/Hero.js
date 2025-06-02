// The Hero component renders a promotional banner with a message and an image
import React from 'react';
import { Link } from 'react-router-dom';
// Images
import WomanImg from '../img/woman_hero.png';

const Hero = () => {
  return (
    <section className='h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
      {/* Defining a large section with a background image and responsive styles */}
      <div className='container flex justify-around h-full mx-auto'>
        {/* Left Side: Promotional Text */}
        <div className='flex flex-col justify-center'>
          {/* Pretitle */}
          <div className='flex items-center font-semibold uppercase'>
            {/* Red line decoration */}
            <div className='w-10 h-[2px] bg-red-500 mr-3'></div>New Trend
          </div>
          {/* Title */}
          <h1 className='text-[70px] leading-[1.1] font-light'>
            AUTUMN COLLECTION
          </h1>
          {/* Subheading */}
          <p className='mb-8 text-2xl font-semibold text-gray-600'>
            EFFORTLESS STYLE INSPIRED BY THE SEASON
          </p>
          {/* Call-to-Action Button: Link to discover more */}
          <Link
            to={'/'}
            className='self-start font-semibold uppercase border-b-2 border-primary'
          >
            Discover more
          </Link>
        </div>
        {/* Right Side: Hero Image */}
        <div className='hidden lg:block'>
          {/* Image is only visible on large screens (lg and above) */}
          <img src={WomanImg} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
