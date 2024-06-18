beforeAll(() => {console.info("Before All Outer")})
afterAll(() => {console.info("After All Outer")})
afterEach(() => {console.info("After Each Outer")})
beforeEach(() => {console.info("Before Each Outer")})

// test("TestOuter", ()=> console.info("Test Outer")) 

describe("inner", () => {
        
    afterEach(() => {console.info("After Each Inner")})
    beforeEach(() => {console.info("Before Each Inner")})

    // test("inner", () => console.info("Test Inner"))

    describe("nested", () => {
    afterEach(() => {console.info("After Each Inner nested")})
    beforeEach(() => {console.info("Before Each Inner nested")})

    test("inner nested", () => console.info("Test Inner nested"))
    })

})