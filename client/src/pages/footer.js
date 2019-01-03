import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { styling } from '../styles';
import AmazonButton from '../images/amazon-button.png';
import emailIcon from '../images/email_icon.png';
import phoneIcon from '../images/phone_icon.png';
import amazonIcon from '../images/icons8-amazon-30.png';
import ebayIcon from '../images/icons8-ebay-30.png';
import facebookIcon from '../images/icons8-facebook-30.png';

class Footer extends Component {

    render() {
        const { classes } = this.props
        return (
            <React.Fragment>
                <Grid container className={classes.footerContainer} >
                    <Grid item md={1} sm={1}>

                    </Grid>
                    <Grid item md={10} sm={10}>
                        <Grid container>
                            <Grid item md={3} xs={6}>
                                <h1>Aquoria Tec</h1>
                                <div>&copy; Copyright 2018 All Rights Reserved. </div>
                            </Grid>
                            <Grid item md={3} xs={6}>
                                <h3>Store</h3>
                                <ul className={classes.footerList}>
                                    <li><img className={classes.footerIcon} src={amazonIcon} alt="amazon icon" /><label className={classes.footerLabel}>Amazon</label></li>
                                    <li><img className={classes.footerIcon} src={facebookIcon} alt="facebook icon" /><label className={classes.footerLabel}>Facebook</label></li>
                                    <li><img className={classes.footerIcon} src={ebayIcon} alt="ebay icon" /><label className={classes.footerLabel}>Ebay</label></li>
                                </ul>
                            </Grid>
                            <Grid item md={3} xs={6}>
                                <h3>Contact Us</h3>
                                <ul className={classes.footerList}>
                                    <li><img className={classes.footerIcon} src={phoneIcon} alt="phone icon" /><label className={classes.footerLabel}>1-800-333-TANK</label></li>
                                    <li><img className={classes.footerIcon} src={emailIcon} alt="email icon" /><label className={classes.footerLabel}>service@aquoriatec.com</label></li>
                                </ul>
                            </Grid>
                            <Grid item md={3} xs={6}>
                                <h3>Help</h3>
                                <ul className={classes.footerList}>
                                    <li><label className={classes.footerLabel}>FAQs</label></li>
                                    <li><label className={classes.footerLabel}>Privacy Policy</label></li>
                                    <li><label className={classes.footerLabel}>User Manuals</label></li>
                                    <li><label className={classes.footerLabel}>Warranty</label></li>
                                </ul>
                            </Grid>
                        </Grid>
                        <div>

                        </div>
                    </Grid>
                    <Grid item md={1} sm={1} className={classes.FooterItem} >

                    </Grid>
                </Grid>

            </React.Fragment>
        )
    }

}

Footer = withStyles(styling)(Footer);

export default Footer;