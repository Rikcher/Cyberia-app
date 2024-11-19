import { useTranslation } from "react-i18next";
import { StyledEmptyPage } from "./EmptyPage.styles";

const EmptyPage = () => {
    const { t } = useTranslation();

    return (
        <StyledEmptyPage>
            <h1>{t("empty_page_title")}</h1>
            <p>{t("empty_page_text")}</p>
        </StyledEmptyPage>
    );
};

export default EmptyPage;
