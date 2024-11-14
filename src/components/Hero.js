import React from 'react';
import { Link } from 'react-router-dom';
// Images
import WomanImg from '../img/woman_hero.png';

const Hero = () => {
  return (
    <section className='h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
      <div className='container flex justify-around h-full mx-auto'>
        {/* Text */}
        <div className='flex flex-col justify-center'>
          {/* Pretitle */}
          <div className='flex items-center font-semibold uppercase'>
            <div className='w-10 h-[2px] bg-red-500 mr-3'></div>New Trend
          </div>
          {/* Title */}
          <h1 className='text-[70px] leading-[1.1] font-light'>
            AUTUMN SALE STYLISH <br />
            <span className='font-semibold'>WOMENS</span>
          </h1>
          <Link
            to={'/'}
            className='self-start font-semibold uppercase border-b-2 border-primary'
          >
            Discover more
          </Link>
        </div>
        {/* Image */}
        <div className='hidden lg:block'>
          <img src={WomanImg} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
