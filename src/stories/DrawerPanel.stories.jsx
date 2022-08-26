import React, { useState } from 'react';

import { Button, Dropdown, Menu, Drawer } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';

import Header from '../Header';
import Divider from '../Divider';
import Footer from '../Footer';
import Item from '../Item';
import Tag from '../Tag';
import DrawerPanel from '../DrawerPanel';

export default {
    title    : '_WIP/DrawerPanel',
    component: Drawer,
};

const Template = (args) => {

    const [ visible, setVisible ] = useState(true);
    const toggleDrawerVisibility = () => {
        setVisible(!visible);
    };

    return (
        <>
            <div style={{ width: '800px', height: '600px', position: 'relative', border: '1px solid #ddd' }}>
                Por defecto el panel se renderiza a nivel de viewport,
                para renderizarlo relativo al contenedor donde está:
                <ul>
                    <li>el contenedor debe tener <code>position: &apos;relative&apos;</code></li>
                    <li>el panel tener:
                        <code>
                            getContainer=&#123; false &#125;
                            style=&#123;&#123; position: &apos;absolute&apos; &#125;&#125;
                        </code>
                    </li>
                </ul>
                <Button type="primary" onClick={toggleDrawerVisibility}>Toggle visibility</Button>
            </div>
            <DrawerPanel
                {...args}
                visible={visible}
                onCloseCallBack={() => setVisible(false)}
            >
                <Header type="toolbar">
                    <Item
                        description="Creation of jobs and pipelines"
                        preTitle="Batch.program"
                        title="PR00"
                        titleChildren={
                            <Dropdown
                                overlay={
                                    <Menu
                                        selectable
                                        selectedKeys="1"
                                    >
                                        <Menu.Item key="1">v2.0.4</Menu.Item>
                                        <Menu.Item key="2">v2.0.3</Menu.Item>
                                        <Menu.Item key="3">v2.0.1</Menu.Item>
                                        <Menu.Divider />
                                        <Menu.Item disabled>v1.0.4 (unsupported)</Menu.Item>
                                        <Menu.Item key="4">v1.0.3</Menu.Item>
                                    </Menu>
                                }
                                trigger={[
                                    'click',
                                ]}
                            >
                                <Button
                                    size="small"
                                    className="btn-tag bg-color-aqua-medium color-white"
                                >
                                    v2.0.4
                                    <CaretDownOutlined />
                                </Button>
                            </Dropdown>
                        }
                    />
                    <Divider />
                    <Tag size="medium" bold color="navy">ABCD</Tag>
                </Header>
                <div className="padding-md scrollable-content flex-1">
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </div>
                <Footer>
                    <Button>Clear</Button>
                </Footer>
            </DrawerPanel>
        </>
    );
};


export const DefaultViewport = Template.bind({});
DefaultViewport.args = {
    key          : 'right',
    title        : 'My Container',
    counter      : 123,
    placement    : 'right',
    size         : 520,
    mask         : false,
    showCollapsed: true,
};

export const InsideContainer = Template.bind({});
InsideContainer.args = {
    ...DefaultViewport.args,
    key         : 'inside',
    getContainer: false,
    style       : { position: 'absolute' },
};
