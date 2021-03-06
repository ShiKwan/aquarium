import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styling } from '../styles';
import TopNav from '../pages/nav';
import Footer from '../pages/footer';

class NotFound extends Component {
    render() {

        const { classes } = this.props
        return (
            <div className={classes.root}>
                <TopNav />
                <div style={{ marginTop: "75px", maxWidth: "800px", margin: "75px auto" }}>

                    <h1>Woops!</h1>
                    <br />
                    <br />
                    <h1>The page you requested was not found. </h1>

                </div>
                <Footer/>
            </div>
        );
    }
}

NotFound = withStyles(styling)(NotFound)
export default NotFound