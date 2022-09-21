import React, { useEffect, useState } from 'react';

import { format } from 'date-fns';

import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Button, Tooltip, Progress } from 'antd';
import Divider from './Divider';
import { useInterval } from './hooks/useInterval';

const DataRefreshToolbar = (props) => {

    const {
        onRefreshed,
        onRefreshBtnClick,
        onPauseBtnClick,
        pausable,
        showCountdown,
        showDataReceivedLabel,
        showRefreshLabel,
        showProgressBar,
        showDataRefreshTooltipInfo,
        timeToRefresh,
        className,
        ...otherProps
    } = props;

    const [ counterState, setCounterState ] = useState({
        lastUpdate: 0,
        nextUpdate: 0,
        refreshing: false,
    },
    );

    const [ paused, setPaused ] = useState(false);
    const [ lastUpdateDate, setLastUpdateDate ] = useState();

    useEffect(() => {
        const initialCounterState = {
            lastUpdate: 0,
            nextUpdate: timeToRefresh / 1000,
            refreshing: false,
        };
        setCounterState(initialCounterState);
    }, [timeToRefresh]);

    useInterval(() => {
        const refreshing = counterState.nextUpdate < 1;
        const counterStateAux = {
            lastUpdate: ++counterState.lastUpdate,
            nextUpdate: !refreshing ? --counterState.nextUpdate : 0,
            refreshing,
        };
        setCounterState(counterStateAux);
    }, 1000);

    useEffect(() => {
        if (counterState.refreshing) {
            onRefreshed && onRefreshed();
            setLastUpdateDate(Date.now());
        }
    }, [counterState.refreshing]);

    const formatTime = (time) => {
        const min = Math.floor(time / 60);
        const sec = time - min * 60;
        return min > 0 ? `${min}:${sec < 10 ? '0' : ''}${sec}` : `${sec < 10 ? '0' : ''}${sec} secs.`;
    };

    const formatDate = (unformattedDate) => {
        return format(new Date(unformattedDate), 'yyyy-MM-dd HH:mm:ss');
    };

    const getPercent = (time) => {
        const min = Math.floor(time / 60);
        const sec = time - min * 60;

        return sec * 100 / (timeToRefresh / 1000);
    };

    const refresh = () => {
        onRefreshBtnClick && onRefreshBtnClick();
    };

    const pause = () => {
        onPauseBtnClick && onPauseBtnClick();
    };

    const refreshBtnHandler = () => {
        refresh();
        // Si está pausado, sólo ejecuta la acción del botón, no reinicia
        if (paused) {
            setLastUpdateDate(Date.now());
        }
    };

    const pauseBtnHandler = () => {
        if (paused) {
            // resume
            refreshBtnHandler();
        } else {
            // pause
            setLastUpdateDate(Date.now());
            pause();
        }
        setPaused(!paused);
    };

    return (
        <div
            {...otherProps}
            className={classnames('dx-data-refresh', className)}
        >
            { showDataReceivedLabel &&
                <div className="hbox align-center gap-sm dx-data-refresh__label">
                    <div className="font-weight-light">Data Obtained</div>
                    { paused ?
                        <div>{formatDate(lastUpdateDate)}</div>
                        :
                        <div>{formatTime(counterState.lastUpdate)} Ago</div>}
                </div>}

            { pausable &&
                <Button
                    size="small"
                    icon={<span className="icon-pause-solid" />}
                    type={paused ? 'active' : null}
                    onClick={pauseBtnHandler}
                    shape="square"
                />}

            {/* Divider is only necessary if there is label or pause button */}
            { showDataReceivedLabel || pausable ? <Divider type="line" /> : null }

            {/* Use tooltip for hidden labels*/}
            <Tooltip title={
                <div >
                    Click to refresh now
                    {!paused ? [
                        !showDataReceivedLabel &&
                            <div key="last-update">{formatTime(counterState.lastUpdate)} since last update</div>,

                        ((!showCountdown || !showRefreshLabel) && showDataRefreshTooltipInfo) &&
                            <div key="next-update">Data will be refreshed in {formatTime(counterState.nextUpdate)}</div>,
                    ]
                        :
                        !showDataReceivedLabel &&
                            <div>Last update: {formatDate(lastUpdateDate)}</div>}
                </div>
            }
            >
                <Button
                    size="small"
                    icon={<span className="icon-refresh-line" />}
                    onClick={refreshBtnHandler}
                    shape="square"
                >

                    { showRefreshLabel &&
                    <span className="inline-hbox align-center gap-xs">
                        Refresh
                        { !paused && showCountdown ?
                            <span className="dx-data-refresh__countdown">[{formatTime(counterState.nextUpdate)}]</span>
                            : null}
                    </span>}

                    { showProgressBar && !paused &&
                    <Progress
                        className="dx-data-refresh__progress-bar"
                        type="dashboard"
                        percent={getPercent(counterState.lastUpdate)}
                        gapDegree={70}
                        width={19}
                        showInfo={false}
                        strokeColor="#49A5E6"
                        trailColor="#e9e9e9"
                        strokeWidth={16}
                    />}
                </Button>
            </Tooltip>
        </div>
    );
};

DataRefreshToolbar.propTypes = {
    /**
     * Time interval in miliseconds between refreshes (onRefresh func. execution)
     */
    timeToRefresh             : PropTypes.number.isRequired,
    /**
     * Fuction launched when refresh button is pressed
     */
    onRefreshBtnClick         : PropTypes.func.isRequired,
    /**
     * Fuction launched when pause button is pressed, typically an unsubscription handler
     */
    onPauseBtnClick           : PropTypes.func,
    /**
     * Fuction launched when countdown (timeToRefresh) gets to 0
     */
    onRefreshed               : PropTypes.func,
    /**
     * Show pause button
     */
    pausable                  : PropTypes.bool,
    /**
     * Show countdown inside 'Refesh' button. If false, data will be display in the refresh button tooltip.
     */
    showCountdown             : PropTypes.bool,
    /**
     * Show time since last refresh. If false, data will be display in the refresh button tooltip
     */
    showDataReceivedLabel     : PropTypes.bool,
    /**
     * Show 'Refresh' text inside refresh button
     */
    showRefreshLabel          : PropTypes.bool,
    /**
     * Show circular progress bar inside the refresh icon.
     */
    showProgressBar           : PropTypes.bool,
    /**
     * Show data refresh info in the tooltip. Useful to hide time left when no auto refresh is configured.
     */
    showDataRefreshTooltipInfo: PropTypes.bool,
    /**
     * @ignore
     */
    className                 : PropTypes.string,
};

DataRefreshToolbar.defaultProps = {
    timeToRefresh             : 10000,
    pausable                  : true,
    showCountdown             : true,
    showDataReceivedLabel     : true,
    showRefreshLabel          : true,
    showProgressBar           : false,
    showDataRefreshTooltipInfo: true,
};

export default DataRefreshToolbar;
