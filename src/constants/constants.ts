import { LabelIcon } from "../components/common/LabelIcon";

export const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const DEFAULT_CARD_DATA = [
    {
        name: "cardNum",
        label: LabelIcon("Credit Card Number",true),
        mask: [
            /\d/, /\d/, /\d/, /\d/, " ",
            /\d/, /\d/, /\d/, /\d/, " ",
            /\d/, /\d/, /\d/, /\d/, " ",
            /\d/, /\d/, /\d/, /\d/,],
        placeholder: "XXXX XXXX XXXX XXXX",
        size: 6,
    },
    {
        name: "expiration",
        label: LabelIcon("Expiration Data"),
        mask: [/\d/, /\d/, '/', /\d/, /\d/,],
        placeholder: "XX/XX",
        size: 4,
    },
    {
        name: "cvv",
        label: LabelIcon("CVV",true),
        mask: [/\d/, /\d/, /\d/, /\d/],
        placeholder: "XXX",
        size: 2
    },
    {
        name: "firstName",
        label: LabelIcon("Cardholder's First Name"),
        mask: [
            /\D/, /\D/, /\D/, /\D/,
            /\D/, /\D/, /\D/, /\D/,
            /\D/, /\D/, /\D/, /\D/,
            /\D/, /\D/, /\D/, /\D/,
            /\D/, /\D/, /\D/, /\D/,],
        placeholder: "First name",
        size: 5
    },
    {
        name: "lastName",
        label: LabelIcon("Cardholder's Last Name"),
        mask: [
            /\D/, /\D/, /\D/, /\D/,
            /\D/, /\D/, /\D/, /\D/,
            /\D/, /\D/, /\D/, /\D/,
            /\D/, /\D/, /\D/, /\D/,
            /\D/, /\D/, /\D/, /\D/,],
        placeholder: "Last Name",
        size: 5
    },
    {
        name: "zipCode",
        label: LabelIcon("Billing Zip Code"),
        mask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
        placeholder: "XXXXX",
        size: 2
    },
]