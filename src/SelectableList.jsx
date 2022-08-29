import React, { useState, useEffect } from 'react';
import { FixedSizeList as List } from 'react-window';

// Components
import EmptyView from './EmptyView';
import { Spin } from 'antd';

// Utils
import classnames from 'classnames';
import PropTypes from 'prop-types';

const ENTER_KEY = 'Enter';

const SelectableList = ({
    childRender: ChildRender,
    onClickHandle,
    selectedItemKeyValue,
    selectedItemKeyName,
    data,
    idle,
    autoScroll,
    emptyViewText,
    itemSize,
    listHeight,
    listWidth,
    autoHeight,
    className,
    overscanCount,
}) => {

    const [ selectedRow, setSelectedRow ] = useState(selectedItemKeyValue);

    const selectedRowHandled = (key) => () => {
        setSelectedRow(key);
        onClickHandle(key);
    };

    const handleKeyDown = (key) => (e) => {
        e.key === ENTER_KEY && selectedRowHandled(key)();
    };

    const isRowSelected = (itemData) => itemData[selectedItemKeyName] === selectedRow;

    useEffect(() => {
        setSelectedRow(selectedItemKeyValue);
    }, [selectedItemKeyValue]);

    const getSelectedIndex = () => data?.map((item) => item[selectedItemKeyName]).indexOf(selectedItemKeyValue);


    useEffect(() => {
        if (autoScroll) {
            setTimeout(() => {
                const selectedIndex = getSelectedIndex();
                if (selectedIndex && selectedIndex !== -1) {
                    const contentElement = document.querySelector('.entity-content').getBoundingClientRect();
                    const activeElement = document.querySelector('.active').getBoundingClientRect();
                    if (
                        (Math.round(activeElement.top) < Math.round(contentElement.top) ||
                            Math.round(activeElement.bottom) > Math.round(contentElement.bottom))
                    ) {
                        document.querySelector('.dx-selectable-list')?.scrollTo({
                            top: (Math.abs(Math.round(activeElement.top)) > Math.round(contentElement.bottom) ?
                                selectedIndex * (itemSize * 3) :
                                selectedIndex * itemSize),
                            left    : 0,
                            behavior: 'smooth',
                        });
                    }
                }
            }, 500);
        }
    }, [ data, selectedItemKeyValue ]);


    const Item = ({ index, style, isScrolling }) => {
        if (isScrolling && !data[index]) {
            return <div className="height-100"><Spin tip="Loading..." /></div>;
        }
        return (
            data[index] ?
                (
                    <div
                        style={{ ...style }}
                        role="button"
                        tabIndex="0"
                        onClick={selectedRowHandled(data[index][selectedItemKeyName])}
                        onKeyDown={handleKeyDown(data[index][selectedItemKeyName])}
                        className={`${isRowSelected(data[index]) ? 'active' : ''} list-item-wrapper`}
                        key={data[index][selectedItemKeyName]}
                    >
                        <div className="list-item">
                            <ChildRender index={index} data={data[index]} dataLength={data.length} />
                        </div>
                    </div>
                ) : null
        );
    };

    return (
        !data?.length ?
            <div className="height-100">
                {idle ? <Spin tip="Loading..." /> : <EmptyView type="empty" text={emptyViewText} />}
            </div>
            :
            <List
                className={classnames('dx-selectable-list', autoHeight && 'auto-height', className)}
                height={listHeight}
                itemCount={data.length}
                itemSize={itemSize}
                useIsScrolling
                width={listWidth}
                overscanCount={overscanCount}
            >
                {Item}
            </List>
    );
};

SelectableList.propTypes = {
    /**
     * Data source array for the list
    */
    data                : PropTypes.array,
    /**
     * This value may be unique or may be a key of the data.
    */
    selectedItemKeyValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    /**
     * Will indicate the unique key of the data.
    */
    selectedItemKeyName: PropTypes.string,
    /**
     * Mandatory. Height of the list item.
    */
    itemSize           : PropTypes.number,
    /**
     * Render of the list item content
    */
    childRender        : PropTypes.elementType,
    /**
     * Set the handler to handle click event
    */
    onClickHandle      : PropTypes.func,
    /**
     * Text to show when there is no items in the list
    */
    emptyViewText      : PropTypes.string,
    /**
     * Set to false to set a fixed height
    */
    autoHeight         : PropTypes.bool,
    /**
     * Set a fixed height for the list, needs to set autoHeight -> flase
    */
    listHeight         : PropTypes.number,
    /**
     * Mandatory width for the list
    */
    listWidth          : PropTypes.number,
    /**
     * Additional style classes
     */
    className          : PropTypes.string,
    autoScroll         : PropTypes.bool,
    overscanCount      : PropTypes.number,
};

SelectableList.defaultProps = {
    data                : [], // { id: 1, name: 'Custom Data 1' }
    selectedItemKeyValue: 1,
    selectedItemKeyName : 'id',
    ChildRender         : () => { },
    onClickHandle       : () => { },
    emptyViewText       : 'no data',
    listHeight          : 400,
    autoHeight          : true,
    listWidth           : 200,
    autoScroll          : true,
    overscanCount       : 1,
};


export default SelectableList;