import {GiLetterBomb} from 'react-icons/gi';

const SocialNav = () => {
  return (
    <div className="flex justify-center py-2">
        <p className="text-black-500 flex items-center gap-2"><GiLetterBomb className="w-6 h-6 animate-pulse" /><span className="hidden md:inline">Pišite mi na:</span><a href="mailto:kontakt@nemanjaradivojevic.rs" target="_blank" rel="noreferrer" className="text-center underline hover:text-gray-600 hover:transition">kontakt@nemanjaradivojevic.rs</a></p>
    </div>
  )
}

export default SocialNav