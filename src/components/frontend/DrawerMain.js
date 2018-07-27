import React, {Component} from 'react'
import {Drawer, Menu} from 'antd';
import { Link } from 'react-router-dom'
import config from "../../config";


class DrawerMain extends Component {

    onClose = () => {
        this.props.toggleDrawer()
    };

    render() {
        return (
            <div>
                <Drawer
                    title={config.siteName}
                    placement="left"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.props.drawerOpen}
                >
                    <Menu
                        onClick={this.props.toggleDrawer}
                        selectedKeys={[this.props.current]}
                        mode="vertical"
                    >
                        {
                            this.props.routes.map((route, index) => (
                                <Menu.Item key={route.key}>
                                    <Link to={route.path}>{route.menu}</Link>
                                </Menu.Item>
                            ))
                        }
                    </Menu>
                </Drawer>
            </div>
        )
    }

}

export default DrawerMain