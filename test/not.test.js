test('not', ()=>{

    const name = 'muhammad hashfi rafid'

    expect(name).not.toBe('hass')
    expect(name).not.toEqual('hass')
})

test('not number', ()=>{
    const value = 2+2

    expect(value).not.toBeGreaterThan(6)
})
