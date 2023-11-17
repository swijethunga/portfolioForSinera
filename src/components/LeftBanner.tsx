import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMedium, FaGithub } from "react-icons/fa";

import { FadeIn } from "./FadeIn";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["IT Undergraduate.", "Full Stack Developer.", "Web developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">HELLO WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          I'm <span className="text-designColor capitalize">Sinera Wijethunga</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wider">
        Currenly I am a IT undergraduate in University of Moratuwa, hoping to be a IT professonel with true desire of serving to my country with gained knowledge
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://instagram.com/mr_si_nera_?utm_source=qr&igshid=OGU0MmVlOWVjOQ==" target="_blank">
              <span className="bannerIcon">
                <FaInstagram />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/sinera-wijethunga-741a93232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a href="https://www.facebook.com/sinera.wijethunga.3" target="_blank">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
            <a
              href="https://medium.com/@sinera2000"
              target="_blank"
            >
              <span className="bannerIcon">
                <FaMedium />
              </span>
            </a>
            <a
              href="https://github.com/swijethunga"
              target="_blank"
            >
              <span className="bannerIcon">
                <FaGithub/>
              </span>
            </a>
          </div>
        </div>
        
        </div>
      
    </FadeIn>
  );
};

export default LeftBanner;
