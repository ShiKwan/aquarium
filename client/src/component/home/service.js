import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {withStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button';
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
                    <Grid item sm={12} md={12} lg={12}><h1 className={classes.serviceHeader}>Services</h1><Divider style={{background : 'darkgrey'}}/></Grid>

                    <Grid item sm={4} md={4} lg={4} className={classes.serviceItemContainer}>
                        <Paper className={classes.servicePaper} style={{ transition: 'all .7s ease' }}>
                            <h3 className={classes.serviceItemHeader}>Product Manual</h3>
                            <div>
                                <label className={classes.serviceItem} >all our product manual can be find here, please contact us if you are having trouble finding one.</label>
                                <br />
                                <Button variant='outlined' className={classes.button}>All Product Manuals</Button>
                            </div>
                            <div>
                                <h4>Featured Product User Manual </h4>
                                <Link to='/product/aquoriaTec5Gal.pdf'><label>5 Gal Aquoria Tec Marine Aquarium Kit</label></Link>
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
                            <h3 className={classes.serviceItemHeader}>Affiliation Program</h3>
                            <div>
                                <label className={classes.serviceItem}>we always looking forward for opportunities to expand, <br/>please contact us for affiliate opportunities. </label>
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