import React from "react";
import {
    StyledFooter,
    StyledFooterContactDetails,
    StyledFooterGeneralInformation,
    StyledFooterLegalLinks,
} from "./Footer.styles";
import { FooterNav, Logo } from "./Footer.components";
import { useTranslation } from "react-i18next";

const DesktopFooter: React.FC = () => {
    const { t } = useTranslation();
    return (
        <StyledFooter>
            <div className="inner-container">
                <StyledFooterGeneralInformation>
                    <Logo width={12.25} />
                    <p>{t("footer_title")}</p>
                </StyledFooterGeneralInformation>
                <div className="center-part">
                    <StyledFooterContactDetails />
                    <FooterNav />
                </div>
                <StyledFooterLegalLinks />
            </div>
        </StyledFooter>
    );
};

export default DesktopFooter;
