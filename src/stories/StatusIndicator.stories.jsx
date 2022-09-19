import React from 'react';

import StatusIndicator from '../StatusIndicator';

export default {
    title    : 'Data display/StatusIndicator',
    component: StatusIndicator,
    argTypes : {
        size: {
            options: [ 'default', 'small', 'large' ],
            control: {
                type: 'select',
            },
        },
        status: {
            options: [ 'ok', 'ko', 'wip', 'active', 'idle', 'disabled' ],
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
    },
};

const Template = (args) => <StatusIndicator {...args}></StatusIndicator>;

export const OK = Template.bind({});
OK.args = {
    status   : 'ok',
    text     : 'Status',
    textAlign: 'right',
    hideIcon : false,
};

export const KO = Template.bind({});
KO.args = {
    ...OK.args,
    status   : 'ko',
};

export const WIPLoading = Template.bind({});
WIPLoading.args = {
    ...OK.args,
    status   : 'wip',
};

export const Active = Template.bind({});
Active.args = {
    ...OK.args,
    status   : 'active',
};

export const Idle = Template.bind({});
Idle.args = {
    ...OK.args,
    status   : 'idle',
};

export const Disabled = Template.bind({});
Disabled.args = {
    ...OK.args,
    status   : 'disabled',
};

export const TextAlignLeft = Template.bind({});
TextAlignLeft.args = {
    ...OK.args,
    textAlign   : 'left',
};