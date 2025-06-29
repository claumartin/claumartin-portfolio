import { useTranslation } from "react-i18next";
import { BiDownload } from "react-icons/bi";

export const DownloadPDF: React.FC = () => {

  const { t } = useTranslation();

  return (
    <a 
      href={`${import.meta.env.BASE_URL}/docs/Claudia Martín EN.pdf`} 
      download="Claudia Martín EN.pdf"
      className="flex gap-2 flex-nowrap items-center text-dark-pastel-purple underline"
    >
      <BiDownload />
      {t('download_cv')}
    </a>
  );
} 