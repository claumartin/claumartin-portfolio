import { FiGithub } from "react-icons/fi";
import { SocialButton } from "./social-button";
import { BiLogoLinkedin } from "react-icons/bi";
import { DownloadPDF } from "./download-cv";

export const CallToAction: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center gap-4 md:gap-12 p-8 sm:flex-row-reverse flex-wrap">
      <div className="rounded-full border-2 p-1 border-dashed">
        <img 
          alt="claudia profile photo" 
          src={`${import.meta.env.BASE_URL}/images/claumartin.png`}
          className="rounded-full border-2 size-full sm:size-80 lg:size-80 object-cover"
          />
      </div>
      <div className="flex flex-col items-center lg:items-start gap-2">
        <p className="text-2xl">Claudia Martín</p>
        <h1 className="font-title text-6xl text-center">Frontend Developer</h1>
        <p className="italic">Welcome!</p>
        <p className="italic">See my work, let's connect :)</p>
        <div className="flex gap-2 mt-2">
          <SocialButton
            href="https://github.com/claumartin"
            title="Go to claumartin GitHub profile"
            content="GitHub"
          >
            <FiGithub />
          </SocialButton>
          <SocialButton
            href="https://www.linkedin.com/in/claudia-martin-office/"
            title="Go to claumartin LinkedIn profile"
            content="LinkedIn"
          >
            <BiLogoLinkedin />
          </SocialButton>
        </div>
        <DownloadPDF />
      </div>
    </div>
  );
}