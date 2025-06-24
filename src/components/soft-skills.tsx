const softSkills: string[] = [
  '🧠 Analytical & neurodivergent thinking',
  '🚀 Proactive mindset & hunger for learning',
  '🤝🏻 Clear & effective communication',
  '🔁 Adaptability & resilience',
  '⚡ Agile & quick to respond'
];

export const SoftSkills: React.FC = () => {
  return( 
  <div className="flex flex-col justify-center items-center gap-4 px-8">
      <h2 className="font-title text-center text-3xl capitalize">Soft skills</h2>
      <ul className="flex flex-col gap-2 items-center text-center sm:items-start sm:text-start">
        {softSkills && softSkills.map((softSkill, index) => <li key={`soft-skill-${index}`} className="text-nowrap">{softSkill}</li>)}
      </ul>
  </div>
  );
}