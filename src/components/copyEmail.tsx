import { BiCopy } from "react-icons/bi";
import { EMAIL } from "../constants";
import { useCopyToClipboard } from "../hooks/CopyToClipboard";
import { useTranslation } from "react-i18next";

export const CopyEmail: React.FC = () => {

  const [copiedText, copy] = useCopyToClipboard();
  const { t } = useTranslation();

  const handleCopy = (text: string) => {
    copy(text)
      .then(() => {
        console.log(t('copy.success'), {copiedText});
      })
      .catch((error: string) => {
        console.log(t('copy.failed'), error);
      })
  }

  return (
    <p 
      className="flex gap-2 flex-nowrap items-center text-dark-pastel-purple underline cursor-pointer"
      onClick={() => handleCopy(EMAIL)}
    >
      <BiCopy />
      {EMAIL}
    </p>
  );
}