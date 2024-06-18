import { sayHello } from "../src/sayHello";

test('sayHello success', () => {
    expect(sayHello('hass')).toBe('Hello hass')
});

test.failing('sayHello error',()=>{
    sayHello(null)
})

test('sayHello error matchers', () => {
     expect(()=> sayHello(null)).toThrow()
});