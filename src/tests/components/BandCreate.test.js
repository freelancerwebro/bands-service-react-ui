import {render, screen, fireEvent, waitFor} from "@testing-library/react";
import {createBand, getBands} from "../../api";
import App from "../../App";
import expect from "expect";

jest.mock("../../api", () => ({
    getBands: jest.fn(),
    createBand: jest.fn(),
}));
jest.setTimeout(50000);
test("creates a new band", async () => {
    getBands.mockResolvedValue([
        { id: 1, name: "The Beatles", origin: "UK", city: "Liverpool", startYear: 1988 },
    ]);
    createBand.mockResolvedValue({ name: "Pink Floyd", origin: "UK", city: "London", startYear: 1964 });

    render(<App />);

    fireEvent.click(screen.getByText("Create new band"));

    await waitFor(() => expect(screen.getByText("Add Band")).toBeInTheDocument());

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "Pink Floyd" } });
    fireEvent.change(screen.getByLabelText(/origin/i), { target: { value: "UK" } });
    fireEvent.change(screen.getByLabelText(/city/i), { target: { value: "London" } });
    fireEvent.change(screen.getByLabelText(/start year/i), { target: { value: 1964 } });

    fireEvent.click(screen.getByText("Create Band"));

    await waitFor(() => expect(createBand).toHaveBeenCalledTimes(1));
});