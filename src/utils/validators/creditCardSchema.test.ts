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

        let validationErrors = [];
        try {
            await creditCardSchema.validate(invalidData, { abortEarly: false });
        } catch (errors: any) {
            validationErrors = errors.inner.map((error:any) => error.message);
        }

        expect(validationErrors).not.toContain("Card number must be at least 15 characters");
        expect(validationErrors).not.toContain("Invalid CardNumber formated");
        expect(validationErrors).not.toContain("CardNumber is required");
        expect(validationErrors).not.toContain("Expiration is required");
        expect(validationErrors).not.toContain("Invalid Expiration formated");
        expect(validationErrors).not.toContain("CVV required");
        expect(validationErrors).not.toContain("CVV must be at least 3 characters");
        expect(validationErrors).not.toContain("Frist Name is required");
        expect(validationErrors).not.toContain("Last Name is required");
        expect(validationErrors).not.toContain("Zip Code is required");
        expect(validationErrors).not.toContain("Zip Code must be 5 or 9 characters");
          
    })

    it('validates correctly', async () => {
        const invalidData = {
            cardNum: '3714 4963 5398 431',  
            expiration: "03/98",    
            cvv: "2541",          
            firstName: "Zohn",  
            lastName: "Smith",        
            zipCode: "567779963"   
          };

        let validationErrors = [];
        try {
            await creditCardSchema.validate(invalidData, { abortEarly: false });
        } catch (errors: any) {
            validationErrors = errors.inner.map((error:any) => error.message);
        }

        expect(validationErrors).not.toContain("Card number must be at least 15 characters");
        expect(validationErrors).not.toContain("Invalid CardNumber formated");
        expect(validationErrors).not.toContain("CardNumber is required");
        expect(validationErrors).not.toContain("Expiration is required");
        expect(validationErrors).not.toContain("Invalid Expiration formated");
        expect(validationErrors).not.toContain("CVV required");
        expect(validationErrors).not.toContain("CVV must be at least 3 characters");
        expect(validationErrors).not.toContain("Frist Name is required");
        expect(validationErrors).not.toContain("Last Name is required");
        expect(validationErrors).not.toContain("Zip Code is required");
        expect(validationErrors).not.toContain("Zip Code must be 5 or 9 characters");
          
    })
})