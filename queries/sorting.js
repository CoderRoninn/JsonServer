import jsonServer from '../api/jsonServer.js';
import { ENDPOINTS, FIELDS } from '../constants/url.js';

// Single field sorting - ascending
const getProductsSortedByPriceAsc = async () => {
    const response = await jsonServer.get(`${ENDPOINTS.PRODUCTS}?_sort=${FIELDS.PRICE}&_order=asc`);
    return response.data;
};

// Single field sorting - descending
const getProductsSortedByPriceDesc = async () => {
    const response = await jsonServer.get(`${ENDPOINTS.PRODUCTS}?_sort=${FIELDS.PRICE}&_order=desc`);
    return response.data;
};

// Multiple field sorting
const getReviewsSortedByRatingAndProductId = async () => {
    const response = await jsonServer.get(`${ENDPOINTS.REVIEWS}?_sort=${FIELDS.RATING},${FIELDS.PRODUCT_ID}&_order=desc,asc`);
    return response.data;
};

export {
    getProductsSortedByPriceAsc,
    getProductsSortedByPriceDesc,
    getReviewsSortedByRatingAndProductId
};
