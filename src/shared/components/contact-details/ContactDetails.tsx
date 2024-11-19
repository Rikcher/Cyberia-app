import { StyledContactDetails } from "./ContactDetails.styles";

const ContactDetails = ({ className }: { className?: string }) => {
    return (
        <StyledContactDetails className={className}>
            <li>+7 999 123 45 67</li>
            <li>hello@cyberia.studio</li>
            <li>ул.Ярных, д.35, оф.10</li>
        </StyledContactDetails>
    );
};

export default ContactDetails;
