import { useTranslation } from "react-i18next";

export const OtherFacts: React.FC = () => {
  const {t} = useTranslation();
  return (
  <div className="w-fit flex flex-col justify-center items-center gap-4 px-8 mt-6 md:mt-0">
      <h2 className="font-title text-center text-3xl capitalize">{t('about_me.title')}</h2>
      <ul className="flex flex-col gap-2 items-center text-center sm:items-start sm:text-start md:list-disc">
        <li>{t('about_me.fact_1.part_1')} <em>{t('about_me.fact_1.part_2')}</em>{t('about_me.fact_1.part_3')}</li>
        <li>{t('about_me.fact_2')}</li>
        <li>{t('about_me.fact_3')}</li>
      </ul>
  </div>
  );
}