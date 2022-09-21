import React from 'react';
import { Select, Space } from 'antd';
export default {
    title    : 'Forms/Select (Ant)',
    component: Select,
};
const options = [{ label: 'Option 1', value: 1 }, { label: 'Option 2', value: 2 }, { label: 'Option 3', value: 3 }, { label: 'Option 4', value: 4 }];

const Template = (args) => {

    const [ value, setValue ] = React.useState([]);

    const selectProps = {
        value,
        options,
        onChange: (newValue) => {
            setValue(newValue);
        },
    };

    return (
        <div style={{ resize: 'both', overflow: 'hidden', width: '200px', height: '50px' }}>
            <Space direction="vertical" style={{ width: '100%' }}>
                <Select {...selectProps} {...args} />
            </Space>
        </div>
    );
};

export const Multiple = Template.bind({});
Multiple.args = {
    mode : 'multiple',
    style: {
        width: '100%',
    },
    placeholder: 'Select Item...',
    maxTagCount: 'responsive',
};

export const MultipleDisabled = Template.bind({});
MultipleDisabled.args = {
    ...Multiple.args,
    disabled: true,
};

export const MultipleFilter = Template.bind({});
MultipleFilter.args = {
    ...Multiple.args,
    className: 'filter',
};