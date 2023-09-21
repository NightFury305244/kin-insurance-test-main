import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { act } from "react-dom/test-utils";
import CreditCard from "./CreditCard";

/**
 * This is a Unit Test for submit
 */

test("SubmitButton disabled state",async () => {
    render(<CreditCard />)

    await act(async () => {
        fireEvent.input(screen.getByLabelText("Credit Card Number"), { target: { value: '5610 5910 8101 8250' } })
        fireEvent.input(screen.getByLabelText("Expiration Data"),{ target: { value: '02/53' } })
        fireEvent.input(screen.getByLabelText("CVV"),{ target: { value: '456' } })
        fireEvent.input(screen.getByLabelText("Cardholder's First Name"), { target: { value: 'Harry' } })
        fireEvent.input(screen.getByLabelText("Cardholder's Last Name"), { target: { value: 'williams' } })
        fireEvent.input(screen.getByLabelText("Billing Zip Code"), { target: { value: '12345' } })
    })
    expect(screen.getByText('Submit')).not.toBeDisabled();
    await act(async () => {
        fireEvent.click(screen.getByText('Submit'));
    });
    expect(screen.getByText('Submit')).toBeDisabled();
})