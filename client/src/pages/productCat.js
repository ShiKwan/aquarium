import React, { Component } from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Base from '../component/productCat/base';
import TopNav from '../pages/nav';
import Footer from '../pages/footer';
import { styling } from '../styles';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Divider, Button } from '@material-ui/core';

class Home extends Component {

    render() {
        const { product, classes } = this.props;
        return (
            <React.Fragment>
                <TopNav />
                <Grid container container direction='row' justify='center' alignItems='center'>
                    <Base />
                </Grid>
                <Footer />

            </React.Fragment>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return { product: state.product };
};
Home = withStyles(styling)(Home);
Home = connect(mapStateToProps)(Home)
export default Home;