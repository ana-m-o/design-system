import React from 'react';
import Tag from '../components/Tag';
import Divider from '../components/Divider';
import Header from '../components/Header';

export default {
    title    : 'Layout/Divider',
    component: Divider,
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

export const Dots = Template.bind({});
Dots.args = {
    type : 'dots',
    width: '10px',
};

export const Line = Template.bind({});
Line.args = {
    type : 'line',
    width: '10px',
};