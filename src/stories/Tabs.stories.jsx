import React from 'react';

import { Tabs } from 'antd';

const { TabPane } = Tabs;

export default {
    title    : 'Ant/Tabs',
    component: Tabs,
    argTypes : {
        tabPosition: {
            options: [ 'top', 'left', 'right', 'bottom' ],
            control: {
                type: 'select',
            },
        },
        size: {
            options: [ 'default', 'small', 'large' ],
            control: {
                type: 'select',
            },
        },
        className: {
            options: [ 'default', 'uiv-menu-tabs' ],
        },
    },
};

const Template = (args) =>
    <Tabs {...args}>
        <TabPane tab={<span>Tab 1</span>} key="1">
            The parent element of a Tabs components must be a flex container
        </TabPane>
        <TabPane tab="Tab 2" key="2">
            Content of Tab 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
            Content of tab 3
        </TabPane>
    </Tabs>;
export const Default = Template.bind({});
Default.args = {
    tabPosition: 'top',
};

export const MenuTabs = Template.bind({});
MenuTabs.args = {
    tabPosition: 'left',
    className  : 'uiv-menu-tabs',
};
