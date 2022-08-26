import React from 'react';
import { Form, Input } from 'antd';
export default {
    title    : 'Ant/Forms/Input',
    component: Input,
};
const Template = (args) =>
    <Form layout="horizontal">
        <Form.Item
            label="Input"
            name="input1"
        >
            <Input
                placeholder="Placeholder"
                allowClear={true}
            />
        </Form.Item>

        <Form.Item
            label="Required"
            name="input2"
            rules={[{ required: true, message: 'Required input' }]}
            tooltip="This is a required field"
            // help="Should be combination of numbers & alphabets"
            extra="Should be combination of numbers & alphabets"
        >
            <Input
                placeholder="Placeholder"
                allowClear={true}
            />
        </Form.Item>

        <Form.Item
            label="Readonly"
            name="input3"
        >
            <Input
                defaultValue="Readonly text"
                placeholder="Placeholder"
                allowClear={true}
                readOnly
            />
        </Form.Item>

        <Form.Item
            label="Autogenerated"
            name="input3"
        >
            <Input
                defaultValue="Calculated value. Always readOnly. Requires 'autogenerated' class"
                placeholder="Placeholder"
                readOnly
                className="autogenerated"
            />
        </Form.Item>
    </Form>;

export const Default = Template.bind({});
Default.args = {
    defaultValue: '',
    placeholder : 'Placeholder',
};