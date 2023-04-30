import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/config/tests/componentRender/componentRender';
import Counter from './Counter';

describe('Counter.test', () => {
    test('Test render', () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });
    test('Test increment', () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        fireEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });
    test('Test decrement', () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        fireEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
