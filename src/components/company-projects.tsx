import { CompanyProject } from "./company-project";

export const CompanyProjects: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <h2 className="font-title text-center text-3xl capitalize">Company Projects</h2>
      <div className="flex w-full justify-center items-center gap-4 flex-wrap">
        <CompanyProject 
          name='Halcón Viajes'
          web='https://www.halconviajes.com'
          media='halcon.png'
          />
        <CompanyProject 
          name='eDreams'
          web='https://www.edreams.es'
          media='edreams.png'
          />
        <CompanyProject 
          name='Tickets Palma Aquarium'
          web='https://tickets.palmaaquarium.com'
          media='tickets-aquarium.png'
          />
      </div>
    </div>
  );
}