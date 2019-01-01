import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles, Grid, Divider } from '@material-ui/core';
import { styling } from '../../../styles';

class specification extends Component {
    renderComesWith=(comesWith)=>{
        console.log(comesWith);
        return(
            comesWith.map( function(item){
                return(
                    <li>{item}</li>
                )
            })
        )
    }
    render(){
        const {classes, product} = this.props;
        console.log(product);
        return(
            <React.Fragment>
                <Grid container>
                    <Grid item sm={6} md={6} lg={6}>
                        <div className={classes.productSubDescription}>{product.additionalDescription}</div>
                        <div className={classes.productSpecsContainer}>
                            <ul className={classes.specList} >
                                <li>Dimension : {product.dimension ?  `${product.dimension.height} x ${product.dimension.width} x ${product.dimension.depth}` : null}</li>
                            <li>Weight : {product.weight} lbs</li>
                            <li>Glass thickness : {product.glassThickness}</li>
                                <li>Pump Watts : {product.pumpWatts} w<sup>2</sup></li>
                            <li>Flow Rate : {product.flowRate} gph<sup>2</sup></li>
                            <li>Warranty : <a href='#'>Aquoria Tec 5 Gallon Tank Warranty</a></li>
                            <li>User Manual : <a href='#'>Aquoria Tec 5 Gallon Tank User Manual</a></li>
                            </ul>
                        </div>
                        <Divider />
                        {product.comesWith ? <div className={classes.comesWithContainer}> <b>This aquarium tank comes with ..</b> <br /><ul>{this.renderComesWith(product.comesWith)}</ul> </div> : null }
                    </Grid>
                    <Grid item sm={5} md={5} lg={5} className={classes.productSubImage}>
                        <img src={product.tabsPrimaryImage} alt={product.name} />
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