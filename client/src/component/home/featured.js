import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import { styling } from '../../styles';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import tankImg from '../../images/tankTransparent.png';
import StarIcon from '@material-ui/icons/Star';
import HalfStarIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import RatingReview from './rating';
import Divider from '@material-ui/core/Divider';

class Featured extends Component {
    handleLink(url) {
        console.log("here");
        this.props.history.push(url)
    }
    render(){
        const { classes } = this.props;
        return(
            <React.Fragment>
                <Grid container className={classes.featuredContainer} justify='center' direction='row' alignItems='center'>
                    <Grid container className={classes.featureItemContainer}>
                        <Grid item lg={5} md={5} sm={11} xs={11} className={classes.featuredImage}>
                            <h1>Our Best-Selling Product</h1>

                            <img className={classes.aboutImg} src={tankImg} alt="featured aquarium" />
                            <br/>
                            <h2>Aquoria Tec Aquarium Kit, 5-Gal</h2>
                        </Grid>
                        <Grid item lg={5} md={5} sm={11} xs={11} className={classes.featuredSpecs}>
                            <label>
                                A modern looking 5 gallon nano aquarium with etched-glass tank with aluminium trim on four edges. It comes with low energy consumption and powerful 37 LED Lighting System
                                to keep your freshwater pets healthy and stimulate plant growth. A well-thought filtration system that is capable of boasting powerful 3-stage system with oversized mechanical, chemical, and biological media for clean water.
                                <br />
                                <StarIcon className={classes.starIcon} /><StarIcon className={classes.starIcon} /><StarIcon className={classes.starIcon} /><StarIcon className={classes.starIcon} /><HalfStarIcon className={classes.starIcon}/>
                            </label>

                            <ul className={classes.listContainer}>
                                <li ><h3>Aquarium Comes With.. </h3></li>
                                <li className={classes.listDescription}>Aquarium Cover </li>
                                <li className={classes.listDescription}>LED Lighting System</li>
                                <li className={classes.listDescription}>Low Voltage Transformer 110-220V</li>
                                <li className={classes.listDescription}>Circulation Pump With Output Nozzle</li>
                                <li className={classes.listDescription}>Aquoria High Quality Activated Carbon Insert</li>
                                <li className={classes.listDescription}>Aquoria Foam Filter Block with Handle</li>
                            </ul>
                            <Button className={classes.serviceButton} onClick={()=>this.handleLink('/product/tank1')}>View Details</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}

Featured = withRouter(Featured);
Featured = withStyles(styling)(Featured);
export default Featured;