// Core
import React from 'react';

// Utils
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Alert, Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import Header from './Header';

/**
 * Wrapper for Ant.d Alert. It extends functionality to be collapsable.
 *
 * Ant docs: https://ant.design/components/alert/
 *
 * TO-DO:
 * - Cambiar iconos y colores por defecto
 * - Terminar la versión collapsible
 *  */

const { Panel } = Collapse;

const customIcons = {
    info   : <span className="icon-info-standard-solid" />,
    warning: <span className="icon-warning-standard-solid" />,
    error  : <span className="ui-icon-alert-octagon-solid" />,
    success: <span className="icon-success-standard-solid" />,
};

const Banner = ({
    collapsible,
    expandIconPosition,
    className,
    ...otherProps
}) => {

    const props = { ...otherProps };

    const type = props.type ? props.type : 'info';

    return (
        <div
            className={
                classnames('uiv-banner-wrap',
                    collapsible && 'collapsible',
                    className)
            }
        >

            {collapsible ?
                <Alert
                    className={`expand-icon-${expandIconPosition}`}
                    icon={customIcons[type]}
                    {...otherProps}
                    message={
                        <Collapse
                            defaultActiveKey={['1']}
                            expandIconPosition={expandIconPosition}
                            accordion
                            className="transparent compact"
                            expandIcon={({ isActive }) => <CaretRightOutlined className="expand-icon" rotate={isActive ? 90 : 0} />}
                        >

                            <Panel
                                className="stage-item"
                                header={
                                    <Header
                                        title={props.message}
                                    >
                                    </Header>
                                }
                                key="1"
                            >
                                {props.description}
                            </Panel>
                        </Collapse>
                    }
                    description={null}
                />

                :
                <Alert
                    {...otherProps}
                    icon={customIcons[type]}
                />}
        </div>
    );
};

Banner.propTypes = {
    /**
     * Banner as collapsible panel
     */
    collapsible       : PropTypes.bool,
    /**
     * Expand icon position for collapsible banners
     */
    expandIconPosition: PropTypes.oneOf([ 'left', 'right' ]),
    /**
     * @ignore
     */
    className         : PropTypes.string,
};

Banner.defaultProps = {
    collapsible       : false,
    expandIconPosition: 'left',
};

export default Banner;
