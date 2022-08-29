import React from 'react';
import SelectableList from '../SelectableList';
import { data } from './data-examples/ids.json';

export default {
    title    : 'Data Display/SelectableList',
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

const selectedItemKeyValue = 'kio7lhbyt-1368-4c98-91ca-b78b4f977d78';

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
