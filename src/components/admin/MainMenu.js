import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { Link } from 'react-router-dom'

import Root from "../../Root";
const drawerWidth = 240;
const styles = theme => ({
    appBar: {
        position: 'absolute',
        marginLeft: drawerWidth,
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
});

class MainMenu extends Component {

    render () {
        const {classes, theme} = this.props
        return (
            <AppBar className={classes.appBar} position="sticky">
                <Toolbar variant="dense">
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={() => {
                            this.props.toggleDrawer()
                        }}
                        className={classes.navIconHide}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" noWrap>
                        Responsive drawer
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

MainMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Root(withStyles(styles, { withTheme: true })(MainMenu));
