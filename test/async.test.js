import { sayHelloAsync } from "../src/async"

test('test async', async ()=>{
    const result = await sayHelloAsync("hass")
    expect(result).toBe('hello hass')
})
test('test async matcher', async ()=>{
    await expect(sayHelloAsync("hass")).resolves.toBe('hello hass')
    await expect(sayHelloAsync()).rejects.toBe('name is empty')
})