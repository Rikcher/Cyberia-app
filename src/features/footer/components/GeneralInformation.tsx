import Logo from "../../../shared/components/ui/Logo/Logo";
import StyledGeneralInformation from "../styles/StyledGeneralInformation";

const GeneralInformation = () => {
    return (
        <StyledGeneralInformation>
            <Logo width={12.25} />
            <p>Веб-разработка и усиление IT-команд</p>
        </StyledGeneralInformation>
    );
};

export default GeneralInformation;
