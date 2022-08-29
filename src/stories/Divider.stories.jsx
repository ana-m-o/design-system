import React from 'react';
import Tag from '../Tag';
import Divider from '../Divider';
import Header from '../Header';

export default {
    title    : 'Layout/Divider',
    component: Divider,
    argTypes : {
        type: {
            options: [ '', 'dots', 'dot', 'line' ],
            control: {
                type: 'select',
            },
        },
    },
};

const Template = (args) =>
    <Header type="toolbar">

        <Tag>
            Tag
        </Tag>

        <Divider {...args} />

        <Tag>
            Tag
        </Tag>

    </Header>;

export const Default = Template.bind({});
Default.args = {
    type : '',
    width: '',
};