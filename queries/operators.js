import jsonServer from '../api/jsonServer.js';
import { ENDPOINTS, FIELDS } from '../constants/url.js';

// Greater than or equal
const getProductsByPriceGte = async (price) => {
    const response = await jsonServer.get(`${ENDPOINTS.PRODUCTS}?${FIELDS.PRICE}_gte=${price}`);
    return response.data;
};

// Greater than
const getProductsByPriceGt = async (price) => {
    const response = await jsonServer.get(`${ENDPOINTS.PRODUCTS}?${FIELDS.PRICE}_gt=${price}`);
    return response.data;
};

// Less than or equal
const getProductsByPriceLte = async (price) => {
    const response = await jsonServer.get(`${ENDPOINTS.PRODUCTS}?${FIELDS.PRICE}_lte=${price}`);
    return response.data;
};

// Less than
const getProductsByPriceLt = async (price) => {
    const response = await jsonServer.get(`${ENDPOINTS.PRODUCTS}?${FIELDS.PRICE}_lt=${price}`);
    return response.data;
};

// Equal
const getProductsByPriceEqual = async (price) => {
    const response = await jsonServer.get(`${ENDPOINTS.PRODUCTS}?${FIELDS.PRICE}=${price}`);
    return response.data;
};

// Not equal
const getProductsByPriceNe = async (price) => {
    const response = await jsonServer.get(`${ENDPOINTS.PRODUCTS}?${FIELDS.PRICE}_ne=${price}`);
    return response.data;
};

export {
    getProductsByPriceGte,
    getProductsByPriceGt,
    getProductsByPriceLte,
    getProductsByPriceLt,
    getProductsByPriceEqual,
    getProductsByPriceNe
};
