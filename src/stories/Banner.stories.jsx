import React from 'react';
import { Button } from 'antd';
import Banner from '../Banner';
import BannerMdx from './Banner.stories.mdx';


export default {
    title     : 'Uiverse/Banner',
    component : Banner,
    parameters: {
        uxDocs: BannerMdx,
    },
    argTypes: {
        type: {
            options: [ 'info', 'info-secondary', 'warning', 'error', 'success' ],
            control: {
                type: 'select',
            },
            defaultValue: 'info',
        },
    },
};

const Template = (args) =>
    <Banner {...args} />;

export const Info = Template.bind({});
Info.args = {
    message    : 'This is the default / info Banner',
    description: '',
    showIcon   : true,
    closable   : false,
    collapsible: false,
};

export const InfoSecondary = Template.bind({});
InfoSecondary.args = {
    ...Info.args,
    message  : 'This is the secondary info banner',
    type     : 'info',
    className: 'secondary',
};

export const Warning = Template.bind({});
Warning.args = {
    ...Info.args,
    message: 'This is the Warning Banner',
    type   : 'warning',
};

export const Success = Template.bind({});
Success.args = {
    ...Info.args,
    message: 'This is the Success Banner',
    type   : 'success',
};

export const Error = Template.bind({});
Error.args = {
    ...Info.args,
    message: 'This is the Error Banner',
    type   : 'error',
};

export const Description = Template.bind({});
Description.args = {
    ...Info.args,
    message    : 'This is the Error Banner',
    description: 'Descriptions turns "message" into a title',
    type       : 'error',
};

export const Closable = Template.bind({});
Closable.args = {
    ...Info.args,
    message : 'Closable banner',
    closable: true,
};


export const Actions = Template.bind({});
Actions.args = {
    ...Info.args,
    message    : 'Something went wrong',
    description: 'Error description, click Retry',
    type       : 'error',
    action     : <Button size="small" type="primary" icon={<span className="icon-refresh-line" />}>Retry</Button>,

};

export const Collapsible = Template.bind({});
Collapsible.args = {
    message    : 'This is a collapsible banner',
    showIcon   : true,
    collapsible: true,
    description: 'Description is mandatory in collapsible banners',
};