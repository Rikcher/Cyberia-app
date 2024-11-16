import { keyframes } from "styled-components";

// Pulsating Animation
export const pulse = keyframes`
    0% {
        background-color: rgba(200, 200, 200, 0.4);
    }
    50% {
        background-color: rgba(200, 200, 200, 0.7);
    }
    100% {
        background-color: rgba(200, 200, 200, 0.4);
    }
`;