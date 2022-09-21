// Core
import React from 'react';
import Tag from './Tag';

// Utils
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Status Indicator component from design-system
 *
 * TO-DO
 * Add tooltip prop
 */

const StatusIndicator = ({
    size,
    status,
    text,
    textAlign,
    iconCls,
    colorCls,
    iconText,
    hideIcon,
    className,
    ...otherProps
}) => {

    const statusClasses = {
        'idle'        : { color: 'gray-blue', icon: 'dx-icon-dot' },
        'ok'          : { color: 'green', icon: 'icon-check-line' },
        'ko'          : { color: 'red', icon: 'dx-icon-exclamation' },
        'wip'         : { color: 'orange', icon: 'dx-icon-loading-alt' },
        'active'      : { color: 'blue', icon: 'dx-icon-play' },
        'disabled'    : { color: 'light-gray', icon: 'dx-icon-dot' }
    };

    return (
        <div
            {...otherProps}
            className={
                classnames('dx-status-indicator',
                    size && `dx-status-indicator--${size}`,
                    textAlign && `dx-status-indicator--text-${textAlign}`,
                    className)
            }
        >

            {text &&
                <span className="dx-status-indicator__label">
                    {text}
                </span>}

            <Tag
                size={size}
                shape="circle"
                color={statusClasses[status] ? statusClasses[status].color : statusClasses['not-defined'].color}
                className={classnames('dx-status-indicator__tag', colorCls)}
                iconCls={
                    !hideIcon && !iconText ?
                        iconCls ? iconCls : statusClasses[status] ? statusClasses[status].icon : statusClasses['not-defined'].icon
                        :
                        null
                }
            >
                {iconText &&
                    <span className="font-weight-black">
                        {iconText}
                    </span>}
            </Tag>
        </div>
    );
};

StatusIndicator.propTypes = {
    /**
     * The size of the tag. It supports the usual sizes.
     */
    size     : PropTypes.oneOf([ 'default', 'small', 'large' ]),
    /**
     * The shape of the tag.
     */
    status   : PropTypes.oneOf([ 'idle', 'ok', 'ko', 'wip', 'active', 'disabled' ]),
    /**
     * Optional text
     */
    text     : PropTypes.string,
    /**
     * Text position.
     */
    textAlign: PropTypes.oneOf([ 'left', 'right' ]),
    /**
     * Optional icon inside the indicator
     */
    iconCls  : PropTypes.string,
    /**
     * Optional custom color
     */
    colorCls : PropTypes.string,
    /**
     * Optional text inside the indicator
     */
    iconText : PropTypes.string,
    /**
     * Hide incon inside status
     */
    hideIcon : PropTypes.bool,
    /**
     * Add a className to status indicator.
     */
    className: PropTypes.string,
};

StatusIndicator.defaultProps = {
    size     : 'default',
    status   : 'disabled',
    text     : '',
    textAlign: 'left',
    iconCls  : '',
    colorCls : '',
    iconText : '',
    hideIcon : false,
};

export default StatusIndicator;
