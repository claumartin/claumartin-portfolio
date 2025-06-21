import { CallToAction } from "./components/call-to-action";

function App() {

  return (
    <div className="flex flex-col gap-6 w-full">
      <CallToAction />
      <h1 className="font-title text-4xl">Title text</h1>
      <p className="text-xl">Normal text</p>
    </div>
  )
}

export default App;