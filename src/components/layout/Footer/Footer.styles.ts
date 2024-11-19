import styled from "styled-components";
import ContactDetails from "../../../shared/components/contact-details/ContactDetails";
import LegalLinks from "../../../shared/components/legal-links/LegalLinks";

export const StyledFooter = styled.footer`
    background-color: ${({theme}) => theme.colors.primary};
    width: 100%;
    padding: 7.625rem 1.5rem 8.875rem 1.5rem;
    color: ${({ theme }) => theme.colors.text};

    .inner-container {
        max-width: 77.5rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        max-height: 7.25rem;

        .center-part {
            display: flex;
            gap: 3.375rem;
        }
    }
`

export const StyledFooterContactDetails = styled(ContactDetails)`
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1.5625rem;
`


export const StyledFooterGeneralInformation = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 1.75rem;

    p {
        max-width: 12.5rem;
        text-wrap: wrap
    }
`
export const StyledFooterLegalLinks = styled(LegalLinks)`
    max-width: 18.75rem;
`