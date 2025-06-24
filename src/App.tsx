import { BriefPresentation } from "./components/brief-presentation";
import { CallToAction } from "./components/call-to-action";
import { SoftSkills } from "./components/soft-skills";
import { TechStack } from "./components/tech-stack";

function App() {

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CallToAction />
      <BriefPresentation />
      <TechStack />
      <SoftSkills />
    </div>
  )
}

export default App;