import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { styling }  from '../../styles';

class Hero extends Component {


    handleConnectToday() {
        //this.props.history.push(this.state.redirectAddress)
    }

    render() {

        const { classes } = this.props

        return (
            <div style={{ background: 'linear-gradient(rgba(255,255,255,0) 10%, rgba(240,240,240,1))' }}>
                <div className={classes.parallax}></div>
                <Grid container className={classes.hero} >

                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <div style={{ width: "90%", margin: "50px auto 0 auto", textAlign: "center" }}>
                            <div >
                                <span className={classes.headerShadow}>Aquoria Tec </span> <span className={classes.subHeader}>Aquarium</span>
                            </div>
                            <div className={classes.heroDescription}>
                                <h3>Modern looking aquarium for you</h3>
                                <span className={classes.heroDescription}>Aquoria Tec is established in 2018 after discovering the great demand of modern looking fish tank.
                                We aim to produce the highest quality fish tank with utmost satisfactory level
                                by innovating in this industry to provide you the most modern looking aquarium that create a </span><span className={classes.wow}>WOW</span><span> effect in your living space.</span>

                            </div>
                            <div>
                                <Button variant='outlined' className={classes.heroButton} onClick={() => this.handleConnectToday()}>Go to products</Button>
                            </div>
                        </div>
                    </Grid>

                </Grid>
            </div>
        )
    }
}


Hero = withRouter(Hero);
Hero = withStyles(styling)(Hero);
export default Hero;