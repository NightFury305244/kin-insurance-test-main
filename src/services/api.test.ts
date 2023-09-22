import sendCardInfo from "./api";

/**
 * This is the unit test for api request 
 */

test('api success test', async () => {
        const data = await sendCardInfo({ test: "hello" });
        expect(data.id).toBeDefined();
        expect(data.id).toBe(101);
});
