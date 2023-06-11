const BASE_PRODUCTS_URL_API = "http://localhost:3001/api/orders"

export const getOrders = async () => {
    try {
        const response = await fetch(BASE_PRODUCTS_URL_API);
        const json = await response.json();
        return json;
        
    } catch (error) {
        console.error("Error while fetching orders");
        return Promise.reject("Error while fetching orders")
    }
}