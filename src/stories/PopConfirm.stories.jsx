import React from 'react';
import { Popconfirm, message, Button } from 'antd';
import PopconfirmMdx from './Popconfirm.stories.mdx';

export default {
    title            : 'Ant/Popconfirm',
    component        : Popconfirm,
    componentSubtitle: <div><a href="https://ant.design/components/popconfirm/">🔗 Ant Popconfirm documentation</a></div>,
    parameters       : {
        uxDocs: PopconfirmMdx,
    },
};

function confirm() {
    message.success('Click on Yes');
}

function cancel() {
    message.error('Click on No');
}

const Template = (args) => <Popconfirm {...args}><Button type="primary" >Click here to destroy universe</Button></Popconfirm>;

export const Default = Template.bind({});
Default.args = {
    title     : 'Are you sure to destroy the universe?',
    onConfirm : confirm,
    onCancel  : cancel,
    okText    : 'Yes, destroy',
    cancelText: 'No, not today',
};
Default.parameters = {
    docs: {
        // The story now contains a description
        storyDescription: 'More info in Ant documentation',
    },
};