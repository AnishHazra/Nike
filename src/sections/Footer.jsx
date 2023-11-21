import { footerLogo } from "../assets/images";
import { socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center w-10 h-10 bg-white rounded-full">
                <img src={icon.src} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
          <div>
          <p className="font-montserrat text-white-400 mb-10 cursor-pointer">Copyright. All rights reserved.</p>
            <p className="font-montserrat cursor-pointer text-white-400 flex">Terms & Conditions.</p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
