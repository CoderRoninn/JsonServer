import jsonServer from '../api/jsonServer.js';
import { ENDPOINTS, FIELDS } from '../constants/url.js';

// Simple search - searches in all fields
const searchProducts = async (searchText) => {
    const response = await jsonServer.get(`${ENDPOINTS.PRODUCTS}?q=${searchText}`);
    return response.data;
};

// Search in specific field using _like
const searchProductsByTitle = async (searchText) => {
    const response = await jsonServer.get(`${ENDPOINTS.PRODUCTS}?${FIELDS.TITLE}_like=${searchText}`);
    return response.data;
};

export {
    searchProducts,
    searchProductsByTitle
};
