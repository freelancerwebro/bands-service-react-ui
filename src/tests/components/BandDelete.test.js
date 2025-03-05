import {fireEvent, render, screen, within} from "@testing-library/react";
import BandList from "./../../components/BandList";
import expect from "expect";

test("click delete button and trigger onDelete method", () => {
    const mockOnDelete = jest.fn();
    const bands = [
        { id: 1, name: "The Beatles", origin: "UK", city: "Liverpool" },
        { id: 2, name: "Queen", origin: "UK", city: "London" },
    ];

    const { rerender } = render(<BandList bands={bands} onDelete={mockOnDelete} />);
    const table = screen.getByRole("table");

    const rows = within(table).getAllByRole("row");
    expect(rows).toHaveLength(3); // header + 2 rows

    const deleteButtons = screen.getAllByText("Delete");
    fireEvent.click(deleteButtons[0]);

    expect(mockOnDelete).toHaveBeenCalledTimes(1);

    rerender(<BandList bands={[bands[1]]} onDelete={mockOnDelete} />);

    const updatedRows = within(screen.getByRole("table")).getAllByRole("row");
    expect(updatedRows).toHaveLength(2); // header + 1 row
});
