import React from 'react'
import CV from "../assets/Kaique_Miranda_CV.pdf";
import Portfolio from "../assets/home.png";
import Typist from "react-typist";

const Header = () => {
  return (
    <div id="fundo" className="">
        <div className="flex lg:flex-row flex-col justify-center items-center h-full">
          <div className="lg:mr-5">
            <img
              className="transition hover:-translate-y-3.5 duration-500 imagem lg:w-full w-3/4 mx-auto mt-20"
              src={Portfolio}
            />
          </div>

          <div className="text-3xl flex flex-col justify-center items-center h-full text-900 hover:-translate-y-3.5 transition duration-500 w-2/4">
            <Typist
              avgTypingDelay={50}
              className="text-center pb-5 hover:text-gray-800 transition"
            >
              <div className="font-bold">PORTFOLIO</div>
              <div className="lg:text-8xl text-6xl font-extrabold text">
                Kaique Miranda
              </div>
              <div className="pb-2 pt-2">Desenvolvedor front end</div>
            </Typist>
            <div className="flex lg:flex-row flex-col flex-wrap lg:text-2xl text-center text-base">
              <a href={CV} download>
                <div className="border-4 pl-8 pr-8 pt-2 pb-2 lg:mb-0 mb-5 rounded-full border-black hover:bg-black hover:text-white transition-all duration-500 mr-1">
                  DOWNLOAD CV
                </div>
              </a>
              <a href="Mailto:Kaiquemirandacp@gmail.com">
                <div className="border-4 pl-8 pr-8 pt-2 pb-2 rounded-full border-black hover:bg-black hover:text-white transition-all duration-500 ml-1">
                  ENTRAR EM CONTATO
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Header