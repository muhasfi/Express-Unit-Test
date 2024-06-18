import { sayHelloAsync } from "../src/async";

test.concurrent('concurrent 1', async() => {
    await expect(sayHelloAsync("hass")).resolves.toBe("hello hass")
});
test.concurrent('concurrent 2', async() => {
    await expect(sayHelloAsync("hass")).resolves.toBe("hello hass")
});
test.concurrent('concurrent 3', async() => {
    await expect(sayHelloAsync("hass")).resolves.toBe("hello hass")
});