import { socialImgs } from "../constants";

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="flex flex-col justify-center">
        <p className="text-center md:text-start font-semibold text-white">
          Samruddh Mulmuley
        </p>
        <p className="text-center md:text-start text-sm mt-1 text-white-50">
          Industrial Engineer · NYU
        </p>
      </div>

      <div className="socials">
        {socialImgs.map((socialImg, index) => (
          <a
            key={index}
            href={socialImg.href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
            aria-label={socialImg.name}
          >
            <img src={socialImg.imgPath} alt={socialImg.name} />
          </a>
        ))}
      </div>

      <div className="flex flex-col justify-center">
        <p className="text-center md:text-end text-sm">
          © {new Date().getFullYear()} Samruddh Mulmuley. All rights reserved.
        </p>
        <p className="text-center md:text-end text-xs mt-1 text-white-50 opacity-60">
          Built with Three.js · React · GSAP
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
