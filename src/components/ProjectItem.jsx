import Link from 'next/link';
import React from 'react';
import { FaExternalLinkAlt,FaGithub } from 'react-icons/fa';

const ProjectItem = ({ title, desc, tech, projectUrl,git }) => {
  return (
    <div className="p-2 h-[270px] py-4 shadow-xl rounded-xl hover:scale-100 ease-in duration-200">
      <span className="p-4 text-xl font-bold">{title}</span>
      <p className="p-4">{desc}</p>
      <div className='flex items-center gap-8 mb-6 px-4'>
      <Link href={git}>
      <a target="_blank">
      <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
        <FaGithub size={20} />
      </div>
      </a>
      </Link>
      <Link href={projectUrl}>
      <a target="_blank">

      <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
        <FaExternalLinkAlt className="" size={20} />
      </div>
      </a>
      </Link>
      </div>
      <p className='px-4'>{tech}</p>
    </div>
  );
};

export default ProjectItem;
