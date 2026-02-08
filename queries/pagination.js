import jsonServer from '../api/jsonServer.js';
import { ENDPOINTS, FIELDS } from '../constants/url.js';

// Limit results
const getProductsWithLimit = async (limit) => {
    const response = await jsonServer.get(`${ENDPOINTS.PRODUCTS}?_limit=${limit}`);
    return response.data;
};

// Get specific page
const getProductsByPage = async (limit, page) => {
    const response = await jsonServer.get(`${ENDPOINTS.PRODUCTS}?_limit=${limit}&_page=${page}`);
    return response.data;
};

// Limit with sorting
const getProductsWithLimitAndSort = async (limit, sortField, order) => {
    const response = await jsonServer.get(`${ENDPOINTS.PRODUCTS}?_limit=${limit}&_sort=${sortField}&_order=${order}`);
    return response.data;
};

export {
    getProductsWithLimit,
    getProductsByPage,
    getProductsWithLimitAndSort
};
