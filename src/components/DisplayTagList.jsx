// Core
import React from 'react';
// Antd Components
import { Select } from 'antd';
import Tag from './Tag';
// Utils
import PropTypes from 'prop-types';

function DisplayTagListRenderer(props) {

    const { value: globalTagLabelList, tagprops: globalTagPropsList } = props;

    const onPreventUserEvent = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };

    const generateTagProps = (tagIndex, propsList) => {
        // TODO: Extract from Tag.defaultProps
        const defaultTagProps = {
            'size'   : 'default',
            'shape'  : 'rectangle',
            'color'  : 'light-blue',
            'width'  : '',
            'iconCls': '',
        };

        if (propsList && Array.isArray(propsList) && propsList.length > 0) {
            return (propsList.length >= tagIndex + 1) ? propsList[tagIndex] : propsList[propsList.length - 1];
        }

        return defaultTagProps;
    };

    const tagRender = (props) => {
        const { label } = props;
        const tagIndex = globalTagLabelList.indexOf(label);
        const tagProps = generateTagProps(tagIndex, globalTagPropsList);
        return (
            <Tag
                {...tagProps}
                className="margin-top-sm margin-bottom-sm margin-right-xs"
            >
                {label}
            </Tag>
        );
    };

    const DisplayTagListComp = React.createElement(
        Select,
        {
            ...props,
            value             : globalTagLabelList,
            className         : `displayfield displayfield--taglist readonly ${props.className}`,
            mode              : 'multiple',
            tagRender         : tagRender,
            onMouseMoveCapture: onPreventUserEvent,
            onMouseOverCapture: onPreventUserEvent,
            onMouseUpCapture  : onPreventUserEvent,
            onMouseDownCapture: onPreventUserEvent,
            onInputKeyDown    : onPreventUserEvent,
            // TODO: Test if this interfiers with tab index
            onFocus           : event => { event.target.blur(); },
            dropdownStyle     : { display: 'none' },
            // We clean our custom non-standard attributes befor rendering the component.
            tagprops          : undefined,
        },
    );

    return DisplayTagListComp;
}


/**
 * Display Tag List from design-system.
 */

const DisplayTagList = (props) => {
    return (
        <DisplayTagListRenderer {...props} />
    );
};

DisplayTagList.propTypes = {
    /**
     * Value
     */
    value    : PropTypes.arrayOf(PropTypes.string).isRequired,
    /**
     * ClassName
     */
    className: PropTypes.string,
    /**
     * Tag Properties
     */
    tagprops : PropTypes.arrayOf(PropTypes.object),
};

DisplayTagList.defaultProps = {
    value    : [],
    className: '',
    tagprops : [],
};

export default DisplayTagList;
