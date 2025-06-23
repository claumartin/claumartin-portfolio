import { BiLogoCss3, BiLogoGit, BiLogoHtml5, BiLogoJavascript, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { SiEslint, SiJest, SiPrettier, SiTestinglibrary, SiWebpack } from "react-icons/si";
import { Technology } from "./technology";

export const TechStack: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <h2 className="font-title text-center text-3xl">Go-to Tech Stack</h2>
      <div className="grid sm:grid-cols-2 sm:grid-rows-6 lg:grid-cols-3 lg:grid-rows-4 xl:grid-cols-4 xl:grid-rows-4 gap-3 flex-wrap justify-center">
        <Technology name="TypeScript">
          <BiLogoTypescript className="text-typescript"/>
        </Technology>
        <Technology name="JavaScript">
          <BiLogoJavascript className="text-javascript" />
        </Technology>
        <Technology name="React">
          <BiLogoReact className="text-react" />
        </Technology>
        <Technology name="HTML5">
          <BiLogoHtml5 className="text-html"/>
        </Technology>
        <Technology name="CSS3">
          <BiLogoCss3 className="text-css"/>
        </Technology>
        <Technology name="Tailwind CSS">
          <BiLogoTailwindCss className="text-tailwindcss" />
        </Technology>
        <Technology name="Jest">
          <SiJest className="text-jest" />
        </Technology>
        <Technology name="React Testing Library">
          <SiTestinglibrary className="text-react-testing-library" />
        </Technology>
        <Technology name="Git">
          <BiLogoGit className="text-git" />
        </Technology>
        <Technology name="Webpack">
          <SiWebpack className="text-webpack" />
        </Technology>
        <Technology name="ESLint">
          <SiEslint className="text-eslint" />
        </Technology>
        <Technology name="Prettier">
          <SiPrettier className="text-prettier" />
        </Technology>
        <div className="col-span-full flex justify-center items-end">
        <span>...</span>
        </div>
      </div>
    </div>
  );
}