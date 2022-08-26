// Core
import React, { useEffect, useState } from 'react';
// Antd Components
import { Button } from 'antd';
// Components
import Divider from './Divider';
import Header from './Header';
import Footer from './Footer';
// Utils
import PropTypes from 'prop-types';
import classnames from 'classnames';

function BorderLayout(props) {

    const [ isVisible, setIsVisible ] = useState(props.visible);
    const [ isCollapsed, setIsCollapsed ] = useState(props.collapsed);

    useEffect(() => {
        setIsVisible(props.visible);
    }, [props.visible]);

    const onClose = () => {
        setIsVisible(false);
        props.onCloseCallBack && props.onCloseCallBack();
    };

    const onCollapse = () => {
        setIsCollapsed(true);
        props.onCollapseCallBack && props.onCollapseChangeCallBack(true);
    };
    const onExpand = () => {
        setIsCollapsed(false);
        props.onCollapseCallBack && props.onCollapseChangeCallBack(false);
    };

    const { styles, className } = props;

    const sizeStyles = !isCollapsed ? { minHeight: props.size, maxHeight: props.size } : {};

    return (
        <div style={{ display: isVisible ? 'block' : 'none', ...sizeStyles, ...styles }} className={classnames('border-layout-panel', className)}>
            <div className="vbox height-100">
                <Header
                    type="panel"
                >
                    {props.title}
                    <Divider />
                    <div className="hbox pack-end">
                        {props.toolBar}
                    </div>
                    <Divider type="dots" />
                    <div className="control-buttons">
                        <Button icon={<span className="icon-times-line"></span>} onClick={onClose}></Button>
                        {props.showCollapsed && (isCollapsed ?
                            <Button icon={<span className="ui-icon-collapse-panel"></span>} onClick={onExpand}></Button>
                            :
                            <Button icon={<span className="ui-icon-collapsed-panel"></span>} onClick={onCollapse}></Button>)}
                    </div>
                </Header>
                {!isCollapsed && (
                    <>
                        <div className="scrollable-content height-100">
                            {props.children}
                        </div>
                        {props.footer && (
                            <Footer>
                                {props.footer}
                            </Footer>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

BorderLayout.propTypes = {
    // placement               : PropTypes.string, // TODO
    size                    : PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
    visible                 : PropTypes.bool,
    collapsed               : PropTypes.bool,
    showCollapsed           : PropTypes.bool,
    title                   : PropTypes.element,
    toolBar                 : PropTypes.element,
    footer                  : PropTypes.element,
    onCloseCallBack         : PropTypes.func,
    onCollapseChangeCallBack: PropTypes.func,
    styles                  : PropTypes.object,
};

BorderLayout.defaultProps = {
    // placement               : 'bottom', // TODO
    size                    : 420,
    visible                 : true,
    collapsed               : false,
    showCollapsed           : true,
    title                   : '',
    styles                  : {},
    titleExtra              : undefined,
    toolBar                 : undefined,
    footer                  : undefined,
    counter                 : undefined,
    onCloseCallBack         : undefined,
    onCollapseChangeCallBack: undefined,
};

export default BorderLayout;
