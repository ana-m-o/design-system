import React from 'react';

import { Button, Dropdown, Menu, Tooltip } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import Divider from '../../Divider';

export default {
    title     : 'Ant/Button/Dropdown Menu',
    parameters: {
        componentSubtitle: <a href="https://ant.design/components/dropdown/">🔗 Ant Dropdown documentation</a>,
    },
    component: Button,
    argTypes : {
        type: {
            options: [ 'default', 'primary', 'danger' ],
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
    },
};


const Template = (args) =>
    <Dropdown
        trigger={['click']}
        overlay={
            <Menu>
                <Menu.Item key="1" icon={<span className="icon-check-line"></span>}>
                    GLO
                </Menu.Item>
                <Menu.Item key="2" icon={<span className="icon-check-line"></span>} className="selected">
                    ESP
                </Menu.Item>
            </Menu>
        }
        disabled={args.disabled}
    >
        <Button {...args}></Button>
    </Dropdown>;

const TemplateIcons = (args) =>
    <Dropdown
        trigger={['click']}
        overlay={
            <Menu>
                <Menu.Item key="1" icon={<span className="ui-icon-deploy"></span>}>
                    1st menu item
                </Menu.Item>
                <Menu.Item key="2" icon={<span className="ui-icon-deploy-rollback"></span>}>
                    2nd menu item
                </Menu.Item>
                <Menu.Item key="3" icon={<span className="ui-icon-redeploy"></span>}>
                    3rd menu item
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="4" icon={<span className="ui-icon-deploy-package"></span>} disabled>
                    4th menu item（disabled）
                </Menu.Item>
            </Menu>
        }
        disabled={args.disabled}
    >
        <Button {...args}></Button>
    </Dropdown>;

const TemplateDropdown2 = (args) =>
    <Dropdown
        trigger={['click']}
        overlay={
            <Menu>
                <Menu.Item key="1" icon={<span className="ui-icon-deploy"></span>}>
                    1st menu item
                </Menu.Item>
                <Menu.Item key="2" icon={<span className="ui-icon-deploy-rollback"></span>}>
                    2nd menu item
                </Menu.Item>
                <Menu.Item key="3" icon={<span className="ui-icon-redeploy"></span>}>
                    3rd menu item
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="4" icon={<span className="ui-icon-deploy-package"></span>} disabled>
                    4th menu item（disabled）
                </Menu.Item>
            </Menu>
        }
        disabled={args.disabled}
    >
        <Button {...args}>
            Version
            <CaretDownOutlined key="icon" />

            <Divider width="4px" />

            <Tooltip title="Close this version and return to resource detail">
                <Button
                    size="small"
                    className="btn-tag bg-color-aqua-medium color-white"
                    icon={<span className="icon-times-line"></span>}
                >
                </Button>
            </Tooltip>
        </Button>
    </Dropdown>;

export const Default = Template.bind({});
Default.args = {
    children: [ 'Default Button', <CaretDownOutlined key="icon" /> ],
    disabled: false,
    size    : 'default',
};

export const Icons = TemplateIcons.bind({});
Icons.args = {
    icon    : <span className="icon-slider-line text-rotate-90-cw" />,
    children: <CaretDownOutlined />,
    disabled: false,
    size    : 'default',
};

export const Disabled = TemplateIcons.bind({});
Disabled.args = {
    icon    : <span className="icon-slider-line text-rotate-90-cw" />,
    children: <CaretDownOutlined />,
    disabled: true,
    size    : 'default',
};

export const TagDopdown = TemplateIcons.bind({});
TagDopdown.args = {
    icon     : <span className="icon-slider-line text-rotate-90-cw" />,
    children : [ 'Filter', <CaretDownOutlined key="icon" /> ],
    disabled : false,
    size     : 'default',
    className: 'btn-tag bg-color-orange color-white',
};
TagDopdown.parameters = {
    docs: {
        storyDescription: 'Use color utils classes to customize tag-button colors',
    },
};


export const ClosableTagDopdown = TemplateDropdown2.bind({});
ClosableTagDopdown.args = {
    size     : 'small',
    disabled : false,
    className: 'btn-tag bg-color-aqua-medium color-white',
};