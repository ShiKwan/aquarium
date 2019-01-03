import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import { styling } from '../../styles';
import { Grid } from '@material-ui/core';
import { renderPrimaryImg } from '../../actions/productActions';
import ReactImageMagnify from 'react-image-magnify';
class imageSelector extends Component {

    renderPrimaryImage= (img) => {
        console.log(img);
        return(
            <img src={img} className={this.props.classes.productPrimaryImage} />
        )
    }
    renderAllImages=(secondaries, classes, props) => {
        return(
            <Grid container spacing={8}>
                {secondaries ?
                    secondaries.map(function(image){
                        return(<Grid key={image} item sm={3} md={3} lg={3} onClick={ ()=>props.renderPrimaryImg(image)}>
                            <img key={image} src={image} className={classes.productSecondaryImages} />
                        </Grid>)
                    })
                :null
                }
            </Grid>
        )
    }

    render(){
        const {product, classes} = this.props;
        return(
            <React.Fragment>
                <Grid container>
                    <Grid item xs={10} sm={10} md={10} lg={10}>
                        <ReactImageMagnify className = {classes.productPrimaryImage} {... {
                            smallImage : {
                                alt : product.name,
                                src : product.primaryImage,
                                isFluidWidth : false,
                                height : 400,
                                width : 400,
                                className : classes.productPrimaryImage
                            },
                            largeImage : {
                                src : product.primaryImage,
                                width : 1200,
                                height : 1800
                            }
                        }}  />
                    </Grid>
                    {this.renderAllImages(product.secondaryImages, classes, this.props)}
                </Grid>

            </React.Fragment>
        )
    }
}
function mapStateToProps(state) {
    return { product : state.product };
};

imageSelector = withStyles(styling)(imageSelector);
imageSelector = connect(mapStateToProps, {renderPrimaryImg})(imageSelector);
export default imageSelector;