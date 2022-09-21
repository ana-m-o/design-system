import React from 'react';
import SegmentedButtons from '../components/SegmentedButtons';

export default {
    title    : 'General/Segmented Buttons',
    component: SegmentedButtons,
};

const SegmentedButtonsTemplate = (args) => <SegmentedButtons {...args} ></SegmentedButtons>;

export const Default = SegmentedButtonsTemplate.bind({});
Default.args = {
    onClickHandler: () => {},
    defaultValue  : 'DEV',
    value         : 'DEV',
    multiSelect   : false,
    data          : [
        { value: 'DEV', label: 'DEV', disabled: false },
        { value: 'INT', label: 'INT', disabled: false },
        { value: 'GRE', label: 'GRE', disabled: false },
        { value: 'AUS', label: 'AUS', disabled: false },
    ],
};

export const MultipleSelections = SegmentedButtonsTemplate.bind({});
MultipleSelections.args = {
    onClickHandler: () => {},
    defaultValue  : ['DEV'],
    value         : ['DEV'],
    multiSelect   : true,
    data          : [
        { value: 'DEV', label: 'DEV', disabled: false },
        { value: 'INT', label: 'INT', disabled: false },
        { value: 'GRE', label: 'GRE', disabled: false },
        { value: 'AUS', label: 'AUS', disabled: false },
    ],
};

export const MultipleGroups = SegmentedButtonsTemplate.bind({});
MultipleGroups.args = {
    onClickHandler: () => {},
    defaultValue  : 'DEV',
    value         : 'DEV',
    multiSelect   : false,
    data          : [
        { groupKey: 'PREV', value: 'DEV', label: 'DEV', disabled: false },
        { groupKey: 'PREV', value: 'INT', label: 'INT', disabled: false },
        { groupKey: 'PREV', value: 'GRE', label: 'GRE', disabled: false },
        { groupKey: 'PREV', value: 'AUS', label: 'AUS', disabled: false },
        { groupKey: 'LIVE', value: 'PIL', label: 'PIL', disabled: false },
        { groupKey: 'LIVE', value: 'PRZ', label: 'PRZ', disabled: false },
        { groupKey: 'LIVE', value: 'PRO', label: 'PRO', disabled: false },
    ],
};

export const MultipleGroupsAndSelections = SegmentedButtonsTemplate.bind({});
MultipleGroupsAndSelections.args = {
    onClickHandler: () => {},
    defaultValue  : [ 'DEV', 'PIL' ],
    value         : [ 'DEV', 'PIL' ],
    multiSelect   : true,
    data          : [
        { groupKey: 'PREV', value: 'DEV', label: 'DEV', disabled: false },
        { groupKey: 'PREV', value: 'INT', label: 'INT', disabled: false },
        { groupKey: 'PREV', value: 'GRE', label: 'GRE', disabled: false },
        { groupKey: 'PREV', value: 'AUS', label: 'AUS', disabled: false },
        { groupKey: 'LIVE', value: 'PIL', label: 'PIL', disabled: false },
        { groupKey: 'LIVE', value: 'PRZ', label: 'PRZ', disabled: false },
        { groupKey: 'LIVE', value: 'PRO', label: 'PRO', disabled: false },
    ],
};

export const Filter = SegmentedButtonsTemplate.bind({});
Filter.args = {
    onClickHandler: () => {},
    defaultValue  : 'DEV',
    value         : 'DEV',
    multiSelect   : false,
    className     : 'filter',
    data          : [
        { value: 'DEV', label: 'DEV', disabled: false },
        { value: 'INT', label: 'INT', disabled: false },
        { value: 'GRE', label: 'GRE', disabled: false },
        { value: 'AUS', label: 'AUS', disabled: false },
    ],
};