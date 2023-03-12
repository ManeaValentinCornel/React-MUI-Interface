import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            light: '#b22347',
            main: '#ff3366',
            dark: '#ff5b84',
            contrastText: '#fff',
        },
        secondary: {
            light: '#191a1e',
            main: '#24262b',
            dark: '#4f5155',
            contrastText: '#fff',
        },
    },

    typography: {
        // Tell MUI what's the font-size on the html element is.
        htmlFontSize: 10,
        fontSize: 16,

        h1: {
            fontSize: 63,
            fontWeight: 400,
            color: '#252525',
        },

        h2: {
            fontSize: 46,
            lineHeight: 1.3,
            fontWeight: 500,
            color: '#3d3d3d',
        },

        h3: {
            fontWeight: 500,
            fontSize: 30,
            lineHeight: 1.3,
            color: '#303030',
            position: 'relative',
        },

        h4: {
            color: '#ff3366',
            fontWeight: 500,
            lineHeight: 1.3,
            fontSize: 28,
        },

        h5: {
            fontSize: 18,
            fontWeight: 700,
            lineHeight: 1.35,
            color: '#535354',
            textTransform: 'uppercase',
        },

        subtitle1: {
            fontSize: 20,
            color: '#3a3a3a',
        },
        body1: {
            color: '#3a3a3a',
        },

        body2: {
            fontSize: 15,
        },
    },
});

//Responsive typography
theme = responsiveFontSizes(theme);

const CustomTheme = (props) => {
    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default CustomTheme;
