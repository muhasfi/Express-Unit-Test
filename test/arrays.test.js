test('array', ()=>{

    const name = ['muhammad', 'hashfi', 'rafid']
    expect(name).toEqual(['muhammad', 'hashfi', 'rafid'])
    expect(name).toContain('hashfi')

})

test('object', ()=>{

    const person =[{name :'hasfi'},{name :'rafid'}]

    expect(person).toContainEqual({name: 'rafid'})

})