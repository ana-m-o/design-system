import React from 'react';
import Divider from '../components/Divider';
import Footer from '../components/Footer';
import { Button } from 'antd';

export default {
    title    : 'Layout/Footer',
    component: Footer,
};

const Template = (args) =>
    <Footer {...args} ></Footer>;

export const Default = Template.bind({});
Default.args = {
    children: [
        <Divider key="divider" />,
        <Button key="clearbtn">Clear</Button>,
        <Button type="primary" key="savebtn">Save</Button>,
    ],
};