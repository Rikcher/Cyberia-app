import { useThemeStore } from "./services/store";
import StyledCircle from "./styles/StyledCircle";
import StyledMoon from "./styles/StyledMoon";
import StyledSun from "./styles/StyledSun";
import StyledThemeSwitch from "./styles/StyledThemeSwitch";

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
