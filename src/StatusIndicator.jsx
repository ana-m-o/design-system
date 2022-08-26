// Core
import React from 'react';
import Tag from './Tag';

// Utils
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Status Indicator component from uiverse-components
 *
 * TO-DO
 * Add tooltip prop
 */

const StatusIndicator = ({
    size,
    status,
    text,
    textAlign,
    bold,
    iconCls,
    colorCls,
    iconText,
    hideIcon,
    border,
    className,
    ...otherProps
}) => {

    const statusClasses = {
        'idle'        : { color: 'gray-blue', icon: 'ui-icon-dot' },
        'ok'          : { color: 'green', icon: 'icon-check-line' },
        'ko'          : { color: 'red', icon: 'ui-icon-exclamation' },
        'wip'         : { color: 'orange', icon: 'ui-icon-loading-alt' },
        'active'      : { color: 'blue', icon: 'ui-icon-play' },
        'disabled'    : { color: 'light-gray', icon: 'ui-icon-dot' },
        'available'   : { color: 'navy', icon: null },
        'implementing': { color: 'navy', icon: 'icon-ellipsis-horizontal-line font-weight-black' },
        'defined'     : { color: 'gray-blue-line', icon: null },
        'not-defined' : { color: 'white', icon: 'ui-icon-dot' },
    };

    return (
        <div
            {...otherProps}
            className={
                classnames('uiv-status-indicator',
                    size && size,
                    textAlign && `text-${textAlign}`,
                    border && 'border',
                    className)
            }
        >

            {text &&
                <span className={
                    classnames('uiv-status-label', bold && 'font-weight-black')
                }
                >
                    {text}
                </span>}

            <Tag
                size={size}
                shape="circle"
                color={statusClasses[status] ? statusClasses[status].color : statusClasses['not-defined'].color}
                className={classnames('uiv-status-tag', colorCls)}
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
    size     : PropTypes.oneOf([ 'default', 'small', 'medium' ]),
    /**
     * The shape of the tag.
     */
    status   : PropTypes.oneOf([ 'idle', 'ok', 'ko', 'wip', 'active', 'disabled', 'available', 'implementing', 'defined', 'not-defined' ]),
    /**
     * Optional text
     */
    text     : PropTypes.string,
    /**
     * Text position.
     */
    textAlign: PropTypes.oneOf([ 'left', 'right' ]),
    /**
     * Bold status text
     */
    bold     : PropTypes.bool,
    /**
     * Grey border around icon
     */
    border   : PropTypes.bool,
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
    bold     : false,
    iconCls  : '',
    colorCls : '',
    iconText : '',
    hideIcon : false,
};

export default StatusIndicator;
