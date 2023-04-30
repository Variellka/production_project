import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/config/tests/componentRender/componentRender';
import SideBar from './SideBar';

describe('SideBar tests', () => {
    test('Test render', () => {
        componentRender(<SideBar />);
        expect(screen.getByText('<')).toBeInTheDocument();
    });
    test('Test render', () => {
        componentRender(<SideBar />);
        expect(screen.getByTestId('sideBar-wrapper')).toBeInTheDocument();
        fireEvent.click(screen.getByTestId('sideBar-toggle'));
        expect(screen.getByTestId('sideBar-wrapper')).toHaveClass('collapsed');
        screen.debug();
    });
});
