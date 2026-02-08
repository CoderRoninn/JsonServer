import jsonServer from '../api/jsonServer.js';
import { ENDPOINTS, FIELDS } from '../constants/url.js';

// by ID
const getProductById = async (id) => {
    const response = await jsonServer.get(`${ENDPOINTS.PRODUCTS}/${id}`);
    return response.data;
};

// by specific parameter
const getProductsByCategory = async (category) => {
    const response = await jsonServer.get(`${ENDPOINTS.PRODUCTS}?${FIELDS.CATEGORY}=${category}`);
    return response.data;
};

const getProductsByPrice = async (price) => {
    const response = await jsonServer.get(`${ENDPOINTS.PRODUCTS}?${FIELDS.PRICE}=${price}`);
    return response.data;
};

// Multiple Parameter
const getReviewsByRatingAndProductId = async (rating, productId) => {
    const response = await jsonServer.get(`${ENDPOINTS.REVIEWS}?${FIELDS.RATING}=${rating}&${FIELDS.PRODUCT_ID}=${productId}`);
    return response.data;
};

// Nested Parameter
const getNewDetailsByProcessor = async (processor) => {
    const response = await jsonServer.get(`${ENDPOINTS.NEW_DETAILS}?${FIELDS.PROCESSOR}=${processor}`);
    return response.data;
};

export {
    getProductById,
    getProductsByCategory,
    getProductsByPrice,
    getReviewsByRatingAndProductId,
    getNewDetailsByProcessor
};
