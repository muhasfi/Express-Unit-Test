import { ProductService } from "../src/product-service";
import { getAllProducts, getProductById } from "../src/database";

jest.mock("../src/database.js")

test('mock modules getProductByid', () => {
    getProductById.mockImplementation((id) => {
        return {
            id: id,
            name: "product mock"
        }
    })

    const product = ProductService.findById(1)

     expect(product).toEqual({
        id:1,
        name: "product mock"
     })
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

