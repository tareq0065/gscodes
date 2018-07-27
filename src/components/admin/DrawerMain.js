import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from "react-router-dom";
import Root from "../../Root";

const drawerWidth = 240;

const styles = theme => ({
    drawerPaper: {
        width: drawerWidth,
        [theme.breakpoints.up('md')]: {
            position: 'relative',
        },
    },
    toolbar: theme.mixins.toolbar,
});

class DrawerMain extends Component {

    render() {
        const {classes, theme} = this.props
        return (
            <div>
                <Hidden mdUp>
                    <Drawer
                        variant="temporary"
                        anchor='left'
                        open={this.props.open}
                        onClose={this.props.toggleDrawer}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        <div className={classes.toolbar} />

                        <List component="nav">
                            {
                                this.props.routes.map((item, index) => {
                                    return (
                                        <ListItem key={index} button component={Link} to={`${item.path}`}>
                                            <ListItemText primary={`${item.menu}`} />
                                        </ListItem>
                                    )
                                })
                            }
                        </List>
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <Drawer
                        variant="permanent"
                        open
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <div className={classes.toolbar} />

                        <List component="nav">
                            {
                                this.props.routes.map((item, index) => {
                                    return (
                                        <ListItem key={index} button component={Link} to={`${item.path}`}>
                                            <ListItemText primary={`${item.menu}`} />
                                        </ListItem>
                                    )
                                })
                            }
                        </List>
                    </Drawer>
                </Hidden>
            </div>
        );
    }
}

DrawerMain.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Root(withStyles(styles)(DrawerMain));
