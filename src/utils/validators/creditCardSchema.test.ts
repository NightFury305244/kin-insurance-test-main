import {creditCardSchema} from './creditCardSchema'

/**
 * This is a Unit Test for Credit Card Validation
 */

describe('creditCardSchema', ()=>{
    it('validates correctly', async () => {
        const invalidData = {
            cardNum: '5610 5910 8101 8250',  
            expiration: "03/42",    
            cvv: "434",          
            firstName: "Zohn",  
            lastName: "Smith",        
            zipCode: "56777"   
          };

        const result = await creditCardSchema.validate(invalidData, { abortEarly: false });
        expect(result).toBeTruthy();
          
    })

    it('validates correctly', async () => {
      const invalidData = {
        cardNum: '5610 5910 8101 8250',  
        expiration: "03/42",    
        cvv: "434",          
        firstName: "Zohn",  
        lastName: "Smith",        
        zipCode: "56777"   
      };
        await creditCardSchema.validate(invalidData);
    })
})