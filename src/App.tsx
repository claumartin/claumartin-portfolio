import { BriefPresentation } from "./components/brief-presentation";
import { CallToAction } from "./components/call-to-action";
import { DarkToggle } from "./components/dark-toggle";
import { LangSelector } from "./components/lang-selector";
import { OtherFacts } from "./components/other-facts";
import { SoftSkills } from "./components/soft-skills";
import { TechStack } from "./components/tech-stack";


function App() {

  return (
    <div className="flex flex-col items-center gap-6 w-full py-2 dark:bg-ebony dark:text-isabelline">
      <div className="flex flex-nowrap justify-center xs:justify-end gap-3 w-full px-3 mb-[-1rem]">
        <LangSelector />
        <DarkToggle />
      </div>
      <CallToAction />
      <BriefPresentation />
      <TechStack />
      <div className="flex items-start justify-center xl:gap-60 w-full flex-wrap md:flex-nowrap">
        <SoftSkills />
        <OtherFacts />
      </div>
    </div>
  )
}

export default App;