import React from 'react';
import Tag from '../components/Tag';
import TagMdx from './Tag.stories.mdx';

export default {
    title     : 'General/Tag',
    component : Tag,
    parameters: {
        uxDocs: TagMdx,
    },
};

const Template = (args) => <Tag {...args}></Tag>;

export const Default = Template.bind({});
Default.args = {
    children: 'Tag example',
};

export const Icon = Template.bind({});
Icon.args = {
    children: 'Tag example',
    iconCls : 'dx-icon-location-solid',
};

export const Circle = Template.bind({});
Circle.args = {
    shape   : 'circle',
    children: 'CI',
};

export const FixedWidth = Template.bind({});
FixedWidth.args = {
    children: 'ESP',
    width   : '50px',
};
