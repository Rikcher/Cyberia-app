import React from "react";
import StyledFooter from "./styles/StyledFooter";
import GeneralInformation from "../../features/footer/components/GeneralInformation/GeneralInformation";
import ContactDetails from "../../features/footer/components/ContactDetails/ContactDetails";
import LegalLinks from "../../features/footer/components/LegalLinks/LegalLinks";
import FooterNav from "../../features/nav/components/FooterNav/FooterNav";

const Footer: React.FC = () => {
    return (
        <StyledFooter>
            <div className="inner-container">
                <GeneralInformation />
                <div className="center-part">
                    <ContactDetails />
                    <FooterNav />
                </div>
                <LegalLinks />
            </div>
        </StyledFooter>
    );
};

export default Footer;
