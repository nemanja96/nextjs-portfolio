import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaReact, FaHtml5, FaCss3Alt, FaSass, FaWordpress } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiJavascript, SiStyledcomponents } from 'react-icons/si';
import { GrGraphQl } from 'react-icons/gr';
import photo from '../public/04.png';
import photo2 from '../public/02.png';
import photo3 from '../public/03.png';
import SocialNav from '../components/SocialNav';

const Portfolio = () => {

  return (
    <div>
        <Head>
            <title>Projekti - Nemanja Radivojevic - Front End Developer</title>
            <meta name="description" content="Portfolio website" />
            <meta name="theme-color" content="#32ffaa" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <SocialNav />
        <div id="portfolio" className="flex justify-center bg-black-500 rounded-t-3xl">
            <div className="max-w-6xl py-10 md:text-left py-10 px-4 md:py-10 flex flex-col items-center gap-10 md:gap-20">
                <div className="text-center md:text-left pb-5">
                    <h2 className="text-white text-4xl md:text-[112px] font-bold md:leading-[101px] max-w-2xl mb-6">Moje <span className="text-yellow-500">digitalno</span> igralište.</h2>
                    <p className="text-white pb-4">Ovo je moje digitalno igralište za lične eksperimente</p>
                    <Link href="/" className="text-white tracking-[0.6em] p-4 text-sm md:text-lg font-medium border-b-2 border-yellow-500 border-solid transition hover:border-green-500 animate-bounce">
                        <a className="text-white tracking-[0.6em] p-4 text-sm md:text-lg font-medium border-b-2 border-yellow-500 border-solid transition hover:border-green-500 animate-bounce">NAZAD NA POČETNU</a>
                    </Link>
                </div>

                {
                    data?.map(({id, subtitle, title, technologies, projectLink, photoURL, photoAlt}) => (
                        <div key={id} className="flex flex-col md:flex-row items-center mb-4 gap-2 md:gap-10 md:mb-14">
                            <div className={ id%2 == 0 ? "w-35 order-2 md:order-2" : "w-35 order-2 md:order-1"}>
                                <p className="font-light md:font-lg text-gray-400">{subtitle}</p>
                                <h3 className="font-normal text-white text-xl md:text-4xl pt-4 pb-8">{title}</h3>
                                <a href={projectLink} target="_blank" rel="noreferrer" className="text-white tracking-[0.6em] text-xs md:text-lg font-medium underline decoration-yellow-500 decoration-2 underline-offset-4 transition hover:bg-yellow-500 hover:text-black-500">POGLEDAJTE PROJEKAT</a>
                                <div className="flex mt-7 md:mt-14 gap-5">
                                    {
                                        technologies?.map(({id, Icon, title}) => (
                                            <div key={id} className="flex flex-col items-center">
                                                <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                                                <p className="text-white pt-2 font-light text-xs md:text-base">{title}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className={ id%2 == 0 ? "w-65 order-1 md:order-1" : "w-65 order-1 md:order-2"}>
                                <Image src={photoURL} alt={photoAlt} className="w-full" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Portfolio

export const data = [
    {
        id: 1,
        subtitle: "Brending, Digitalni marketing, Biznis", 
        title: "Brending, digitalni marketing i biznis rešenja",
        projectLink: "/",
        technologies: [
            {
                id: 1,
                Icon: FaReact,
                title: "React"
            },
            {
                id: 2,
                Icon: SiNextdotjs,
                title: "NextJS"
            },
            {
                id: 3,
                Icon: SiTailwindcss,
                title: "TailwindCSS"
            },
        ],
        photoURL: photo,
        photoAlt: "alt",
    },
    {
        id: 2,
        subtitle: "Nekretnine, Apartmani", 
        title: "Pronađite idealan smeštaj za Vaš sledeći odmor",
        projectLink: "/",
        technologies: [
            {
                id: 1,
                Icon: SiNextdotjs,
                title: "NextJS"
            },
            {
                id: 2,
                Icon: GrGraphQl,
                title: "GraphQL"
            },
        ],
        photoURL: photo2,
        photoAlt: "alt",
    },
    {
        id: 3,
        subtitle: "API, Resursi", 
        title: "Besplatni API Resursi, Vrlo Jednostavno",
        projectLink: "/",
        technologies: [
            {
                id: 1,
                Icon: FaReact,
                title: "React"
            },
            {
                id: 2,
                Icon: SiStyledcomponents,
                title: "Styled Components"
            },
        ],
        photoURL: photo3,
        photoAlt: "alt",
    },
    {
        id: 4,
        subtitle: "Brending, Digitalni marketing, Biznis", 
        title: "Brending, digitalni marketing i biznis rešenja",
        projectLink: "/",
        technologies: [
            {
                id: 1,
                Icon: FaReact,
                title: "React"
            },
            {
                id: 2,
                Icon: SiNextdotjs,
                title: "NextJS"
            },
            {
                id: 3,
                Icon: SiTailwindcss,
                title: "TailwindCSS"
            },
        ],
        photoURL: photo,
        photoAlt: "alt",
    },
    {
        id: 5,
        subtitle: "Nekretnine, Apartmani", 
        title: "Pronađite idealan smeštaj za Vaš sledeći odmor",
        projectLink: "/",
        technologies: [
            {
                id: 1,
                Icon: SiNextdotjs,
                title: "NextJS"
            },
            {
                id: 2,
                Icon: GrGraphQl,
                title: "GraphQL"
            },
        ],
        photoURL: photo2,
        photoAlt: "alt",
    },
    {
        id: 6,
        subtitle: "API, Resursi", 
        title: "Besplatni API Resursi, Vrlo Jednostavno",
        projectLink: "/",
        technologies: [
            {
                id: 1,
                Icon: FaReact,
                title: "React"
            },
            {
                id: 2,
                Icon: SiStyledcomponents,
                title: "Styled Components"
            },
        ],
        photoURL: photo3,
        photoAlt: "alt",
    },
    {
        id: 7,
        subtitle: "Brending, Digitalni marketing, Biznis", 
        title: "Brending, digitalni marketing i biznis rešenja",
        projectLink: "/",
        technologies: [
            {
                id: 1,
                Icon: FaReact,
                title: "React"
            },
            {
                id: 2,
                Icon: SiNextdotjs,
                title: "NextJS"
            },
            {
                id: 3,
                Icon: SiTailwindcss,
                title: "TailwindCSS"
            },
        ],
        photoURL: photo,
        photoAlt: "alt",
    },
    {
        id: 8,
        subtitle: "Nekretnine, Apartmani", 
        title: "Pronađite idealan smeštaj za Vaš sledeći odmor",
        projectLink: "/",
        technologies: [
            {
                id: 1,
                Icon: SiNextdotjs,
                title: "NextJS"
            },
            {
                id: 2,
                Icon: GrGraphQl,
                title: "GraphQL"
            },
        ],
        photoURL: photo2,
        photoAlt: "alt",
    },
    {
        id: 9,
        subtitle: "API, Resursi", 
        title: "Besplatni API Resursi, Vrlo Jednostavno",
        projectLink: "/",
        technologies: [
            {
                id: 1,
                Icon: FaReact,
                title: "React"
            },
            {
                id: 2,
                Icon: SiStyledcomponents,
                title: "Styled Components"
            },
        ],
        photoURL: photo3,
        photoAlt: "alt",
    },
]