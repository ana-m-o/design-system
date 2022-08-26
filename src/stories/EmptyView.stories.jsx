import React from 'react';

// Component
import EmptyView from '../EmptyView';
import { Button } from 'antd';
// Documentation
import EmptyViewMdx from './EmptyView.stories.mdx';

export default {
    title     : 'Uiverse/EmptyView',
    component : EmptyView,
    parameters: {
        uxDocs: EmptyViewMdx,
    },
    argTypes: {
        type: {
            control: {
                type: 'select',
            },
        },
        size: {
            options: [ 'default', 'xsmall', 'medium', 'large' ],
            control: {
                type: 'select',
            },
        },
        uppercase: {
            control: {
                type: 'boolean',
            },
        },
    },
};

const Template = (args) => <EmptyView {...args} />;

export const Default = Template.bind({});
Default.args = {
    text     : 'There are no deployments',
    type     : 'empty',
    layout   : 'horizontal',
    size     : '',
    uppercase: true,
    height   : '',
    children : [],
};

export const VerticalLayout = Template.bind({});
VerticalLayout.args = {
    text     : 'There are no deployments',
    type     : 'empty',
    layout   : 'vertical',
    size     : '',
    uppercase: true,
    height   : '',
    children : [],
};

export const Xmall = Template.bind({});
Xmall.args = {
    text     : 'There are no deployments with the current filter',
    type     : 'filter',
    layout   : '',
    size     : 'xsmall',
    uppercase: true,
    height   : '',
    children : [],
};

export const Medium = Template.bind({});
Medium.args = {
    text     : 'Your resources list is empty',
    type     : 'empty',
    layout   : '',
    size     : 'medium',
    uppercase: true,
    height   : '',
    children : [<Button key="btn" icon={<span className="icon-plus-line" />} size="default" type="icon-primary" > Create resource... </Button>],
};

export const Warning = Template.bind({});
Warning.args = {
    text     : 'There has been a connection problem',
    type     : 'warning',
    layout   : 'horizontal',
    size     : '',
    uppercase: true,
    height   : '',
    children : [<Button key="btn" icon={<span className="icon-refresh-line" />} size="default">Try again</Button>],
};

export const Error = Template.bind({});
Error.args = {
    text     : 'Error receiving data',
    type     : 'error',
    layout   : 'horizontal',
    size     : '',
    uppercase: true,
    height   : '',
    children : [<Button key="btn" icon={<span className="icon-refresh-line color-red" />} size="default">Try again</Button>],
};

export const Error404 = Template.bind({});
Error404.args = {
    text     : 'The page you are looking for doesn\'t exist or has an incorrect url',
    type     : 'error404',
    layout   : 'vertical',
    size     : 'medium',
    uppercase: true,
    height   : '',
    children : [<Button key="btn" icon={<span className="icon-arrow-line text-rotate-90-ccw" />} size="default">Back to home</Button>],
};
