import React, { Component } from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Base from '../component/product/base';
import ImageSelector from '../component/product/imageSelector';
import { getProductDetails} from '../actions/productActions';
import { styling } from '../styles';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Divider, Button } from '@material-ui/core';
import ProductTabs from '../component/product/productTabs';

class Home extends Component {
    componentDidMount() {
        const { match: { params } } = this.props;
        this.props.getProductDetails(params.item);
    }

    render() {
        const { product, classes } = this.props;
        return (
            <React.Fragment>
                <Grid container className={classes.productDetailBaseContainer}>
                    <Grid item sm={1} md={1} lg={1}></Grid>
                    <Grid item sm={4} md={4} lg={4}><ImageSelector primary={product.primaryImage} secondaries={product.secondaryImages} /></Grid>
                    <Grid item sm={6} md={6} lg={6}><Base /></Grid>
                    <Grid item sm={1} md={1} lg={1}></Grid>
                </Grid>
                <Grid container container direction='row' justify='center' alignItems='center'>
                    <Grid item sm={10} md={10} lg={10}>
                        <ProductTabs />
                    </Grid>
                </Grid>

            </React.Fragment>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {product : state.product};
};
Home = withStyles(styling)(Home);
Home = connect(mapStateToProps, {getProductDetails})(Home)
export default Home;