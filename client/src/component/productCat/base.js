import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import fbIcon from '../../images/facebook.png';
import igIcon from '../../images/instagram.png';
import tweeterIcon from '../../images/twitter.png';
import msgerIcon from '../../images/messenger.png';
import { product1, product2 } from '../../productConstant';
import { Grid, Paper, CircularProgress, Button } from '@material-ui/core/';
import { styling } from '../../styles';

class Base extends Component {

    render() {
        const { product, classes } = this.props;
        return (
            <React.Fragment>
                <Grid container direction='row' alignItems='center' spacing={24} className={classes.productCatContainer}>
                    <Grid item lg={1} md={1} sm={1}></Grid>
                    <Grid item lg={10} md={10} sm={10}>
                        <h1>Aquarium Tank</h1>
                    </Grid>
                    <Grid item lg={1} md={1} sm={1}></Grid>
                    <Grid item lg={2} md={3} sm={3} className={classes.catContainer}>
                        <Link to={'/product/tank1'} className={classes.catLink}>
                        <div className={classes.catImgContainer}><img src={product1.primaryImage} className={classes.productCatImg} /></div>
                        <label className={classes.productCatName}>{product1.name}</label><br/>
                        <label className={classes.productCatPrice}>{product1.price}</label>
                        </Link>
                    </Grid>
                    <Grid item lg={2} md={3} sm={3} className={classes.catContainer}>
                        <Link to={'/product/tank2'} className={classes.catLink}>
                        <div className={classes.catImgContainer}><img src={product2.primaryImage} className={classes.productCatImg} /></div>
                        <label className={classes.productCatName}>{product2.name}</label><br />
                        <label className={classes.productCatPrice}>{product2.price}</label>
                        </Link>
                    </Grid>
                </Grid>

            </React.Fragment>
        )
    }

}

function mapStatsToProps(state) {
    return (state);
}
Base = withRouter(Base);
Base = withStyles(styling)(Base)
Base = connect(mapStatsToProps, {})(Base)
export default Base;