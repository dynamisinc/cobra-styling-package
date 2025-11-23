import { alpha, createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    cssStyling: {
      headerHeight: number;
      drawerClosedWidth: number;
      drawerOpenWidth: number;
    };
  }
  interface ThemeOptions {
    cssStyling?: {
      headerHeight: number;
      drawerClosedWidth: number;
      drawerOpenWidth: number;
    };
  }
  interface Palette {
    breadcrumb: {
      background: string;
    };
    border: {
      main: string;
    };
    buttonDelete: {
      contrastText: string;
      dark: string;
      light: string;
      main: string;
    };
    buttonPrimary: {
      contrastText: string;
      dark: string;
      light: string;
      main: string;
    };
    colorPicker: {
      fill: string;
      text: string;
    }
    eventAction: {
      create: string;
      default: string;
      delete: string;
      edit: string;
    };
    grid: {
      light: string;
      main: string;
    };
    linkButton: {
      contrastText: string;
      dark: string;
      light: string;
      main?: string;
    };
    notifications: {
      error: string;
      errorText: string;
      info: string;
      success: string;
      successText: string;
      warning: string;
      warningText: string;
    }
    statusChart: {
      grey: string;
      red: string;
      yellow: string;
      green: string;
      black: string;
    }
  }

  interface PaletteOptions {
    breadcrumb?: {
      background: string;
    };
    border?: {
      main: string;
    };
    buttonDelete?: {
      contrastText: string;
      dark: string;
      light: string;
      main?: string;
    };
    buttonPrimary?: {
      contrastText: string;
      dark: string;
      light: string;
      main?: string;
    };
    colorPicker?: {
      fill: string;
      text: string;
    }
    eventAction?: {
      create: string;
      default: string;
      delete: string;
      edit: string;
    };
    grid: {
      light: string;
      main: string;
    };
    linkButton?: {
      contrastText: string;
      dark: string;
      light: string;
      main?: string;
    };
    notifications?: {
      error: string;
      errorText: string;
      info: string;
      success: string;
      successText: string;
      warning: string;
      warningText: string;
    }
    statusChart?: {
      grey: string;
      red: string;
      yellow: string;
      green: string;
      black: string;
    }
  }
}

//keeping this stuff here as a reminder for how to add new theme colors, etc
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    white: true;
  }
}

const primaryContrastText = "#1a1a1a";
export const cobraTheme = createTheme({
    cssStyling: {
      drawerClosedWidth: 64,
      drawerOpenWidth: 288,
      headerHeight: 54,
    },
    palette: {
      mode: 'light',
      primary: {
        dark: '#696969', //dim gray
        main: '#c0c0c0', //silver
        contrastText: primaryContrastText,
        light: '#dadbdd', //silver white
      },
      secondary: {
        main: '#b22222', //firebrick
      },
      background: {
        default: '#f8f8f8', 
        paper: '#ffffff', //white
      },
      border: {
        main: alpha(primaryContrastText, 0.23)
      },
      breadcrumb: {
        background: '#F1F1F1'
      },
      colorPicker: {
        fill: '#cccccc',
        text: '#333333'
      },
      eventAction: {
        create: '#4caf50', //green
        edit: '#2196f3',   //blue
        delete: '#f44336', //red
        default: '#9e9e9e',//grey
      },
      grid: {
        light: '#EAF2FB',
        main: '#DBE9FA'
      },
      text: {
        primary: '#1a1a1a',
        secondary: '#848482'
      },
      error: {
        main: '#e42217', //lava red
      },
      info: {
        main: '#0020c2',
        light: '#0000ff',
        dark: '#00008b',
      },
      divider: "#848482",
      success: {
        main: '#08682a',
      },
      buttonDelete: {
        contrastText: '#ffffff', //white
        dark: '#c11b17', //chilli pepper
        light: '#ff0000', //red
        main: '#e42217' //lava red
      },
      buttonPrimary: {
        contrastText: '#ffffff', //white
        dark: '#00008b', //darkblue
        light: '#0000ff', //blue
        main: '#0020c2' //cobalt blue
      },
      linkButton: {
        contrastText: '#ffffff', //white
        dark: '#00008b', //darkblue
        light: '#DBE9FA',
        main: '#0020c2' //cobalt blue
      },
      notifications: {
        error: '#EFB6B6',
        errorText: '#b22222',//firebrick
        info: '#DBE9FA',
        success: '#AEFBB8',
        successText: '#008000',//Green
        warning: '#F9F9BE',
        warningText: '#6F4E37',//Logbook brown
      },
      statusChart: {
        grey: '#C0C0C0',
        red: '#C11B17',//chilli pepper
        yellow: '#FFEF00',//canary yellow
        green: '#008000',
        black: '#000000',
      }
    },
    components: {
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: "#1a1a1a",
          }
        }
      },
      // https://mui.com/material-ui/customization/theme-components/#default-props
      MuiTextField: {
        defaultProps: {
          size: 'small',
        },
      },
      MuiAutocomplete: {
        defaultProps: {
          size: 'small',
        },
      },
      MuiSelect: {
        defaultProps: {
          size: 'small',
        },
      },
      MuiInputLabel: {
        defaultProps: {
          size: 'small',
        },
      },
      MuiButtonGroup: {
        defaultProps: {
          size: 'small',
        },
      },
      MuiToggleButtonGroup: {
        defaultProps: {
          size: 'small',
        },
      },
      MuiButton: {
        defaultProps: {
          size: 'small',
        },
      },
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            color: '#3A3B3C'
          }
        }
      }
    },
  });
