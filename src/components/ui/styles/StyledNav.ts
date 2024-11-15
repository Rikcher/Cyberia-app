    import styled from "styled-components";

    interface StyledNavProps {
        type: "header" | "footer";
    }

    const StyledNav = styled.nav<StyledNavProps>`
        display: flex;

        ${({ type }) => type === "header" && `
            gap: 3.75rem;
        `}

        .nav-link {
            font-size: 1.125rem;
            text-decoration: none;
            color: ${({ theme }) => theme.colors.text};
            transition: color 0.3s ease-in-out;
            position: relative;

            ${({ type, theme }) =>
                type === "header" &&
                `
                &::before {
                    content: "";
                    position: absolute;
                    bottom: -0.375rem;
                    left: 50%;
                    height: 0.125rem;
                    width: 0;
                    border-radius: 100px;
                    background-color: ${theme.colors.accent};
                    transform: translateX(-50%);
                    transition: width 0.3s ease-in-out;
                }

                &:hover {
                    color: ${theme.colors.accent};
                }

                &:hover::before {
                    width: 100%; 
                    transform: translateX(-50%);
                }
            `}

            ${({ type }) =>
                type === "footer" &&
                `
                &:hover {
                    text-decoration: underline;
                }
            `}
        }
    `;

    export default StyledNav;
