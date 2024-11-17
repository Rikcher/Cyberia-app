import React from "react";
import StyledFooter from "./StyledFooter";
import GeneralInformation from "./components/GeneralInformation/GeneralInformation";
import ContactDetails from "./components/ContactDetails/ContactDetails";
import LegalLinks from "./components/LegalLinks/LegalLinks";
import FooterNav from "../../../features/nav/components/FooterNav/FooterNav";

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
