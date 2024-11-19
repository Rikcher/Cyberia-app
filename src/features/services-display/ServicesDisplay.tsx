import { useRef, useState, useEffect } from "react";
import {
    CanvasWrapper,
    StyledCanvas,
    StyledCircleText,
    StyledCircleTextWrapper,
} from "./ServicesDisplay.styles";
import useSplineLoader from "./hooks/useSplineLoader";
import useCanvasPositionUpdater from "./hooks/useCanvasPositionUpdater";
import ServicesHeader from "./components/ServicesHeader/ServicesHeader";
import SelectedService from "./components/SelectedService/SelectedService";
import HoveredService from "./components/HoveredService/HoveredService";
import { useWindowSizeStore } from "../../shared/store/useWindowSizeStore";

const ServicesDisplay = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const [canvasTopPosition, setCanvasTopPosition] = useState(0);
    const [isFaded, setIsFaded] = useState(false);
    const { width } = useWindowSizeStore();

    const { hoveredArea, selectedArea } = useSplineLoader(canvasRef);

    useCanvasPositionUpdater(wrapperRef, setCanvasTopPosition);

    useEffect(() => {
        if (selectedArea) {
            if (selectedArea === "Trigger_to_zoom_in") {
                setIsFaded(true);
            }
        }
    }, [selectedArea]);

    return (
        <CanvasWrapper ref={wrapperRef}>
            <StyledCircleTextWrapper>
                <ServicesHeader isFaded={isFaded} />
                {width > 1300 && <StyledCircleText $isFaded={isFaded} />}
                <SelectedService
                    isFaded={isFaded}
                    selectedArea={selectedArea}
                />
                <HoveredService
                    isHovered={!!hoveredArea}
                    hoveredArea={hoveredArea}
                />
            </StyledCircleTextWrapper>
            {width > 1300 && (
                <StyledCanvas
                    ref={canvasRef}
                    id="canvas3d"
                    $isHovered={!!hoveredArea}
                    style={{
                        top: `${canvasTopPosition}px`,
                    }}
                />
            )}
        </CanvasWrapper>
    );
};

export default ServicesDisplay;
