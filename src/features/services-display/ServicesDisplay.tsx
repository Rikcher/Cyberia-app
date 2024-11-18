import { useRef, useState, useEffect } from "react";
import {
    CanvasWrapper,
    StyledCanvas,
    StyledCircleText,
    StyledCircleTextWrapper,
} from "./ServicesDisplay.styles";
import useSplineLoader from "./hooks/useSplineLoader";
import useCanvasPositionUpdater from "./hooks/useCanvasPositionUpdater";
import ServicesHeader from "./components/ServicesHeader";

const PlanetObject = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const [canvasTopPosition, setCanvasTopPosition] = useState(0);
    const [isFaded, setIsFaded] = useState(false);

    const { hoveredArea, selectedArea } = useSplineLoader(canvasRef);

    useCanvasPositionUpdater(wrapperRef, setCanvasTopPosition);

    useEffect(() => {
        if (hoveredArea) {
            console.log("Area hovered: ", hoveredArea);
        }
    }, [hoveredArea]);

    useEffect(() => {
        if (selectedArea) {
            console.log("Area Selected: ", selectedArea);
            if (selectedArea === "Trigger_to_zoom_in") {
                setIsFaded(true);
            }
        }
    }, [selectedArea]);

    //!! REMOVE LATER
    useEffect(() => {
        setIsFaded(false);
    }, [canvasRef]);

    return (
        <CanvasWrapper ref={wrapperRef}>
            <StyledCircleTextWrapper $isFaded={isFaded}>
                <ServicesHeader></ServicesHeader>
                <StyledCircleText />
            </StyledCircleTextWrapper>
            <StyledCanvas
                ref={canvasRef}
                id="canvas3d"
                $isHovered={
                    hoveredArea && hoveredArea !== "Not Hovered" ? true : false
                }
                style={{
                    top: `${canvasTopPosition}px`,
                }}
            />
        </CanvasWrapper>
    );
};

export default PlanetObject;
