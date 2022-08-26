import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Testimonial from '../pages/comp/testimonial';
import Carousel from "../pages/comp/mainTestmonial";
import Test from '../pages/comp/test';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <div>
            {/* <Carousel /> */}
            <Test />
          </div>
          
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            Work with a company that solve your problems 
            and help you accelerate your business!R
          </p>
          <h1 className='text-[#5651e5]'>
            TechEthio <span className='text-[#5651e5]'> Clint</span>
          </h1>
          <h2 className='py-2 text-gray-700'>
            Work with a company that solve your problems 
            and help you accelerate your business!
          </h2>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            See how TechEthio will help you speedup your business operations
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href=''
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            {/* <a
              href=''
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a> */}
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            {/* <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
