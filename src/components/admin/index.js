import React, {Component} from 'react'
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import Dashboard from './Dashboard'
import AddPost from './AddPost'
import config from "../../config";

class Admin extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const routes = [
            {
                path: "/",
                exact: true,
                menu: 'Dashboard',
                content: () => <Dashboard {...config}/>
            },
            {
                path: "/addpost",
                exact: true,
                menu: 'AddPost',
                content: () => <AddPost {...config}/>
            },
        ];

        if(!config.isLoggedin) {
            return (
                <Redirect
                    to={{
                        pathname: "/login",
                    }}
                />
            )
        }
        return (
            <div>Admin</div>
        )
    }

}

export default Admin