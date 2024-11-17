import { useTranslation } from "react-i18next";
import StyledLegalLinks from "./StyledLegalLinks";

const LegalLinks = () => {
    const { t } = useTranslation();

    return (
        <StyledLegalLinks>
            <a href="#">
                {t("footer_p")} <br />
            </a>
            <a href="#">
                {t("footer_link_1")} <br />
            </a>
            <a href="#">
                {t("footer_link_2")}
                <br />
            </a>
            <a href="#">{t("footer_link_3")}</a>
        </StyledLegalLinks>
    );
};

export default LegalLinks;
