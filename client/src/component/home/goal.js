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
            <React.Fragment >
                <div className={classes.startContainer}>
                    <Parallax
                        offsetYMax={100}
                        offsetYMin={-100}
                        slowerScrollRate
                        className={classes.ring}
                        tag="figure">

                        <img src={backgroundImg} className={classes.parallaxOuter}/>
                    </Parallax>
                    <Parallax
                        offsetYMax={50}
                        offsetYMin={-50}
                        slowerScrollRate
                        className={classes.circle}
                        tag="figure"
                    >
                        <img src={fishImg} style={{ width: '150px' }} className={classes.parallaxInner} />
                    </Parallax>
                    <Grid container>
                        <Grid item sm={1} md={1} xs={0}></Grid>
                        <Grid item sm={10} md={10} xs={12} className={classes.homepageHeader}>
                            <h2>Our Goal</h2>
                            <h3>Innovating in pet fish industry to provide you the most modern looking aquarium that create a WOW effect in your living space.</h3>




                        </Grid>
                        <Grid item sm={1} md={1} xs={0}></Grid>

                    </Grid>

                </div>

            </React.Fragment>
        );
    }
}

Nav = withStyles(styling)(Nav);
export default Nav;