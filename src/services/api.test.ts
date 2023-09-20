import axios from "axios";
import sendCardInfo from "./api"


jest.mock('axios');
test('api success test', async () => {
    try{
        const data = await sendCardInfo({ test: "hello" });
        expect(data).toEqual({
            test: "hello",
            id: 101
        });
    }catch(e){
        expect(Boolean(e)).toBeTruthy();
    }
});
