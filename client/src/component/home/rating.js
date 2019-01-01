import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Grid from '@material-ui/core/Grid';
import tankImg from '../../images/tank.jpeg';
import StarIcon from '@material-ui/icons/Star';
import HalfStarIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { styling } from '../../styles';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const reviews = [
    {
        label: 'Jane Pilowski',
        from : 'San Franscisco, CA',
        review: 'Love the clear glass and the beautiful design!',
        rating : 5,
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'SK Tan',
        from: 'Cleveland, OH',
        review: 'Great price point for a high quality tank.',
        rating : 4,
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Theo',
        from : 'Omaha, NE',
        review: 'Would recommend this tank for everyone!',
        rating : 5,
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
    },
    {
        label: 'Chong Nguyen',
        from : 'Las Vegas, NV',
        review : 'Tank is packaged perfectly upon arrival, and very easy to setup',
        rating : 5,
        imgPath:
            'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Peter Yao',
        from: 'Shenzhen, China',
        review : 'Tank is beautifully made, great layout for fixing the LED lighting on top of the tank. ',
        rating : 4,
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
];

class SwipeableTextMobileStepper extends React.Component {
    state = {
        activeStep: 0,
    };

    handleNext = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep + 1,
        }));
    };

    handleBack = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep - 1,
        }));
    };

    handleStepChange = activeStep => {
        this.setState({ activeStep });
    };
    renderRating = (rating, classes) => {
        switch(rating) {
            case 0 :
            return(
                <React.Fragment>
                    <StarBorderIcon className={classes.starIcon}/>
                </React.Fragment>
            );

            case 1 :
                return(
                    <React.Fragment>
                        <StarIcon className={classes.starIcon} /><StarBorderIcon className={classes.starIcon} /><StarBorderIcon className={classes.starIcon} /><StarBorderIcon className={classes.starIcon} /><StarBorderIcon className={classes.starIcon}/>
                    </React.Fragment>
                    );
            case 2 :
                return(
                    <React.Fragment>
                        <StarIcon  className={classes.starIcon} /><StarIcon className={classes.starIcon} /><StarBorderIcon className={classes.starIcon}/><StarBorderIcon className={classes.starIcon}/><StarBorderIcon className={classes.starIcon}/>
                    </React.Fragment>
                    );
            case 3 :
                return (<React.Fragment><StarIcon className={classes.starIcon}/><StarIcon className={classes.starIcon}/><StarIcon className={classes.starIcon}/><StarBorderIcon className={classes.starIcon}/><StarBorderIcon className={classes.starIcon}/></React.Fragment>);
            case 4 :
                return (<React.Fragment><StarIcon className={classes.starIcon} /><StarIcon className={classes.starIcon}/><StarIcon className={classes.starIcon}/><StarIcon className={classes.starIcon}/><StarBorderIcon className={classes.starIcon}/></React.Fragment>);
            case 5 :
                return (<React.Fragment><StarIcon  className={classes.starIcon} /><StarIcon className={classes.starIcon}/><StarIcon className={classes.starIcon}/><StarIcon className={classes.starIcon}/><StarIcon className={classes.starIcon}/></React.Fragment>);
            default :
            break;

        }
    }

    render() {
        const { classes, theme } = this.props;
        const { activeStep } = this.state;
        const maxSteps = reviews.length;

        return (
            <div className={classes.ratingContainer}>
                <Paper square elevation={0} className={classes.ratingHeader}>
                    <Typography className={classes.ratingHeaderText}></Typography>
                </Paper>
                <Grid container>
                    <Grid item md={4} lg={4} sm={4} className={classes.reviewHeader}>
                        <h1>Customer Reviews</h1>
                    </Grid>
                    <Grid item md={8} lg={8} sm={8}>
                        <AutoPlaySwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            springConfig={{stifness : 300}}
                            index={activeStep}
                            interval={5000}
                            onChangeIndex={this.handleStepChange}
                            enableMouseEvents
                        >
                            {reviews.map((step, index) => (
                                <div key={step.label} className={classes.ratingContent}>
                                    {Math.abs(activeStep - index) <= 2 ? (
                                        <Grid container>

                                            <Grid item sm={6} md={6} lg={6}>
                                                <h1 className={classes.ratingLabel}>"{step.review}"</h1>
                                                <h4>- {step.label} ({step.from})</h4> <br />
                                                <h3>Rating : {this.renderRating(reviews[activeStep].rating, classes)}</h3>
                                            </Grid>
                                            <Grid item sm={6} md={6} lg={6}>
                                                <img src={step.imgPath} />
                                            </Grid>
                                        </Grid>
                                    ) : null}
                                </div>
                            ))}
                        </AutoPlaySwipeableViews>

                    </Grid>
                </Grid>

            </div>
        );
    }
}

SwipeableTextMobileStepper.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styling, { withTheme: true })(SwipeableTextMobileStepper);