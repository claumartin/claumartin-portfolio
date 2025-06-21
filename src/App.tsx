import { BriefPresentation } from "./components/brief-presentatio";
import { CallToAction } from "./components/call-to-action";
import { TechStack } from "./components/tech-stack";

function App() {

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CallToAction />
      <BriefPresentation />
      <TechStack />
    </div>
  )
}

export default App;