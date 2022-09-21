import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Button, Typography } from 'antd';
import { parseInt } from 'lodash';

/**
 * Item component from design-system
 *
 * TO-DO:
 * - toast on copy
 */
class Item extends Component {

    /* Copiar la URL al clipboard */
    copyUrlToClipboard(url) {
        const el = document.createElement('textarea');
        el.value = url;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        const selected =
      document.getSelection().rangeCount > 0
          ? document.getSelection().getRangeAt(0)
          : false;
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        // Foco en el elemento seleccionado
        if (selected) {
            document.getSelection().removeAllRanges();
            document.getSelection().addRange(selected);
        }
    }

    /* Para copiar el clipboard a traves del teclado, pulsando ENTER */
    keyHandler(e, link) {
        switch (e.key) {
        case 'Enter': {
            this.copyUrlToClipboard(link);
            break;
        }
        }
    }

    getIconStyles(shape, color, bgColor) {
        let styles = {};

        if (shape === 'circle') {
            styles = {
                backgroundColor: bgColor || `${color}20`,
                color          : color || '#555555',
            };
        } else if (shape === 'hex') {
            const backgroundColor = bgColor || '#999999';
            const lightAmount = 25;

            // Lighten background color for small gradient
            const lightBgColor = '#' + backgroundColor.replace(/^#/, '').replace(/../g, backgroundColor => ('0' + Math.min(255, Math.max(0, parseInt(backgroundColor, 16) + lightAmount)).toString(16)).substr(-2));

            // svg image
            const bgImage = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3ClinearGradient id='A' gradientUnits='userSpaceOnUse' x1='85.356' y1='84.406' x2='16.544' y2='15.594'%3E%3Cstop offset='0' stop-color='${backgroundColor ? lightBgColor.replace('#', '%23') : '%23f0f0f0'}'/%3E%3Cstop offset='1' stop-color='${bgColor ? bgColor.replace('#', '%23') : '%23f0f0f0'}'/%3E%3C/linearGradient%3E%3Cpath d='M10.8 21.7c-2.5 1.4-4.5 4.9-4.5 7.7v41.2c0 2.8 2 6.3 4.5 7.7l35.7 20.6c2.5 1.4 6.5 1.4 8.9 0l35.7-20.6c2.5-1.4 4.5-4.9 4.5-7.7V29.4c0-2.8-2-6.3-4.5-7.7L55.5 1.1C53-.3 49-.3 46.6 1.1L10.8 21.7z' fill='url(%23A)'/%3E%3C/svg%3E`;

            styles = {
                backgroundImage: `url("${bgImage}")`,
                backgroundColor: 'transparent',
                color          : color || '#555555',
                textShadow     : 'none',
            };
        } else { // default
            styles = {
                color: color || '#ffffff',
            };
        }

        return styles;
    }

    render() {
        const {
            title,
            pretitle,
            description,
            iconComponent,
            iconBadge,
            iconCls,
            iconSize,
            iconShape,
            iconColor,
            iconBackgroundColor,
            titleChildren,
            titleCls,
            copy,
            size,
            className,
            descriptionEllipsis,
        } = this.props;

        const iconStyles = this.getIconStyles(iconShape, iconColor, iconBackgroundColor);

        const { Text, Paragraph } = Typography;

        return (
            <div
                className={classnames(
                    'dx-item',
                    className,
                    size && `dx-item--${size}`)}
                onClick={this.props.onItemClick}
            >

                <div
                    className="item-icon-wrapper"
                >
                    {
                        (iconComponent !== null) ? (
                            iconComponent
                        ) : (
                            <div
                                className={classnames(
                                    'dx-item__icon',
                                    `dx-item__icon--${iconSize}`,
                                    iconCls,
                                    iconShape && `dx-item__icon--${iconShape}`)}
                                style={iconStyles}
                            />
                        )

                    }
                    { iconBadge ?
                        <span className="dx-item__badge">{iconBadge}</span> :
                        null }
                </div>
                <div
                    className={classnames(
                        'dx-item__body',
                        { 'has-pretitle': pretitle },
                    )}
                >

                    {pretitle && <div className="dx-item__pretitle">{pretitle}</div>}

                    <div
                        className="dx-item__title"
                    >
                        <span className={`dx-item__name ${titleCls && titleCls}`}>
                            <Text ellipsis={{ tooltip: title }} >{title}</Text>
                        </span>

                        {titleChildren && titleChildren}

                        {copy &&
                        <Button
                            size="small"
                            icon={<span className="icon-clipboard-line" />}
                            tooltip="Copy this"
                            onKeyPress={(e) => this.keyHandler(e, copy)}
                            onClick={(() => this.copyUrlToClipboard(copy))}
                        />}
                    </div>

                    <div className="dx-item__description">
                        <Paragraph ellipsis={descriptionEllipsis ? { rows: 1, expandable: false, tooltip: description } : false} >{description}</Paragraph>
                    </div>
                </div>
            </div>
        );
    }
}

Item.propTypes = {
    /**
     * Size of the component. Small and x-small are better for grids.
     */
    size               : PropTypes.oneOf([ 'large', 'medium', 'small' ]),
    /**
     * Item icon class
     */
    iconCls            : PropTypes.string,
    /**
     * Item icon size. Use this for visual adjustments
     */
    iconSize           : PropTypes.oneOf([ 'large', 'medium', 'small' ]),
    /**
     * Icon background shape
     */
    iconShape          : PropTypes.oneOf([ 'default-hex', 'circle', 'hex' ]),
    /**
     * Item icon color. Hexadecimal format (#0123456). Works only when iconShape equals circle o hex.
     *
     * It will adjust the background color.
     */
    iconColor          : PropTypes.string,
    /**
     * Item icon background color. Hexadecimal format (#0123456). Works only when iconShape equals circle o hex.
     *
     */
    iconBackgroundColor: PropTypes.string,
    /**
     * Item icon badge for showing aditional information.
     *
     */
    iconBadge          : PropTypes.node,
    /**
     * Item main title. Required
     *
     */
    title              : PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]).isRequired,
    /**
     * Aditional class for item title
     *
     */
    titleCls           : PropTypes.string,
    /**
     * Aditional components or text next to the item title
     *
     */
    titleChildren      : PropTypes.node,
    /**
     * Small line over the title
     *
     */
    pretitle           : PropTypes.oneOfType([ PropTypes.string, PropTypes.object, PropTypes.node ]),
    /**
     * Show ellipsis on description
     *
     */
    descriptionEllipsis: PropTypes.bool,
    /**
     * Description text. It can be text, html or other components
     *
     */
    description        : PropTypes.node,
    /**
     * @ignore
     *
     */
    copy               : PropTypes.string,
    /**
     *
     *
     */
    className          : PropTypes.string, // Clases css que engloban el componente
    /**
     * @ignore
     *
     */
    onItemClick        : PropTypes.func, // Algunos iconos tienen texto
    /**
     * @ignore
     *
     */
    iconComponent      : PropTypes.node,
};

Item.defaultProps = {
    title              : 'Item Title',
    size               : 'large',
    iconShape          : 'default-hex',
    iconSize           : 'big',
    iconComponent      : null,
    descriptionEllipsis: true,
};

export default Item;