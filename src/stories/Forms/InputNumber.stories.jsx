import React from 'react';
import { Form, InputNumber, Select } from 'antd';
export default {
    title    : 'Forms/InputNumber (Ant)',
    component: InputNumber,
    argTypes : {
        size: {
            options     : [ 'small', 'default', 'large' ],
            defaultValue: 'default',
            control     : {
                type: 'inline-radio',
            },
        },
    },
};

const { Option } = Select;

const selectAfter = (
    <Select defaultValue="USD" style={{ width: 60 }}>
        <Option value="USD">$</Option>
        <Option value="EUR">€</Option>
        <Option value="GBP">£</Option>
        <Option value="CNY">¥</Option>
    </Select>
);

const Template = (args) =>
    <Form
        layout={{
            labelCol  : { span: 8 },
            wrapperCol: { span: 16 },
        }}

    >
        <Form.Item
            label="Number"
            name="input1"
            extra="Range: 1 to 10"
        >
            <InputNumber
                {...args}
                type="number"
            />
        </Form.Item>
    </Form>;

export const Default = Template.bind({});
Default.args = {
    defaultValue: '',
    placeholder : '',
    size        : '',
    min         : 1,
    max         : 10,
    disabled    : false
};

export const Addons = Template.bind({});
Addons.args = {
    ...Default.args,
    addonBefore: selectAfter,
    addonAfter : '-snapshot',
};

export const Formatter = Template.bind({});
Formatter.args = {
    ...Default.args,
    defaultValue: 100,
    min         : 1,
    max         : 100,
    formatter   : value => `${value}%`,
    parser      : value => value.replace('%', ''),
};

export const Prefix = Template.bind({});
Prefix.args = {
    ...Default.args,
    defaultValue: 2.25,
    min         : 1,
    max         : 10,
    prefix      : '€',
    step        : 0.05,
};