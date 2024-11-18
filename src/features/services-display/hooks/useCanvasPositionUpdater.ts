import { useEffect } from "react";

const useCanvasPositionUpdater = (
    wrapperRef: React.RefObject<HTMLElement>,
    setCanvasTopPosition: React.Dispatch<React.SetStateAction<number>>
) => {
    useEffect(() => {
        const updateCanvasDimensions = () => {
            if (wrapperRef.current) {
                let element = wrapperRef.current;
                let offsetTop = 0;

                while (element) {
                    offsetTop += element.offsetTop;
                    element = element.offsetParent as HTMLElement;
                }

                setCanvasTopPosition(offsetTop);
            }
        };

        updateCanvasDimensions();
        window.addEventListener("resize", updateCanvasDimensions);

        return () => {
            window.removeEventListener("resize", updateCanvasDimensions);
        };
    }, [wrapperRef, setCanvasTopPosition]);
};

export default useCanvasPositionUpdater;
