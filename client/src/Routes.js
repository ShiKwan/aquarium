import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import NotFound from './pages/notFound';
import Home from './pages/home';
import { connect } from 'react-redux';
import Footer from './pages/footer';
import ProductDetails from './pages/productDetails';
import Nav from './pages/nav';
class Routes extends Component {

    render() {
        return (
            <div>
                <Nav/>
                <BrowserRouter>
                    <Switch>
                        <Route path="/notfound" component={NotFound} />
                        <Route exact path='/' component={Home} />
                        <Route exact path='/product/:item' component={ProductDetails} />
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
                <Footer />
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

export default connect(mapStatsToProps)(Routes);
