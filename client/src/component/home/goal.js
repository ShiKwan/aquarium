import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styling } from '../../styles';
import { Grid } from '@material-ui/core';
import { Parallax } from 'react-scroll-parallax';
import fishImg from '../../images/clownfish.png';
import backgroundImg from '../../images/hero16.jpg';

class Nav extends Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.goalContainer}>
                <div className={classes.parallaxGoal}>
                    <div className={classes.startContainer}>
                        <Grid container>
                            <Grid item sm={1} md={1} xs={0}></Grid>
                            <Grid item sm={10} md={10} xs={12} className={classes.homepageHeader}>
                                <h2 className={classes.headerShadow}>Our Goal</h2>
                                <label className={classes.subHeader}>Innovating in pet fish industry to provide you the most modern looking aquarium that create a WOW effect in your living space.</label>
                            </Grid>
                            <Grid item sm={1} md={1} xs={0}></Grid>

                        </Grid>

                    </div>
                </div>


            </div>
        );
    }
}

Nav = withStyles(styling)(Nav);
export default Nav;