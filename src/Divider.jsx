// Core
import React from 'react';

// Utils
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Divider component from design-system.
 * For use mainly inside headers and toolbars in order to divide the space and separate elements
 * [Left components] <Divider /> [Right components]
 * By default it will expand to the maximum space available.
 * It can also be used as dotted line, small dot or straight lined divider, for use as a visual division between groups of components (like buttons or tags)
 */

const Divider = ({
    type,
    width,
    className,
    ...otherProps
}) => {

    return (
        <div
            {...otherProps}
            style={width ? { 'width': width, 'flex': 'unset' } : null}
            className={
                classnames('dx-divider',
                    type,
                    className)
            }
        >
        </div>
    );
};

Divider.propTypes = {
    /**
     * Type of the Divider. Flex, dots, dot or line
     */
    type     : PropTypes.oneOf([ '', 'dots', 'dot', 'line' ]),
    /**
     * Optional width in px
     */
    width    : PropTypes.string,
    /**
     * @ignore
     */
    className: PropTypes.string,
};

Divider.defaultProps = {
    type : '',
    width: '',
};

export default Divider;
