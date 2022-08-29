import React from 'react';
import OperationStatus from '../OperationStatus/OperationStatus';
import Tag from '../Tag';

export default {
    title    : 'Data Display/OperationStatus',
    component: OperationStatus,
    argTypes : {
        type: {
            options: [ 'accordion', 'tree' ],
            control: {
                type: 'select',
            },
        },
        showNumbers: {
            options: [ true, false ],
            control: {
                type: 'boolean',
            },
        },
    },
};

const stagesDefault = [{
    'stage'      : 'Connecting to the server',
    'description': 'Stage description',
    'status'     : 'completed',
    'percent'    : 100,
    'time'       : '0h 06\' 32"',
},
{
    'stage'      : 'Authenticating',
    'description': 'Stage description',
    'status'     : 'in progress',
    'percent'    : 43,
    'time'       : '0h 03\' 47"',
},
{
    'stage'      : 'Retrieving information',
    'description': '',
    'status'     : 'pending',
    'percent'    : 0,
    'time'       : '',
},
{
    'stage'      : 'Register Scheduled deploy',
    'description': '',
    'status'     : 'pending',
    'percent'    : 0,
    'time'       : '',
    'extra'      : [ <Tag size="medium" key="request">Request ID: <span className="font-weight-black">123092345763284527634</span></Tag>, 'Other extra' ],
}];

const stagesWarning = [{
    'stage'      : 'Connecting to the server',
    'description': 'Stage description',
    'status'     : 'completed',
    'percent'    : 100,
    'time'       : '0h 06\' 32"',
},
{
    'stage'       : 'Authenticating',
    'description' : 'Stage description',
    'status'      : 'warning',
    'error_reason': 'This stage is taking more time the usual. The average time for this stage it’s about 3-4 minutes to complete.',
    'percent'     : 43,
    'time'        : '0h 03\' 47"',
},
{
    'stage'      : 'Retrieving information',
    'description': '',
    'status'     : 'pending',
    'percent'    : 0,
    'time'       : '',
},
{
    'stage'      : 'Register Scheduled deploy',
    'description': '',
    'status'     : 'pending',
    'percent'    : 0,
    'time'       : '',
    'extra'      : <Tag size="medium">Request ID: <span className="font-weight-black">123092345763284527634</span></Tag>,
}];


const stagesError = [{
    'stage'      : 'Connecting to the server',
    'description': 'Stage description',
    'status'     : 'completed',
    'percent'    : 100,
    'time'       : '0h 06\' 32"',
},
{
    'stage'       : 'Authenticating',
    'description' : 'Stage description',
    'status'      : 'error',
    'error_reason': '11/05resource not found at \'https://****/applied-behaviors\': 404 Not Found | body: {\'messages\':[\'Could not find the following entities: [ {\n \'coordinates\' : [ \'es.bwgg.app-id-32129.dsg\', \'3dsproxychallengeotp\' ],\n \'scope\' : {\n \'branch\' : \'tags/v0.0.11\'\n }\n} ]\']}/21 · 13:12',
    'percent'     : 43,
    'time'        : '0h 03\' 47"',
},
{
    'stage'      : 'Retrieving information',
    'description': '',
    'status'     : 'pending',
    'percent'    : 0,
    'time'       : '',
},
{
    'stage'      : 'Register Scheduled deploy',
    'description': '',
    'status'     : 'pending',
    'percent'    : 0,
    'time'       : '',
    'extra'      : <Tag size="medium">Request ID: <span className="font-weight-black">123092345763284527634</span></Tag>,
}];

const stagesCancel = [{
    'stage'      : 'Connecting to the server',
    'description': 'Stage description',
    'status'     : 'completed',
    'percent'    : 100,
    'time'       : '0h 06\' 32"',
},
{
    'stage'       : 'Authenticating',
    'description' : 'Stage description',
    'status'      : 'error',
    'error_reason': '11/05resource not found at \'https://****/applied-behaviors\': 404 Not Found | body: {\'messages\':[\'Could not find the following entities: [ {\n \'coordinates\' : [ \'es.bwgg.app-id-32129.dsg\', \'3dsproxychallengeotp\' ],\n \'scope\' : {\n \'branch\' : \'tags/v0.0.11\'\n }\n} ]\']}/21 · 13:12',
    'percent'     : 43,
    'time'        : '0h 03\' 47"',
},
{
    'stage'      : 'Retrieving information',
    'description': '',
    'status'     : 'pending',
    'percent'    : 0,
    'time'       : '',
},
{
    'stage'      : 'Register Scheduled deploy',
    'description': '',
    'status'     : 'pending',
    'percent'    : 0,
    'time'       : '',
    'extra'      : <Tag size="medium">Request ID: <span className="font-weight-black">123092345763284527634</span></Tag>,
}];

const Template = (args) => <OperationStatus {...args} />;

export const Default = Template.bind({});
Default.args = {
    title            : 'Deployment Progress',
    iconCls          : 'ui-icon-deploy-package',
    type             : 'accordion',
    expandedPanel    : null,
    showNumbers      : true,
    stages           : stagesDefault,
    generalStatus    : 'in progress',
    generalStatusText: 'Deploying...',
    collapsible      : true,
};

export const Warning = Template.bind({});
Warning.args = {
    title            : 'Deployment Progress',
    iconCls          : 'ui-icon-deploy-package',
    type             : 'accordion',
    expandedPanel    : 2,
    showNumbers      : true,
    stages           : stagesWarning,
    generalStatus    : 'in progress',
    generalStatusText: 'Deploying...',
};

export const Error = Template.bind({});
Error.args = {
    title            : 'Deployment Progress',
    iconCls          : 'ui-icon-deploy-package',
    type             : 'accordion',
    expandedPanel    : 2,
    showNumbers      : true,
    stages           : stagesError,
    generalStatus    : 'error',
    generalStatusText: 'Error',
};

export const Cancel = Template.bind({});
Cancel.args = {
    title            : 'Deployment Progress',
    iconCls          : 'ui-icon-deploy-package',
    type             : 'accordion',
    expandedPanel    : 2,
    showNumbers      : true,
    stages           : stagesCancel,
    generalStatus    : 'in progress',
    generalStatusText: 'Cancelling...',
};
