import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import { styling } from '../../styles';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';


class AllProducts extends Component {
    handleLink(url) {
        console.log("here");
        this.props.history.push(url)
    }
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Grid container className={classes.allProductsContainer}>
                    <Grid item lg={12} md={12} sm={12}>
                        <h1 className={classes.headerShadow}>Like what you see?</h1>
                        <Button variant="outlined" className={classes.allProductsButton} onClick={()=>this.handleLink('/product')}> See All Products </Button>
                    </Grid>
                </Grid>

            </React.Fragment>
        )
    }
}
AllProducts = withRouter(AllProducts);
AllProducts = withStyles(styling)(AllProducts);
export default AllProducts;