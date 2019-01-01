import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styling } from '../../styles';
import Avatar from '@material-ui/core/Avatar';
import _ from 'lodash';

function LetterAvatars(props) {
    const { classes, initial } = props;
    return (
        <React.Fragment>
            <Avatar className={classes.avatar}>{initial}</Avatar>
        </React.Fragment>
    );
}

LetterAvatars.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styling)(LetterAvatars);