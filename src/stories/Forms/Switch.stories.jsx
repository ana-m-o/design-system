import React from 'react';
import { Switch, Tooltip } from 'antd';
export default {
    title    : 'Forms/Switch (Ant)',
    component: Switch,
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
            defaultValue: true,
            control     : {
                type: 'boolean',
            },
        },
        loading: {
            options     : [ true, false ],
            defaultValue: false,
            control     : {
                type: 'boolean',
            },
        },
        className: {
            options     : [ 'readonly', 'locked', 'vertical', 'filter' ],
            defaultValue: 'none',
            control     : {
                type: 'inline-check',
            },
        },
        size: {
            options     : [ 'default', 'small' ],
            defaultValue: 'default',
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
                <Switch {...args} checkedChildren="ON" unCheckedChildren="OFF" />
            </Tooltip>

            <div>Without tooltip</div>
            <Switch {...args} checkedChildren="ON" unCheckedChildren="OFF" />
        </div>
    );
};

const TemplateVertical = (args) => {
    return (
        <div>
            <Tooltip title="Hello world!">
                <Switch {...args} />
            </Tooltip>
        </div>
    );
};


export const Default = Template.bind({});
Default.args = {
    checked  : true,
    size     : 'small',
    disabled : false,
    loading  : false,
    className: '',
};

export const Disabled = Template.bind({});
Disabled.args = {
    checked  : false,
    size     : 'small',
    disabled : true,
    loading  : false,
    className: '',
};


export const Readonly = Template.bind({});
Readonly.args = {
    ...Default.args,
    disabled : true,
    checked  : true,
    className: 'readonly',
};
Readonly.parameters = {
    docs: {
        storyDescription: 'readonly class needs "disabled" to be true (removes interactivity)',
    },
};


export const Locked = Template.bind({});
Locked.args = {
    ...Default.args,
    disabled : true,
    checked  : true,
    className: 'locked',
};
Locked.parameters = {
    docs: {
        storyDescription: 'Locked class needs "disabled" to be true (removes interactivity)',
    },
};

export const Vertical = TemplateVertical.bind({});
Vertical.args = {
    checked  : true,
    size     : 'small',
    disabled : false,
    loading  : false,
    className: 'vertical',
};

export const VerticalFilter = TemplateVertical.bind({});
VerticalFilter.args = {
    checked  : true,
    size     : 'small',
    disabled : false,
    loading  : false,
    className: 'vertical filter',
};