import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';
import AboutCard from '../pages/comp/aboutCard';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      {/* <AboutCard/> */}
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            Who we are ?
          </p>
          <h2 className='py-4'>Who we are ?</h2>
          <p className='py-2 text-gray-600'>
            We are working hard to solves problems in Africa
          </p>
          {/* <div>
            <AboutCard />
          </div> */}
          

          <p className='py-2 text-gray-600'>
            We are a team of experienced professionals. We are growing. 
            After several years of experienced in some of the high techlogies we 
            recognized that our technical skills, experiences , and our African 
            values ca be put togather to create technologies that will transform lives in Africa.
          </p>
          <p className='py-2 text-gray-600'>
            We believe that people are the secret to success. 
            By empowering them, we create value for our customers 
            and positively impact the world.
          </p>
          {/* <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link> */}
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
        <div>
          <h2 className='py-4'>200+</h2>
          <p className='py-2 text-gray-600'>
            Apps and websites developed
          </p>
          <h2 className='py-4'>30+</h2>
          <p className='py-2 text-gray-600'>
            Professionals globally
          </p>
          <h2 className='py-4'>5</h2>
          <p className='py-2 text-gray-600'>
            Global Partners
          </p>
        </div>
        <div>
          <h2 className='py-4'>core values</h2>
          <h2 className='py-4'>innovation</h2>
          <h2 className='py-4'>custemer value</h2>
        </div>
      </div>
    </div>
    // <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
    //   <AboutCard/>
    // </div>
  );
};

export default About;
