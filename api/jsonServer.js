/**
 * HTTP client for JSON Server API.
 * Base URL: http://localhost:3000
 */
import axios from 'axios';

const TIMEOUT_MS = 15000; // 15 seconds

export default axios.create({
    baseURL: 'http://localhost:3000',
    timeout: TIMEOUT_MS
});

