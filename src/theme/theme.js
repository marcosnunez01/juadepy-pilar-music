import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        primary: {
            main: '#1E3A8A',
        },

        secondary: {
            main: '#F97316',
        },

        background: {
            default: '#F8FAFC',
            paper: '#FFFFFF',
        },

        text: {
            primary: '#1F2937',
            secondary: '#6B7280',
        },
    },

    typography: {
        fontFamily: '"Segoe UI", "Roboto", sans-serif',

        h1: {
            fontWeight: 700,
        },

        h2: {
            fontWeight: 700,
        },

        button: {
            textTransform: 'none',
            fontWeight: 600,
        },
    },

    shape: {
        borderRadius: 14,
    },
})

export default theme