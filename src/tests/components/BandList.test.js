import {render, screen, fireEvent, waitFor} from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import BandList from "./../../components/BandList";
import { getBands } from "../../api";
import expect from "expect";

jest.mock("../../api", () => ({
    getBands: jest.fn(),
}));
jest.setTimeout(50000);

test("renders the list of bands", async () => {
    getBands.mockResolvedValue([
        { id: 1, name: "The Beatles", origin: "UK", city: "Liverpool" },
        { id: 2, name: "Queen", origin: "USA", city: "New York" },
    ]);

    render(<BandList bands={await getBands()} onSelect={() => {}} />);

    expect(screen.getByText(/band list/i)).toBeInTheDocument();
    expect(screen.getByText("The Beatles")).toBeInTheDocument()
    expect(screen.getByText("Queen")).toBeInTheDocument()
    expect(screen.getByText("Liverpool")).toBeInTheDocument()
    expect(screen.getByText("New York")).toBeInTheDocument()
});
