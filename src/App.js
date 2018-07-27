import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Frontend from './components/frontend'
import Admin from './components/admin'
import './App.css';
import Login from "./components/admin/Login";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={Frontend}/>
                        <Route path="/admin" component={Admin}/>
                        <Route path="/login" component={Login}/>
                        <Route component={NoMatch} />
                    </Switch>
                </div>
            </Router>
        );
    }
}


const NoMatch = ({ location }) => (
    <div>
        <h1>
            Sorry!
        </h1>
        <h3>Page not found.</h3>
    </div>
);

export default App;
