import {UserRepository} from "../src/user-repository.js";
import {UserService} from "../src/user-service.js";

const repository = new UserRepository();
const service = new UserService(repository);



test('test mock partial class findById', () => {
    const user = {
        id:1,
        name: "hass"
    }

    const findByIdMock = jest.spyOn(repository, "findById")
    findByIdMock.mockReturnValueOnce(user)

     expect(service.findById(1)).toEqual(user)
     expect(findByIdMock).toHaveBeenCalled()
     expect(findByIdMock).toHaveBeenCalledWith(1)
     expect(repository.findById).toHaveBeenCalled()
     expect(repository.findById).toHaveBeenCalledWith(1)
});


test.failing('test mock parsial findAll', () => {
    service.findAll()
});