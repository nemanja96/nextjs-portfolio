import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaReact, FaHtml5, FaCss3Alt, FaWordpress } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiJavascript, SiStyledcomponents, SiRedux, SiFirebase, SiMaterialui, SiReactrouter } from 'react-icons/si';
import { GrGraphQl } from 'react-icons/gr';
import photo1 from '../public/facebook.webp';
import photo2 from '../public/linkedin.webp';
import photo3 from '../public/gmail.webp';
import photo4 from '../public/website-1.webp';
import photo5 from '../public/slack.webp';
import photo6 from '../public/website-2.webp';
import photo7 from '../public/apartments.webp';
import photo8 from '../public/tenzies-game.webp';
import photo9 from '../public/movies.webp';
import photo10 from '../public/free-api.webp';
import photo11 from '../public/nextjs-data.webp';
import photo12 from '../public/apartmani-zlatibor.webp';
import photo13 from '../public/filip-peric.webp';
import photo14 from '../public/restoran-beograd.webp';
import photo15 from '../public/whatsapp.webp';
import photo16 from '../public/google.webp';
import SocialNav from '../components/SocialNav';
import Contact from '../components/Contact.js';
import Footer from '../components/Footer.js';

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
            <div className="max-w-6xl py-10 md:text-left px-4 md:py-10 flex flex-col items-center gap-10 md:gap-20">
                <div className="text-center md:text-left pb-5">
                    <h2 className="text-white text-4xl md:text-[112px] font-bold md:leading-[101px] max-w-2xl mb-6 md:mb-10">Moje <span className="text-yellow-500">digitalno</span> igralište.</h2>
                    <Link href="/" className="text-white tracking-[0.6em] p-4 text-sm md:text-lg font-medium border-b-2 border-yellow-500 border-solid transition hover:border-green-500 animate-bounce">
                        <a className="text-white tracking-[0.6em] p-4 text-sm md:text-lg font-medium border-b-2 border-yellow-500 border-solid transition hover:border-green-500 animate-bounce">NAZAD NA POČETNU</a>
                    </Link>
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
                            <div className={ id%2 == 0 ? "w-65 order-1 md:order-1 md:max-w-3xl" : "w-65 order-1 md:order-2 md:max-w-3xl"}>
                                <Image src={photoURL} alt={photoAlt} className="w-full" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        <Contact />
        <Footer />
    </div>
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
    },
    {
        id: 5,
        subtitle: "Tim, Komunikacija", 
        title: "Slack Klon - aplikacija za timsku kolaboraciju",
        projectLink: "https://slack-clone-51ab5.web.app/",
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
                Icon: SiReactrouter,
                title: "React Router"
            },
        ],
        photoURL: photo5,
        photoAlt: "Slack",
    },
    {
        id: 6,
        subtitle: "Komunikacija, Poruke", 
        title: "WhatsApp Klon - aplikacija za dopisivanje i video pozive",
        projectLink: "https://whatsapp-clone-vert-five.vercel.app/",
        technologies: [
            {
                id: 1,
                Icon: SiNextdotjs,
                title: "NextJS"
            },
            {
                id: 2,
                Icon: SiFirebase,
                title: "Firebase"
            },
            {
                id: 4,
                Icon: SiMaterialui,
                title: "Material UI"
            },
        ],
        photoURL: photo15,
        photoAlt: "WhatsApp",
    },
    {
        id: 7,
        subtitle: "Korporacija, Brend", 
        title: "Kviklik Korporacija - digitalna kompanija u Beogradu",
        projectLink: "https://project-4.nemanjaradivojevic.rs/",
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
        photoURL: photo6,
        photoAlt: "Kviklik Korporacija",
    },
    {
        id: 8,
        subtitle: "Google, Pretraživač", 
        title: "Google Klon - najpoznatiji internet pretraživač",
        projectLink: "https://google-clone-alpha-nine.vercel.app/",
        technologies: [
            {
                id: 1,
                Icon: SiNextdotjs,
                title: "NextJS"
            },
            {
                id: 2,
                Icon: SiTailwindcss,
                title: "Tailwind CSS"
            },
        ],
        photoURL: photo16,
        photoAlt: "Google pretraživač",
    },
    {
        id: 9,
        subtitle: "Apartmani, Smeštaj, Odmor", 
        title: "Apartmani za idealan odmor",
        projectLink: "https://real-estate-nextjs-website-eight.vercel.app/",
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
            {
                id: 3,
                Icon: SiMaterialui,
                title: "Material UI"
            },
        ],
        photoURL: photo7,
        photoAlt: "Apartmani",
    },
    {
        id: 10,
        subtitle: "Igra za decu", 
        title: "Tenzies - jednostavna igra za decu",
        projectLink: "https://tenzies-game-nemanja96.vercel.app/",
        technologies: [
            {
                id: 1,
                Icon: FaReact,
                title: "React"
            },
            {
                id: 2,
                Icon: FaCss3Alt,
                title: "CSS3"
            },
        ],
        photoURL: photo8,
        photoAlt: "Tenzies",
    },
    {
        id: 11,
        subtitle: "Disney, Filmovi, Zabava", 
        title: "Disney Klon - gledajte filmove besplatno",
        projectLink: "https://simple-disney-clone.vercel.app/",
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
        photoURL: photo9,
        photoAlt: "Disney",
    },
    {
        id: 12,
        subtitle: "API, Resursi", 
        title: "Besplatni API Resursi, Vrlo Jednostavno",
        projectLink: "https://free-api-react-website.vercel.app/",
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
        photoURL: photo10,
        photoAlt: "API Resursi",
    },
    {
        id: 13,
        subtitle: "API, Fetch", 
        title: "Fetch API - Fake data from jsonplaceholder",
        projectLink: "https://fetch-api-data-next-js-nemanja96.vercel.app/",
        technologies: [
            {
                id: 1,
                Icon: SiNextdotjs,
                title: "NextJS"
            },
            {
                id: 2,
                Icon: FaCss3Alt,
                title: "CSS3"
            },
        ],
        photoURL: photo11,
        photoAlt: "Fetch API",
    },
    {
        id: 14,
        subtitle: "Apartmani, SmeŠtaj", 
        title: "Apartmani Zlatibor",
        projectLink: "https://az.nemanjaradivojevic.rs/",
        technologies: [
            {
                id: 1,
                Icon: FaWordpress,
                title: "WordPress"
            },
        ],
        photoURL: photo12,
        photoAlt: "Apartmani Zlatibor",
    },
    {
        id: 15,
        subtitle: "Masaža, Fizioterapeut", 
        title: "Fizioterapeut Filip Perić",
        projectLink: "https://filipperic.rs/",
        technologies: [
            {
                id: 1,
                Icon: FaWordpress,
                title: "WordPress"
            },
        ],
        photoURL: photo13,
        photoAlt: "Filip Peric",
    },
    {
        id: 16,
        subtitle: "Restoran, Hrana", 
        title: "Restoran Beograd",
        projectLink: "https://rb.nemanjaradivojevic.rs/",
        technologies: [
            {
                id: 1,
                Icon: FaWordpress,
                title: "WordPress"
            },
        ],
        photoURL: photo14,
        photoAlt: "Restoran Beograd",
    },
]