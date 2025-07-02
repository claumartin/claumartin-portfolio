import type { PropsWithChildren } from "react";
import { BiLinkExternal } from "react-icons/bi";

interface CompanyProjectProps extends PropsWithChildren {
  name: string,
  web: string,
  media: string
}

export const CompanyProject: React.FC<CompanyProjectProps> = ({name, web, media}) => {
  return (
    <div>
      <h3>{name}</h3>
      <div className='w-80 relative'>
        <img 
          alt={`${name} screenshot`}
          src={`${import.meta.env.BASE_URL}/images/projects/${media}`}
          className="rounded-sm border-2 w-full object-cover dark:brightness-90"
        />
        <a 
          href={web} 
          target="_blank" 
          className="absolute top-0 right-0 px-4 py-2 bg-dark-pastel-purple opacity-80 rounded-tr-sm hover:scale-105 origin-top-right transition-transform flex flex-nowrap gap-2 items-center dark:text-black"
        >
          <BiLinkExternal />
          Visit
        </a>
      </div>
    </div>
  );
}