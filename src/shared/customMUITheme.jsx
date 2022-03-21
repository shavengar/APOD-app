import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        type: "light",
        primary: {
            main: "#7986cb",
            light: "rgb(147, 158, 213)",
            dark: "rgb(84, 93, 142)",
            contrastText: "#fff",
        },
        background: {
            paper: "#ffffff",
            default: "#1d1c1f",
        },
        text: {
            primary: "#fff",
            secondary: "rgba(255, 255, 255, 0.7)",
            disabled: "rgba(255, 255, 255, 0.5)",
            hint: "rgba(255, 255, 255, 0.5)",
        },
        divider: "rgba(255, 255, 255, 0.12)",
    },
});
