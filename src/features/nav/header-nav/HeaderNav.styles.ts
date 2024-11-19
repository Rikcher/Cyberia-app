import styled from "styled-components";

export const StyledHeaderNav = styled.ul`
    list-style-type: none;
    display: flex;
    gap: 3.75rem;

    .nav-link {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.text};
        transition: color 0.3s ease-in-out;
        position: relative;

        &::before {
            content: "";
            position: absolute;
            bottom: -0.375rem;
            left: 50%;
            height: 0.125rem;
            width: 0;
            border-radius: 100px;
            background-color: ${({ theme }) => theme.colors.accent};
            transform: translateX(-50%);
            transition: width 0.3s ease-in-out;
        }

        &:hover {
            color: ${({ theme }) => theme.colors.accent};
        }

        &:hover::before {
            width: 100%;
            transform: translateX(-50%);
        }
    }
`;

