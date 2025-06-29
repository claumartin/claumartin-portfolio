import { BriefPresentation } from "./components/brief-presentation";
import { CallToAction } from "./components/call-to-action";
import { LangSelector } from "./components/lang-selector";
import { OtherFacts } from "./components/other-facts";
import { SoftSkills } from "./components/soft-skills";
import { TechStack } from "./components/tech-stack";


function App() {

  return (
    <div className="flex flex-col items-center gap-6 w-full pb-8">
      <LangSelector />
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