import ReactPlayer from 'react-player'
import { GrDownload } from 'react-icons/gr';
import { FaReact } from 'react-icons/fa';
import { GiHand } from 'react-icons/gi';
import { BsGithub, BsFacebook, BsInstagram } from 'react-icons/bs';

const Header = () => {
  return (
    <>
        <div className="px-5 py-7 bg-black-500 md:p-12 rounded-t-3xl flex flex-col items-center">
          <div className="relative flex flex-col items-center">
            <h5 className="text-center text-white font-medium text-base uppercase flex gap-2"><GiHand className="text-yellow-500 w-6 h-6 animate-bounce" /> Zdravo! Ja sam</h5>
            <h1 className="text-5xl text-center text-white md:text-8xl font-bold mt-4">Nemanja Radivojević</h1>
            <h2 className="text-3xl mt-2 text-center text-yellow-500 md:text-[80px] leading-none">Front End Developer</h2>
            <p className="text-center text-white text-lg font-normal md:max-w-2xl pt-5"><strong>Dobrodošli u moj digitalni svet!</strong> Ovde možete pročitati nešto više o meni, pogledati moje prethodne projekte i kontaktirati me.</p>
            <div className="flex flex-col md:flex-row mt-7 mb-9 gap-5">
              <a href="" download className="bg-green-500 rounded-full px-12 py-5 flex justify-center items-center gap-3 border-2 border-solid border-green-500 font-medium text-black-500 hover:bg-transparent hover:scale-90 hover:transition-all hover:shadow-lg hover:shadow-green-500 hover:text-white" >Preuzmite CV <GrDownload className="animate-bounce" /></a>
              <a href="#portfolio" className="rounded-full px-12 py-5 flex justify-center items-center gap-3 border-2 border-solid border-green-500 text-white font-medium hover:scale-90 hover:transition-all hover:shadow-lg hover:shadow-green-500 hover:text-white" >Prethodni projekti <FaReact className="animate-spin" /></a>
            </div>
            <div className="max-w-2xl w-full flex justify-center">
                <ReactPlayer url='https://www.youtube.com/watch?v=g1_SzCzxtGE' width="95%" className="video-player" />
            </div>
            <div className="flex-col items-center gap-4 absolute left-0 bottom-40 hidden md:flex">
              <a href="https://github.com/nemanja96" target="_blank"><BsGithub className="text-white w-6 h-6 hover:text-gray-400 transition" /></a>
              <a href="https://www.facebook.com/nemanja.radivojevic996/" target="_blank"><BsFacebook className="text-white w-6 h-6 hover:text-gray-400 transition" /></a>
              <a href="https://www.instagram.com/nemanjaradivojevic/" target="_blank"><BsInstagram className="text-white w-6 h-6 hover:text-gray-400 transition" /></a>
            </div>
            <a href="#contact" className="absolute -right-14 bottom-48 font-medium text-basic text-white rotate-90 hover:text-gray-400 transition hidden md:block">Kontaktirajte me</a>
          </div>
        </div>
    </>
  )
}

export default Header