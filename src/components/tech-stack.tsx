import { BiLogoCss3, BiLogoGit, BiLogoHtml5, BiLogoJavascript, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { SiEslint, SiJest, SiPrettier, SiTestinglibrary, SiWebpack } from "react-icons/si";
import { TechIcon } from "./tech-icon";

export const TechStack: React.FC = () => {
  return (
    <div className="bg-dark-pastel-purple w-full flex flex-col justify-center items-center gap-4 p-8">
      <h2 className="font-title text-center text-3xl">Go-to Tech Stack</h2>
      <div className="flex gap-4 flex-wrap justify-center">
        <TechIcon>
          <BiLogoTypescript className="text-typescript"/>
        </TechIcon>
        <TechIcon>
          <BiLogoJavascript className="text-javascript" />
        </TechIcon>
        <TechIcon>
          <BiLogoReact className="text-react" />
        </TechIcon>
        <TechIcon>
          <BiLogoHtml5 className="text-html"/>
        </TechIcon>
        <TechIcon>
          <BiLogoCss3 className="text-css"/>
        </TechIcon>
        <TechIcon>
          <BiLogoTailwindCss className="text-tailwindcss" />
        </TechIcon>
        <TechIcon>
          <SiJest className="text-jest" />
        </TechIcon>
        <TechIcon>
          <SiTestinglibrary className="text-react-testing-library" />
        </TechIcon>
        <TechIcon>
          <BiLogoGit className="text-git" />
        </TechIcon>
        <TechIcon>
          <SiWebpack className="text-webpack" />
        </TechIcon>
        <TechIcon>
          <SiEslint className="text-eslint" />
        </TechIcon>
        <TechIcon>
          <SiPrettier className="text-prettier" />
        </TechIcon>
      </div>
    </div>
  );
}