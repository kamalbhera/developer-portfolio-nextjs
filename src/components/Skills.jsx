import React from 'react';
import Image from 'next/image';
import html from '../public/assets/skills/html.png';
import css from '../public/assets/skills/css.png';
import mongo from '../public/assets/skills/mongo.png';
import github1 from '../public/assets/skills/github1.png';
import node from '../public/assets/skills/node.png';
import tailwind from '../public/assets/skills/tailwind.png';
import nextjs from '../public/assets/skills/nextjs.png';
import react from '../public/assets/skills/react.png';
import javascript from '../public/assets/skills/javascript.png';

const Skills = () => {
  const skill = [
    {
      img: html,
      title: 'HTML',
    },
    {
      img: css,
      title: 'CSS',
    },
    {
      img: javascript,
      title: 'JavaScript',
    },
    {
      img: react,
      title: 'React',
    },
    {
      img: nextjs,
      title: 'Next',
    },

    {
      img: tailwind,
      title: 'Tailwind',
    },
    {
      img: node,
      title: 'NodeJs',
    },
    {
      img: mongo,
      title: 'MongoDB',
    },
    {
      img: github1,
      title: 'Github',
    },
  ];

  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase tracking-widest text-xl text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skill.map((single, i) => (
            <div
              key={i}
              className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={single.img}
                    width="64px"
                    height="64px"
                    alt="html"
                  />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h3>{single.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
