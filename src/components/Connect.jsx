import React from 'react'
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Link from 'next/link';

const Connect = () => {
  return (
    <>
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
    </>
  )
}

export default Connect