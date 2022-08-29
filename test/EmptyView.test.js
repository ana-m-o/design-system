import React from 'react';
import EmptyView from '../src/EmptyView';
import { render, screen, cleanup } from '@testing-library/react';

describe('EmptyView component', () => {
    it('must render show a default empty text', () => {
        render(<EmptyView uppercase={false} />);
        const emptyView = screen.getByText('No elements found matching your criteria');
        expect(emptyView).toHaveClass('message-text');
        expect(emptyView).toBeInTheDocument();
    });

    it('must show a custom empty text', () => {
        const text = 'empty text';
        render(<EmptyView text={text} uppercase={false} />);
        expect(screen.getByText(text)).toBeInTheDocument();
    });

    it('must have default css classes', () => {
        const text = 'empty text';
        render(<EmptyView text={text} uppercase={false} />);
        const emptyView = screen.getByText(text);
        expect(emptyView).toBeInTheDocument();
        const root = emptyView.closest('.dx-emptyview');
        expect(root).toBeInTheDocument();
        expect(root).toHaveClass('dx-emptyview');
    });

    it('must have large css class when size=large', () => {
        const text = 'empty text';
        render(<EmptyView text={text} size="large" uppercase={false} />);
        const emptyView = screen.getByText(text);
        const root = emptyView.closest('.dx-emptyview');
        expect(root).toBeInTheDocument();
        expect(root).toHaveClass('large');
    });

    it('must have error404 css class when type=error404', () => {
        const text = 'empty text';
        render(<EmptyView text={text} type="error404" uppercase={false} />);
        const emptyView = screen.getByText(text);
        const root = emptyView.closest('.dx-emptyview');
        expect(root).toBeInTheDocument();
        expect(root).toHaveClass('error404');
    });

    it('must have empty css class when type=empty', () => {
        const text = 'empty text';
        render(<EmptyView text={text} type="empty" uppercase={false} />);
        const emptyView = screen.getByText(text);
        const root = emptyView.closest('.dx-emptyview');
        expect(root).toBeInTheDocument();
        expect(root).toHaveClass('empty');
    });

    it('must have empty and medium css class when type=empty and size=medium', () => {
        const text = 'empty text';
        render(<EmptyView text={text} type="empty" size="medium" uppercase={false} />);
        const emptyView = screen.getByText(text);
        const root = emptyView.closest('.dx-emptyview');
        expect(root).toBeInTheDocument();
        expect(root).toHaveClass('empty');
        expect(root).toHaveClass('medium');
    });

    it('must have error css class when type=error', () => {
        const text = 'empty text';
        render(<EmptyView text={text} type="error" uppercase={false} />);
        const emptyView = screen.getByText(text);
        const root = emptyView.closest('.dx-emptyview');
        expect(root).toBeInTheDocument();
        expect(root).toHaveClass('error');
    });

    it('must have filter css class when type=filter', () => {
        const text = 'empty text';
        render(<EmptyView text={text} type="filter" uppercase={false} />);
        const emptyView = screen.getByText(text);
        const root = emptyView.closest('.dx-emptyview');
        expect(root).toBeInTheDocument();
        expect(root).toHaveClass('filter');
    });

    it.skip('must be aligned at center when filter, error or desertmini are true', () => {
        const text = 'empty text';
        render(<EmptyView text={text} type="filter" uppercase={false} />);
        let emptyView = screen.getByText(text);
        let parent = emptyView.closest('.align-center');
        expect(parent).toBeInTheDocument();

        cleanup();

        render(<EmptyView text={text} type="error" uppercase={false} />);
        emptyView = screen.getByText(text);
        parent = emptyView.closest('.align-center');
        expect(parent).toBeInTheDocument();

        cleanup();

        render(<EmptyView text={text} type="empty" uppercase={false} />);
        emptyView = screen.getByText(text);
        parent = emptyView.closest('.align-center');
        expect(parent).toBeInTheDocument();
    });

    it.skip('must be aligned at center when it doesn\'t have property info, error or desertmini as true', () => {
        const text = 'empty text';
        render(<EmptyView text={text} uppercase={false} />);
        const emptyView = screen.getByText(text);
        const parent = emptyView.closest('.align-center');
        expect(parent).not.toBeInTheDocument();
    });

    it('has vertical alignment when it has property layout=vertical and type=error or type=empty', () => {
        const text = 'empty text';
        render(<EmptyView text={text} layout="vertical" type="error" uppercase={false} />);
        let emptyView = screen.getByText(text);
        let parent = emptyView.closest('.vertical');
        expect(parent).toBeInTheDocument();
        expect(parent).not.toHaveClass('horizontal');

        cleanup();

        render(<EmptyView text={text} layout="vertical" type="empty" uppercase={false} />);
        emptyView = screen.getByText(text);
        parent = emptyView.closest('.vertical');
        expect(parent).toBeInTheDocument();
        expect(parent).not.toHaveClass('horizontal');

    });
});

