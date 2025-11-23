import AppBar, { AppBarProps } from '@mui/material/AppBar';
import { CSSObject, Theme, styled } from '@mui/material/styles';


const drawerWidth = 288;

//https://mui.com/components/drawers/#mini-variant-drawer for reference
const Layout = {
  AppBar: styled(AppBar)<AppBarProps>(({ theme, dir }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    boxShadow: 'none'
  })),
  SPATemplate: {
    Content: styled('div')(({ theme }) => ({
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    })),
    Toolbar: styled('div')(({ theme }) => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      minHeight: "54px",
      padding: 0
    })),
    Children: styled('div')(({ theme }) => ({
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      flexGrow: 1,
      paddingLeft: 0,
      paddingRight: 0
    })),
  },
  Main: styled('main')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'space-between',
    height: '100vh',
    backgroundColor: theme.palette.background.default
  })),
};

export default Layout;
