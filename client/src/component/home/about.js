import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { styling } from '../../styles';
import aboutImg from '../../images/fishAbout.jpg';

class About extends Component {
    render() {
        const { classes } = this.props;
        return(
            <React.Fragment>
                <Grid container className={classes.startContainer}>
                    <Grid item sm={1} md={1}></Grid>
                    <Grid item sm={4} md={4}>
                        <img className={classes.aboutImg} src={aboutImg} alt="tank" />
                    </Grid>
                    <Grid item sm={6} md={6} className={classes.aboutRight}>
                        Looi's Aquarium established in late 2018 after discovering the great demand of modern looking fish tank. 
                        We aim to produce the highest quality fish tank with utmost satisfactory level. 
                    </Grid>
                    <Grid item sm={1} md={1}></Grid>
                </Grid>

            </React.Fragment>
        )
    }
}

About = withStyles(styling)(About);
export default About;