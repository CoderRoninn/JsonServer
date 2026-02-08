// This file generates data dynamically using a for loop
// JSON Server can watch this file instead of db.json
// Run: npm run serve-json (with data.js instead of db.json)

const products = [];
const reviews = [];
const newdetails = [];

// Generate products from 1 to 10
for (let i = 1; i <= 10; i++) {
    products.push({
        id: i,
        title: `Product ${i}`,
        category: i % 2 === 0 ? "electronics" : "books",
        price: 1000 + (i * 500),
        description: `This is description about product ${i}`
    });
}

// Generate reviews for products
for (let i = 1; i <= 5; i++) {
    reviews.push({
        id: i,
        rating: 3 + (i % 3),
        comment: `Review ${i} for product id ${Math.ceil(i / 2)}`,
        productId: Math.ceil(i / 2)
    });
}

// Generate newdetails for products
for (let i = 1; i <= 5; i++) {
    newdetails.push({
        id: i,
        productId: i,
        brand: i % 2 === 0 ? "TechCorp" : "BookHouse",
        color: i % 2 === 0 ? "Black" : "White",
        size: i % 2 === 0 ? "Medium" : "A4",
        weight: `${300 + (i * 50)}g`,
        warranty: i % 2 === 0 ? "2 years" : "N/A",
        stock: 20 + (i * 10),
        availability: "in stock",
        specifications: i % 2 === 0 ? {
            processor: "Intel i5",
            memory: "8GB RAM",
            storage: "256GB SSD"
        } : {
            pages: 240 + (i * 20),
            language: "English",
            format: "Paperback"
        },
        features: i % 2 === 0 ? ["Wireless", "Bluetooth"] : ["Illustrated", "Hardcover option"]
    });
}

export default () => ({
    products,
    reviews,
    newdetails
});

