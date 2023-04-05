import { fireEvent, screen } from '@testing-library/react';
import { renderWithRouter } from 'shared/config/tests/renderWithRouter/renderWithRouter';
import SideBar from './SideBar';

describe('SideBar tests', () => {
    test('Test render', () => {
        renderWithRouter(<SideBar />);
        expect(screen.getByText('<')).toBeInTheDocument();
    });
    test('Test render', () => {
        renderWithRouter(<SideBar />);
        expect(screen.getByTestId('sideBar-wrapper')).toBeInTheDocument();
        fireEvent.click(screen.getByTestId('sideBar-toggle'));
        expect(screen.getByTestId('sideBar-wrapper')).toHaveClass('collapsed');
        screen.debug();
    });
});
