import React from 'react';

import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

import Header from '../Header';

export default {
    title    : 'Ant/Collapse',
    component: Collapse,
};

const { Panel } = Collapse;

const Template = (args) =>
    <Collapse {...args} >
        <Panel
            header={<Header title="Panel Title" iconCls="ui-icon-deploy-package"></Header>}
            type="panel"
            key="1"
        >
            Panel body
        </Panel>
    </Collapse>;
export const Default = Template.bind({});
Default.args = {
    defaultActiveKey: 1,
};

export const White = Template.bind({});
White.args = {
    defaultActiveKey: 1,
    className       : 'white',
};

export const Gray = Template.bind({});
Gray.args = {
    defaultActiveKey: 1,
    className       : 'gray',
};

export const GrayCompact = Template.bind({});
GrayCompact.args = {
    defaultActiveKey: 1,
    className       : 'gray compact',
    expandIcon      : ({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />,
};

export const GrayHeaderCompact = Template.bind({});
GrayHeaderCompact.args = {
    defaultActiveKey: 1,
    className       : 'gray-header compact',
    expandIcon      : ({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />,
};
