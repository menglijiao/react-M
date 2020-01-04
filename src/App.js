import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch ,Router } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import history from './history';
import routes from './routes';
import Components from './Components/index';
import './App.css';

class App extends Component {
    //
    componentWillMount(){
        // let url ='/login';
        // if(window.location.search.indexOf('token') > -1){
        //     url = url + window.location.search
        //     console.log(url)
        // }
        // history.push(url)
    }
    render(){
        return (
            <Router history={history}>
                <Switch>
                    {routes.map((route, i) => {
                        return (
                            <Route
                                key={i}
                                path={route.path}
                                render={(props) => <route.component {...props} routes={route.routes} />}
                            />
                        );
                    })}
                </Switch>
            </Router>
        )
    }
}
//这里的路由是第一层的路由，用于跳转登录页和主页，在主页里再进行嵌套路由

export default connect()(App);
