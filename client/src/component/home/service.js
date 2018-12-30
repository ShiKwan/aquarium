import React, {Component} from 'react';
import {withStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {styling} from '../../styles';
import Divider from '@material-ui/core/Divider';

class Service extends Component {

    render(){
        const { classes } = this.props;
        return(
            <div className={classes.root}>
                <Grid container className={classes.serviceContainer}>
                    <Grid item sm={12} md={12} lg={12}><h1 className={classes.serviceHeader}>Services</h1><Divider style={{background : 'cornflowerblue'}}/></Grid>

                    <Grid item sm={4} md={4} lg={4} className={classes.serviceItemContainer}>
                        <Paper className={classes.servicePaper} style={{ transition: 'all .7s ease' }}>
                            <h3 className={classes.serviceItemHeader}>Product Manual</h3>
                            <div>
                                <label className={classes.serviceItem}>5 Gal Marine Aquarium Kit</label><br/>
                                <label className={classes.serviceItem}>8 Gal Marine Aquarium Kit</label>
                            </div>
                        </Paper>

                    </Grid>
                    <Grid item sm={4} md={4} lg={4} className={classes.serviceItemContainer}>
                        <Paper className={classes.servicePaper} style={{ transition: 'all .7s ease' }}>
                            <h3 className={classes.serviceItemHeader}>Warranty Information</h3>
                            <div>
                                <label className={classes.serviceItem}>5 Gal Marine Aquarium Kit</label><br />
                                <label className={classes.serviceItem}>8 Gal Marine Aquarium Kit</label>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item sm={4} md={4} lg={4} className={classes.serviceItemContainer}>
                        <Paper className={classes.servicePaper} style={{ transition: 'all .7s ease' }}>
                            <h3 className={classes.serviceItemHeader}>Shipping Info</h3>
                            <div>
                                <label className={classes.serviceItem}>We guaranteed that our products are professionally packed, and ships with the fast delivery speeds. </label>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Service = withStyles(styling)(Service);
export default Service;