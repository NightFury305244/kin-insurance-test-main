import { formatName, luhnCheck, makeFormText } from "./format";

/**
 * This is unit test for format functions 
 */

test('luhn algorithm test', () => {
    expect(luhnCheck("378282246310005")).toBe(true);
    expect(luhnCheck("371449635398431")).toBe(true);
    expect(luhnCheck("378734493671000")).toBe(true);
    expect(luhnCheck("5610591081018250")).toBe(true);
    expect(luhnCheck("30569309025904")).toBe(true);
});

test('format name test', () => {
    expect(formatName("john", "smith")).toMatch(/john smith/);
    expect(formatName("", "")).toMatch(/YOUR NAME/);
});

test('make Form Text test', () => {
    expect(makeFormText("3782 8", "XXXX XXXX XXXX XXXX")).toMatch(/3782 8XXX XXXX XXXX/);
    expect(makeFormText("3714", "XXXX XXXX XXXX XXXX")).toMatch(/3714 XXXX XXXX XXXX/);
    expect(makeFormText("3787 3449 36", "XXXX XXXX XXXX XXXX")).toMatch(/3787 3449 36XX XXXX/);
});
