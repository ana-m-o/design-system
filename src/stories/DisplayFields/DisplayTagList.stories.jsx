// Core
import React from 'react';
// Components
import { Form, Tooltip } from 'antd';
// Local components
import DisplayTagList from '../../DisplayTagList';

export default {
    title    : 'Uiverse/DisplayFields/DisplayTagList',
    component: DisplayTagList,
};

const Template = (args) =>
    <DisplayTagList {...args} />;

export const Default = Template.bind({});
Default.args = {
    value   : [ 'Tag 1', 'Tag 2', 'Tag 3' ],
    tagprops: [
        {
            'size'   : 'medium',
            'shape'  : 'rectangle',
            'color'  : 'light-blue',
            'bold'   : false,
            'width'  : '',
            'iconCls': '',
        },
        {
            'size'   : 'default',
            'shape'  : 'rectangle',
            'color'  : 'blue',
            'bold'   : false,
            'width'  : '',
            'iconCls': '',
        },
        {
            'size'   : 'small',
            'shape'  : 'rectangle',
            'color'  : 'red',
            'bold'   : false,
            'width'  : '',
            'iconCls': '',
        },
    ],
};

const TemplateForm = (args) =>
    <Form
        name="basic"
        layout="vertical"
    >
        <div className="vbox gap-lg">
            <Form.Item
                label="Basic Usage"
                name="basicusage"
            >
                <Tooltip title="Hello from the tag!" >
                    <DisplayTagList {...args} />
                </Tooltip>
            </Form.Item>
        </div>
    </Form>;

export const AsFormItem = TemplateForm.bind({});
AsFormItem.args = {
    value: [ 'Tag 1', 'Tag 2', 'Tag 3' ],
};

const TemplateFormStyledBasic = (args) => <DisplayTagList {...args} />;
export const SingleTagStyle = TemplateFormStyledBasic.bind({});
SingleTagStyle.args = {
    value   : [ 'Tag 1', 'Tag 2', 'Tag 3' ],
    tagprops: [
        {
            'size'   : 'medium',
            'shape'  : 'rectangle',
            'color'  : 'navy',
            'bold'   : false,
            'width'  : '',
            'iconCls': '',
        },
    ],
};

const TemplateFormStyled = (args) => <DisplayTagList {...args} />;
export const MultipleTagStyles = TemplateFormStyled.bind({});
MultipleTagStyles.args = {
    value   : [ 'Tag 1', 'Tag 2', 'Tag 3' ],
    tagprops: [
        {
            'size'   : 'medium',
            'shape'  : 'rectangle',
            'color'  : 'light-blue',
            'bold'   : false,
            'width'  : '',
            'iconCls': '',
        },
        {
            'size'   : 'medium',
            'shape'  : 'rectangle',
            'color'  : 'blue',
            'bold'   : false,
            'width'  : '',
            'iconCls': '',
        },
        {
            'size'   : 'medium',
            'shape'  : 'rectangle',
            'color'  : 'red',
            'bold'   : false,
            'width'  : '',
            'iconCls': '',
        },
    ],
};