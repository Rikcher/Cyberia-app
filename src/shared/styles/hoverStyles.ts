import { css } from "styled-components";

export const DoubleCircleHover = css`
    position: relative;
    overflow: hidden;

    &:before, &:after {
        content: '';
        position: absolute;
        height: 1px;
        width: 1px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        border-radius: 50%;
    }
        
    &:before {
        background: #FFD700;
        transition: 0.6s ease-in;
    }

    &:after {
        background: linear-gradient(to right, #F92D76, #FF8E53);
        transition: 0.8s ease;
        transition-delay: .3s;
    }

    &:hover {
        &:before, &:after {
            transform: translate(-50%, -50%) scale(310);
        }
    }
`