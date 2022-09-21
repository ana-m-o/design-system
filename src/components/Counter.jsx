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
    className,
}) => {

    return (
        <div className={classnames('dx-counter hbox align-center gap-xs', className)} >
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
     * Additional classes
     */
    className: PropTypes.string,
};

Counter.defaultProps = {
    children: 0,
};

export default Counter;