import React from 'react';
import { Table, Typography } from 'antd';
import { dataSource } from './data';

export default {
  title: 'Data Display/Table (Ant)',
  component: Table,
  parameters: {
    componentSubtitle: <a href="https://ant.design/components/table/">🔗 Ant Table documentation</a>,
  },
  argTypes: {
    dataSource: {
      default: dataSource
    },
    pagination: {
      default: false
    },
    size: {
      options: ['default', 'middle', 'small'],
      control: {
        type: 'inline-radio'
      }
    }
  }
};

const { Column } = Table;
const { Text } = Typography;

const Template = (args) => 
<Table {...args}>
  <Column
    title="Name"
    dataIndex="name"
    key="name"
    className="dx-main-text"
  />
  <Column
    title="Age"
    dataIndex="age"
    key="age"
    width={60}
  />
  <Column
    title={[<span className="dx-icon-location-solid header-icn" />, "Address"]}
    dataIndex='address'
    key='address'
    render={text => <Text ellipsis={true, { tooltip: text }} className="secondary-text">{ text }</Text>}
    width={300}
  />
</Table>;

export const BasicTable = Template.bind({});
BasicTable.args = {
  dataSource: dataSource,
  pagination: false,
  tableLayout: 'fixed'
};


export const MiddleTable = Template.bind({});
MiddleTable.args = {
  ...BasicTable.args,
  size: 'middle'
};


export const SmallTable = Template.bind({});
SmallTable.args = {
  ...BasicTable.args,
  size: 'small'
};

export const NoHover = Template.bind({});
NoHover.args = {
  dataSource: dataSource,
  pagination: false,
  tableLayout: 'fixed',
  className: 'nohover'
};

export const NoBorder = Template.bind({});
NoBorder.args = {
  dataSource: dataSource,
  pagination: false,
  tableLayout: 'fixed',
  className: 'noborder'
};

export const Striped = Template.bind({});
Striped.args = {
  dataSource: dataSource,
  pagination: false,
  tableLayout: 'fixed',
  className: 'striped-grid'
};