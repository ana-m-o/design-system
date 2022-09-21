// Core
import React from 'react';

// Utils
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Empty view component from design-system
 */

const EmptyView = ({
    text,
    type,
    layout,
    size,
    uppercase,
    height,
    className,
    children,
    ...otherProps
}) => {

    return (
        <div
            className={
                classnames('dx-emptyview',
                    type && `dx-emptyview--${type}`,
                    layout && `dx-emptyview--${layout}`,
                    size && `dx-emptyview--${size}`,
                    className)
            }
            style={{ 'height': height }}
            {...otherProps}
        >
            <div className="dx-emptyview__message">
                <div className="dx-emptyview__message-icon"></div>
                <div className="dx-emptyview__message-text">{
                    uppercase ?
                        text.toUpperCase()
                        :
                        text
                }
                </div>
            </div>
            {children}
        </div>
    );
};

EmptyView.propTypes = {
    /**
     * Message
     */
    text     : PropTypes.string,
    /**
     * Type of message. Changes the icon.
     */
    type     : PropTypes.oneOf([ 'empty', 'filter', 'warning', 'error', 'error404' ]),
    /**
     * Size. Large is only available for 'empty' type
     */
    size     : PropTypes.oneOf([ '', 'medium', 'large', 'xsmall' ]),
    /**
     * Icon alignment
     */
    layout   : PropTypes.oneOf([ 'horizontal', 'vertical' ]),
    /**
     * Optional. Turn off uppercase
     */
    uppercase: PropTypes.bool,
    /**
     * Optional fixed height
     */
    height   : PropTypes.string,
    /**
    * Components or html placed after the message
    */
    children : PropTypes.node,
    /**
     * @ignore
     */
    className: PropTypes.string,
};

EmptyView.defaultProps = {
    text     : 'No elements found matching your criteria',
    type     : 'empty',
    layout   : 'horizontal',
    uppercase: true,
    height   : 'auto',
};

export default EmptyView;
