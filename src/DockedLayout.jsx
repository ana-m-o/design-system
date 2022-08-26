// Core
import React from 'react';
// Rc-Dock
import DockLayout from 'rc-dock';
import 'rc-dock/dist/rc-dock.css';
// Antd Components
import { Button } from 'antd';
// Components
import DOCKED_LAYOUT_TEMPLATES from './DockedLayoutTemplates';
// Utils
import PropTypes from 'prop-types';


function newTab() {
    return {
        id     : 'RawData',
        title  : '',
        content: (
            <div>
                <p>RAW_DATA</p>
            </div>
        ),
        group: 'dockedWindow',
    };
}

function DockedLayout(props) {

    const groups = {
        headless: {
            // the css class for this would be dock-panel-headless
            // this is a pre-defined style, defined here:
            // https://github.com/ticlo/rc-dock/blob/master/style/predefined-panels.less
            floatable  : true,
            maximizable: true,
        },
        dockedWindow: {
            floatable : true, // 'singleTab'
            closable  : true,
            panelExtra: (panelData, context) => (
                <div className="hbox pack-end">
                    <Button
                        onClick={() => context.dockMove(newTab(), panelData, 'right')}
                    >
                        add
                    </Button>
                    <Button icon={<span className="icon-window-restore-line"></span>} onClick={() => {
                        panelData.x = 100;
                        panelData.y = 100;
                        panelData.w = 200;
                        panelData.h = 200;
                        /*


                        */
                        context.dockMove(panelData, null, 'float');
                    }}
                    >
                    </Button>
                    <Button icon={<span className="icon-window-max-line"></span>} onClick={() => context.dockMove(panelData, null, 'maximize')}></Button>
                    <Button icon={<span className="icon-times-line"></span>} onClick={() => context.dockMove(panelData, null, 'remove')}></Button>
                </div>
            ),
        },
    };

    return (
        <div className="uiv-dockedLayout vbox height-100 flex-1" style={{ position: 'relative' }}>
            <DockLayout
                defaultLayout={props.layoutTemplate}
                groups={groups}
                style={{
                    position: 'absolute',
                    left    : 0,
                    top     : 0,
                    right   : 0,
                    bottom  : 0,
                }}
            >
            </DockLayout>
        </div>
    );
}

DockedLayout.propTypes = {
    layoutTemplate: PropTypes.object.isRequired,
};

DockedLayout.defaultProps = {
    layoutTemplate: DOCKED_LAYOUT_TEMPLATES,
};

export default DockedLayout;
