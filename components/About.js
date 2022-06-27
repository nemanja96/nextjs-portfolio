import React from 'react'
import {BsCodeSlash, BsPeople, BsLaptop, BsFillPeopleFill} from 'react-icons/bs';
import {FaHeart, FaHtml5, FaCss3Alt} from 'react-icons/fa';
import {GiMicrophone} from 'react-icons/gi';

const About = () => {
  return (
    <>
        <div id="about" className="flex justify-center bg-white">
            <div className="max-w-5xl py-10 md:text-left py-10 px-4 md:py-24 flex flex-col items-center gap-10 md:gap-20 md:pb-40 md:grid md:grid-cols-2 ">
                <div className="text-center md:text-left">
                    <h2 className="text-black-500 text-4xl md:text-6xl font-bold md:leading-[58px] max-w-2xl mb-6">Samouki <span className="border-b-8 border-solid border-yellow-500">Frontend Developer</span> iz Loznice.</h2>
                    <p className="text-gray-600">Veliku ljubav <FaHeart className="inline w-6 h-6 text-red-500" /> prema programiranju otkrio sam pre par godina, kreirajući svoj prvi <FaHtml5 className="inline w-6 h-6 text-orange-500" /> i <FaCss3Alt className="inline w-6 h-6 text-blue-500" /> vebsajt. Do sada sam napravio nekoliko desetina vebsajtova za svoje poznanike i male biznise. Želim da nastavim sa usavršavanjem svojih profesionalnih i <GiMicrophone className="inline w-6 h-6 text-black-500" /> komunikacionih veština u nadi da ću što većem broju ljudi <BsFillPeopleFill className="inline w-6 h-6 text-black-500" /> pomoći u rešavanju njihovih svakodnevnih problema. Da li želite saradnju?</p>
                </div>
                <div className="grid grid-cols-1 gap-5 px-4 md:grid-cols-2 md:w-full max-w-5xl md:gap-8">
                    <div className="border-2 border-gray-500 border-solid p-5 rounded-2xl rotate-12 transition w-full hover:rotate-0">
                        <BsCodeSlash className="text-5xl mb-2" />
                        <h4 className="text-gray-600 font-medium text-basic">Iskustvo</h4>
                        <h3 className="font-bold text-2xl color-black-500">više od 1</h3>
                        <p className="text-gray-600 text-lg">godine iskustva</p>
                    </div>
                    <div className="border-2 border-gray-500 border-solid p-5 rounded-2xl rotate-12 transition hover:rotate-0">
                        <BsPeople className="text-5xl mb-2" />
                        <h4 className="text-gray-600 font-medium text-basic">Klijenti</h4>
                        <h3 className="font-bold text-2xl color-black-500">više od 20</h3>
                        <p className="text-gray-600 text-lg">klijenata</p>
                    </div>
                    <div className="border-2 border-gray-500 border-solid p-5 rounded-2xl rotate-12 transition hover:rotate-0">
                        <BsLaptop className="text-5xl mb-2" />
                        <h4 className="text-gray-600 font-medium text-basic">Projekti</h4>
                        <h3 className="font-bold text-2xl color-black-500">više od 50</h3>
                        <p className="text-gray-600 text-lg">projekata</p>
                    </div>
                    <div className="border-2 border-gray-500 border-solid p-5 rounded-2xl rotate-12 transition hover:rotate-0">
                        <BsLaptop className="text-5xl mb-2" />
                        <h4 className="text-gray-600 font-medium text-basicc">Projekti</h4>
                        <h3 className="font-bold text-2xl color-black-500">više od 50</h3>
                        <p className="text-gray-600 text-lg">projekata</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About