import React from 'react';

import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

import Header from '../components/Header';

export default {
    title    : 'Layout/Collapse (Ant)',
    component: Collapse,
};

const { Panel } = Collapse;

const Template = (args) =>
    <Collapse {...args} >
        <Panel
            header={<Header title="Panel Title" iconCls="dx-icon-deploy-package"></Header>}
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
    className       : 'ant-collapse--white',
};

export const Gray = Template.bind({});
Gray.args = {
    defaultActiveKey: 1,
    className       : 'ant-collapse--gray',
};

export const GrayCompact = Template.bind({});
GrayCompact.args = {
    defaultActiveKey: 1,
    className       : 'ant-collapse--gray ant-collapse--compact',
    expandIcon      : ({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />,
};
