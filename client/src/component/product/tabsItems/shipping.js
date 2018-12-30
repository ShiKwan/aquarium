import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles, Grid, Divider } from '@material-ui/core';
import { styling } from '../../../styles';
import StarIcon from '@material-ui/icons/Star';
import HalfStarIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';

class shipping extends Component {
    renderShipping = (shippingInfo, classes) => {
        return (
            <Grid container className={classes.shippingContainer}>
                <Grid item sm={10} md={10} lg={10}>
                    Shipping Weight : {shippingInfo.shippingWeight} <br/>
                    domestic shipping : {shippingInfo.domesticShipping} <br />
                    international shipping : {shippingInfo.internationalShipping}
                </Grid>
            </Grid>
        )
    }


    render() {
        const { classes, product } = this.props;
        console.log(product);
        return (
            <React.Fragment>
                <Grid container direction='row' justify='left' alignItems='left'>
                    <Grid item sm={6} md={6} lg={6}>
                        {product.shippingInfo ? <div>{this.renderShipping(product.shippingInfo, classes)}</div> : null}
                    </Grid>

                </Grid>
            </React.Fragment>
        )
    }
}
function mapStateToProps(state) {
    return { product: state.product };
};

shipping = withStyles(styling)(shipping);
shipping = connect(mapStateToProps)(shipping);

export default shipping;