import { useTranslation } from "react-i18next";

export const LangSelector: React.FC = () => {

  const languages = ['en', 'es'];
  
  const {i18n} = useTranslation();

    const handleChange = async (language: string) => {
      await i18n.changeLanguage(language);
    }

  return (
    <ul className="flex flex-nowrap justify-end w-full pt-1 px-1">
      {languages.map((language: string) => <li 
          key={language}>
        <button 
          className={`uppercase cursor-pointer p-1 border-2 hover:scale-105 transition-transform ${i18n.language === language ? 'bg-gray-300' : ''}`}
          onClick={() => void handleChange(language)}
          type="button"
        >
          {language}
        </button>
      </li>)}
    </ul>
  );
}