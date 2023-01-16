import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#8c77f6] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Chidinma Onyemelukwe, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am a full stack software engineer with a passion for creating intuitive and 
                user-friendly software. Skilled in various front-end and back-end technologies, 
                I bring projects from concept to launch. My portfolio showcases my diverse range 
                of experience and problem-solving abilities. Always seeking to learn and grow, 
                I am excited to continue my career and make an impact on any project I am a part of.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
