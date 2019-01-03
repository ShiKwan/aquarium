import React, { Component } from "react";
import { Route, Switch, BrowserRouter, withRouter } from "react-router-dom";
import NotFound from './pages/notFound';
import Home from './pages/home';
import { connect } from 'react-redux';

import ProductDetails from './pages/productDetails';
import ProductCat from './pages/productCat';

class Routes extends Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/notfound" component={NotFound} />
                        <Route exact path='/' component={Home} />
                        <Route exact path='/product/:item' component={ProductDetails} />
                        <Route exact path='/product' component={ProductCat} />
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

function mapStatsToProps(state) {
     console.log(state);
    return {
        user: state.user,
    }
}

Routes = withRouter(Routes);
Routes = connect(mapStatsToProps)(Routes);
export default Routes;
