import {sum} from "../src/sum"

// async

beforeAll(() => {
    console.info("Before All")
})

afterAll(() => {
    console.info("after All")
})

beforeEach(() => {
    console.info("before each")
})

afterEach(() => {
    console.info("after each")
})


test("first test", () => {
    expect(sum(10, 10)).toBe(20)
    console.info("first test")
})

test("second test", ()=> {
    expect(sum(10, 10)).toBe(20)
    console.info("second test")
})
