import { useTranslation } from "react-i18next";

export const BriefPresentation: React.FC = () => {

  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center gap-4 max-w-4xl xl:max-w-6xl  px-8">
      <h2 className="font-title text-center text-3xl capitalize">{t('presentation.title')}</h2>
      <p className="text-center">
        {t('presentation.part_1')}
      </p>
      <p className="text-center">
        {t('presentation.part_1')}
      </p>
    </div>
  );
}