import styled from "styled-components";

export const StyledServicesHeader = styled.div<{$isFaded: boolean}>`
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    opacity: ${({ $isFaded }) => ($isFaded ? "0" : "1")};
    transition: opacity 0.7s ease-in-out; 

    p {
        font-size: 3rem;
        font-family: "Unbounded", sans-serif;
        
        span {
            position: relative;
            display: inline-block;
            &::before {
                content: "";
                position: absolute;
                bottom: -0.375rem;
                height: 0.1875rem;
                width: 100%;
                border-radius: 100px;
            }
        }

        .first {
            &::before {
                background-color: ${({ theme }) => theme.colors.accent};
            }
        }
        .second {
            &::before {
                background-color: ${({ theme }) => theme.colors.accentSecondary};
            }
        }
    }
`

