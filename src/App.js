import React from 'react';
import {  HashRouter as Router, Route, Link,browserHistory  } from "react-router-dom";
import { Provider } from "react-redux"

const Index = (props)=>{
    return (
        <h1>Index</h1>
    )
};
const About = ()=> <h2>About</h2>
const Users = ()=> <h2>Users</h2>
const App = () => {
    return (
        <Router >
            <div>
                <Link to="/">Home</Link><br/>
                <Link to="/about/">About</Link><br/>
                <Link to="/users/">Users</Link>

                <Route path="/" exact component={Index} />
                <Route path="/about/" component={About} />
                <Route path="/users/" component={Users} />
            </div>
        </Router>
    );
};

export default App;
