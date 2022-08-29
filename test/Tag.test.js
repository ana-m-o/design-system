import React from 'react';
import Tag from '../src/Tag';
import { render, screen } from '@testing-library/react';

describe('Tag component', () => {
    it('must render its content', () => {
        render(<Tag>tag</Tag>);
        const tag = screen.getByText('tag');
        expect(tag).toBeInTheDocument();
        expect(tag).toHaveClass('dx-tag');
    });
});

