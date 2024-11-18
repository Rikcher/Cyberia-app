import { useEffect, useRef, useState } from "react";
import { Application } from "@splinetool/runtime";

const useSplineLoader = (canvasRef: React.RefObject<HTMLCanvasElement>) => {
    const appRef = useRef<Application | null>(null);
    const [hoveredArea, setHoveredArea] = useState<string | null>(null);
    const [selectedArea, setSelectedArea] = useState<string | null>(null); 


    useEffect(() => {
        const loadApp = async () => {
            if (canvasRef.current && !appRef.current) {
                const app = new Application(canvasRef.current);
                appRef.current = app;

                try {
                    await app.load(
                        "https://prod.spline.design/gsBeBMWmNSKzvVr9/scene.splinecode"
                    );

                    app.addEventListener("mouseHover", (e) => {
                        if (e.target.name.startsWith("hover_")) {
                            setHoveredArea(e.target.name); 
                        } else {
                            setHoveredArea("Not Hovered"); 
                        }
                    });

                    app.addEventListener('mouseDown', (e) => {
                        if (e.target.name.startsWith('hover_') || e.target.name === "Trigger_to_zoom_in") {
                            setSelectedArea(e.target.name)
                        }
                    });
                } catch (error) {
                    console.error("Failed to load the Spline scene:", error);
                }
            }
        };

        loadApp();

        return () => {
            if (appRef.current) {
                appRef.current.dispose();
                appRef.current = null;
            }
        };
    }, [canvasRef]);

    return {hoveredArea, selectedArea}; 
};

export default useSplineLoader;
