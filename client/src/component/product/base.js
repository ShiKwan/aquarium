import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';

import fbIcon from '../../images/facebook.png';
import igIcon from '../../images/instagram.png';
import tweeterIcon from '../../images/twitter.png';
import msgerIcon from '../../images/messenger.png';
import { Grid, Paper, CircularProgress, Button } from '@material-ui/core/';
import StarIcon from '@material-ui/icons/Star';
import HalfStarIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { styling } from '../../styles';

class Base extends Component {
    renderRating = (rating) => {
        switch (parseInt(rating)) {
            case 0:
                return (<React.Fragment>Rating : <StarBorderIcon /></React.Fragment>);
            case 1:
                return (<React.Fragment>Rating : <StarIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /></React.Fragment>);
            case 2:
                return (<React.Fragment>Rating : <StarIcon /><StarIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /></React.Fragment>);
            case 3:
                return (<React.Fragment>Rating : <StarIcon /><StarIcon /><StarIcon /><StarBorderIcon /><StarBorderIcon /></React.Fragment>);
            case 4:
                return (<React.Fragment>Rating : <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarBorderIcon /></React.Fragment>);
            case 5:
                return (<React.Fragment>Rating : <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></React.Fragment>);
            default:
                break;

        }
    }
        renderDimensions = (objDimensions) => {
            return(
                <Grid container justify='flex-end' direction='row' alignItems='center' spacing={16}>
                    <Grid item sm={2} md={2} lg={2}>
                        Dimension :
                    </Grid>
                    <Grid item sm={1} md={1} lg={1}>
                        <Paper>
                            Height <br />
                            {objDimensions.height}
                        </Paper>
                    </Grid>
                    <Grid item sm={1} md={1} lg={1}>
                        <Paper>
                            Width <br />
                            {objDimensions.width}
                        </Paper>
                    </Grid>
                    <Grid item sm={1} md={1} lg={1}>
                        <Paper>
                            Depth <br />
                            {objDimensions.depth}
                        </Paper>
                    </Grid>
                </Grid>
            )
        };
        render(){
        const { product, classes } = this.props;
        return (
            <React.Fragment>
                <Grid container>
                    <Grid item sm={7} md={7} lg={7}><h1>{product.name}</h1></Grid>
                    <Grid item sm={5} md={5} lg={5}><h1>{product.price}</h1></Grid>
                    <Grid item sm={12} md={12} lg={12}><h3>{product.modalNumber}</h3></Grid>
                    {product.dimension ? this.renderDimensions(product.dimension) : <CircularProgress />}
                    <Grid item sm={12} md={12} lg={12}><p>{product.description}</p></Grid>
                    <Grid item sm={12}><label> {this.renderRating(product.rating)} </label></Grid>
                    <Grid item sm={6} md={6} lg={6}>
                        Share this to your social media feeds! <br />
                        <img src={fbIcon} className={classes.socialIcon} style={{ transition: 'all .7s ease' }} />
                        <img src={tweeterIcon} className={classes.socialIcon} style={{ transition: 'all .7s ease' }} />
                        <img src={msgerIcon} className={classes.socialIcon} style={{ transition: 'all .7s ease' }} />
                        <img src={igIcon} className={classes.socialIcon} style={{ transition: 'all .7s ease' }} />
                    </Grid>
                    <Grid item sm={4} md={4} lg={4}>
                        <Button variant='outlined' className={classes.productDetailsButton}>BUY NOW</Button>
                    </Grid>
                </Grid>

            </React.Fragment>
        )
        }

    }

function mapStatsToProps(state){
    return(state);
}
Base = withStyles(styling)(Base)
Base = connect(mapStatsToProps, {})(Base)
export default Base;