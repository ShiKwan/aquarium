import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";
import TopNav from '../pages/nav';
import Footer from '../pages/footer';
import Hero from '../component/common/hero';
import Goal from '../component/home/goal';
import AllProducts from '../component/home/allProducts';
import Rating from '../component/home/rating';
import Featured from '../component/home/featured';
import Service from '../component/home/service';
import { styling } from '../styles';

class Home extends Component {

    state = {
        redirect: false,
        subtitle: ""
    }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <TopNav />
                <Hero />
                <Featured />
                <Rating />
                <Goal />
                <Service />
                <AllProducts />
                <Footer />
            </React.Fragment>
        );
    }
}


function mapStateToProps(state) {
    console.log("state in homepage : ", state);
    return state;
};
Home = withStyles(styling)(Home);
Home = withRouter(Home);
Home = connect(mapStateToProps)(Home);
export default Home;