// Core
import React from 'react';

// Utils
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Counter from './Counter';

/**
 * Header component from uiverse-components.
 */

const Header = ({
    type,
    iconCls,
    title,
    counter,
    titleExtra,
    description,
    uppercaseTitle,
    navButtons,
    docked,
    compact,
    children,
    className,
    ...otherProps
}) => {

    return (
        <div
            className={
                classnames(`uiv-${type}-header`,
                    compact && 'compact',
                    className,
                    docked && 'docked-top')
            }
            {...otherProps}
        >
            {navButtons}
            {iconCls && <span className={`uiv-header-icon ${iconCls}`}></span> }

            {title &&
                <span className={`uiv-panel-header-title ${uppercaseTitle && 'font-uppercase'}`}>
                    <span className="title-text">{title}</span>
                    {counter && <Counter>{counter}</Counter>}
                    {description && <span className="description-text">{description}</span>}
                    {titleExtra && <span className="title-extra">{titleExtra}</span>}
                </span>}

            {children}
        </div>
    );
};

Header.propTypes = {
    /**
     * Where the header is placed o how is it used
     */
    type          : PropTypes.oneOf([ 'default', 'main', 'toolbar', 'toolbar-alt', 'panel', 'table', 'illustration' ]),
    /**
     * Navigation buttons and other components. Will render before title
     */
    navButtons    : PropTypes.node,
    /**
     * Panel title
     */
    title         : PropTypes.oneOfType([ PropTypes.node, PropTypes.string ]),
    /**
     * Extra components next to title
     */
    titleExtra    : PropTypes.node,
    /**
     * Description text
     */
    description   : PropTypes.oneOfType([ PropTypes.node, PropTypes.string ]),
    /**
     * Counter next to title for list and grid headers
     */
    counter       : PropTypes.number,
    /**
     * Transform title text to uppercase
     */
    uppercaseTitle: PropTypes.bool,
    /**
     * Icon next to the title
     */
    iconCls       : PropTypes.string,
    /**
    * Fixed header at the top of the parent container
    */
    docked        : PropTypes.bool,
    /**
    * Less vertical padding for compact headers
    */
    compact       : PropTypes.bool,
    /**
    * Components or html inside the header
    */
    children      : PropTypes.node,
    /**
     * @ignore
     */
    className     : PropTypes.string,
};

Header.defaultProps = {
    type          : 'default',
    title         : null,
    iconCls       : null,
    uppercaseTitle: false,
    navButtons    : null,
    docked        : true,
    compact       : false,
};

export default Header;
