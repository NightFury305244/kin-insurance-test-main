import { render, screen } from "@testing-library/react"
import CreditCard from "./pages/CreditCard"
import '@testing-library/jest-dom/extend-expect'; 
import userEvent from "@testing-library/user-event";

test("button diserved", () => {
    render(<CreditCard />)
    screen.getByTestId("cardNum").focus()
    userEvent.type(screen.getByTestId("cardNum"), "5610591081018250")
    userEvent.type(screen.getByTestId("expiration"), "0253",)
    userEvent.type(screen.getByTestId("cvv"), "456",)
    userEvent.type(screen.getByTestId("firstName"), "Harry",)
    userEvent.type(screen.getByTestId("lastName"), "williams",)
    userEvent.type(screen.getByTestId("zipCode"), "45645",)
    expect(screen.getByTestId("cardNum")).toHaveValue('Hello, World!')
    expect(screen.getByTestId('loadingBtn')).not.toBeDisabled()
})