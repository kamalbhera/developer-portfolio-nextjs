import React from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Link from 'next/link';

const Main = () => {
  return (
    <div className="w-full h-screen text-center z-0">
      <div className="w-full h-full mx-auto flex justify-center items-center max-w-[1240px] p-2">
        <div>
          <p className="uppercase text-gray-500 text-sm tracking-widest">
            Let&apos;s build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi,I&apos;m <span className="text-[#5651e5]">Shahith</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Fullstack Web Developer</h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            Currently, I&apos;m focused on building responsive front-end web
            applications while learning back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/shahith-r-821920219/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn size={20} />
              </div>
            </a>
            <a
              href="https://github.com/Shahithraj?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub size={20} />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail size={20} />
              </div>
            </Link>
            <a
              href="https://drive.google.com/file/d/1AtkO2_PqrObpho20bYmXLUeq7cEMNJPk/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill size={20} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
