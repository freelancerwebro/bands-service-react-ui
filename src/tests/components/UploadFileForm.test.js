import React from "react";
import {render, screen, fireEvent, waitFor} from "@testing-library/react";
import UploadFileForm from "../../components/UploadFileForm";
import expect from "expect";
import {getBands, uploadFile} from "../../api";
import App from "../../App";

jest.mock("../../api", () => ({
    uploadFile: jest.fn(),
    getBands: jest.fn(),
}));
jest.setTimeout(50000);
test("renders file input", async () => {
    getBands.mockResolvedValue([]);
    uploadFile.mockResolvedValue([]);

    render(<App />);

    fireEvent.click(screen.getByText("Upload CSV"));

    await waitFor(() => {
        expect(screen.getByText(/import bands/i)).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Upload" })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Close" })).toBeInTheDocument();
    })
});

test("triggers file upload on button click", async () => {
    global.alert = jest.fn();
    const mockOnUpload = jest.fn();
    const mockOnClose = jest.fn();

    const file = new File(["test"], "test.csv", {type: "text/csv"});
    render(<UploadFileForm onClose={mockOnClose} onUpload={mockOnUpload}/>);

    const input = screen.getByTestId("file-upload");
    fireEvent.change(input, {target: {files: [file]}});
    fireEvent.click(screen.getByText("Upload"));

    await waitFor(() => { expect(global.alert).toHaveBeenCalledTimes(1) });
});