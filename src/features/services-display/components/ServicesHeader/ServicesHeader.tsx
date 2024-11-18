import { StyledServicesHeader } from "./ServicesHeader.styles";
import SvgLogo from "../../../../shared/components/ui/SvgLogo/SvgLogo";

interface ServicesHeaderProps {
    isFaded: boolean;
}

const ServicesHeader: React.FC<ServicesHeaderProps> = ({ isFaded }) => {
    return (
        <StyledServicesHeader $isFaded={isFaded}>
            <SvgLogo width={300} height={60} />
            <p>
                Развиваем digital-среду, создавая{" "}
                <span className="first">высокотехнологичные</span> и{" "}
                <span className="second">современные</span> проекты
            </p>
        </StyledServicesHeader>
    );
};

export default ServicesHeader;
