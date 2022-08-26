import React from 'react';
import { Form, Input, DatePicker, Checkbox, Radio, Select, Switch } from 'antd';

export default {
    title    : 'Ant/Forms',
    component: Form,
    argTypes : {
        layout: {
            options     : [ 'horizontal', 'vertical' ],
            defaultValue: 'horizontal',
            control     : {
                type: 'inline-radio',
            },
        },
        loading: {
            options     : [ true, false ],
            defaultValue: false,
            control     : {
                type: 'boolean',
            },
        },
        disabled: {
            options     : [ true, false ],
            defaultValue: false,
            control     : {
                type: 'inline-radio',
            },
        },
        checked: {
            options     : [ true, false ],
            defaultValue: true,
            control     : {
                type: 'boolean',
            },
        },
        indeterminate: {
            options     : [ true, false ],
            defaultValue: false,
            control     : {
                type: 'inline-radio',
            },
        },
        className: {
            options     : [ 'none', 'readonly', 'blocked', 'locked' ],
            defaultValue: 'none',
            control     : {
                type: 'inline-radio',
            },
        },
    },
};

const { Option } = Select;

const Template = (args) => {
    const isReadOnly = args.className === 'readonly';
    return (
        <Form
            name="basic"
            labelCol={{ span: 3 }}
            initialValues={{ remember: true }}
            {...args}
        >
            <Form.Item
                {...args.defaults}
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Required input' }]}
                tooltip="This is a required field"
                // help="Should be combination of numbers & alphabets"
                extra="Should be combination of numbers & alphabets"
            >
                <Input {...args} placeholder="Placeholder" defaultValue="Default value" allowClear readOnly={isReadOnly} />
            </Form.Item>

            <Form.Item name={[ 'user', 'introduction' ]} label="Introduction" {...args.defaults}>
                <Input.TextArea {...args} allowClear showCount maxLength={100} autoSize readOnly={isReadOnly} />
            </Form.Item>
            <fieldset>
                <legend>Fieldset</legend>

                <Form.Item
                    {...args.defaults}
                    labelAlign="left"
                    name="range-time-picker"
                    label="Date"
                >
                    <DatePicker {...args} />
                </Form.Item>

                <Form.Item
                    {...args.defaults}
                    label="Pick one"
                >
                    <Checkbox
                        {...args}
                    >
                        Checkbox 1
                    </Checkbox>
                    <Checkbox
                        {...args}
                    >
                        Checkbox 2
                    </Checkbox>
                </Form.Item>
            </fieldset>
            <Form.Item
                {...args.defaults}
                label="Pick one"
            >
                <Radio.Group name="radiogroup" defaultValue={1} {...args}>
                    <Radio value={1}>One</Radio>
                    <Radio value={2}>Two</Radio>
                    <Radio value={3}>Three</Radio>
                    <Radio value={4}>Four</Radio>
                </Radio.Group>
            </Form.Item>

            <Form.Item
                {...args.defaults}
                label="Select"
            >
                <Select
                    defaultValue="lucy"
                    {...args}
                    showSearch
                >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                        Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
            </Form.Item>

            <Form.Item
                {...args.defaults}
                label="Select multiple"
            >
                <Select
                    defaultValue="lucy"
                    mode="multiple"
                    showSearch
                    {...args}
                >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                        Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
            </Form.Item>

            <Form.Item
                {...args.defaults}
                label="Switch"
            >
                <Switch checkedChildren="ON" unCheckedChildren="OFF" {...args} />
            </Form.Item>
        </Form>
    );
};


export const CompleteForm = Template.bind({});
CompleteForm.args = {
    defaults: {
        labelAlign: 'left',
    },
};

export const CompleteFormSmall = Template.bind({});
CompleteFormSmall.args = {
    defaults: {
        labelAlign: 'left',
    },
    size: 'small',
};