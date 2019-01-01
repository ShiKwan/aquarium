import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { styling } from '../../styles';
import Specification from './tabsItems/specification';
import Review from './tabsItems/review';
import QA from './tabsItems/qanda';
import Shipping from './tabsItems/shipping';
function TabContainer({ children, dir }) {
    return (
        <div dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </div>
    );
}

class FullWidthTabs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    render() {
        const { classes, theme } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        className={classes.productTabs}
                        fullWidth
                    >
                        <Tab label="Specifications" className={classes.productTab} />
                        <Tab label="Rating & Reviews" />
                        <Tab label="Questions & Answers" />
                        <Tab label="Shipping & Returns" />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <TabContainer dir={theme.direction}><Specification /></TabContainer>
                    <TabContainer dir={theme.direction}><Review/></TabContainer>
                    <TabContainer dir={theme.direction}><QA/></TabContainer>
                    <TabContainer dir={theme.direction}><Shipping/></TabContainer>
                </SwipeableViews>
            </div>
        );
    }
}

export default withStyles(styling, { withTheme: true })(FullWidthTabs);