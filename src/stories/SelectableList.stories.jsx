import React from 'react';
import SelectableList from '../SelectableList';
import { data } from './data-examples/deployments.json';

export default {
    title    : 'Uiverse/SelectableList',
    component: SelectableList,
};

const TestComponent = ({ index, data, dataLength }) => {
    return (
        <div>
            <div>Card - {dataLength - index}</div>
            <div>Id - {data?._id}</div>
        </div>
    );
};

// const selectedItemKeyValue = '8b14b1d9-c79f-4b7e-9945-f2052a023fe6';
const selectedItemKeyValue = '657f44c2-819b-45f3-a1ec-741c82d7543d';

const getSelectedIndex = () => data.map((item) => item._id).indexOf(selectedItemKeyValue);


const SelectableListTemplate = (args) => <SelectableList {...args} ></SelectableList>;

export const Default = SelectableListTemplate.bind({});
Default.args = {
    childRender         : TestComponent,
    onClickHandle       : () => { console.log('onClickHandle'); },
    selectedItemKeyValue: selectedItemKeyValue,
    selectedItemKeyName : '_id',
    data                : data,
    selectedIndex       : getSelectedIndex() > 5 ? getSelectedIndex() : false,
    itemSize            : 80,
    listHeight          : 400,
    listWeight          : 500,
    autoHeight          : false,
};
