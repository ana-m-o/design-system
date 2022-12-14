import React from 'react';
import { Form, Input } from 'antd';
export default {
    title    : 'Forms/Textarea (Ant)',
    component: Input,
};
const Template = (args) => {
    const { TextArea } = Input;

    return (
        <Form layout="horizontal">
            <Form.Item
                label="Input"
                name="input1"
            >
                <TextArea
                    placeholder="Placeholder"
                    allowClear={true}
                    autoSize={{ minRows: 1, maxRows: 3 }}
                    showCount
                    maxLength={100}
                />
            </Form.Item>

            <Form.Item
                label="Required"
                name="Textarea2"
                rules={[{ required: true, message: 'Required Textarea' }]}
                tooltip="This is a required field"
                // help="Should be combination of numbers & alphabets"
                extra="Should be combination of numbers & alphabets"
            >
                <TextArea
                    placeholder="Placeholder"
                    allowClear={true}
                    autoSize={{ minRows: 1, maxRows: 3 }}
                    showCount
                    maxLength={100}
                />
            </Form.Item>

            <Form.Item
                label="Readonly"
                name="Textarea3"
            >
                <TextArea
                    defaultValue="Readonly textarea. Needs 'readonly' class"
                    placeholder="--"
                    readOnly
                    autoSize={{ minRows: 1, maxRows: 3 }}
                    className="readonly"
                />
            </Form.Item>
        </Form>
    );
};

export const Default = Template.bind({});
Default.args = {

};