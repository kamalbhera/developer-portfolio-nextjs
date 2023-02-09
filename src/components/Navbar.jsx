import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [shadow, setShadow] = useState(false);
  const {asPath} = useRouter();
console.log(asPath);
  useEffect(() => {
    handleShadow();
  }, []);

  const handleShadow = () => {
    if (window.scrollY > 80) {
      setShadow(true);
    } else {
      setShadow(false);
    }
    window.addEventListener('scroll', handleShadow);
  };

  const handleNav = () => {
    setNavbar((prev) => !prev);
  };
  return (
    <div
      style={{ backgroundColor: '#ecf0f3' }}
      className={
        shadow
          ? 'fixed top-0 w-full h-20 shadow-xl z-[100]'
          : 'fixed top-0 w-full h-20 z-[100]'
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <h1 className="text-3xl text-[#5651e5] tracking-wider drop-shadow-lg">
          Portfolio
        </h1>
        <div>
          <ul className="hidden md:flex">
            <li className={`ml-10 text-sm uppercase list_items ${asPath == "/"} `}>
              <Link href="/" className="hover:text navigation_link">
                Home
              </Link>
            </li>
            <Link href="/#about">
              <li className={`ml-10 text-sm uppercase list_items ${asPath == "/#about"} `}>About</li>
            </Link>
            <Link href="/#skills">
              <li className={`ml-10 text-sm uppercase list_items ${asPath == "/#skills"} `}>Skills</li>
            </Link>
            <Link href="/#projects">
              <li className={`ml-10 text-sm uppercase list_items ${asPath == "/#projects"} `}>Projects</li>
            </Link>
            <Link href="/#contact">
              <li className={`ml-10 text-sm uppercase list_items ${asPath == "/#contact"} `}>Contact</li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer mr-4">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          navbar
            ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70'
            : ''
        }
      >
        <div
          className={
            navbar
              ? 'fixed left-0 top-0 w-[75%] sm:w-[50%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-out duration-500'
              : 'fixed left-[-100%] top-0 ease-in duration-500'
          }
        >
          {/* <div> */}
          <div className="flex items-center justify-between w-full">
            <h1 className="text-3xl text-[#5651e5] tracking-wider drop-shadow-lg">
              Portfolio
            </h1>
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p className="py-4 w-[85%] md:w-[90%]">
              Let&apos;s build something legendary together
            </p>
            {/* </div> */}
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase flex-1">
              <Link href="/">
                <li onClick={handleNav} className={`py-4 text-sm mobile_list ${asPath == "/"}`}>Home</li>
              </Link>
              <Link href="/#about">
                <li onClick={handleNav} className={`py-4 text-sm mobile_list ${asPath == "/#about"}`}>About</li>
              </Link>
              <Link href="/#skills">
                <li onClick={handleNav} className={`py-4 text-sm mobile_list ${asPath == "/#skills"}`}>Skills</li>
              </Link>
              <Link href="/#projects">
                <li onClick={handleNav} className={`py-4 text-sm mobile_list ${asPath == "/#projects"}`}>Projects</li>
              </Link>
              <Link href="/#contact">
                <li onClick={handleNav} className={`py-4 text-sm mobile_list ${asPath == "/#contact"}`}>Contact</li>
              </Link>
            </ul>
            <div className="pt-36">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let&apos;s Connect
              </p>
              <div className="flex justify-between items-center w-full sm:w-[80%] my-4">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn size={20} />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub size={20} />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail size={20} />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
