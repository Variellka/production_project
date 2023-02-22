import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Button Tests', () => {
    test('Test render', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('Test error themeButton', () => {
        render(<Button theme={ThemeButton.PAGE_ERROR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('page-error');
        screen.debug();
    });
});
