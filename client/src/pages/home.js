import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Nav from './nav';
import Hero from '../component/common/hero';
import Goal from '../component/home/goal';
import About from '../component/home/about';
import AllProducts from '../component/home/allProducts';
import Rating from '../component/home/rating';
import Featured from '../component/home/featured';
import Service from '../component/home/service';
import Footer from '../pages/footer';
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
                <Hero />
                <Featured />
                <Rating />
                <AllProducts />
                <Service />
            </React.Fragment>
        );
    }
}


function mapStateToProps(state) {
    console.log("state in homepage : ", state);
    return state;
};
Home = withStyles(styling)(Home);
Home = connect(mapStateToProps)(Home);
export default Home;