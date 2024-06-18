import { callMe, MyException } from "../src/exception";

test('exception', ()=>{
    expect(() => callMe('hass')).toThrow()
    expect(() => callMe('hass')).toThrow(MyException)
    expect(() => callMe('hass')).toThrow("ahahhaha")
})
  
test('exception not happen', () => {
    expect(callMe('muh')).toBe("ok")
})




