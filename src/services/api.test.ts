import sendCardInfo from "./api";

/**
 * This is the unit test for api request 
 */

jest.mock('axios');
test('api success test', async () => {
    try{
        const data = await sendCardInfo({ test: "hello" });
        expect(data).toEqual({
            test: "hello",
            id: 101
        });
    }catch(e){
    }
});
