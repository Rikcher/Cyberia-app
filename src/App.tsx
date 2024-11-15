import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./utils/Routes";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <RouterProvider
                router={router}
                fallbackElement={<p>Initial Load...</p>}
            />
        </ThemeProvider>
    );
}

export default App;
