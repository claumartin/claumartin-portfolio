import { useTranslation } from "react-i18next";

export const SoftSkills: React.FC = () => {

  const { t } = useTranslation();
  const softSkills = t('soft_skills.content',{ returnObjects: true}) as string[];
  return( 
  <div className="flex flex-col w-fit justify-center items-center gap-4 px-8">
      <h2 className="font-title text-center text-3xl capitalize">{t('soft_skills.title')}</h2>
      <ul className="flex flex-col gap-2 items-center text-center sm:items-start sm:text-start">
        {softSkills?.map((softSkill: string) => <li key={`soft-skill-${softSkill.slice(0, 4)}`} className="md:text-nowrap">{softSkill}</li>)}
      </ul>
  </div>
  );
}