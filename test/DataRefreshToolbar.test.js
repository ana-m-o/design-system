// Core
import React from 'react';
// Testing Library
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

// Components
import DataRefreshToolbar from '../src/DataRefreshToolbar';

beforeEach(() => {
    jest.useFakeTimers();
});

afterEach(() => {
    jest.useRealTimers();
});


describe('Data Refresh Toolbar component', () => {

    it('is running and all its content its on', async () => {
        const handleRefresh = jest.fn();
        const onRefreshed = jest.fn();
        const onPauseBtnClick = jest.fn();
        const { rerender } = render(
            <DataRefreshToolbar
                pausable={true}
                onPauseBtnClick={onPauseBtnClick}
                onRefreshBtnClick={handleRefresh}
                onRefreshed={onRefreshed}
                timeToRefresh={20000}
                showRefreshLabel={true}
                showCountdown={true}
                showDataReceivedLabel={true}
            />);
        // showRefreshLabel true / showCountdown true
        await waitFor(() => {
            expect(screen.getByText(/Refresh/i)).toBeInTheDocument();
            expect(screen.getByText(/19 secs./i)).toBeInTheDocument();
        });
        // showDataReceivedLabel true
        expect(screen.getByText(/Data Obtained/i)).toBeInTheDocument();
        expect(screen.getByText(/01 secs. Ago/i)).toBeInTheDocument();
        // time Interval is working
        act(() => {
            jest.advanceTimersByTime(2000);
        });
        expect(screen.getByText(/17 secs./i)).toBeInTheDocument();
        expect(screen.getByText(/03 secs. Ago/i)).toBeInTheDocument();
        // buttons test
        const buttons = screen.getAllByRole('button');
        // refresh click
        const refreshButton = buttons[1];
        act(() => {
            fireEvent.click(refreshButton);
            jest.advanceTimersByTime(500);
        });
        expect(handleRefresh).toHaveBeenCalledTimes(1);
        // pause click
        const pauseButton = buttons[0];
        act(() => {
            fireEvent.click(pauseButton);
        });
        expect(onPauseBtnClick).toHaveBeenCalledTimes(1);
        expect(screen.queryByText(/16 secs./i)).not.toBeInTheDocument();
        expect(screen.queryByText(/04 secs. Ago/i)).not.toBeInTheDocument();
        act(() => {
            fireEvent.click(pauseButton);
        });
        await waitFor(() => expect(handleRefresh).toHaveBeenCalledTimes(2));
        // time looping
        act(() => {
            jest.advanceTimersByTime(21000);
        });
        expect(handleRefresh).toHaveBeenCalledTimes(2);
        expect(onRefreshed).toHaveBeenCalledTimes(1);

        rerender(
            <DataRefreshToolbar
                pausable={true}
                onPauseBtnClick={onPauseBtnClick}
                onRefreshBtnClick={handleRefresh}
                onRefreshed={onRefreshed}
                showRefreshLabel={true}
                showCountdown={true}
                showDataReceivedLabel={true}
                timeToRefresh={0}
            />);
        expect(await screen.findAllByText(/00 secs./i)).toHaveLength(2);

        rerender(
            <DataRefreshToolbar
                pausable={true}
                onPauseBtnClick={onPauseBtnClick}
                onRefreshBtnClick={handleRefresh}
                onRefreshed={onRefreshed}
                showRefreshLabel={true}
                showCountdown={true}
                showDataReceivedLabel={true}
                timeToRefresh={20000}
            />);
        expect(screen.getByText(/20 secs./i)).toBeInTheDocument();
    });

    it('must render all its content off', async () => {
        const handleRefresh = jest.fn();
        render(
            <DataRefreshToolbar
                pausable={false}
                onRefreshBtnClick={handleRefresh}
                timeToRefresh={20000}
                showRefreshLabel={false}
                showCountdown={false}
                showDataReceivedLabel={false}
            />);
        // Only the refresh button must be present
        const buttons = screen.getAllByRole('button');
        expect(buttons.length).toBe(1);
        const refreshButton = buttons[0];
        // refresh mouse over
        act(() => {
            jest.advanceTimersByTime(1000);
        });
        fireEvent.mouseOver(refreshButton);
        expect(
            await screen.findByText(/19 secs./i),
        ).toBeInTheDocument();
        // refresh click
        fireEvent.click(refreshButton);
        act(() => {
            jest.advanceTimersByTime(500);
        });
        expect(handleRefresh).toHaveBeenCalledTimes(1);
    });

});
