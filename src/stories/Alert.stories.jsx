import React from 'react';
import { Button, Alert } from 'antd';
import AlertMdx from './Alert.stories.mdx';


export default {
    title     : 'Notifications/Alert (Ant)',
    component : Alert,
    parameters: {
        uxDocs: AlertMdx,
    },
    argTypes: {
        type: {
            options: [ 'info', 'warning', 'error', 'success' ],
            control: {
                type: 'select',
            },
            defaultValue: 'info',
        },
    },
};

const Template = (args) =>
    <Alert {...args} />;

export const Info = Template.bind({});
Info.args = {
    message    : 'This is the default / info Alert',
    description: '',
    showIcon   : true,
    closable   : false,
    collapsible: false,
    //icon       : <span className="icon-info-standard-solid" />,
};

export const Warning = Template.bind({});
Warning.args = {
    ...Info.args,
    message: 'This is the Warning Alert',
    type: 'warning',
    //icon: <span className="icon-warning-standard-solid" />,
};

export const Success = Template.bind({});
Success.args = {
    ...Info.args,
    message: 'This is the Success Alert',
    type: 'success',
    //icon: <span className="icon-success-standard-solid" />
};

export const Error = Template.bind({});
Error.args = {
    ...Info.args,
    message: 'This is the Error Alert',
    type: 'error',
    //icon: <span className="dx-icon-alert-octagon-solid" />,
};

export const Description = Template.bind({});
Description.args = {
    ...Error.args,
    message    : 'This is the Error Alert',
    description: 'Descriptions turns "message" into a title',
    type       : 'error',
};

export const Closable = Template.bind({});
Closable.args = {
    ...Info.args,
    message : 'Closable Alert',
    closable: true,
};


export const Actions = Template.bind({});
Actions.args = {
    ...Error.args,
    message    : 'Something went wrong',
    description: 'Error description, click Retry',
    type       : 'error',
    action     : <Button size="small" type="primary" icon={<span className="icon-refresh-line" />}>Retry</Button>,
};
