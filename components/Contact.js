import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine, RiWhatsappLine} from 'react-icons/ri';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_brchr88', 'template_es5wewe', form.current, 'OIsZTVYpX-bde8jjX')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    };

  return (
    <>
        <div id="contact" className="py-10 px-4 bg-black-500 flex flex-col items-center pb-5 md:pb-40">
            <div className="max-w-3xl w-full flex flex-col items-center">
                <h2 className="text-4xl text-white md:text-[80px] font-medium md:leading-[72px] text-center max-w-2xl mb-10 md:mb-14"><span className="text-green-500">Kontaktirajte</span> me</h2> 
                <div className="flex flex-col md:flex-row gap-10 w-full">
                    <div className="flex flex-col gap-4">
                        <a href="mailto:kontakt.nemanjaradivojevic.rs" target="_blank" rel="noreferrer" className="bg-green-500 px-8 py-4 rounded-2xl flex flex-col items-center">
                            <MdOutlineEmail className="w-6 h-6" />
                            <h4>E-mail</h4>
                            <h5>kontakt@nemanjaradivojevic.rs</h5>
                            <p className="text-black-500">Pošaljite poruku</p>
                        </a>
                        <a href="https://m.me/nemanja.radivojevic996" target="_blank" rel="noreferrer" className="bg-green-500 p-4 rounded-2xl flex flex-col items-center">
                            <RiMessengerLine className="w-6 h-6" />
                            <h4>Messenger</h4>
                            <h5>nemanja.radivojevic996</h5>
                            <p className="text-black-500">Pošaljite poruku</p>
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=+381603011603" target="_blank" rel="noreferrer" className="bg-green-500 p-4 rounded-2xl flex flex-col items-center">
                            <RiWhatsappLine className="w-6 h-6" />
                            <h4>WhatsApp</h4>
                            <h5>+381 60 301 16 03</h5>
                            <p className="text-black-500">Pošaljite poruku</p>
                        </a>
                    </div>
                    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 w-full md:w-full max-w-3xl">
                        <input type="text" name="user_name" placeholder="Vaše ime" required className="px-4 py-5 border-2 border-solid border-white bg-transparent rounded-full focus:border-green-500 text-white" />
                        <input type="email" name="user_email" placeholder="Vaša E-mail adresa" required className="px-4 py-5 border-2 border-solid border-white bg-transparent rounded-full focus:border-green-500 text-white" />
                        <textarea name="message" rows="7" placeholder="Vaša poruka" required className="px-4 py-5 border-2 border-solid border-white bg-transparent rounded-3xl focus:border-green-500 text-white"></textarea>
                        <button type="submit" className="bg-green-500 rounded-full px-12 py-5 flex justify-center items-center gap-3 border-2 border-solid border-green-500 font-medium text-black-500 hover:bg-transparent hover:scale-90 hover:transition-all hover:shadow-lg hover:shadow-green-500 hover:text-white max-w-md">Pošaljite poruku</button>
                    </form> 
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact