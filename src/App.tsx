import { BriefPresentation } from "./components/brief-presentatio";
import { CallToAction } from "./components/call-to-action";

function App() {

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <CallToAction />
      <BriefPresentation />
    </div>
  )
}

export default App;