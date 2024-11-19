import { useThemeStore } from "./services/store";
import {
    StyledCircle,
    StyledThemeSwitch,
    StyledMoon,
    StyledSun,
} from "./ThemeSwitch.styles";

const ThemeSwitch = () => {
    const { theme, toggleTheme } = useThemeStore();

    return (
        <StyledThemeSwitch $theme={theme.theme} onClick={toggleTheme}>
            <StyledSun $theme={theme.theme} />
            <StyledMoon $theme={theme.theme} />
            <StyledCircle $theme={theme.theme}></StyledCircle>
        </StyledThemeSwitch>
    );
};

export default ThemeSwitch;
