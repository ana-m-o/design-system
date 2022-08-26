import React from 'react';
import { Checkbox, Tooltip } from 'antd';

export default {
    title    : 'Ant/Forms/Checkbox',
    component: Checkbox,
    argTypes : {
        disabled: {
            options     : [ true, false ],
            defaultValue: false,
            control     : {
                type: 'boolean',
            },
        },
        checked: {
            options     : [ true, false ],
            defaultValue: false,
            control     : {
                type: 'boolean',
            },
        },
        indeterminate: {
            options     : [ true, false ],
            defaultValue: false,
            control     : {
                type: 'boolean',
            },
        },
        className: {
            options     : [ 'none', 'readonly', 'locked' ],
            defaultValue: 'none',
            control     : {
                type: 'inline-radio',
            },
        },
    },
};

const Template = (args) => {
    return (
        <div>
            <div>With tooltip</div>
            <Tooltip title="Hello world!">
                <Checkbox {...args}>Checkbox</Checkbox>
            </Tooltip>

            <div>Without tooltip</div>
            <Checkbox {...args}>Checkbox</Checkbox>
        </div>
    );
};

export const Default = Template.bind({});


export const Disabled = Template.bind({});
Disabled.args = {
    ...Default.args,
    checked : true,
    disabled: true,
};

export const Readonly = Template.bind({});
Readonly.args = {
    ...Default.args,
    checked  : true,
    disabled : true,
    className: 'readonly',
};
Readonly.parameters = {
    docs: {
        storyDescription: 'Readonly class needs "disabled" to be true (removes interactivity)',
    },
};

export const Locked = Template.bind({});
Locked.args = {
    ...Default.args,
    checked  : true,
    disabled : true,
    className: 'locked',
};
Locked.parameters = {
    docs: {
        storyDescription: 'Locked class needs "disabled" to be true (removes interactivity)',
    },
};
