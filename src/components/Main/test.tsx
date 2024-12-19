import { render, screen } from '@testing-library/react';
import Main from '.';
import React from 'react';

describe('<Main />', () => {
    it('should render the heading', () => {
        render(<Main />);

        expect(
            screen.getByRole('heading', { name: /React Avançado/i })
        ).toBeInTheDocument();
    });
});