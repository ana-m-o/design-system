// Core
import React, { useEffect, useState } from 'react';

// Components
import { Checkbox, Radio } from 'antd';

// Utils
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SegmentedButtons = ({
    onClickHandler,
    data,
    defaultValue,
    value,
    disabled,
    size,
    buttonStyle,
    multiSelect,
    className,
}) => {

    const [ buttonsData, setButtonsData ] = useState([]);
    const [ activeValue, setActiveValue ] = useState(defaultValue);

    useEffect(() => {
        if (value && (activeValue !== value)) {
            setActiveValue(value);
        }
    }, [value]);

    useEffect(() => {
        const dataAuxByGroupId = data.reduce(function(dataByGroupId, d){
            const groupId = d.groupKey || 'default';
            if (dataByGroupId[groupId] || (dataByGroupId[groupId] = [])) dataByGroupId[groupId].push({ label: d.label, value: d.value, disabled: d.disabled });
            return dataByGroupId;
        }, {});
        const dataAux = Object.values(dataAuxByGroupId);
        setButtonsData(dataAux);
    }, [data]);

    const handleOnChangeRadioGroup = (event) => {
        const value = event.target.value;
        setActiveValue(value);
        onClickHandler(value);
    };

    const handleOnChangeCheckboxGroup = (index, values) => {
        const newGroupValues = values.filter(item => !activeValue.includes(item));
        const notSelectedGroupValues = data[index]
            .filter(item => !values.includes(item.value))
            .map(item => item.value);

        const activeValueAux = activeValue
            .filter(item => !notSelectedGroupValues.includes(item))
            .concat(newGroupValues);
        setActiveValue(activeValueAux);
        onClickHandler(activeValueAux);
    };

    return (
        !multiSelect ? (
            <div className="hbox gap-md">
                {buttonsData && buttonsData.length && buttonsData.map((options, index) => (
                    <Radio.Group
                        key={`sb-rg-${index}`}
                        onChange={handleOnChangeRadioGroup}
                        defaultValue={defaultValue}
                        value={activeValue}
                        options={options}
                        disabled={disabled}
                        size={size}
                        buttonStyle={buttonStyle}
                        optionType="button"
                        className={classnames('segmented-buttons', className)}
                    >
                    </Radio.Group>
                ))}
            </div>
        ) : (
            <div className="hbox gap-md">
                {buttonsData && buttonsData.length && buttonsData.map((options, index) => (
                    <Checkbox.Group
                        key={`sb-cg-${index}`}
                        onChange={(values) => handleOnChangeCheckboxGroup(index, values)}
                        defaultValue={activeValue}
                        options={options}
                        disabled={disabled}
                        className={classnames('segmented-buttons', `size-${size}`, className)}
                        buttonStyle={buttonStyle}
                    >
                    </Checkbox.Group>
                ))}
            </div>
        )
    );
};


SegmentedButtons.propTypes = {
    onClickHandler: PropTypes.func,
    data          : PropTypes.arrayOf(PropTypes.object),
    defaultValue  : PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(PropTypes.number),
    ]),
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(PropTypes.number),
    ]),
    disabled   : PropTypes.bool,
    size       : PropTypes.oneOf([ 'large', 'middle', 'small' ]),
    buttonStyle: PropTypes.oneOf([ 'solid', 'outline' ]),
    multiSelect: PropTypes.bool,
};

SegmentedButtons.defaultProps = {
    onClickHandler: () => {},
    data          : [[]],
    defaultValue  : undefined,
    value         : undefined,
    disabled      : false,
    size          : 'middle',
    buttonStyle   : 'solid',
    multiSelect   : false,
};

export default SegmentedButtons;
