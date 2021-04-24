import React from 'react'
import { Typography, AppBar } from '@material-ui/core';
import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';
import { makeStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const THEME = createMuiTheme({
    typography: {
        "fontFamily": `"Arial"`,
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500
    }
});

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
}));


export default function App() {
    const classes = useStyles();
    return (
        <MuiThemeProvider theme={THEME}>
            <div className={classes.wrapper}>
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography variant="h3" align="center">Video Chat</Typography>
                </AppBar>
                <VideoPlayer></VideoPlayer>
                <Options>
                    <Notifications></Notifications>
                </Options>
            </div>
        </MuiThemeProvider>
    )
}
