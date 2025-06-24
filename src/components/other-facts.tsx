export const OtherFacts: React.FC = () => {
  return (
  <div className="w-full flex flex-col justify-center items-center gap-4 px-8 mt-6 md:mt-0">
      <h2 className="font-title text-center text-3xl capitalize">A bit about me</h2>
      <ul className="flex flex-col gap-2 items-center text-center sm:items-start sm:text-start list-disc">
        <li>I read <span className="italic">Mistborn</span>, by Sanderson</li>
        <li>I'm a Krav-Maga instructor</li>
        <li>I love board games</li>
      </ul>
  </div>
  );
}