// Core
import React, { Children } from 'react';

// Utils
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Divider from './Divider';

/**
 * Counter component from design-system
 */

const Counter = ({
    children,
    bold,
    className,
}) => {

    return (
        <div className={classnames('counter hbox align-center gap-xs', bold && 'font-weight-black', className)} >
            <Divider type="line" />
            {children}
        </div>
    );
};

Counter.propTypes = {
    /**
    * Number or components inside the counter
    */
    children : PropTypes.node,
    /**
     * Bold text.
     */
    bold     : PropTypes.bool,
    /**
     * Additional classes
     */
    className: PropTypes.string,
};

Counter.defaultProps = {
    bold    : true,
    children: 0,
};

export default Counter;