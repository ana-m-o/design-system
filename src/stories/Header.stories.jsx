import React from 'react';
import Item from '../components/Item';
import Tag from '../components/Tag';
import Divider from '../components/Divider';
import StatusIndicator from '../components/StatusIndicator';
import Header from '../components/Header';
import { Button } from 'antd';

export default {
    title    : 'Layout/Header',
    component: Header,
};

const Template = (args) =>
    <Header {...args}>
        <Item
            pretitle="Dataproc.jobs"
            iconShape="circle"
            iconCls="dx-icon-deploy-package"
            iconColor="#1973B8"
            title="uuaa-gl-ecq-3"
            titleTag={<Tag color="aqua-medium">rc-03-SNAPSHOT</Tag>}
            description="Creation of jobs and pipelines"
        />

        <Divider />

        <Tag
            color="navy"
            shape="round"
            size="large"
            iconCls="dx-icon-location-solid"
        >
            GLO
        </Tag>

        <Tag
            color="blue"
            shape="round"
            size="large"
        >
            DEV
        </Tag>

        <StatusIndicator
            status="wip"
            text="In progress..."
        />
    </Header>;

export const EntityHeader = Template.bind({});
EntityHeader.args = {
};

const MainHeaderTemplate = (args) =>
    <Header {...args} >
        <Divider />
        <Button icon={<span className="icon-plus-line" />} type="primary" key="right-btn">New item</Button>
    </Header>;

export const MainHeader = MainHeaderTemplate.bind({});
MainHeader.args = {
    title     : 'Main Header',
    type      : 'main',
    navButtons: [
        <Button icon={<span className="dx-icon-arrow-up" />} key="nav-btn" />,
    ],
    uppercaseTitle: true,
};

const TemplateToolbar = (args) =>
    <Header {...args} >
        <Button icon={<span className="icon-plus-line" />} type="primary">New item</Button>
        <Divider />
        <Button icon={<span className="dx-icon-trash" />} type="danger">Remove item</Button>
    </Header>;

const TemplateCompact = (args) =>
    <Header {...args} >
        <Button size="small" icon={<span className="icon-plus-line" />} type="primary">New item</Button>
        <Divider />
        <Button size="small" icon={<span className="dx-icon-trash" />} type="danger">Remove item</Button>
    </Header>;

const TemplateIllustration = (args) =>
    <Header {...args} >
        <Divider />
        <Button className="color-white" icon={<span className="icon-times-line" />} ></Button>
    </Header>;

export const Toolbar = TemplateToolbar.bind({});
Toolbar.args = {
    type: 'toolbar',
};

export const Compact = TemplateCompact.bind({});
Compact.args = {
    type   : 'toolbar',
    compact: true,
};

const PanelHeaderTemplate = (args) =>
    <Header {...args} >
        <Divider />
        <Tag
            color="blue"
            shape="round"
        >
            DEV
        </Tag>

        <StatusIndicator
            status="wip"
            text="In progress..."
        />
    </Header>;

export const PanelHeader = PanelHeaderTemplate.bind({});
PanelHeader.args = {
    title  : 'Panel title',
    iconCls: 'dx-icon-deploy-package',
    type   : 'panel',
};

export const Counter = PanelHeaderTemplate.bind({});
Counter.args = {
    title         : 'Items',
    uppercaseTitle: true,
    counter       : 17,
    type          : 'panel',
};


export const Illustration = TemplateIllustration.bind({});
Illustration.args = {
    type     : 'illustration',
    compact  : true,
    title    : 'Version comparator',
    className: 'bg-gradient-aqua',
    iconCls  : 'ui-img-comparator',
};
