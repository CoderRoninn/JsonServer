JSON Server – What I Learned 🧠🚀
🎯 Goal

I learned how to use JSON Server to simulate a fake backend and test real-world API scenarios while developing frontend and Redux logic.

⚙️ Running Scripts

I added custom commands to the scripts section in package.json so I can easily start the JSON Server using npm commands.

Example usage:
👉 npm run serve-json

🔀 Routes Configuration

I used a routes.json file to rewrite URLs and add an /api/v1 prefix to all endpoints.

This allows me to use both:

localhost:3000/products

localhost:3000/api/v1/products

This helps simulate real REST API versioning.

🔍 Filtering

I learned how to filter data:

By ID → /products/1

By specific field → /products?category=electronics

By multiple parameters → /reviews?rating=4&productId=1

By nested fields → /newdetails?specifications.processor=Intel i5

📊 Sorting

I learned how to sort results using _sort and _order.

Single field sorting

Multiple field sorting

This helps simulate real API sorting behavior.

📄 Pagination

I learned how to limit results and paginate data using:

_limit

_page

This is useful for testing infinite scroll, lazy loading, and paginated lists.

🔢 Operators

I learned how to use comparison operators for filtering numeric values:

greater than

less than

equal

not equal

This allows me to simulate advanced filtering logic.

🔎 String Search

I learned how to search:

Across all fields using q

Inside a specific field using _like

This is useful for search bar functionality.

🔗 Relationships

I learned how to work with related data using:

_embed → fetch child resources together

_expand → fetch parent object with related info

This helps simulate relational API responses.

📝 My Notes

JSON Server is a powerful tool for frontend developers to simulate real backend behavior, test Redux async logic, and build production-like API flows without writing an actual backend.
