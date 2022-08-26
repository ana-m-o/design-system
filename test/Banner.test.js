import React from 'react';
import Banner from '../src/Banner';
import { render, screen } from '@testing-library/react';

describe('Banner component', () => {
    it('must render its content', () => {
        render(<Banner />);
        const banner = screen.getByRole('alert');
        expect(banner).toBeInTheDocument();
        expect(banner).toHaveClass('ant-alert');
    });
});

