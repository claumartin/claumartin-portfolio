import { useTranslation } from "react-i18next";

export const LangSelector: React.FC = () => {

  const languages = ['en', 'es'];
  
  const {i18n} = useTranslation();

    const handleChange = async (language: string) => {
      await i18n.changeLanguage(language);
    }

  return (
    <ul className="flex flex-nowrap justify-end">
      {languages.map((language: string) => <li 
          key={language}>
        <button 
          className={`uppercase p-1 border-2 min-w-12 ${i18n.language === language ? 'bg-gray-300 dark:opacity-50 dark:text-black' : 'hover:scale-105 transition-transform cursor-pointer'}`}
          onClick={() => void handleChange(language)}
          type="button"
        >
          {language}
        </button>
      </li>)}
    </ul>
  );
}