// Core
import React from 'react';
// Rc-Dock
import { DividerBox } from 'rc-dock';
import 'rc-dock/dist/rc-dock.css';
// Utils
import PropTypes from 'prop-types';

function DockedLayoutDivider(props) {
    return (
        <DividerBox {...props} />
    );
}

DockedLayoutDivider.propTypes = {
    style: PropTypes.object,
    mode : PropTypes.string,
};

DockedLayoutDivider.defaultProps = {
    style: {},
    mode : 'vertical',
};

export default DockedLayoutDivider;
