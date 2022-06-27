import Image from 'next/image';
import React from 'react'
import { FaReact, FaHtml5, FaCss3Alt, FaSass, FaWordpress } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiJavascript, SiStyledcomponents } from 'react-icons/si';
import { GrGraphQl } from 'react-icons/gr';
import photo from '../public/04.png';
import photo2 from '../public/02.png';
import photo3 from '../public/03.png';

const Portfolio = () => {
  return (
    <>
        <div id="portfolio" className="flex justify-center bg-black-500">
            <div className="max-w-6xl py-10 md:text-left py-10 mb-32 px-4 md:py-24 flex flex-col items-center gap-10 md:gap-20 md:pb-40">
                <div className="text-center md:text-left">
                    <h2 className="text-white text-4xl md:text-[112px] font-bold md:leading-[101px] max-w-2xl mb-6">Moje <span className="text-yellow-500">digitalno</span> igraliste.</h2>
                    <p className="text-white">Ovo je moje digitalno igraliste za licne eksperimente</p>
                </div>

                {/* PROJECT 1 */}
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-10 md:mb-14">
                    <div className="w-35 order-2 md:order-1">
                        <p className="font-light md:font-lg text-gray-400">Brending, Digitalni marketing, Biznis</p>
                        <h3 className="font-normal text-white text-xl md:text-4xl pt-4 pb-8">Brending, digitalni marketing i biznis rešenja</h3>
                        <a href="#" target="_blank" rel="noreferrer" className="text-white tracking-[0.6em] text-sm md:text-lg font-medium underline decoration-yellow-500 decoration-2 underline-offset-4 transition hover:bg-yellow-500 hover:text-black-500">POGLEDAJTE PROJEKAT</a>
                        <div className="flex mt-7 md:mt-14 gap-5">
                            <div className="flex flex-col items-center">
                                <FaReact className="w-7 h-7 md:w-8 md:h-8 text-white" />
                                <p className="text-white pt-2 font-light text-xs md:text-base">React</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiNextdotjs className="w-7 h-7 md:w-8 md:h-8 text-white" />
                                <p className="text-white pt-2 font-light text-xs md:text-base">NextJS</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiTailwindcss className="w-7 h-7 md:w-8 md:h-8 text-white" />
                                <p className="text-white pt-2 font-light text-xs md:text-base">TailwindCSS</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-65 order-1 md:order-2">
                        <Image src={photo} alt="Project 1" className="w-full" />
                    </div>
                </div>

                {/* PROJECT 2 */}
                <div className="flex flex-col md:flex-row items-center mt-5 gap-2 md:gap-14 md:mb-14">
                <div className="w-65">
                        <Image src={photo2} alt="Project 2" className="w-full" />
                    </div>
                    <div className="w-35">
                        <p className="font-light md:font-lg text-gray-400">Nekretnine, Apartmani</p>
                        <h3 className="font-normal text-white text-xl md:text-4xl pt-4 pb-8">Pronađite idealan smeštaj za Vaš sledeći odmor</h3>
                        <a href="#" target="_blank" rel="noreferrer" className="text-white tracking-[0.6em] text-sm md:text-lg font-medium underline decoration-green-500 decoration-2 underline-offset-4 transition hover:bg-green-500 hover:text-black-500">POGLEDAJTE PROJEKAT</a>
                        <div className="flex mt-7 md:mt-14 gap-5">
                            <div className="flex flex-col items-center">
                                <SiNextdotjs className="w-7 h-7 md:w-8 md:h-8 text-white" />
                                <p className="text-white pt-2 font-light text-xs md:text-base">NextJS</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <GrGraphQl className="w-7 h-7 md:w-8 md:h-8 text-white" />
                                <p className="text-white pt-2 font-light text-xs md:text-base">GraphQL</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PROJECT 3 */}
                <div className="flex flex-col md:flex-row items-center mt-5 gap-2 md:gap-14 md:mb-14">
                    <div className="order-2 md:order-1">
                        <p className="font-light md:font-lg text-gray-400">API, Resursi</p>
                        <h3 className="font-normal text-white text-xl md:text-4xl pt-4 pb-8">Besplatni API Resursi, Vrlo Jednostavno</h3>
                        <a href="#" target="_blank" rel="noreferrer" className="text-white tracking-[0.6em] text-sm md:text-lg font-medium underline decoration-yellow-500 decoration-2 underline-offset-4 transition hover:bg-yellow-500 hover:text-black-500">POGLEDAJTE PROJEKAT</a>
                        <div className="flex mt-7 md:mt-14 gap-5">
                            <div className="flex flex-col items-center">
                                <FaReact className="w-7 h-7 md:w-8 md:h-8 text-white" />
                                <p className="text-white pt-2 font-light text-xs md:text-base">React</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiStyledcomponents className="w-7 h-7 md:w-8 md:h-8 text-white" />
                                <p className="text-white pt-2 font-light text-xs md:text-base">Styled Components</p>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <Image src={photo3} alt="Project 3" className="w-full" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Portfolio