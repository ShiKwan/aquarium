import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles, Grid, Divider } from '@material-ui/core';
import { styling } from '../../../styles';
import StarIcon from '@material-ui/icons/Star';
import HalfStarIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';

class specification extends Component {
    renderQA = (QA, classes) => {
        return (
                QA.map((item, index) => {
                return (
                    <Grid container className={index % 2 == 0 ? classes.faqContainerOdd : classes.faqContainerEven}>
                        <Grid item sm={10} md={10} lg={10}>
                            <label className={classes.question}>{item.question}</label> <br/>
                            <label className={classes.answer}>Answer : <br /> &nbsp;&nbsp;&nbsp;{item.answer}</label> <br />
                        </Grid>
                    </Grid>
                )
            })
        )
    }

    render() {
        const { classes, product } = this.props;
        console.log(product);
        return (
            <React.Fragment>
                <Grid container direction='row' justify='center' alignItems='center'>
                    <Grid item sm={10} md={10} lg={10}>
                        {product.QA ? <div>{this.renderQA(product.QA, classes)}</div> : null}
                    </Grid>

                </Grid>
            </React.Fragment>
        )
    }
}
function mapStateToProps(state) {
    return { product: state.product };
};

specification = withStyles(styling)(specification);
specification = connect(mapStateToProps)(specification);

export default specification;