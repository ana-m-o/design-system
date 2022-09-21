// Core
import React from 'react';

// Utils
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Tag component from design-system
 */

const Tag = ({
    size,
    shape,
    color,
    children,
    className,
    iconCls,
    width,
    style,
    ...otherProps
}) => {

    return (
        <div
            {...otherProps}
            style={style || width ? { ...style, ...(width && { 'width': width }) } : null}
            className={
                classnames('dx-tag',
                    size && `dx-tag--${size}`,
                    shape && `dx-tag--${shape}`,
                    color && `dx-tag--${color}`,
                    className)
            }
        >
            {iconCls ?
                <div className={`dx-tag__icon ${iconCls}`}></div>
                : null}
            {children}
        </div>
    );
};

Tag.propTypes = {
    /**
     * The size of the tag. It supports the usual sizes.
     */
    size     : PropTypes.oneOf([ 'small', 'default', 'large' ]),
    /**
     * The shape of the tag.
     */
    shape    : PropTypes.oneOf([ 'rectangle', 'round', 'circle' ]),
    /**
     * The color of the tag.
     */
    color    : PropTypes.oneOf([ 'light-blue', 'blue', 'navy', 'aqua', 'aqua-medium', 'green', 'orange', 'red', 'gray-blue', 'light-gray', 'yellow', 'white', 'gray-blue-line' ]),
    /**
     * Tag content, it can be text, html or other components
     */
    children : PropTypes.node.isRequired,
    /**
     * Optional icon before children
     */
    iconCls  : PropTypes.string,
    /**
    * Specify a width for the tag
    */
    width    : PropTypes.string,
    /**
     * @ignore
     */
    className: PropTypes.string,
    /**
     * @ignore
     */
    style    : PropTypes.object,
};

Tag.defaultProps = {
    size   : 'default',
    shape  : 'rectangle',
    color  : 'light-blue',
    width  : '',
    iconCls: '',
};

export default Tag;