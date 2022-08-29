import React from 'react';
import Item from '../Item';
import Tag from '../Tag';
import Divider from '../Divider';
import StatusIndicator from '../StatusIndicator';
import Header from '../Header';
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
            iconCls="ds-icon-deploy-package"
            iconColor="#1973B8"
            title="uuaa-gl-ecq-3"
            titleTag={<Tag color="aqua-medium">rc-03-SNAPSHOT</Tag>}
            description="Creation of jobs and pipelines"
        />

        <Divider />

        <Tag
            bold
            color="navy"
            shape="round"
            size="medium"
            iconCls="ds-icon-location-solid"
        >
            GLO
        </Tag>

        <Tag
            bold
            color="blue"
            shape="round"
            size="medium"
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
        <Button icon={<span className="ds-icon-arrow-up" />} key="nav-btn" />,
    ],
    uppercaseTitle: true,
};

const TemplateToolbar = (args) =>
    <Header {...args} >
        <Button icon={<span className="icon-plus-line" />} type="primary">New item</Button>
        <Divider />
        <Button icon={<span className="ds-icon-trash" />} type="danger">Remove item</Button>
    </Header>;

const TemplateCompact = (args) =>
    <Header {...args} >
        <Button size="small" icon={<span className="icon-plus-line" />} type="primary">New item</Button>
        <Divider />
        <Button size="small" icon={<span className="ds-icon-trash" />} type="danger">Remove item</Button>
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

export const ToolbarAlt = TemplateToolbar.bind({});
ToolbarAlt.args = {
    type: 'toolbar-alt',
};

export const Compact = TemplateCompact.bind({});
Compact.args = {
    type   : 'toolbar-alt',
    compact: true,
};

const PanelHeaderTemplate = (args) =>
    <Header {...args} >
        <Divider />
        <Tag
            bold
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
    iconCls: 'ds-icon-deploy-package',
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
