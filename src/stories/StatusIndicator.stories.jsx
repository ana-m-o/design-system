import React from 'react';

import StatusIndicator from '../StatusIndicator';

export default {
    title    : 'Data display/StatusIndicator',
    component: StatusIndicator,
    argTypes : {
        size: {
            options: [ 'default', 'small', 'medium' ],
            control: {
                type: 'select',
            },
        },
        status: {
            options: [ 'idle', 'ok', 'ko', 'wip', 'active', 'disabled', 'available', 'implementing', 'defined', 'not-defined' ],
            control: {
                type: 'select',
            },
        },
        textAlign: {
            options: [ 'left', 'right' ],
            control: {
                type: 'inline-radio',
            },
        },
        bold: {
            options: [ true, false ],
            control: {
                type: 'boolean',
            },
        },
        border: {
            options: [ true, false ],
            control: {
                type: 'boolean',
            },
        },
    },
};

const Template = (args) => <StatusIndicator {...args}></StatusIndicator>;

export const Default = Template.bind({});
Default.args = {
    status   : 'ok',
    text     : 'Status',
    textAlign: 'left',
    bold     : false,
    hideIcon : false,
    border   : false,
};
