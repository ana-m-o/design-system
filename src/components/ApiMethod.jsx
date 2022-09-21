// Core
import React from 'react';

// Utils
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Button } from 'antd';

/**
 * Api Method component from design-system
 */

const ApiMethod = ({
    type,
    method,
    status,
    generic,
    asButton,
    transition,
    apified,
    className,
    ...otherProps
}) => {

    const compProps = {
        ...otherProps,
        className:
            classnames('api-method',
                status && `api-method--${status}`,
                method && `api-method--${method}`,
                generic && 'api-method--generic',
                transition ? 'api-method--transition' : (type && `api-method--${type}`),
                asButton && 'api-method--btn',
                className),
    };

    const compInner = status === 'api-method--empty' ?
        <span className="dx-icon-dot font-size-bigger"></span>
        :
        <>
            <span className="api-method__method">{method ? method : '--'}</span>
        </>;

    if (asButton) {
        return (
            <Button {...compProps} tabIndex="0">
                {compInner}
            </Button>
        );
    }

    return (
        <div {...compProps}>
            {compInner}
        </div>
    );
};

ApiMethod.propTypes = {
    /**
     * Visual shape, tag or dot
     */
    type      : PropTypes.oneOf([ 'tag', 'dot' ]),
    /**
    * Api method
    */
    method    : PropTypes.oneOf([ '', 'get', 'put', 'post', 'patch', 'delete', 'head' ]),
    /**
     * Status visual information
     */
    status    : PropTypes.oneOf([ 'solid', 'outlined', 'wip-solid', 'wip-outlined', 'half', 'alert', 'forbidden', 'empty', 'disabled' ]),
    /**
    * Generic color for filters
    */
    generic   : PropTypes.bool,
    /**
     * Use as a Button component
     */
    asButton  : PropTypes.bool,
    /**
     * Transition from dot to tag shape on hover.
     */
    transition: PropTypes.bool,
    /**
    * Not-apified indicator when this prop is false
    */
    apified   : PropTypes.bool,
    /**
     * Additional classNames
     */
    className : PropTypes.string,
};

ApiMethod.defaultProps = {
    type      : 'tag',
    method    : '',
    status    : 'disabled',
    generic   : false,
    asButton  : false,
    transition: false,
    apified   : true,
};

export default ApiMethod;
