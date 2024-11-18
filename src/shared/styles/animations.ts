import { keyframes } from "styled-components";

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

export const rotate = keyframes`
    0% {
        transform: translateY(50%) rotate(0deg);
    }
    100% {
        transform: translateY(50%) rotate(360deg);
    }
`;
