import React from 'react';

import { Button, message } from 'antd';

export default {
    title    : 'Ant/Message',
    component: message,
};

const info = () => {
    message.info('This is an info message', 5);
};

const success = () => {
    message.success('This is a success message', 5);
};

const error = () => {
    message.error('This is an error message', 5);
};

const warning = () => {
    message.warning('This is a warning message', 5);
};

const Template = (args) =>
    <div className="hbox">
        <Button onClick={info}>
            Info
        </Button>
        <Button onClick={success}>
            Success
        </Button>
        <Button onClick={error}>
            Error
        </Button>
        <Button onClick={warning}>
            Warning
        </Button>
    </div>;
export const Default = Template.bind({});
Default.args = {
};