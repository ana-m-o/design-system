import React from 'react';

import { Button } from 'antd';

export default {
    title     : 'General/Button (Ant)/Simple Button',
    parameters: {
        componentSubtitle: <div><a href="https://ant.design/components/button/">🔗 Ant Button documentation</a></div>,
    },
    component: Button,
    argTypes : {
        type: {
            options: [ 'default', 'primary', 'danger', 'tag', 'flip' ],
            control: {
                type: 'select',
            },
        },
        size: {
            options: [ 'default', 'small', 'large' ],
            control: {
                type: 'select',
            },
        },
    },
};

const Template = (args) => <Button {...args}></Button>;

export const Default = Template.bind({});
Default.args = {
    icon    : <span className="icon-plus-line" />,
    children: 'Default Button',
    size    : 'default',
};

export const Primary = Template.bind({});
Primary.args = {
    type    : 'primary',
    icon    : <span className="icon-plus-line" />,
    children: 'Primary Button',
    size    : 'default',
};
Primary.parameters = {
    docs: {
        // The story now contains a description
        storyDescription: 'More info in ant documentation',
    },
};

export const Danger = Template.bind({});
Danger.args = {
    type    : 'danger',
    icon    : <span className="dx-icon-trash" />,
    children: 'Delete',
    size    : 'default',
};

export const IconPrimary = Template.bind({});
IconPrimary.args = {
    type    : 'icon-primary',
    icon    : <span className="icon-plus-line" />,
    children: 'Create...',
    size    : 'default',
};

export const IconDanger = Template.bind({});
IconDanger.args = {
    type    : 'icon-danger',
    icon    : <span className="dx-icon-trash" />,
    children: 'Remove...',
    size    : 'default',
};

export const IconOnly = Template.bind({});
IconOnly.args = {
    type: 'danger',
    icon: <span className="dx-icon-trash" />,
    size: 'default',
};

export const Loading = Template.bind({});
Loading.args = {
    icon     : <span className="dx-icon-loading-alt" />,
    disabled : false,
    children : 'Primary Button',
    className: 'bg-color-yellow ant-btn--readonly',
    size     : 'default',
};

export const Disabled = Template.bind({});
Disabled.args = {
    type    : 'primary',
    icon    : <span className="icon-plus-line" />,
    disabled: true,
    children: 'Primary Button',
    size    : 'default',
};

export const Readonly = Template.bind({});
Readonly.args = {
    type     : 'primary',
    icon     : <span className="icon-plus-line" />,
    children : 'Primary Button',
    size     : 'default',
    className: 'ant-btn--readonly',
};
Readonly.parameters = {
    docs: {
        // The story now contains a description
        storyDescription: 'The "ant-btn--readonly" class removes all transitions',
    },
};

export const FlipButton = Template.bind({});
FlipButton.args = {
    type    : 'flip',
    icon    : <span className="icon-plus-line" />,
    children: <div className="ant-btn__flip-content"><div className="flip-content__side-a">Side A</div><div className="flip-content__side-b">Side B</div></div>,
    size    : 'default',
};
FlipButton.parameters = {
    docs: {
        // The story now contains a description
        storyDescription: 'This button has 2 sides, a and b. B side is revealed on hover or on focus',
    },
};

export const TagButton = Template.bind({});
TagButton.args = {
    type     : 'primary',
    icon     : <span className="icon-plus-line" />,
    children : 'Tag Button',
    size     : 'default',
    className: 'ant-btn--tag',
};
TagButton.parameters = {
    docs: {
        storyDescription: 'Use color utils classes to customize tag-button colors',
    },
};

export const MultipleLines = Template.bind({});
MultipleLines.args = {
    type     : 'primary',
    icon     : <span className="icon-plus-line" />,
    children : <div>Button with<br />long text</div>,
    size     : 'default',
    className: 'ant-btn--multi-line',
};

export const CustomColor = Template.bind({});
CustomColor.args = {
    icon     : <span className="icon-user-line" />,
    children : 'Custom color',
    size     : 'default',
    className: 'bg-color-navy color-white',
};
CustomColor.parameters = {
    docs: {
        storyDescription: 'Color utils classes can be used for customize button color.',
    },
};