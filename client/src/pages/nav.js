import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Grid, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { styling } from '../styles';
import FishImg from '../images/fishLogo.png';
import AmazonButton from '../images/amazon-button.png';

class Nav extends Component {

    render(){
        const { classes } = this.props
        return(
            <React.Fragment>
                <Grid container className={classes.navBar}>
                    <Grid item md={1} sm={1}></Grid>
                    <Grid item md={2} sm={2} className={classes.navLogo}>
                        <img src={FishImg} className={classes.logo} alt='fish logo' /> <h1>Aquoria Tec</h1>
                    </Grid>
                    <Grid item md={6} sm={5} className={classes.navItem}>
                        <Button className={classes.button}>Aquoria Tec 5 Gal Tank </Button> &nbsp;
                        <Button className={classes.button}>Aquoria Tec 8 Gal Tank </Button> &nbsp;
                        <a href="www.amazon.com"><img src={AmazonButton} alt="amazon" className={classes.topNavButton} /></a>
                    </Grid>
                    <Grid item md={2} sm={3} className={classes.navItem} >
                        +1(800) 333-TANK
                    </Grid>
                    <Grid item md={1} sm={1}></Grid>
                </Grid>

            </React.Fragment>
        )
    }

}

Nav = withStyles(styling)(Nav);

export default Nav;