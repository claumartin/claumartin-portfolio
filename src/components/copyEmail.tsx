import { BiCopy } from "react-icons/bi";
import { EMAIL } from "../constants";
import { useCopyToClipboard } from "../hooks/CopyToClipboard";

export const CopyEmail: React.FC = () => {

  const [copiedText, copy] = useCopyToClipboard();

  const handleCopy = (text: string) => {
    copy(text)
      .then(() => {
        console.log('Copied!', {copiedText});
      })
      .catch((error: string) => {
        console.log('Failed to copy!', error);
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