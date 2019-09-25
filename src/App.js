import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import Components from './Components/index';
import './App.css';

class App extends Component {
    render(){
        return (
            <div className="App">
                <Components/>
            </div>
        )
    }
}

export default connect()(App);
