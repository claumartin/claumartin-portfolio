import { FiGithub } from "react-icons/fi";
import { SocialButton } from "./social-button";
import { BiLogoLinkedin } from "react-icons/bi";

export const CallToAction: React.FC = () => {
  return (
    <div className="bg-dark-purple w-full flex justify-center items-center gap-12 p-8 sm:flex-row-reverse flex-wrap">
      <img 
        alt="claudia profile photo" 
        src={`${import.meta.env.BASE_URL}/images/claumartin.png`}
        className="mask-radial-at-center mask-radial-from-50% mask-radial-to-70% size-full sm:size-80 lg:size-96 object-cover"
      />
      <div className="text-isabelline flex flex-col items-center lg:items-start gap-2">
        <p className="text-2xl">Claudia Martín</p>
        <h1 className="font-title text-6xl text-center">Frontend Developer</h1>
        <p className="italic">Welcome!</p>
        <p className="italic">See my work, let's connect :)</p>
        <div className="flex gap-2">
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
      </div>
    </div>
  );
}