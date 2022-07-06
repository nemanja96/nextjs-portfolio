import React from 'react'
import {BsCodeSlash, BsPeople, BsLaptop } from 'react-icons/bs';
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import {FcManager, FcGlobe} from 'react-icons/fc';

const About = () => {
  return (
    <>
        <div id="about" className="flex justify-center bg-white">
            <div className="max-w-5xl py-10 md:text-left px-4 md:py-24 flex flex-col items-center gap-10 md:gap-20 md:grid md:grid-cols-2 ">
                <div className="text-center md:text-left">
                    <h2 className="text-black-500 text-4xl md:text-6xl font-bold md:leading-[58px] max-w-2xl mb-6">Samouki <span className="border-b-8 border-dashed border-yellow-500">Front End Developer</span> iz Loznice.</h2>
                    <p className="text-gray-600"><FcManager className="w-6 h-6 inline" /><b className='text-black-500'>Junior Front End Developer</b> sa više od godinu dana iskustva u izradi modernih i prilagodljivih vebsajtova. Veliku ljubav prema programiranju otkrio sam pre par godina, kreirajući svoj prvi <FaHtml5 className="inline w-6 h-6 text-orange-600" title="HTML5" /> i <FaCss3Alt className="inline w-6 h-6 text-blue-600" title="CSS3" /> vebsajt. Do sada sam napravio nekoliko desetina vebsajtova za male biznise u razvoju. Trenutno sam fokusiran na <FaReact title="ReactJS" className="inline w-6 h-6 text-blue-600" /> i <SiNextdotjs title="NextJS" className="inline w-6 h-6 text-black-500" /> tehnologije. Želeo bih da nastavim sa usavršavanjem svojih profesionalnih i komunikativnih veština i na taj način dam svoj mali doprinos IT svetu <FcGlobe className="inline w-6 h-6" />.</p>
                </div>
                <div className="grid grid-cols-1 gap-5 px-4 md:grid-cols-2 md:w-full max-w-5xl md:gap-8">
                    <div className="border-2 border-gray-500 border-solid hover:border-yellow-500 p-5 rounded-2xl rotate-12 transition w-full hover:rotate-0">
                        <BsCodeSlash className="text-5xl mb-2" />
                        <h4 className="text-gray-600 font-medium text-basic">Iskustvo</h4>
                        <h3 className="font-bold text-2xl color-black-500">više od 1</h3>
                        <p className="text-gray-600 text-lg">godine iskustva</p>
                    </div>
                    <div className="border-2 border-gray-500 border-solid hover:border-yellow-500 p-5 rounded-2xl rotate-12 transition hover:rotate-0">
                        <BsPeople className="text-5xl mb-2" />
                        <h4 className="text-gray-600 font-medium text-basic">Klijenti</h4>
                        <h3 className="font-bold text-2xl color-black-500">više od 20</h3>
                        <p className="text-gray-600 text-lg">klijenata</p>
                    </div>
                    <div className="border-2 border-gray-500 border-solid hover:border-yellow-500 p-5 rounded-2xl rotate-12 transition hover:rotate-0">
                        <BsLaptop className="text-5xl mb-2" />
                        <h4 className="text-gray-600 font-medium text-basic">Projekti</h4>
                        <h3 className="font-bold text-2xl color-black-500">više od 50</h3>
                        <p className="text-gray-600 text-lg">projekata</p>
                    </div>
                    <div className="border-2 border-gray-500 border-solid hover:border-yellow-500 p-5 rounded-2xl rotate-12 transition hover:rotate-0">
                        <FaReact className="text-5xl mb-2" />
                        <h4 className="text-gray-600 font-medium text-basicc">Tehnologije</h4>
                        <h3 className="font-bold text-2xl color-black-500">više od 20</h3>
                        <p className="text-gray-600 text-lg">tehnologija</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About