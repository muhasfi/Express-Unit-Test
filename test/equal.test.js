test("test toBe", ()=>{
    const name = "hass"
    const hello = `hello ${name}`
    
    expect(hello).toBe('hello hass')
})

test('test toEqual', ()=>{
    let person ={id : "hass"}
    Object.assign(person, {name: "Hass"})

    expect(person).toEqual({id: 'hass', name: 'Hass'})
})