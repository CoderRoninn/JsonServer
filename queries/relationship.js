import jsonServer from '../api/jsonServer.js';
import { ENDPOINTS, RELATIONSHIPS } from '../constants/url.js';

// Get product with its reviews using _embed
const getProductWithReviews = async (productId) => {
    const response = await jsonServer.get(`${ENDPOINTS.PRODUCTS}/${productId}?_embed=${RELATIONSHIPS.REVIEWS}`);
    return response.data;
};

// Get product with its details using _embed
const getProductWithDetails = async (productId) => {
    const response = await jsonServer.get(`${ENDPOINTS.PRODUCTS}/${productId}?_embed=${RELATIONSHIPS.NEW_DETAILS}`);
    return response.data;
};

// Get review with product information using _expand
const getReviewWithProduct = async (reviewId) => {
    const response = await jsonServer.get(`${ENDPOINTS.REVIEWS}/${reviewId}?_expand=${RELATIONSHIPS.PRODUCT_ID}`);
    return response.data;
};

export {
    getProductWithReviews,
    getProductWithDetails,
    getReviewWithProduct
};
