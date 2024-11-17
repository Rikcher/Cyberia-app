import i18n from "../../i18n";
import { LanguageSwitchStyled, StyledLanguage } from "./LanguageSwitch.styles";
import useLanguageStore from "./services/store";

const LanguageSwitch = () => {
    const { language, setLanguage } = useLanguageStore();

    const toggleLanguage = () => {
        const newLanguage = language === "ru" ? "en" : "ru";
        setLanguage(newLanguage);
        i18n.changeLanguage(newLanguage);
    };

    return (
        <LanguageSwitchStyled onClick={toggleLanguage}>
            <StyledLanguage $isActive={language === "en"}>EN</StyledLanguage> /{" "}
            <StyledLanguage $isActive={language === "ru"}>RU</StyledLanguage>
        </LanguageSwitchStyled>
    );
};

export default LanguageSwitch;
