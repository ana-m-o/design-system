// Core
import React, { useState, useEffect } from 'react';
import { Progress, Tooltip } from 'antd';
import moment from 'moment';
import Header from '../Header';
import StatusIndicator from '../StatusIndicator';
import Tag from '../Tag';
import Divider from '../Divider';
import { statusMap } from './consts';

// Utils
import PropTypes from 'prop-types';

/**
 * OperationStage component from uiverse-components
 *      adds status information for everyone of the stages
 *      and real time update functionality for all started-but-not-yet-ended stage
 */

const OperationStage = ({
    stage,
    extra,
    status,
    start_time,
    end_time,
    percent,
    showNumbers,
    index,
}) => {
    const [ time, setTime ] = useState('');
    const [ ticker, setTicker ] = useState(null);

    useEffect(() => {
        if (status === 'in progress' && ticker === null) {
            // we use start_time and end_time to calculate every second
            const interval = setInterval(() => {
                if (start_time) {
                    const duration = moment.duration((end_time ? moment(end_time, 'YYYY/MM/DD HH:mm:ss') : moment()).diff(moment(start_time, 'YYYY/MM/DD HH:mm:ss')));
                    setTime((([ d, h, m, s ]) => `${d}d ${h}h ${m}\' ${s}\"`)([ 'days', 'hours', 'minutes', 'seconds' ].map(lapse => String(duration.get(lapse)).padStart(2, '0'))));
                }
            }, 1000);

            setTicker(interval);
        } else {
            clearInterval(ticker);
            setTicker(null);
        }
    }, [status]);

    return <Header title={stage} docked={false}>
        { showNumbers && <Tag shape="circle" color="gray-blue" className="timeline-item" bold>{index}</Tag> }

        { extra && extra }

        <Divider />

        {status == 'warning' && <span className="icon-warning-standard-solid color-orange"></span>}

        {time ? <Tooltip title="Average completion time for this stage"><span className="time">{time}</span></Tooltip> : <span className="time empty">·</span> }


        {/* Completed */}
        { status === 'completed' && <StatusIndicator
            status={statusMap[status].color}
            iconCls={statusMap[status].icon}
            text={status}
        /> }

        {/* In progress */}
        { status === 'in progress' && <Progress
            percent={percent}
            size="small"
            showInfo={false}
            className={status == 'warning' ? 'warning' : ''}
        /> }
        { status === 'in progress' && <StatusIndicator
            status={statusMap[status].color}
            iconCls={statusMap[status].icon}
        /> }

        {/* Pending */}
        { status === 'pending' && <Progress
            percent={percent}
            size="small"
            showInfo={false}
        /> }
        { status === 'pending' && <StatusIndicator
            status={statusMap[status].color}
            iconCls={statusMap[status].icon}
        /> }

        {/* Cancelled */}
        { status === 'cancelled' && <StatusIndicator
            status={statusMap[status].color}
            iconCls={statusMap[status].icon}
        /> }

        {/* Scheduled */}
        { status === 'scheduled' && <StatusIndicator
            status={statusMap[status].color}
            iconCls={statusMap[status].icon}
        /> }

        {/* Error */}
        { status === 'error' && <StatusIndicator
            status={statusMap[status].color}
            iconCls={statusMap[status].icon}
            text={status}
        /> }

        {/* Deleted */}
        { status === 'deleted' && <StatusIndicator
            status={statusMap[status].color}
            iconCls={statusMap[status].icon}
            text={status}
        /> }
    </Header>;
};

OperationStage.propTypes = {
    /**
     * Stage name
     */
    stage       : PropTypes.string,
    /**
     * Additional information to be displayed on the stage
     */
    extra       : PropTypes.node,
    /**
     * Current status of the stage
     */
    status      : PropTypes.string,
    /**
     * Start time of the stage
     */
    start_time  : PropTypes.string,
    /**
     * Completion date of the stage
     */
    end_time    : PropTypes.string,
    /**
     * Completion percentage of the stage
     */
    percent     : PropTypes.number,
    /**
     * Reason provided when an error has ocurred
     */
    error_reason: PropTypes.string,
    /**
     * Descriiption of the stage
     */
    description : PropTypes.node,
};

OperationStage.defaultProps = {
    stage       : null,
    extra       : null,
    status      : null,
    start_time  : '',
    end_time    : '',
    percent     : 0,
    error_reason: null,
    description : null,
};

export default OperationStage;