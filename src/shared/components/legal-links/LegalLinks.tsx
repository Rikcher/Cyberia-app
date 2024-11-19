import { useTranslation } from "react-i18next";
import { StyledLegalLinks } from "./LegalLinks.styles";

const LegalLinks = ({ className }: { className?: string }) => {
    const { t } = useTranslation();

    return (
        <StyledLegalLinks className={className}>
            <li>
                <a href="#">
                    {t("footer_p")} <br />
                </a>
            </li>
            <li>
                <a href="#">
                    {t("footer_link_1")} <br />
                </a>
            </li>
            <li>
                <a href="#">
                    {t("footer_link_2")}
                    <br />
                </a>
            </li>
            <li>
                <a href="#">{t("footer_link_3")}</a>
            </li>
        </StyledLegalLinks>
    );
};

export default LegalLinks;
