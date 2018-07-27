import React, {Component} from 'react';
import { Layout, Menu, Affix } from 'antd';
import { Link } from 'react-router-dom'
import config from "../../config";
const { Header } = Layout;

class MainMenu extends Component {

    constructor(props) {
        super(props)
        this.state = {
            current: this.props.current,
            addShadow: false
        }
    }

    handleClick = (e) => {
        if (e.key === this.state.current){
            return;
        }
        this.setState({
            current: e.key,
        });
    }

    render () {
        return (
            <Affix style={{background: '#fff'}} offsetTop={1} onChange={affixed => this.setState({addShadow: affixed})}>
                <Header className={this.state.addShadow ? 'headeraffixed' : ''}>
                    <div className='header-content'>
                        <div>
                            {
                                config.siteName
                            }
                        </div>
                        <Menu
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                        >
                            {
                                this.props.routes.map((route, index) => (
                                    <Menu.Item key={route.key}>
                                        <Link to={route.path}>{route.menu}</Link>
                                    </Menu.Item>
                                ))
                            }
                        </Menu>
                    </div>
                </Header>
            </Affix>

        )
    }
}

export default MainMenu;
