import { message } from 'antd';
import React from 'react';

import ApiMethod from '../ApiMethod';

export default {
    title    : 'Data Display/ApiMethod',
    component: ApiMethod,
};

const Template = (args) => <ApiMethod {...args}></ApiMethod>;

const info = () => {
    message.info('API Method clicked');
};

export const Tag = Template.bind({});
Tag.args = {
    type  : 'tag',
    method: 'post',
    status: 'solid',
};

export const Dot = Template.bind({});
Dot.args = {
    type  : 'dot',
    method: 'post',
    status: 'solid',
};

export const Generic = Template.bind({});
Generic.args = {
    type   : 'tag',
    method : 'post',
    status : 'outlined',
    generic: true,
};

export const Button = Template.bind({});
Button.args = {
    type    : 'tag',
    method  : 'post',
    status  : 'outlined',
    asButton: true,
    onClick : info,
};

export const HtmlLink = Template.bind({});
HtmlLink.args = {
    type    : 'tag',
    method  : 'post',
    status  : 'outlined',
    asButton: true,
    target  : '_blank',
    rel     : 'noopener noreferrer',
    key     : 'link',
    href    : 'https://#',
};

export const Transition = Template.bind({});
Transition.args = {
    method    : 'post',
    status    : 'outlined',
    transition: true,
};

const TemplateAll = (args) =>
    <div className="vbox gap-md">
        <div className="hbox gap-md">
            <div className="hbox pack-center" style={{ width: '100px' }}></div>
            <div className="hbox pack-center" style={{ width: '60px' }}>solid</div>
            <div className="hbox pack-center" style={{ width: '60px' }}>outlined</div>
            <div className="hbox pack-center" style={{ width: '60px' }}>wip-solid</div>
            <div className="hbox pack-center" style={{ width: '60px' }}>wip-outl.</div>
            <div className="hbox pack-center" style={{ width: '60px' }}>half</div>
            <div className="hbox pack-center" style={{ width: '60px' }}>alert</div>
            <div className="hbox pack-center" style={{ width: '60px' }}>forbidden</div>
            <div className="hbox pack-center" style={{ width: '60px' }}>empty</div>
            <div className="hbox pack-center" style={{ width: '60px' }}>disabled</div>
        </div>
        <div className="hbox gap-md">
            <div className="hbox pack-center" style={{ width: '100px' }}>Tag</div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="tag" status="solid"></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="tag" status="outlined"></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="tag" status="wip-solid"></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="tag" status="wip-outlined"></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="tag" status="half"></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="tag" status="alert"></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="tag" status="forbidden"></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="tag" status="empty"></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="tag" status="disabled" disabled></ApiMethod></div>
        </div>
        <div className="hbox gap-md">
            <div className="hbox pack-center" style={{ width: '100px' }}>Tag as Button</div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="tag" status="solid" asButton={true}></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="tag" status="outlined" asButton={true}></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="tag" status="wip-solid" asButton={true}></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="tag" status="wip-outlined" asButton={true}></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="tag" status="half" asButton={true}></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="tag" status="alert" asButton={true}></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="tag" status="forbidden" asButton={true}></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="tag" status="empty" asButton={true}></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="tag" status="disabled" asButton={true} disabled></ApiMethod></div>
        </div>
        <div className="hbox gap-md">
            <div className="hbox pack-center" style={{ width: '100px' }}>Tag as Link</div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="tag" status="solid" asButton={true} href="https://catalogs.platform.bbva.com/#" target="_blank" rel="noopener noreferrer" ></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="tag" status="outlined" asButton={true} href="https://catalogs.platform.bbva.com/#" target="_blank" rel="noopener noreferrer" ></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="tag" status="wip-solid" asButton={true} href="https://catalogs.platform.bbva.com/#" target="_blank" rel="noopener noreferrer" ></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="tag" status="wip-outlined" asButton={true} href="https://catalogs.platform.bbva.com/#" target="_blank" rel="noopener noreferrer" ></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="tag" status="half" asButton={true} href="https://catalogs.platform.bbva.com/#" target="_blank" rel="noopener noreferrer" ></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="tag" status="alert" asButton={true} href="https://catalogs.platform.bbva.com/#" target="_blank" rel="noopener noreferrer" ></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="tag" status="forbidden" asButton={true} href="https://catalogs.platform.bbva.com/#" target="_blank" rel="noopener noreferrer" ></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="tag" status="empty" asButton={true} href="https://catalogs.platform.bbva.com/#" target="_blank" rel="noopener noreferrer" ></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="tag" status="disabled" asButton={true} href="https://catalogs.platform.bbva.com/#" target="_blank" rel="noopener noreferrer" disabled></ApiMethod></div>
        </div>
        <div className="hbox gap-md">
            <div className="hbox pack-center" style={{ width: '100px' }}>Dot</div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="dot" status="solid"></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="dot" status="outlined"></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="dot" status="wip-solid"></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="dot" status="wip-outlined"></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="dot" status="half"></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="dot" status="alert"></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="dot" status="forbidden"></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="dot" status="empty"></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="dot" status="disabled" disabled></ApiMethod></div>
        </div>
        <div className="hbox gap-md">
            <div className="hbox pack-center" style={{ width: '100px' }}>Dot asButton</div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="dot" asButton={true} status="solid"></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="dot" asButton={true} status="outlined"></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="dot" asButton={true} status="wip-solid"></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="dot" asButton={true} status="wip-outlined"></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="dot" asButton={true} status="half"></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="dot" asButton={true} status="alert"></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="dot" asButton={true} status="forbidden"></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="dot" asButton={true} status="empty"></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="dot" asButton={true} status="disabled" disabled></ApiMethod></div>
        </div>
        <div className="hbox gap-md">
            <div className="hbox pack-center" style={{ width: '100px' }}>Transition</div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} status="solid" transition={true}></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} status="outlined" transition={true}></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} status="wip-solid" transition={true}></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} status="wip-outlined" transition={true}></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} status="half" transition={true}></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} status="alert" transition={true}></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} status="forbidden" transition={true}></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} status="empty" transition={true}></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} status="disabled" transition={true} disabled></ApiMethod></div>
        </div>
        <div className="hbox gap-md">
            <div className="hbox pack-center" style={{ width: '100px' }}>Tran + button</div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} asButton={true} status="solid" transition={true}></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} asButton={true} status="outlined" transition={true}></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} asButton={true} status="wip-solid" transition={true}></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} asButton={true} status="wip-outlined" transition={true}></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} asButton={true} status="half" transition={true}></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} asButton={true} status="alert" transition={true}></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} asButton={true} status="forbidden" transition={true}></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} asButton={true} status="empty" transition={true}></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} asButton={true} status="disabled" transition={true} disabled></ApiMethod></div>
        </div>
        <div className="hbox gap-md">
            <div className="hbox pack-center" style={{ width: '100px' }}>Tran + Link</div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="tag" status="solid" transition={true} asButton={true} href="https://catalogs.platform.bbva.com/#" target="_blank" rel="noopener noreferrer" ></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="tag" status="outlined" transition={true} asButton={true} href="https://catalogs.platform.bbva.com/#" target="_blank" rel="noopener noreferrer" ></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="tag" status="wip-solid" transition={true} asButton={true} href="https://catalogs.platform.bbva.com/#" target="_blank" rel="noopener noreferrer" ></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="tag" status="wip-outlined" transition={true} asButton={true} href="https://catalogs.platform.bbva.com/#" target="_blank" rel="noopener noreferrer" ></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="tag" status="half" transition={true} asButton={true} href="https://catalogs.platform.bbva.com/#" target="_blank" rel="noopener noreferrer" ></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="tag" status="alert" transition={true} asButton={true} href="https://catalogs.platform.bbva.com/#" target="_blank" rel="noopener noreferrer" ></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="tag" status="forbidden" transition={true} asButton={true} href="https://catalogs.platform.bbva.com/#" target="_blank" rel="noopener noreferrer" ></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="tag" status="empty" transition={true} asButton={true} href="https://catalogs.platform.bbva.com/#" target="_blank" rel="noopener noreferrer" ></ApiMethod></div>
            <div className="hbox pack-center" style={{ width: '60px' }}><ApiMethod {...args} type="tag" status="disabled" transition={true} asButton={true} href="https://catalogs.platform.bbva.com/#" target="_blank" rel="noopener noreferrer" disabled></ApiMethod></div>
        </div>
    </div>;

export const All = TemplateAll.bind({});
All.args = {
    method: 'post',
};