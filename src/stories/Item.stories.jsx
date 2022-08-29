import React from 'react';

import Item from '../Item';
import Tag from '../Tag';
import StatusIndicator from '../StatusIndicator';

export default {
    title    : 'Data Display/Item',
    component: Item,
    argTypes : {
        size               : { defaultValue: 'medium' },
        iconSize           : { defaultValue: 'medium' },
        iconShape          : { defaultValue: 'default-hex' },
        descriptionEllipsis: { defaultValue: true },
    },
};

const Template = (args) => <Item {...args} />;

export const Default = Template.bind({});
Default.args = {
    iconCls      : 'dx-icon-git-branch',
    title        : 'Item title',
    titleChildren: [ <Tag color="aqua-medium" key="tag">v1.0.1</Tag>, <StatusIndicator status="wip" key="status" /> ],
    pretitle     : 'Pretitle',
    description  : 'Ant Design, a design language for background applications, is refined by Ant UED TeamAnt Design, a design language for background applications, is refined by Ant UED Team.Ant Design, a design language for background applications, is refined by Ant UED TeamAnt Design, a design language for background applications, is refined by Ant UED Team.',
};

export const Circle = Template.bind({});
Circle.args = {
    ...Default.args,
    iconShape    : 'circle',
    iconCls      : 'dx-icon-resource',
    titleChildren: null,
};

export const Hex = Template.bind({});
Hex.args = {
    ...Default.args,
    iconShape          : 'hex',
    iconBackgroundColor: '#072146',
    iconColor          : '#ffffff',
    titleChildren      : null,
};

export const Small = Template.bind({});
Small.args = {
    ...Default.args,
    size         : 'small',
    titleChildren: null,
};

export const XSmall = Template.bind({});
XSmall.args = {
    ...Default.args,
    iconCls      : null,
    size         : 'x-small',
    pretitle     : null,
    description  : null,
    titleChildren: null,
};

export const AlignIconWithTitle = Template.bind({});
AlignIconWithTitle.args = {
    ...Default.args,
    size              : 'small',
    iconShape         : 'circle',
    iconCls           : 'dx-icon-resource',
    titleChildren     : null,
    pretitle          : null,
    alignIconWithTitle: true,
};