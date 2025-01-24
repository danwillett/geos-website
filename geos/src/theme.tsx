import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#003660',
        },
        secondary: {
            main: '#047C91'
        },
        navy: {
          main: '#003660', // Navy background
          contrastText: '#FFFFFF', // White text
        },
        gold: {
          main: '#FEBC11', // Gold background
          contrastText: '#3D4952', // Dark gray text
        },
        darkGray: {
          main: '#111517', // Dark light gray background
          contrastText: '#FFFFFF', // White text
        },
        lightGray: {
          main: '#DCE1E5', // Light gray background
          contrastText: '#3D4952', // Dark gray text
        },
        lightLightGray: {
          main: '#EEF0F2', // Light light gray background
          contrastText: '#3D4952', // Dark gray text
        },
        white: {
          main: '#FFFFFF', // White background
          contrastText: '#3D4952', // Dark gray text
        },
        seaGreen: {
          main: '#09847A', // Sea green background
          contrastText: '#FFFFFF', // White text
        },
        aqua: {
          main: '#047C91', // Aqua background
          contrastText: '#FFFFFF', // White text
        },
        moss: {
          main: '#6D7D33', // Moss background
          contrastText: '#FFFFFF', // White text
        },
        coral: {
          main: '#EF5645', // Coral background
          contrastText: '#011517', // Dark blue text
        },
        darkCoral: {
          main: '#C43424', // Dark coral background
          contrastText: '#FFFFFF', // White text
        },
        clay: {
          main: '#DCD6CC', // Clay background
          contrastText: '#3D4952', // Dark gray text
        },
        lightClay: {
          main: '#F1EEEA', // Light clay background
          contrastText: '#3D4952', // Dark gray text
        },
        sandstone: {
          main: '#C9BF9D', // Sandstone background
          contrastText: '#3D4952', // Dark gray text
        },
        lightSandstone: {
          main: '#EDEADF', // Light sandstone background
          contrastText: '#3D4952', // Dark gray text
        },
        mist: {
          main: '#9CBEBE', // Mist background
          contrastText: '#3D4952', // Dark gray text
        },
        lightMist: {
          main: '#DAE6E6', // Light mist background
          contrastText: '#3D4952', // Dark gray text
        },
      },
    // components: {
    //     MuiTypography: {
    //         defaultProps: {
    //             fontFamily: fonts
    //         }
    //     }
    // },
    typography: {
        h1: {
            fontFamily: ['"Nunito Sans"', 'sans-serif'].join(','),
            fontSize: '2.6rem',
            '@media (max-width:600px)': {
            fontSize: '2.25rem', // Font size for small screens
            },
            '@media (max-width:400px)': {
                fontSize: '2rem', // Font size for medium screens
            },
        },
        h2: {
            fontFamily: ['"Nunito Sans"', 'sans-serif'].join(','),
            fontSize: '2.5rem',
            '@media (max-width:750px)': {
            fontSize: '2rem', // Font size for small screens
            },
            '@media (max-width:600px)': {
            fontSize: '1.75rem', // Font size for small screens
            },
            '@media (max-width:400px)': {
                fontSize: '1.5rem', // Font size for medium screens
            },
        },
        h3: {
            fontFamily: ['"Nunito Sans"', 'sans-serif'].join(','),
            fontSize: '2rem',
            '@media (max-width:750px)': {
                fontSize: '1.75rem', // Font size for small screens
            },
            '@media (max-width:500px)': {
                fontSize: '1.6rem', // Font size for small screens
            },
            '@media (max-width:400px)': {
                fontSize: '1.3rem', // Font size for small screens
            },

        },
        h4: {
            fontFamily: ['"Nunito Sans"', 'sans-serif'].join(','),
            fontSize: '1.75rem',
            '@media (max-width:750px)': {
                fontSize: '1.5rem', // Font size for small screens
            },
            '@media (max-width:500px)': {
                fontSize: '1.25rem', // Font size for small screens
            },
            '@media (max-width:400px)': {
                fontSize: '1.15rem', // Font size for small screens
            },
        },
        h5: {
            fontFamily: ['"Nunito Sans"', 'sans-serif'].join(','),
            fontSize: '1.25rem',
            textTransform: 'none',
            '@media (max-width:750px)': {
                fontSize: '1.15rem', // Font size for small screens
            },
            '@media (max-width:500px)': {
                fontSize: '1rem', // Font size for small screens
            },
            '@media (max-width:400px)': {
                fontSize: '1rem', // Font size for small screens
            },
            
        },
        h6: {
            fontFamily: ['"Nunito Sans"', 'sans-serif'].join(','),
            fontSize: '1.1rem',
            textTransform: 'none',
            '@media (max-width:750px)': {
                fontSize: '1rem', // Font size for small screens
            },
            '@media (max-width:500px)': {
                fontSize: '0.9rem', // Font size for small screens
            },
            '@media (max-width:400px)': {
                fontSize: '0.8rem', // Font size for small screens
            },
        },
        caption: {
            fontFamily: ['"Nunito Sans"', 'sans-serif'].join(','),
            fontSize: '1rem',
            '@media (max-width:750px)': {
                fontSize: '0.9rem', // Font size for small screens
            },
            '@media (max-width:500px)': {
                fontSize: '0.8rem', // Font size for small screens
            },
            '@media (max-width:400px)': {
                fontSize: '0.7rem', // Font size for small screens
            },
        }

    }
});

export default theme