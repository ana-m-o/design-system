import React from 'react';
import DataRefreshToolbar from '../components/DataRefreshToolbar';
import Header from '../components/Header';

export default {
    title    : 'Data Source/DataRefreshToolbar',
    component: DataRefreshToolbar,
};

const Template = (args) => {
    return (
        <div className="vbox gap-lg">
            <Header type="toolbar">
                <DataRefreshToolbar {...args} />
            </Header>
        </div>);
};

export const Default = Template.bind({});
Default.args = {
    timeToRefresh             : 10000,
    showCountdown             : true,
    showRefreshLabel          : true,
    showDataReceivedLabel     : true,
    showDataRefreshTooltipInfo: true,
    pausable                  : true,
};


export const IconOnly = Template.bind({});
IconOnly.args = {
    timeToRefresh        : 10000,
    showCountdown        : false,
    showRefreshLabel     : false,
    showDataReceivedLabel: false,
    pausable             : false,
    showProgressBar      : true,
};