import { BriefPresentation } from "./components/brief-presentation";
import { CallToAction } from "./components/call-to-action";
import { OtherFacts } from "./components/other-facts";
import { SoftSkills } from "./components/soft-skills";
import { TechStack } from "./components/tech-stack";

function App() {

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CallToAction />
      <BriefPresentation />
      <TechStack />
      <div className="flex items-start justify-center w-full md:w-fit flex-wrap md:flex-nowrap">
        <SoftSkills />
        <OtherFacts />
      </div>
    </div>
  )
}

export default App;