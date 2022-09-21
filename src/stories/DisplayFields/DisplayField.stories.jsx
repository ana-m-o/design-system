// Core
import React from 'react';
// Components
import { Form, Tooltip } from 'antd';
// Local components
import DisplayField from '../../DisplayField';

export default {
    title    : 'Forms/DisplayFields/DisplayField',
    component: DisplayField,
};

const Template = (args) =>
    <DisplayField {...args} />;

export const Default = Template.bind({});
Default.args = {
    type: 'input',
    value: 'Readonly input'
};

const TemplateForm = (args) =>
    <Form
        name="basic"
        layout="vertical"
    >
        <div className="vbox gap-lg">
            <Form.Item
                label="Input"
                name="basicusage"
            >
                <Tooltip title="Hello from the display field!" >
                    <DisplayField {...args} />
                </Tooltip>
            </Form.Item>
            <Form.Item
                label="TextArea"
                name="textarea"
            >
                <Tooltip title="Hello from the display field textarea!" >
                    <DisplayField {...args} type="textarea" />
                </Tooltip>
            </Form.Item>
        </div>
    </Form>;

export const AsFormItem = TemplateForm.bind({});
AsFormItem.args = {
    type     : 'input',
    value    : 'Readonly value',
    className: 'none',
};