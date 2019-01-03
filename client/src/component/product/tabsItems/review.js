import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles, Grid, Divider } from '@material-ui/core';
import { styling } from '../../../styles';
import Avatar from '../../common/avatar';
import StarIcon from '@material-ui/icons/Star';
import HalfStarIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';

class specification extends Component {
    renderReviews = (reviews, classes) => {
        console.log(reviews);
        return (
            reviews.map( (item, index) => {
                console.log(item.rating);
                return (
                    <Grid container className={index%2 == 0 ? classes.productReviewContainerEven : classes.productReviewContainerOdd}>

                        <Grid item sm={4} md={4} lg={4}>
                        <Grid container direction='row' justify='center' alignItem='center'>
                            <Grid item sm={3} md={3} lg={3}>
                                <Avatar initial={`${item.firstName[0]}${item.lastName[0]}`} />
                            </Grid>
                            <Grid item sm={9} md={9} lg={9}>
                                <label>
                                    {item.label}</label> <br />
                                    {item.from}<br />
                                {this.renderRating(item.rating, classes)}
                            </Grid>
                        </Grid>

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

    renderRating(rating, classes) {
        console.log("rating in render rating : " , rating);
        switch (parseInt(rating)) {
            case 0:
                return (
                    <React.Fragment>
                        <StarBorderIcon className={classes.starIcon} />
                    </React.Fragment>
                );

            case 1:
                return (
                    <React.Fragment>
                        <StarIcon className={classes.starIcon} /><StarBorderIcon className={classes.starIcon} /><StarBorderIcon className={classes.starIcon} /><StarBorderIcon className={classes.starIcon} /><StarBorderIcon className={classes.starIcon} />
                    </React.Fragment>
                );
            case 2:
                return (
                    <React.Fragment>
                        <StarIcon className={classes.starIcon} /><StarIcon className={classes.starIcon} /><StarBorderIcon className={classes.starIcon} /><StarBorderIcon className={classes.starIcon} /><StarBorderIcon className={classes.starIcon} />
                    </React.Fragment>
                );
            case 3:
                return (<React.Fragment><StarIcon className={classes.starIcon} /><StarIcon className={classes.starIcon} /><StarIcon className={classes.starIcon} /><StarBorderIcon className={classes.starIcon} /><StarBorderIcon className={classes.starIcon} /></React.Fragment>);
            case 4:
                return (<React.Fragment><StarIcon className={classes.starIcon} /><StarIcon className={classes.starIcon} /><StarIcon className={classes.starIcon} /><StarIcon className={classes.starIcon} /><StarBorderIcon className={classes.starIcon} /></React.Fragment>);
            case 5:
                return (<React.Fragment><StarIcon className={classes.starIcon} /><StarIcon className={classes.starIcon} /><StarIcon className={classes.starIcon} /><StarIcon className={classes.starIcon} /><StarIcon className={classes.starIcon} /></React.Fragment>);
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
                    <Grid item sm={10} md={10} lg={10}>
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