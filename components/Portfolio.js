import Image from 'next/image';
import Link from 'next/link';
import {BsPlusCircleDotted} from 'react-icons/bs';
import { FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiRedux, SiFirebase, SiMaterialui, SiReactrouter } from 'react-icons/si';
import photo1 from '../public/facebook.webp';
import photo2 from '../public/linkedin.webp';
import photo3 from '../public/gmail.webp';
import photo4 from '../public/website-1.webp';

const Portfolio = () => {

  return (
    <>
        <div id="portfolio" className="flex justify-center bg-black-500">
            <div className="max-w-6xl py-10 md:text-left px-4 md:py-24 flex flex-col items-center gap-10 md:gap-20">
                <div className="text-center md:text-left">
                    <h2 className="text-white text-4xl md:text-[112px] font-bold md:leading-[101px] max-w-2xl mb-6">Moje <span className="text-yellow-500">digitalno</span> igralište.</h2>
                    <p className="text-white">Posetite moje digitalno igralište za lične eksperimente.</p>
                </div>

                {
                    data?.map(({id, subtitle, title, technologies, projectLink, photoURL, photoAlt}) => (
                        <div key={id} className="flex flex-col md:flex-row items-center mb-8 gap-2 md:gap-10 md:mb-14">
                            <div className={ id%2 == 0 ? "w-35 order-2 md:order-2" : "w-35 order-2 md:order-1"}>
                                <p className="font-light md:font-lg text-gray-400">{subtitle}</p>
                                <h3 className="font-normal text-white text-2xl md:text-4xl pb-2">{title}</h3>
                                <div className="flex mt-2 mb-4 md:mt-4 md:mb-4 gap-5">
                                    {
                                        technologies?.map(({id, Icon, title}) => (
                                            <div key={id} className="flex flex-col items-center">
                                                <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                                                <p className="text-white pt-2 font-light text-xs md:text-base">{title}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                                <a href={projectLink} target="_blank" rel="noreferrer" className="text-white tracking-[0.6em] text-xs md:text-lg font-medium underline decoration-yellow-500 decoration-2 underline-offset-4 transition hover:decoration-green-500">POGLEDAJTE PROJEKAT</a>
                            </div>
                            <div className={ id%2 == 0 ? "w-65 order-1 md:order-1" : "w-65 order-1 md:order-2"}>
                                <Image src={photoURL} alt={photoAlt} className="w-full" />
                            </div>
                        </div>
                    ))
                }

                <Link href="/projects" className="text-white tracking-[0.6em] p-4 text-sm md:text-lg font-medium transition hover:border-green-500 animate-bounce border-2 border-solid border-yellow-500">
                <a className="animate-bounce"><BsPlusCircleDotted className="w-20 h-20 text-yellow-500 transition hover:text-green-500" /></a>
                </Link>
            </div>
        </div>
    </>
  )
}

export default Portfolio

export const data = [
    {
        id: 1,
        subtitle: "Meta, Povezivanje", 
        title: "Facebook Klon - društvena mreža",
        projectLink: "https://facebook-clone-ab37a.web.app/",
        technologies: [
            {
                id: 1,
                Icon: FaReact,
                title: "React"
            },
            {
                id: 2,
                Icon: SiRedux,
                title: "Redux"
            },
            {
                id: 3,
                Icon: SiFirebase,
                title: "Firebase"
            },
            {
                id: 4,
                Icon: SiMaterialui,
                title: "Material UI"
            },
        ],
        photoURL: photo1,
        photoAlt: "Facebook",
    },
    {
        id: 2,
        subtitle: "Biznis, Posao", 
        title: "LinkedIn Klon - poslovna društvena mreža",
        projectLink: "http://linkedin-clone-5d523.web.app/",
        technologies: [
            {
                id: 1,
                Icon: FaReact,
                title: "React"
            },
            {
                id: 2,
                Icon: SiRedux,
                title: "Redux"
            },
            {
                id: 3,
                Icon: SiFirebase,
                title: "Firebase"
            },
            {
                id: 4,
                Icon: SiMaterialui,
                title: "Material UI"
            },
        ],
        photoURL: photo2,
        photoAlt: "LinkedIn",
    },
    {
        id: 3,
        subtitle: "Google, Email, Komunikacija", 
        title: "Gmail Klon - servis elektronske pošte",
        projectLink: "http://clone-d7a81.web.app/",
        technologies: [
            {
                id: 1,
                Icon: FaReact,
                title: "React"
            },
            {
                id: 2,
                Icon: SiReactrouter,
                title: "React Router"
            },
            {
                id: 3,
                Icon: SiFirebase,
                title: "Firebase"
            },
        ],
        photoURL: photo3,
        photoAlt: "Gmail",
    },
    {
        id: 4,
        subtitle: "Marketing, Agencija", 
        title: "Brending, digitalni marketing i biznis rešenja",
        projectLink: "https://project-5.nemanjaradivojevic.rs/",
        technologies: [
            {
                id: 1,
                Icon: FaHtml5,
                title: "HTML5"
            },
            {
                id: 2,
                Icon: FaCss3Alt,
                title: "CSS3"
            },
            {
                id: 3,
                Icon: SiJavascript,
                title: "JavaScript"
            },
        ],
        photoURL: photo4,
        photoAlt: "Digitalna agencija",
    }
]