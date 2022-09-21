import React, { useState } from 'react';

// Components
import { Button, Form, Input, Modal, Steps, Radio, Space, Switch, Table, Alert } from 'antd';
import Tag from '../Tag';
import Header from '../Header';
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
                        title={<>Create New <b>Item</b> Resource</>}
                        iconCls="ui-img-resource"
                        description="An Item Resource is atechnical component based on any of the services that offer the Platform that can be added to your Applications"
                    />
                }
                className="dx-modal-wizard"
                open={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                {...args}
            >
                <Steps size="small" current={0}>
                    <Step title="Selection" />
                    <Step title="Info" />
                    <Step title="Creation" />
                </Steps>

                <div className="vbox layout--lined">
                    <div className="step-title">Select the Item definition</div>

                    <div className="hbox">

                        <div className="resource-logo">
                            <img src={ResourceImgDefault} alt="" width={80} />

                            <Tag
                                color="navy"
                                shape="round"
                                size="large"
                            >
                                Item
                            </Tag>
                        </div>

                        {/* STEP 1 */}

                        <div className="flex-1 scrollable-content">
                            <div className="section padding-md">
                                <Alert
                                    message="Information message"
                                    showIcon
                                    type="info"
                                />
                                <Form>
                                    <Radio.Group value={2}>
                                        <Space direction="vertical">
                                            <Radio value={1}>
                                                Create new item
                                            </Radio>

                                            <Radio value={2}>
                                                Import existing item
                                            </Radio>
                                        </Space>
                                    </Radio.Group>
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