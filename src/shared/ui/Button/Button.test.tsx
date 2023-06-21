import { render, screen } from '@testing-library/react';
import { Btn, ButtonTheme } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('Test render', () => {
        render(<Btn>TEST</Btn>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('Test clear theme', () => {
        render(<Btn theme={ButtonTheme.CLEAR}>TEST</Btn>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
