import { useEffect, useState } from "react";
import useTextWidth from "../../../../shared/hooks/useTextWidth";
import getAreaData from "../../utils/getAreaData";
import {
    StyledHoveredService,
    StyledHoveredServiceWrapper,
} from "./HoveredService.styles";

interface HoveredServiceProps {
    isHovered: boolean;
    hoveredArea: string | null;
}

const HoveredService: React.FC<HoveredServiceProps> = ({
    isHovered,
    hoveredArea,
}) => {
    const [displayedTitle, setDisplayedTitle] = useState<string | null>(null);

    const { textWidth, textMeasureRef } = useTextWidth(displayedTitle);

    useEffect(() => {
        if (hoveredArea) {
            const { title } = getAreaData(hoveredArea);
            setDisplayedTitle(title);
        }
    }, [hoveredArea]);

    return (
        <StyledHoveredService $isHovered={isHovered} $maxWidth={textWidth}>
            <div className="svg"></div>
            <StyledHoveredServiceWrapper>
                <p>{displayedTitle}</p>
                <span
                    ref={textMeasureRef}
                    style={{
                        visibility: "hidden",
                        position: "absolute",
                        whiteSpace: "nowrap",
                    }}
                >
                    {displayedTitle}
                </span>
            </StyledHoveredServiceWrapper>
        </StyledHoveredService>
    );
};

export default HoveredService;
