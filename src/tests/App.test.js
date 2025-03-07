import { render, screen } from '@testing-library/react';
import App from './../App';

test('render main page elements', () => {
    render(<App />);

    expect(screen.getByText(/Bands Management/i)).toBeInTheDocument();
    expect(screen.getByText(/Band List/i)).toBeInTheDocument();
    expect(screen.getByText(/Create new band/i)).toBeInTheDocument();
    expect(screen.getByText(/No bands available./i)).toBeInTheDocument();
});
