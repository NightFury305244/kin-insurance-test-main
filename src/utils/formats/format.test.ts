import { formatName, luhnCheck, makeFormText } from "./format";

/**
 * This is unit test for format functions 
 */

test('luhn algorithm test', () => {
    expect(luhnCheck("378282246310005")).toBeTruthy();
    expect(luhnCheck("371449635398431")).toBeTruthy();
    expect(luhnCheck("378734493671000")).toBeTruthy();
    expect(luhnCheck("5610591081018250")).toBeTruthy();
    expect(luhnCheck("30569309025904")).toBeTruthy();
    expect(luhnCheck("305693090259")).toBeFalsy();
    expect(luhnCheck("305693090259045")).toBeFalsy();
});

test('format name test', () => {
    expect(formatName("john", "smith")).toMatch(/john smith/);
    expect(formatName("", "")).toMatch(/YOUR NAME/);
    expect(formatName("", "")).not.toMatch(/john smith/);
});

test('make Form Text test', () => {
    expect(makeFormText("3782 8", "XXXX XXXX XXXX XXXX")).toMatch(/3782 8XXX XXXX XXXX/);
    expect(makeFormText("3714", "XXXX XXXX XXXX XXXX")).toMatch(/3714 XXXX XXXX XXXX/);
    expect(makeFormText("3787 3449 36", "XXXX XXXX XXXX XXXX")).toMatch(/3787 3449 36XX XXXX/);
    expect(makeFormText("3787 3449 36", "XXXX XXXX XXXX XXXX")).not.toBe(/3787 3449 36/);
    expect(makeFormText("3787 3449 36", "XXXX XXXX XXXX XXXX")).not.toBe(/XXXX XXXX XXXX XXXX/);
});
