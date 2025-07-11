import { apiKit } from "./api"


export const fetchLaptops = () => {
    return apiKit.get('laptop')
}
export const fetchPhone = () => {
    return apiKit.get('phone')
}
export const fetchLaptopAccessories = () => {
    return apiKit.get('laptopAccessory')
}
export const fetchPhoneAccessories = () => {
    return apiKit.get('phoneAccessory')
}
export const fetchProducts = () => {
    return apiKit.get('products')
}
export const fetchProductById = (id) => {
    return apiKit.get(`products/${id}`)
}