import React from 'react';
import AboutImg from '../public/assets/about.jpg';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div id="about" className="p-2 py-16 w-full md:h-screen flex items-center">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase tracking-widest text-xl text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">I am not your normal developer</p>
          <p className="py-2 text-gray-600">
            In 2021, after my college I started learning HTML,CSS and javascript
            and further learned ReactJs for the role of frontend developer. Now,
            I am working as an Front-end developer while learning backend
            development. I have done some projects in React JS with NodeJs as a
            backend. I am aspiring to learn new technologies.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my projects
            </p>
            </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl about-img" src={AboutImg} alt="about" />
        </div>
      </div>
    </div>
  );
};

export default About;
