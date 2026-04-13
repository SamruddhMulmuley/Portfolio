import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => (
  <div className="flex-none flex-center marquee-item">
    <img src={icon.imgPath} alt="tool logo" />
  </div>
);

const LogoShowcase = () => (
  <div className="md:my-20 my-10 relative">
    <p className="text-center text-white-50 tracking-widest uppercase text-xs mb-6 opacity-60">
      Tools, Ecosystems &amp; Collaborators
    </p>
    <div className="gradient-edge" />
    <div className="gradient-edge" />
    <div className="marquee h-52">
      <div className="marquee-box md:gap-12 gap-5">
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={`dup-${index}`} icon={icon} />
        ))}
      </div>
    </div>
  </div>
);

export default LogoShowcase;
