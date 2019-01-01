import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles, Grid, Divider } from '@material-ui/core';
import { styling } from '../../../styles';
import bettaImg from '../../../images/goal1Transparent.png';

class shipping extends Component {
    renderShipping = (shippingInfo, classes) => {
        return (
            <Grid container className={classes.shippingContainer}>
                <Grid item sm={10} md={10} lg={10}>
                    <h3>Shipping</h3>
                    Shipping Weight : {shippingInfo.shippingWeight} <br/>
                    Domestic Shipping : {shippingInfo.domesticShipping} <br />
                    International Shipping : {shippingInfo.internationalShipping}
                    <Divider />
                    <h3>Warranty</h3>
                    <label>
                        Warranty applies to the original purchaser against defects and workmanship for ONE year from the date of original purchase.
                    </label>
                    <Divider/>
                    <h3>Returns</h3>
                    <label> We have 30 days return policy</label>
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
                    <Grid item sm={8} md={8} lg={8}>
                        {product.shippingInfo ? <div>{this.renderShipping(product.shippingInfo, classes)}</div> : null}
                    </Grid>
                    <Grid item sm={4} md={4} lg={4}>
                        <img src={bettaImg} alt='decorative image' className={classes.shippingImg} />
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