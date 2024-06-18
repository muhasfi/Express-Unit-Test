import {sumAll} from "../src/sum.js"

describe("when call sumAll()",()=>{
    it('should get 30 whit parameter 10,10,10', () => {
         expect(sumAll([10,10,10])).toBe(30)
    });
    it('should get 40 whit parameter 10,10,10,10', () => {
         expect(sumAll([10,10,10,10])).toBe(40)
    });
})