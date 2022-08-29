import React from 'react';

import Counter from '../Counter';


export default {
    title    : 'Data display/Counter',
    component: Counter,
};

const Template = (args) => <Counter {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 12,
    bold    : true,
};
