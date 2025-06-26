import { BiDownload } from "react-icons/bi";

export const DownloadPDF: React.FC = () => {
  return (
    <a 
      href={`${import.meta.env.BASE_URL}/docs/Claudia Martín EN.pdf`} 
      download="Claudia Martín EN.pdf"
      className="flex gap-2 flex-nowrap items-center text-dark-pastel-purple font-bold underline"
    >
      <BiDownload />
      Download CV
    </a>
  );
} 