import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import ThemeToggle from '../components/ToggleTheme';

describe('ThemeToggle', () => {
    beforeEach(() => {
        localStorage.clear();
        document.documentElement.setAttribute('data-theme', 'light');
    });

    it('toggles the light and dark theme', () => {
        render(<ThemeToggle />);

        const toggleButton = screen.getByRole('button', { name: /toggle dark mode/i });

        expect(document.documentElement.getAttribute('data-theme')).toBe('light');
        expect(toggleButton).toHaveTextContent('Switch to Dark Mode');

        fireEvent.click(toggleButton);

        expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
        expect(toggleButton).toHaveTextContent('Switch to Light Mode');
        expect(localStorage.getItem('theme')).toBe('dark');

        fireEvent.click(toggleButton);

        expect(document.documentElement.getAttribute('data-theme')).toBe('light');
        expect(toggleButton).toHaveTextContent('Switch to Dark Mode');
        expect(localStorage.getItem('theme')).toBe('light');
    });
});
