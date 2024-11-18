import { StyledServicesHeader } from "./ServicesHEader.styles";
import SvgLogo from "../../../shared/components/ui/SvgLogo/SvgLogo";

const ServicesHeader = () => {
    return (
        <StyledServicesHeader>
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
