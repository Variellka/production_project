import { fireEvent, render, screen } from '@testing-library/react';
import SideBar from './SideBar';

describe('SideBar tests', () => {
    test('Test render', () => {
        render(<SideBar />);
        expect(screen.getByText('>')).toBeInTheDocument();
    });
    test('Test render', () => {
        render(<SideBar />);
        expect(screen.getByTestId('sideBar-wrapper')).toBeInTheDocument();
        fireEvent.click(screen.getByTestId('sideBar-toggle'));
        expect(screen.getByTestId('sideBar-wrapper')).toHaveClass('collapsed');
        screen.debug();
    });
});
