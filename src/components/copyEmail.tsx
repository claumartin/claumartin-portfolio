import { BiCopy } from "react-icons/bi";
import { EMAIL } from "../constants";

export const CopyEmail: React.FC = () => {
  return (
    <p 
      className="flex gap-2 flex-nowrap items-center text-dark-pastel-purple underline"
      onClick={() => {navigator.clipboard.writeText(EMAIL)}}
    >
      <BiCopy />
      {EMAIL}
    </p>
  );
}