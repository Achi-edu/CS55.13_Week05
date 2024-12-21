import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

const mockDevsData = [
    { id: "jon-van-caneghem", name: "Jon Van Caneghem" },
    { id: "roberta-williams", name: "Roberta Williams" },
];

describe('Home', () => {
    it('renders a heading', () => {
        render(<Home devsData={mockDevsData}  />)
        // screen.debug();

        const heading = screen.getByRole('heading', { level: 1 })

        expect(heading).toBeInTheDocument()
    })

    it('renders developer names', () => {
        render(<Home devsData={mockDevsData} />);

        mockDevsData.forEach((dev) => {
            expect(
                screen.getByText((content, element) => content.includes(dev.name))
            ).toBeInTheDocument();
        });
    });
})