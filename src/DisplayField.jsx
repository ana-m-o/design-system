// Core
import React from 'react';
// Antd Components
import { Input } from 'antd';
// import { UserOutlined } from '@ant-design/icons';
// Utils
import PropTypes from 'prop-types';

function DisplayFieldRenderer(props) {

    const onPreventMouseEvent = event => {
        event.stopPropagation();
    };

    let refObject;
    switch (props.type) {
    case 'textarea':
        const { TextArea } = Input;
        refObject = TextArea;
        break;
    default:
        refObject = Input;
        break;
    }

    const DisplayFieldComp = React.createElement(
        refObject,
        {
            ...props,
            className         : `displayfield displayfield-${props.type} readonly ${props.className}`,
            maxLength         : 0,
            autoComplete      : 'off',
            readOnly          : true,
            onMouseMoveCapture: onPreventMouseEvent,
            onMouseOverCapture: onPreventMouseEvent,
            onMouseUpCapture  : onPreventMouseEvent,
            onMouseDownCapture: onPreventMouseEvent,
        },
    );
    // TODO: Look for clearable in _owner nodes to delete native props

    return DisplayFieldComp;
}


/**
 * Display Field from uiverse-components.
 */

const DisplayField = (props) => {
    return (
        <DisplayFieldRenderer {...props} />
    );
};

DisplayField.propTypes = {
    /**
     * Display Field value
     */
    value      : PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
    /**
     * Type of the Display field
     */
    type       : PropTypes.oneOf([ 'input', 'textarea' ]).isRequired,
    /**
     * ClassName
     */
    className  : PropTypes.string,
    /** TODO
     * @ignore
     */
    preffix    : PropTypes.object,
    /** TODO
     * @ignore
     */
    suffix     : PropTypes.string,
    /** TODO
     * @ignore
     */
    addonAfter : PropTypes.object,
    /** TODO
     * @ignore
     */
    addonBefore: PropTypes.string,
};

DisplayField.defaultProps = {
    value    : '',
    type     : 'input',
    className: '',
};

export default DisplayField;
