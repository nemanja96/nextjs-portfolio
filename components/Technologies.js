import { FaReact, FaHtml5, FaCss3Alt, FaSass, FaWordpress } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiJavascript } from 'react-icons/si';
import { FcSmartphoneTablet, FcCommandLine, FcPositiveDynamic, FcHighPriority, FcGlobe } from 'react-icons/fc';

const Technologies = () => {
  return (
    <>
        <div id="experience" className="py-10 px-4 bg-black-500 flex flex-col items-center pb-40">
            <h2 className="text-4xl text-white md:text-[80px] font-medium md:leading-[72px] text-center max-w-2xl"><span className="text-green-500">Tehnologije</span> koje koristim svaki dan</h2>
            <div className="max-w-2xl text-center mt-3 md:mt-6">
                <p className="text-gray-400 pb-3">U ovom delu želim da Vam predstavim neke od <FcSmartphoneTablet className="inline w-6 h-6" /> tehnologija koje trenutno koristim. Sa svakim novim projektom <FcCommandLine className="inline w-6 h-6" /> se trudim da pronađem najnovija i najbolja rešenja koja će mi pomoći u radu.</p>
                <p className="text-gray-400 pb-3">Zbog veoma brzo rastuće industrije <FcPositiveDynamic className="inline w-6 h-6" />, svakog dana se trudim da naučim nešto novo i razvijem bolje veštine za rešavanje <FcHighPriority className="inline w-6 h-6" /> problema.</p>
                <p className="text-gray-400"><FcGlobe className="inline w-6 h-6" /> Svet programiranja može biti jako zanimljivo mesto, ako si uporan/na i nikada ne želiš da prestaneš sa učenjem. Zato, odoh da &quot;grejem&quot; stolicu.</p>
            </div>
            <div className="grid grid-cols-1 gap-5 mt-10 px-4 md:grid-cols-4 md:w-full max-w-5xl md:mt-16 md:gap-8">
                <div className="bg-green-500 p-5 rounded-2xl rotate-12 transition w-full hover:rotate-0">
                    <FaReact className="text-5xl mb-2" />
                    <h4 className="text-gray-600 font-medium text-basic">JS Framework</h4>
                    <h3 className="font-bold text-2xl color-black-500">React JS</h3>

                </div>
                <div className="bg-gray-300 p-5 rounded-2xl rotate-12 transition hover:rotate-0">
                    <SiNextdotjs className="text-5xl mb-2" />
                    <h4 className="text-gray-600 font-medium text-basic">React Framework</h4>
                    <h3 className="font-bold text-2xl color-black-500">Next JS</h3>

                </div>
                <div className="bg-yellow-500 p-5 rounded-2xl rotate-12 transition hover:rotate-0">
                    <FaHtml5 className="text-5xl mb-2" />
                    <h4 className="text-gray-600 font-medium text-basic">Markup Language</h4>
                    <h3 className="font-bold text-2xl color-black-500">HTML5</h3>

                </div>
                <div className="bg-black-500 p-5 rounded-2xl rotate-12 transition hover:rotate-0 border border-white border-solid">
                    <FaCss3Alt className="text-5xl text-white mb-2" />
                    <h4 className="text-white font-medium text-basic">Style Sheets</h4>
                    <h3 className="font-bold text-2xl text-white">CSS3</h3>

                </div>
                <div className="bg-gray-300 p-5 rounded-2xl rotate-12 transition hover:rotate-0">
                    <SiTailwindcss className="text-5xl mb-2" />
                    <h4 className="text-gray-600 font-medium text-basic">CSS Framework</h4>
                    <h3 className="font-bold text-2xl color-black-500">Tailwind CSS</h3>

                </div>
                <div className="bg-yellow-500 p-5 rounded-2xl rotate-12 transition hover:rotate-0">
                    <SiJavascript className="text-5xl mb-2" />
                    <h4 className="text-gray-600 font-medium text-basic">Programming Language</h4>
                    <h3 className="font-bold text-2xl color-black-500">JavaScript </h3>

                </div>
                <div className="bg-black-500 p-5 rounded-2xl rotate-12 transition hover:rotate-0 border border-white border-solid">
                    <FaSass className="text-5xl text-white mb-2" />
                    <h4 className="text-white font-medium text-basic">Stylesheet Language</h4>
                    <h3 className="font-bold text-2xl text-white">Sass/SCSS</h3>

                </div>
                <div className="bg-green-500 p-5 rounded-2xl rotate-12 transition hover:rotate-0">
                    <FaWordpress className="text-5xl mb-2" />
                    <h4 className="text-gray-600 font-medium text-basic">Content System</h4>
                    <h3 className="font-bold text-2xl color-black-500">WordPress CMS</h3>

                </div>
            </div>
        </div>
    </>
  )
}

export default Technologies