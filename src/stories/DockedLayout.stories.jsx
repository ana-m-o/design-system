import React, { useState } from 'react';
// Antd Components
import { Button } from 'antd';
// Components
import DockedLayout from '../DockedLayout';
import DockedLayoutDivider from '../DockedLayoutDivider';
import DOCKED_LAYOUT_TEMPLATES from '../DockedLayoutTemplates';

export default {
    title    : '🧪 Lab/DockedLayout',
    component: DockedLayoutDivider,
    argTypes : {
        orientation: { control: 'select', options: [ 'vertical', 'horizontal' ] },
    },
};

const DockedLayoutDividerTemplate = (args) => {

    const [ isVisible, setIsVisible ] = useState(true);

    const borderStyle = args.orientation === 'vertical' ? { borderTop: '5px solid #ddd', background: 'lightgrey' } : { borderLeft: '5px solid #ddd', background: 'lightgrey' };

    return (
        <div style={{ width: '100%', height: '600px' }}>
            <DockedLayoutDivider style={{ position: 'absolute', left: 10, top: 10, right: 10, bottom: 10, border: '1px solid #ddd' }}>
                <DockedLayoutDivider mode={args.orientation}>
                    <div>
                        A.
                        <Button onClick={() => setIsVisible(!isVisible)}>TOGGLE B.</Button>
                    </div>
                    {isVisible && (
                        <div style={borderStyle}>B.</div>
                    )}
                </DockedLayoutDivider>
            </DockedLayoutDivider>
        </div>
    );
};

const DockedLayoutTemplate = (args) => {
    const selectedTemplate = DOCKED_LAYOUT_TEMPLATES[args.template] || DOCKED_LAYOUT_TEMPLATES.DEFAULT;
    return (
        <div style={{ width: '100%', height: '600px' }}>
            <DockedLayoutDivider style={{ position: 'absolute', left: 10, top: 10, right: 10, bottom: 10, border: '1px solid #ddd' }}>
                <DockedLayout
                    layoutTemplate={selectedTemplate({
                        orientation  : args.orientation,
                        mainComponent: () => <div>MAIN_COMPONENT</div>,
                        sideComponent: () => (<div>SIDE_COMPONENT</div>) },
                    )}
                />
            </DockedLayoutDivider>
        </div>
    );
};


export const Divider = DockedLayoutDividerTemplate.bind({});
DockedLayoutDividerTemplate.args = {
    orientation: 'vertical',
};

export const DockedPanels = DockedLayoutTemplate.bind({});
DockedLayoutTemplate.args = {
    orientation: 'vertical',
};


