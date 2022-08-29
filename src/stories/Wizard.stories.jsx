import React, { useState } from 'react';

// Components
import { Button, Form, Input, Modal, Steps, Radio, Space, Switch, Table } from 'antd';
import Tag from '../Tag';
import Header from '../Header';
import Banner from '../Banner';
import Divider from '../Divider';
import EmptyView from '../EmptyView';
import ModalPopup from '../ModalPopup';

// images
import ResourceImgDefault from './assets/images/logo-default.png';

export default {
    title    : 'Layout/Modal / Wizard',
    component: ModalPopup,
};

const Template = (args) => {

    const [ isModalVisible, setIsModalVisible ] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const { Step } = Steps;

    const { TextArea } = Input;

    return (
        <>
            <Button type="primary" onClick={showModal}>Open wizard</Button>
            <ModalPopup
                title={
                    <Header
                        className="bg-gradient-aqua"
                        type="illustration"
                        title={<>Create New <b>LRBA</b> Resource</>}
                        iconCls="ui-img-resource"
                        description="An Ether Application Resource is atechnical component based on any of the services that offer the ETHER Platform that you can add to your Applications"
                    />
                }
                className="modal-wizard"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                {...args}
            >
                <Steps size="small" current={0}>
                    <Step title="Selection" />
                    <Step title="Info" />
                    <Step title="Creation" />
                </Steps>

                <div className="vbox lined-layout">
                    <div className="step-title">Select the associated batch program definition</div>

                    <div className="hbox">

                        <div className="resource-logo">
                            <img src={ResourceImgDefault} alt="" width={80} />

                            <Tag
                                color="navy"
                                shape="round"
                                size="medium"
                            >
                                LRBA
                            </Tag>
                        </div>

                        {/* STEP 1 */}

                        {/* <div className="flex-1 scrollable-content">
                            <div className="section padding-md">
                                <Banner
                                    message="Every LRBA resource must be associated with a Major Version of a Batch Program inventoried in the Catalog"
                                    showIcon
                                    type="info"
                                />
                                <Form>
                                    <Radio.Group value={2}>
                                        <Space direction="vertical">
                                            <Radio value={1}>
                                                Create new Batch Program
                                            </Radio>

                                            <Radio value={2}>
                                                Link existing Program|Major version to a new Batch Program version
                                            </Radio>
                                        </Space>
                                    </Radio.Group>
                                </Form>
                            </div>

                            <Header type="table" title={<span className="color-medium-light-blue">UA Batch Programs</span>}>
                                <Divider />
                                <Form>
                                    <Form.Item
                                        label="Hide implemented"
                                        labelAlign="right"
                                    >
                                        <Switch
                                            size="small"
                                            layout="horizontal"
                                        />
                                    </Form.Item>
                                </Form>
                            </Header>

                            <div className="section">
                                <EmptyView
                                    className="padding-lg"
                                    text="There are no batch program definitions in this UA"
                                />
                            </div>
                        </div> */}


                        {/* STEP 2 */}
                        <div className="flex-1 scrollable-content">
                            <div className="section padding-md">
                                <Banner
                                    message="This type of version is created by immutably pointing to the selected commit or tag, so the binary that is deployed...."
                                    showIcon
                                    type="info"
                                />

                                <Form
                                    layout="vertical"
                                    className="padding-left-lg"
                                    size="small"
                                >
                                    <Form.Item
                                        label="Resource Name"
                                        name="name"
                                        rules={[{ required: true, message: 'Required input' }]}
                                        tooltip="This is a required field"
                                        extra="Required, between 4 and 27 characteres. Special characters are not allowed."
                                    >

                                        <Input allowClear />
                                    </Form.Item>

                                    <Form.Item
                                        label="Short description"
                                        name="description"
                                    >
                                        <Input.TextArea
                                            allowClear
                                            showCount
                                            maxLength={600}
                                            autoSize={{ minRows: 1, maxRows: 3 }}
                                            extra="Describe shortly your component"
                                        />
                                    </Form.Item>

                                    <div className="form-highlight-block margin-top-lg">
                                        <Form.Item
                                            label="Major version"
                                            name="version"
                                        >
                                            <Input
                                                defaultValue="V01"
                                                placeholder="--"
                                                readOnly
                                                className="autogenerated"
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            label="Version Description"
                                            name="input3"
                                        >
                                            <TextArea
                                                defaultValue="Description"
                                                placeholder="--"
                                                autoSize={{ minRows: 1, maxRows: 3 }}
                                                showCount
                                                maxLength={600}
                                            />
                                        </Form.Item>
                                    </div>
                                </Form>
                            </div>
                        </div>

                    </div>
                </div>
            </ModalPopup>
        </>
    );
};


export const Default = Template.bind({});
Default.args = {
    isDraggable: false,
    width      : 700,
    style      : { top: 0 },
};

export const Draggable = Template.bind({});
Draggable.args = {
    isDraggable: true,
};