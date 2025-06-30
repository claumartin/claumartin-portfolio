import { useTranslation } from "react-i18next";
import { BiDownload } from "react-icons/bi";

export const DownloadPDF: React.FC = () => {

  const {t} = useTranslation();
  const baseURL =  `${import.meta.env.BASE_URL}/docs/`;

  return (
    <a 
      href={t('download_cv.filename', {baseURL})} 
      download={t('download_cv.filename', {baseURL: ''})}
      className="flex gap-2 flex-nowrap items-center text-dark-pastel-purple underline"
    >
      <BiDownload />
      {t('download_cv.title')}
    </a>
  );
} 