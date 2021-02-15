import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
    render( < App / > );
});


test('renders first name', () => {
    const { getByText } = render( < App / > );
    const firstName = getByText(/First Name/i);
    expect(firstName).toBeInTheDocument();
});

test('renders last name', () => {
    const { getByText } = render( < App / > );
    const lastName = getByText(/Last Name/i);
    expect(lastName).toBeInTheDocument();
});