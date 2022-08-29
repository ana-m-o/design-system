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
            classnames('uiv-api-method',
                status && status,
                method && method,
                generic && 'generic',
                transition ? 'transition' : (type && type),
                asButton && 'api-btn',
                className),
    };

    const compInner = status === 'empty' ?
        <span className="ui-icon-dot font-size-bigger"></span>
        :
        <>
            <span className="method">{method ? method : '--'}</span>
            {!apified && <span className="not-apified">API</span>}
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
