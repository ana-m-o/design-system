import React, { useState, useEffect, useRef } from 'react';

export function useInterval(callback, delay) {
    const savedCallback = useRef(),
        [intervalId, setIntervalId] = useState(0);

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        let id=0;
        if (delay) {
            id = setInterval(tick, delay);
            setIntervalId(id);
            return () => clearInterval(id);
        } else {
            clearInterval(intervalId);
        }
        setIntervalId(id);
    }, [delay]);

    useEffect(() => () => intervalId && clearInterval(intervalId), [])
}
