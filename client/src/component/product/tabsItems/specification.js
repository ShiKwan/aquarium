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
                        {product.description}
                        <Divider />
                        {product.comesWith ? <div> This aquarium tank comes with .. <br /><ul>{this.renderComesWith(product.comesWith)}</ul> </div> : null }
                    </Grid>
                    <Grid item sm={5} md={5} lg={5}>
                        <img src={product.primaryImage} alt={product.name} />
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