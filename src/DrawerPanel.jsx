// Core
import React, { useEffect, useState } from 'react';
// Antd Components
import { Button, Drawer } from 'antd';
// Components
import Divider from './Divider';
import Header from './Header';
// Utils
import PropTypes from 'prop-types';


function DrawerPanel(props) {

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

    const styles = props.docked ? { position: 'absolute' } : {};

    return (
        <Drawer
            width={props.size}
            height={props.size}
            placement={props.placement}
            mask={props.mask}
            className={`drawer-panel ${!isCollapsed || !props.showCollapsed ? 'dp-expanded' : 'dp-collapsed'}`}
            visible={isVisible}
            closable={false} // Hides default close button
            bodyStyle={{ padding: 0 }}
            getContainer={!props.docked}
            style={styles}
        >
            <Header
                type="panel"
                title={props.title}
                uppercaseTitle
                className="drawer-panel-title"
                counter={props.counter}
                titleExtra={props.titleExtra}
            >
                <Divider />
                <div className="hbox pack-end">
                    {props.toolBar}
                </div>
                <Divider type="line" />
                <div className="control-buttons">
                    <Button icon={<span className="icon-times-line"></span>} onClick={onClose}></Button>
                    {props.showCollapsed && (isCollapsed ?
                        <Button icon={<span className="dx-icon-collapse-panel"></span>} onClick={onExpand}></Button>
                        :
                        <Button icon={<span className="dx-icon-collapsed-panel"></span>} onClick={onCollapse}></Button>)}
                </div>
            </Header>
            {props.children}
        </Drawer>
    );
}

DrawerPanel.propTypes = {
    placement               : PropTypes.string,
    size                    : PropTypes.number,
    docked                  : PropTypes.bool,
    mask                    : PropTypes.bool,
    visible                 : PropTypes.bool,
    collapsed               : PropTypes.bool,
    showCollapsed           : PropTypes.bool,
    title                   : PropTypes.string,
    titleExtra              : PropTypes.element,
    toolBar                 : PropTypes.element,
    counter                 : PropTypes.number,
    onCloseCallBack         : PropTypes.func,
    onCollapseChangeCallBack: PropTypes.func,
};

DrawerPanel.defaultProps = {
    placement               : 'right',
    size                    : 520,
    docked                  : false,
    mask                    : false,
    visible                 : true,
    collapsed               : true,
    showCollapsed           : true,
    title                   : '',
    titleExtra              : undefined,
    toolBar                 : undefined,
    counter                 : undefined,
    onCloseCallBack         : undefined,
    onCollapseChangeCallBack: undefined,
};

export default DrawerPanel;
