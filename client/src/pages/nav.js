import React, { Component } from 'react';
import { Link, NavLink, withRouter} from 'react-router-dom';
import {Grid, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { styling } from '../styles';
import FishImg from '../images/fishLogo.png';
import AmazonButton from '../images/amazon-button.png';

class Nav extends Component {
    handleLink(url) {
        console.log("here");
        this.props.history.push(url)
    }
    render(){
        const { classes } = this.props
        return(
            <React.Fragment>
                <Grid container className={classes.navBar}>
                    <Grid item md={1} sm={1}></Grid>
                    <a href='/' className={classes.hypHome}>
                        <div item md={2} sm={2} className={classes.navLogo}>
                            <img src={FishImg} className={classes.logo} alt='fish logo' /> <h1>Aquoria Tec</h1>
                        </div>
                    </a>
                    <Grid item md={6} sm={5} className={classes.navItem}>
                        <a href={'/product/tank1'} className={classes.hypHome}><Button className={classes.button}>Aquoria Tec 5 Gal Tank </Button></a> &nbsp;
                        <a href={'/product/tank2'} className={classes.hypHome}><Button className={classes.button}>Aquoria Tec 8 Gal Tank </Button></a> &nbsp;
                        <a href="www.amazon.com"><img src={AmazonButton} alt="amazon" className={classes.topNavButton} /></a>
                    </Grid>
                    <Grid item md={2} sm={3} className={classes.navItemPhone} >
                        <a href='tel:18003338267' className={classes.hypHome}>+1(800) 333-TANK</a>
                    </Grid>
                    <Grid item md={1} sm={1}></Grid>
                </Grid>

            </React.Fragment>
        )
    }

}

Nav = withRouter(Nav)
Nav = withStyles(styling)(Nav);

export default Nav;