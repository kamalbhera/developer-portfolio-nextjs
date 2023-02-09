import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import contact from '../public/assets/contact.jpg';
import Connect from './Connect';
import { IoLogoWhatsapp } from 'react-icons/io';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AiOutlineMail} from "react-icons/ai";

const Contact = () => {
  const [query, setQuery] = useState({
    name: '',
    email: '',
    message: '',
    subject: '',
    phone: '',
  });

  // Form Submit function
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetch('https://getform.io/f/683e79cf-898c-401f-9b4a-138da43307b2', {
      method: 'POST',
      body: formData,
    }).then(() => {
      setQuery({ name: '', email: '', message: '', phone: '', subject: '' });
      toast.success(' Message sent successfully!', {
        position: 'top-right',
        autoClose: 5000,
      });
    }).catch((err) => {
      toast.error('Something went wrong!', {
        position: 'top-right',
        autoClose: 5000,
      });
    })
   
  };

  // Update inputs value
  const handleParam = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div id="contact" className="w-full lg:h-screen py-14">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="uppercase tracking-widest text-xl text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={contact}
                  alt="contact"
                />
              </div>
              <div>
                <h2 className="py-2">Shahith</h2>
                <p>Full stack Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center gap-2 py-2">
                  <AiOutlineMail className='mt-[2px]' />
                  <h5>shahithr99@gmail.com</h5>
                </div>
                <div className="flex items-center gap-2 py-2">
                  <IoLogoWhatsapp className='mt-[2px]' />
                  <h5>+919080203657</h5>
                </div>
                <div className="flex items-center justify-between py-4">
                  <Connect />
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto lg:p-4 shadow-xl shadow-gray-400 rounded-xl">
            <div className="p-4">
              <form onSubmit={formSubmit}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={query.name}
                      className="border-2 p-3 rounded-lg flex border-gray-300 outline-none focus:outline-1"
                      onChange={(e) => handleParam(e)}
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="border-2 p-3 rounded-lg flex border-gray-300 outline-none focus:outline-1"
                      onChange={(e) => handleParam(e)}
                      name="phone"
                      value={query.phone}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    type="email"
                    className="border-2 p-3 rounded-lg flex border-gray-300 outline-none focus:outline-1"
                    onChange={(e) => handleParam(e)}
                    name="email"
                    value={query.email}
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    type="text"
                    className="border-2 p-3 rounded-lg flex border-gray-300 outline-none focus:outline-1"
                    onChange={(e) => handleParam(e)}
                    name="subject"
                    value={query.subject}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 p-3 rounded-lg flex border-gray-300 outline-none"
                    rows="6"
                    onChange={(e) => handleParam(e)}
                    name="message"
                    value={query.message}
                    required
                  />
                </div>
                <button className="w-full p-4 mt-4 text-gray-100 text-lg">
                  Send Message
                </button>
              </form>
              <ToastContainer />
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
