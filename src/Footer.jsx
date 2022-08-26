// Core
import React from 'react';

// Utils
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Panel footer component from uiverse-components.
 */

const Footer = ({
    className,
    children,
    ...otherProps
}) => {

    return (
        <div
            className={
                classnames('uiv-panel-footer',
                    className)
            }
            {...otherProps}
        >
            {children}
        </div>
    );
};

Footer.propTypes = {
    /**
    * Components or html inside the Footer
    */
    children : PropTypes.node,
    /**
     * @ignore
     */
    className: PropTypes.string,
};

Footer.defaultProps = {
};

export default Footer;
