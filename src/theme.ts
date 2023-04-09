// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#534A5F', // Main primary color, e.g. for buttons and links
            contrastText: '#ffffff', // Text color for primary color backgrounds
        },
        secondary: {
            main: '#f44336', // Main secondary color, e.g. for secondary buttons or highlights
            contrastText: '#ffffff', // Text color for secondary color backgrounds
        },
        background: {
            default: '#121212', // Default background color
            paper: '#1e1e1e', // Background color for Paper components
        },
        text: {
            primary: '#ffffff', // Primary text color
            secondary: '#b3b3b3', // Secondary text color, e.g. for muted text
        },
        action: {
            active: '#534A5F', // Active color for clickable elements like buttons
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        h1: {
            fontFamily: 'Exo2, sans-serif',
        },
        h2: {
            fontFamily: 'Exo2, sans-serif',
        },
        h3: {
            fontFamily: 'Exo2, sans-serif',
        },
        h4: {
            fontFamily: 'Exo2, sans-serif',
        },
        h5: {
            fontFamily: 'Exo2, sans-serif',
        },
        h6: {
            fontFamily: 'Exo2, sans-serif',
        },
        subtitle1: {
            fontFamily: 'Exo2, sans-serif',
        },
    },
});

export default theme;