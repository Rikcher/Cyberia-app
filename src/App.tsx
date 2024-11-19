import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./utils/Routes";
import { ThemeProvider } from "styled-components";
import { Toaster } from "sonner";
import { useThemeStore } from "./features/theme-switch/services/store";
import { useResizeListener } from "./shared/store/useWindowSizeStore";

function App() {
    const { theme } = useThemeStore();
    useResizeListener();

    return (
        <ThemeProvider theme={theme}>
            <RouterProvider
                router={router}
                fallbackElement={<p>Initial Load...</p>}
                future={{ v7_startTransition: true }}
            />
            <Toaster
                position="bottom-center"
                richColors
                toastOptions={{
                    style: { padding: "1rem 1.25rem" },
                }}
                expand={true}
            />
        </ThemeProvider>
    );
}

export default App;
