import React, {Component} from 'react'
import {HashRouter as Router, Route} from "react-router-dom";
import {Layout} from 'antd';
import MainMenu from './MainMenu'
import DrawerMain from './DrawerMain'
import Home from './Home'
import Codes from './Codes'
import Youtube from './Youtube'

import config from '../../config'
const {Content, Footer} = Layout;

class Frontend extends Component {
    constructor(props) {
        super(props)

        this.state = {
            drawerOpen: false,
            current: ''
        }
        this.toggleDrawer = this.toggleDrawer.bind(this)
    }

    componentWillMount() {
        const hashpath = this.props.location.hash
        const currentpath = hashpath.replace('#/', "")

        if (currentpath === ''){
            this.setState({
                current: 'home'
            })
        }
        else {
            this.setState({
                current: currentpath
            })
        }
    }

    toggleDrawer() {
        this.setState({
            drawerOpen: !this.state.drawerOpen,
        });
    };

    render() {
        const routes = [
            {
                path: "/",
                exact: true,
                menu: 'Home',
                key: 'home',
                content: () => <Home {...config}/>
            },
            {
                path: "/codes",
                menu: 'Codes',
                key: 'codes',
                content: () => <Codes {...config}/>
            },
            {
                path: "/youtube",
                menu: 'Youtube',
                key: 'youtube',
                content: () => <Youtube {...config}/>
            },
        ];


        return (
            <Router>
                <div>
                    <Layout>
                        <MainMenu current={this.state.current} routes={routes}/>
                        <DrawerMain
                            toggleDrawer={this.toggleDrawer}
                            drawerOpen={this.state.drawerOpen}
                            current={this.state.current}
                            routes={routes}
                        />
                        <Content>
                            <div className='content'>
                                {
                                    routes.map((route, index) => (
                                        <Route
                                            key={index}
                                            path={route.path}
                                            exact={route.exact}
                                            component={route.content}
                                        />
                                    ))
                                }
                            </div>
                        </Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </div>
            </Router>
        )
    }

}


export default Frontend