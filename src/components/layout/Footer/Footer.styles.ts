import styled from "styled-components";
import ContactDetails from "../../../shared/components/contact-details/ContactDetails";
import LegalLinks from "../../../shared/components/legal-links/LegalLinks";

export const StyledFooter = styled.footer`
    background-color: ${({theme}) => theme.colors.primary};
    width: 100%;
    padding: 1.875rem 1.5rem 3rem 1.5rem;
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

    @media (max-width: 768px) {
        .inner-container {
            flex-direction: column;
            align-items: center;
            max-height: unset;
            gap: 2.375rem;

            .center-part {
                display: flex;
                justify-content: space-between;
            }
        }
    }
`

export const StyledFooterContactDetails = styled(ContactDetails)`
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1.5625rem;

    @media (max-width: 768px) {
        gap: 1.3rem;
    }
`


export const StyledFooterGeneralInformation = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 1.75rem;

    p {
        max-width: 12.5rem;
        text-wrap: wrap
    }

    @media (max-width: 768px) {
        align-items: center;
        gap: 0.75rem;

        p {
            text-align: center;
        }
    }
`
export const StyledFooterLegalLinks = styled(LegalLinks)`
    max-width: 18.75rem;
`