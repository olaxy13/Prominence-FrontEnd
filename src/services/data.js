import { apiKit } from "./api"


export const fetchLaptops = () => {
    return apiKit.get('laptop')
}
export const fetchLaptopAccessories = () => {
    return apiKit.get('laptopAccessory')
}
export const fetchProducts = () => {
    return apiKit.get('products')
}
export const fetchProductById = (id) => {
    return apiKit.get(`products/${id}`)
}