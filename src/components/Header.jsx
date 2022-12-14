// Core
import React from 'react';

// Utils
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Counter from './Counter';

/**
 * Header component from design-system.
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
                classnames(`dx-header dx-header--${type}`,
                    compact && 'dx-header--compact',
                    className,
                    docked && 'docked-top')
            }
            {...otherProps}
        >
            {navButtons}
            {iconCls && <span className={`dx-header__icon ${iconCls}`}></span> }

            {title &&
                <span className={`dx-header__panel-title ${uppercaseTitle && 'font-uppercase'}`}>
                    <span className="panel-title__title">{title}</span>
                    {counter && <Counter>{counter}</Counter>}
                    {description && <span className="panel-title__description">{description}</span>}
                    {titleExtra && <span className="panel-title__extra">{titleExtra}</span>}
                </span>}

            {children}
        </div>
    );
};

Header.propTypes = {
    /**
     * Where the header is placed o how is it used
     */
    type          : PropTypes.oneOf([ 'default', 'main', 'toolbar', 'panel', 'illustration' ]),
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
