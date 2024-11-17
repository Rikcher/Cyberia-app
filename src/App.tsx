import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./utils/Routes";
import { ThemeProvider } from "styled-components";
import theme from "./shared/styles/theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <RouterProvider
                router={router}
                fallbackElement={<p>Initial Load...</p>}
                future={{ v7_startTransition: true }}
            />
        </ThemeProvider>
    );
}

export default App;
