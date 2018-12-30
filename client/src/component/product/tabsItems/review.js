import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles, Grid, Divider } from '@material-ui/core';
import { styling } from '../../../styles';
import StarIcon from '@material-ui/icons/Star';
import HalfStarIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';

class specification extends Component {
    renderReviews = (reviews, classes) => {
        console.log(reviews);
        return (
            reviews.map( (item) => {
                console.log(item.rating);
                return (
                    <Grid container className={classes.productReviewContainer}>
                        <Grid item sm={4} md={4} lg={4}>
                            <label>{item.label}</label> <br />
                            {this.renderRating(item.rating)}
                        </Grid>
                        <Grid item sm={8} md={8} lg={8}>
                            <h3>"{item.review}"</h3>
                            <div>{item.depthReview}</div>
                        </Grid>

                    </Grid>
                )
            })
        )
    }

    renderRating(rating) {
        console.log("rating in render rating : " , rating);
        switch (parseInt(rating)) {
            case 0:
                return (
                    <React.Fragment>
                        <StarBorderIcon />
                    </React.Fragment>
                );

            case 1:
                return (
                    <React.Fragment>
                        <StarIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon />
                    </React.Fragment>
                );
            case 2:
                return (
                    <React.Fragment>
                        <StarIcon /><StarIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon />
                    </React.Fragment>
                );
            case 3:
                return (<React.Fragment><StarIcon /><StarIcon /><StarIcon /><StarBorderIcon /><StarBorderIcon /></React.Fragment>);
            case 4:
                return (<React.Fragment><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarBorderIcon /></React.Fragment>);
            case 5:
                return (<React.Fragment><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></React.Fragment>);
            default:
                break;

        }
    }
    render() {
        const { classes, product } = this.props;
        console.log(product);
        return (
            <React.Fragment>
                <Grid container direction='row' justify='center' alignItems='center'>
                    <Grid item sm={6} md={6} lg={6}>
                        <Divider />
                        {product.review ? <div>{this.renderReviews(product.review, classes)}</div> : null}
                    </Grid>

                </Grid>
            </React.Fragment>
        )
    }
}
function mapStateToProps(state) {
    return { product: state.product };
};

specification = withStyles(styling)(specification);
specification = connect(mapStateToProps)(specification);

export default specification;