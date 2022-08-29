import React, { useState } from 'react';
import { Tabs, Menu, Button } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

import Header from '../../Header.jsx';
import Footer from '../../Footer.jsx';
import Item from '../../Item.jsx';
import Tag from '../../Tag.jsx';
import Divider from '../../Divider.jsx';
import StatusIndicator from '../../StatusIndicator.jsx';

const { TabPane } = Tabs;

export default {
    title    : 'Layout/Layout structure',
    component: Tabs,
};

const Template = () =>
    <div className="container" style={{ height: '400px', border: '2px solid #ccc' }}>
        <Header
            type="main"
            title="Viewport header"
            uppercaseTitle={true}
        >

        </Header>
        <Header
            type="default"
        >
            <Item
                description="Creation of jobs and pipelines"
                iconCls="dx-icon-deploy-package"
                iconColor="#1973B8"
                iconShape="circle"
                pretitle="Dataproc.jobs"
                title="uuaa-gl-ecq-3"
                titleTag={<Tag color="aqua-medium">rc-03-SNAPSHOT</Tag>}
            />
            <Divider />
            <Tag
                bold
                color="navy"
                iconCls="dx-icon-location-solid"
                shape="round"
                size="medium"
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
        </Header>
        <Tabs tabPosition="top" defaultActiveKey="2">
            <TabPane tab="Info" key="1">
                Content of Tab 1
            </TabPane>
            <TabPane tab="Overflow" key="2">
                <div className="scrollable-content">
                    <div>Content of Tab 2</div>
                    <div>Content of Tab 2</div>
                    <div>Content of Tab 2</div>
                    <div>Content of Tab 2</div>
                    <div>Content of Tab 2</div>
                    <div>Content of Tab 2</div>
                    <div>Content of Tab 2</div>
                    <div>Content of Tab 2</div>
                    <div>Content of Tab 2</div>
                    <div>Content of Tab 2</div>
                    <div>Content of Tab 2</div>
                    <div>Content of Tab 2</div>
                    <div>Content of Tab 2</div>
                    <div>Content of Tab 2</div>
                    <div>Content of Tab 2</div>
                    <div>Content of Tab 2</div>
                    <div>Content of Tab 2</div>
                    <div>Content of Tab 2</div>
                    <div>Content of Tab 2</div>
                    <div>Content of Tab 2</div>
                    <div>Content of Tab 2</div>
                    <div>Content of Tab 2</div>
                    <div>Content of Tab 2</div>
                    <div>Content of Tab 2</div>
                    <div>Content of Tab 2</div>
                </div>
            </TabPane>
        </Tabs>
        <Footer>Footer</Footer>
    </div>;
export const Default = Template.bind({});
Default.args = {

};

const SimpleTemplate = () =>
    <div className="container" style={{ height: '400px', border: '2px solid #ccc' }}>
        <Header
            type="toolbar"
            title="Toolbar title"
        >
            <Tag
                bold
                color="navy"
                iconCls="dx-icon-location-solid"
                shape="round"
                size="medium"
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
            <Divider />
            <StatusIndicator
                status="wip"
                text="In progress..."
            />
        </Header>
        <div className="scrollable-content">
            <div>Content of Tab 2</div>
            <div>Content of Tab 2</div>
            <div>Content of Tab 2</div>
            <div>Content of Tab 2</div>
            <div>Content of Tab 2</div>
            <div>Content of Tab 2</div>
            <div>Content of Tab 2</div>
            <div>Content of Tab 2</div>
            <div>Content of Tab 2</div>
            <div>Content of Tab 2</div>
            <div>Content of Tab 2</div>
            <div>Content of Tab 2</div>
            <div>Content of Tab 2</div>
            <div>Content of Tab 2</div>
            <div>Content of Tab 2</div>
            <div>Content of Tab 2</div>
            <div>Content of Tab 2</div>
            <div>Content of Tab 2</div>
            <div>Content of Tab 2</div>
            <div>Content of Tab 2</div>
            <div>Content of Tab 2</div>
            <div>Content of Tab 2</div>
            <div>Content of Tab 2</div>
            <div>Content of Tab 2</div>
            <div>Content of Tab 2</div>
        </div>

        <Footer>Footer</Footer>
    </div>;
export const Simple = SimpleTemplate.bind({});
Simple.args = {

};

/* Lined Layout */
const LinedLayoutTemplate = () =>
    <div className="vbox lined-layout" style={{ height: '300px', border: '2px solid #ccc' }}>
        <div className="padding-md">Lined Layout Example</div>

        <div className="hbox">
            <div className="vbox padding-md">
                SIDE CONTENT
            </div>

            <div className="vbox flex-1">
                <div className="padding-md">
                    <ul>
                        <li>Todos los vbox y hbox dentro de un div con clase "lined-layout" tendrán una línea de separación.</li>
                        <li>Los paddings, scrolls, flex, etc, dentro de este layout deben especificarse con las clases pertinentes en cada div (padding-md, scrollable-content, flex-1, etc)</li>
                        <li>La clase "section" sirve para que un div que no es hijo directo de un hbox/vbox tenga línea de separación horizontal</li>
                    </ul>
                </div>

                <div class="vbox">
                    <Header type="toolbar" title="TOOLBAR">
                        <Divider />
                        <Button type="primary">Action 1</Button>
                        <Button>Action 2</Button>
                    </Header>

                    <div className="scrollable-content">
                        <div className="section padding-md">Section</div>
                        <div className="section padding-md">Other Section</div>
                        <div className="section padding-md">Other Section</div>
                        <div className="section padding-md">Other Section</div>
                        <div className="section padding-md">Other Section</div>
                    </div>
                </div>
            </div>
        </div>
    </div>;

export const LinedLayout = LinedLayoutTemplate.bind({});
LinedLayout.args = {
};

/* FULL */


const { SubMenu } = Menu;

const TemplateFull = () => {

    const [ collapsed, setCollapsed ] = useState();

    const onCollapse = () => {
        setCollapsed(true);
    };
    const onExpand = () => {
        setCollapsed(false);
    };

    return (
        <div className="container" style={{ height: '600px', border: '2px solid #ccc' }}>

            <div className="hbox flex-1" style={{ maxHeight: '100%' }}>
                <div className="scrollable-content">
                    <Menu
                        theme="dark"
                        inlineCollapsed={true}
                        mode="inline"
                        defaultOpenKeys={[]}
                        defaultSelectedKeys={['1']}
                    >
                        <Menu.Item key="1" icon={<MailOutlined />} title="Option 1"></Menu.Item>
                        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <SubMenu key="sub3" title="Submenu">
                                <Menu.Item key="7">Option 7</Menu.Item>
                                <Menu.Item key="8">Option 8</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>

                <div className="vbox flex-1" style={{ maxHeight: '100%' }}>
                    <div className="hbox scrollable-content">
                        <div
                            className={`container-panel vbox ${collapsed ? 'cp-collapsed' : 'cp-expanded'}`}
                            style={{ maxWidth: '450px', minWidth: '300px' }}
                        >
                            {/* https://spin.atomicobject.com/2019/11/21/creating-a-resizable-html-element/ */}
                            <Header
                                type="main"
                                title="Applications"
                                uppercaseTitle={true}
                            >
                                <Divider />
                                <div className="control-buttons">

                                    {collapsed ?
                                        <Button icon={<span className="dx-icon-collapse-panel"></span>} onClick={onExpand}></Button>
                                        :
                                        <Button icon={<span className="dx-icon-collapsed-panel"></span>} onClick={onCollapse}></Button>}
                                </div>
                            </Header>
                            <div className="scrollable-content">
                                <li>Resource</li>
                                <li>Resource</li>
                                <li>Resource</li>
                                <li>Resource</li>
                                <li>Resource</li>
                                <li>Resource</li>
                                <li>Resource</li>
                                <li>Resource</li>
                                <li>Resource</li>
                                <li>Resource</li>
                                <li>Resource</li>
                                <li>Resource</li>
                                <li>Resource</li>
                                <li>Resource</li>
                                <li>Resource</li>
                                <li>Resource</li>
                                <li>Resource</li>
                                <li>Resource</li>
                                <li>Resource</li>
                                <li>Resource</li>
                                <li>Resource</li>
                                <li>Resource</li>
                                <li>Resource</li>
                                <li>Resource</li>
                                <li>Resource</li>
                                <li>Resource</li>
                                <li>Resource</li>
                                <li>Resource</li>
                                <li>Resource</li>
                                <li>Resource</li>
                                <li>Resource</li>
                                <li>Resource</li>
                                <li>Resource</li>
                            </div>
                        </div>

                        <div className="vbox flex-1">
                            <Header
                                type="main"
                                title="Viewport header"
                                uppercaseTitle={true}
                            >
                            </Header>

                            <Header
                                type="default"
                            >
                                <Item
                                    description="Creation of jobs and pipelines"
                                    iconCls="dx-icon-deploy-package"
                                    iconColor="#1973B8"
                                    iconShape="circle"
                                    pretitle="Dataproc.jobs"
                                    title="uuaa-gl-ecq-3"
                                    titleTag={<Tag color="aqua-medium">rc-03-SNAPSHOT</Tag>}
                                />
                                <Divider />
                                <Tag
                                    bold
                                    color="navy"
                                    iconCls="dx-icon-location-solid"
                                    shape="round"
                                    size="medium"
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
                            </Header>

                            <Tabs tabPosition="top" defaultActiveKey="2">
                                <TabPane tab="Info" key="1">
                                    Content of Tab 1
                                </TabPane>
                                <TabPane tab="Overflow" key="2">
                                    <Header title="toolbar" type="toolbar">
                                        <Divider />
                                        <Button>Open dialog</Button>
                                    </Header>
                                    <div className="scrollable-content">

                                        <div>Content of Tab 2</div>
                                        <div>Content of Tab 2</div>
                                        <div>Content of Tab 2</div>
                                        <div>Content of Tab 2</div>
                                        <div>Content of Tab 2</div>
                                        <div>Content of Tab 2</div>
                                        <div>Content of Tab 2</div>
                                        <div>Content of Tab 2</div>
                                        <div>Content of Tab 2</div>
                                        <div>Content of Tab 2</div>
                                        <div>Content of Tab 2</div>
                                        <div>Content of Tab 2</div>
                                        <div>Content of Tab 2</div>
                                        <div>Content of Tab 2</div>
                                        <div>Content of Tab 2</div>
                                        <div>Content of Tab 2</div>
                                        <div>Content of Tab 2</div>
                                        <div>Content of Tab 2</div>
                                        <div>Content of Tab 2</div>
                                        <div>Content of Tab 2</div>
                                        <div>Content of Tab 2</div>
                                        <div>Content of Tab 2</div>
                                        <div>Content of Tab 2</div>
                                        <div>Content of Tab 2</div>
                                        <div>Content of Tab 2</div>
                                    </div>
                                </TabPane>
                            </Tabs>
                            <Footer>Footer</Footer>
                        </div>
                    </div>

                    {/* Task bar */}
                    <div className="dx-taskbar">Taskbar</div>
                </div>
            </div>

        </div>);
};

export const FullViewport = TemplateFull.bind({});
