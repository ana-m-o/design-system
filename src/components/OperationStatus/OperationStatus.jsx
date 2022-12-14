// Core
import React from 'react';
import { Collapse, Alert } from 'antd';
import Header from '../Header';
import StatusIndicator from '../StatusIndicator';
import Divider from '../Divider';
import { statusMap } from './consts';

// Utils
import PropTypes from 'prop-types';
import classnames from 'classnames';
import OperationStage from './OperationStage';

// Icons
import { CaretRightOutlined } from '@ant-design/icons';

/**
 * OperationStatus component from design-system
 *      uses OperationStage as a deployment specific, real time updated, header
 */

const { Panel } = Collapse;

const OperationStatus = ({
    title,
    iconCls,
    generalStatus,
    generalStatusText,
    expandedPanel,
    stages,
    type,
    showNumbers,
    collapsible,
    collapsed,
    className,
    ...otherProps
}) => {

    return (
        <div
            {...otherProps}
            className={
                classnames('dx-operation-status',
                    type && type,
                    showNumbers && 'show-numbers',
                    className)
            }
        >
            <Collapse
                className="ant-collapse--white"
                defaultActiveKey={!collapsed ? 'main' : ''}
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                collapsible={!collapsible && 'disabled'}
            >
                <Panel
                    header={
                        <Header iconCls={iconCls} title={title} uppercaseTitle docked={false}>
                            <Divider />
                            <StatusIndicator
                                status={statusMap[generalStatus]?.color}
                                iconCls={statusMap[generalStatus]?.icon}
                                text={generalStatusText ? generalStatusText : generalStatus}
                                className="padding-right-md"
                            />
                        </Header>
                    }
                    type="panel"
                    key="main"
                    showArrow={collapsible}
                    className="dx-operation-status__main-panel"
                >
                    {
                        type === 'accordion' ?

                            <Collapse
                                defaultActiveKey={expandedPanel ? expandedPanel : null}
                                accordion
                                className={'ant-collapse--white'}
                                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                            >
                                {/* Por cada stage */}

                                {
                                    stages.map(function (item, i) {
                                        const index = `${i + 1}`;
                                        return (
                                            <Panel
                                                className="stage-item"
                                                key={index}
                                                header={
                                                    <OperationStage
                                                        showNumbers={showNumbers}
                                                        index={index}
                                                        key={index}
                                                        {...item}
                                                    />
                                                }
                                            >
                                                {
                                                    (item.status === 'warning' || item.status === 'error') ?
                                                        <Alert
                                                            type={item.status}
                                                            showIcon
                                                            message={item.error_reason}
                                                            className="margin-bottom-md"
                                                        />
                                                        : null
                                                }

                                                {item.description ? item.description : 'There are not description provided for this stage'}
                                            </Panel>);
                                    })
                                }
                            </Collapse>

                            :

                            'Tree operation status - WIP :)'
                    }
                </Panel>
            </Collapse>
        </div>
    );
};

OperationStatus.propTypes = {
    /**
    * Operation Status title
    */
    title            : PropTypes.string,
    /**
    * Title icon
    */
    iconCls          : PropTypes.string,
    /**
    * Place all operation status in a collapsible panel
    */
    collapsible      : PropTypes.bool,
    /**
    * If collapsible is true, shows operation status collapsed
    */
    collapsed        : PropTypes.bool,
    /**
     * Status of all the operation
     */
    generalStatus    : PropTypes.string,
    /**
     * Status Text of all the operation
     */
    generalStatusText: PropTypes.string,
    /**
     * Select an especific panel to be expanded by its index
     */
    expandedPanel    : PropTypes.number,
    /**
     * Array of stages with their progress information (status).
     */
    stages           : PropTypes.array,
    /**
     * Visual style. As an accordion or an a tree (to-do)
     */
    type             : PropTypes.oneOf([ 'accordion', 'tree' ]),
    /**
     * Show numbers as a timeline
     */
    showNumbers      : PropTypes.bool,
    /**
     * @ignore
     */
    className        : PropTypes.string,
};

OperationStatus.defaultProps = {
    title            : 'Operation status',
    iconCls          : null,
    generalStatus    : '',
    generalStatusText: '',
    stages           : [],
    expandedPanel    : null,
    type             : 'accordion',
    showNumbers      : false,
    collapsible      : true,
    collapsed        : false,
};

export default OperationStatus;
