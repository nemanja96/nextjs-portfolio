import {FaFacebookF, FaInstagram, FaGithub} from 'react-icons/fa';

const Footer = () => {
  return (
    <>
        <div id="contact" className="py-10 px-4 bg-black-500 flex flex-col items-center pb-32">
            <div className="max-w-3xl w-full flex flex-col items-center">
                <h2 className="text-4xl text-white md:text-[80px] font-medium md:leading-[72px] text-center max-w-2xl"><span className="text-yellow-500">Nemanja</span> Radivojević</h2> 
                <div className="flex gap-8 mt-5 md:mt-10 mb-5 md:mb-10">
                    <a href="#" rel="noreferrer" target="_blank" className="text-white text-5xl hover:text-yellow-500 transition" title="Početak"><FaFacebookF /></a>
                    <a href="#experience" rel="noreferrer" target="_blank" className="text-white text-5xl hover:text-yellow-500 transition"  title="Početak"><FaInstagram /></a>
                    <a href="#about" rel="noreferrer" target="_blank" className="text-white text-5xl hover:text-yellow-500 transition"  title="Početak"><FaGithub /></a>
                </div>
                <p className="text-center">© Nemanja Radivojević. Sva prava zadržana.</p>
            </div>
        </div>
    </>
  )
}

export default Footer