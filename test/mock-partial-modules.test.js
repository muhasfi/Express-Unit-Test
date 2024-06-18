import { ProductService } from "../src/product-service";
import { getAllProducts, getProductById } from "../src/database";

jest.mock("../src/database.js", ()=>{
    const originalModule = jest.requireActual("../src/database.js")

    return {
        __esModule: true,
        ...originalModule,
        getAllProducts: jest.fn()
    }
})

test.failing('mock module getProduct By Id', () => {
    ProductService.findById(1)
});

test('mock modules  getAllProduct ', () => {
    const product = [
        {id:1, name: "product mock"},
        {id:2, name: "product mock"},
    ]

    getAllProducts.mockImplementation(()=>{
        return product
    })

     expect(ProductService.findAll()).toEqual(product)
});