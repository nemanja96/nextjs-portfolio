import React, { useState } from 'react'
import {AiOutlineHome, AiOutlineUser, AiOutlinePhone} from 'react-icons/ai';
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi';
import {HiOutlineCode, HiOutlinePhone} from 'react-icons/hi';
import {TbPhone} from 'react-icons/tb';

const Nav = () => {

    const [activeNav, setActiveNav] = useState('#');

  return (
    <div className="w-full fixed bottom-8 flex justify-center z-50">
        <nav className="bg-white flex gap-2 w-max z-50 px-6 py-2 rounded-full shadow-md">
            <a href="#" onClick={() => setActiveNav('#')} className={ activeNav === '#' ? 'active bg-black-500 p-4 rounded-full' : 'p-4 rounded-full hover:bg-gray-300' } title="Početak"><AiOutlineHome className={ activeNav === '#' ? 'text-white w-5 h-5' : 'w-5 h-5' } /></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={ activeNav === '#experience' ? 'active bg-black-500 p-4 rounded-full' : 'p-4 rounded-full hover:bg-gray-300' } title="Iskustvo"><BiBook  className={ activeNav === '#experience' ? 'text-white w-5 h-5' : 'w-5 h-5' } /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={ activeNav === '#about' ? 'active bg-black-500 p-4 rounded-full' : 'p-4 rounded-full hover:bg-gray-300' } title="O meni"><AiOutlineUser  className={ activeNav === '#about' ? 'text-white w-5 h-5' : 'w-5 h-5' } /></a>
            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={ activeNav === '#portfolio' ? 'active bg-black-500 p-4 rounded-full' : 'p-4 rounded-full hover:bg-gray-300' } title="Portfolio"><HiOutlineCode  className={ activeNav === '#portfolio' ? 'text-white w-5 h-5' : 'w-5 h-5' } /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={ activeNav === '#contact' ? 'active bg-black-500 p-4 rounded-full' : 'p-4 rounded-full hover:bg-gray-300' } title="Kontakt"><TbPhone  className={ activeNav === '#contact' ? 'text-white w-5 h-5' : 'w-5 h-5' } /></a>
        </nav>
    </div>
  )
}

export default Nav