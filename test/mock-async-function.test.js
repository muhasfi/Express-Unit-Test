import { getBalance } from "../src/async";


test('mock async funtion', async() => {
    const from = jest.fn()
    from.mockResolvedValueOnce(1000)
    

    await  expect(getBalance("hass", from)).resolves.toEqual({
        name: "hass",
        balance: 1000
    })


    expect(from.mock.calls.length).toBe(1)
    await  expect(from.mock.results[0].value).resolves.toBe(1000)
});

test.failing('mock async function rejected', async() => {
    const from = jest.fn()
    from.mockRejectedValueOnce(new Error("p"))

    await getBalance("hass". from)
});


test(',ock async funtion error matchers', async() => {
    const from = jest.fn()
    from.mockRejectedValueOnce("Rejected")

    await  expect(getBalance("hass", from)).rejects.toBe("Rejected")
});