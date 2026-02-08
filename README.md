# JSON Server 🚀

## Step 1: Running Scripts ⚙️

We added key commands to the scripts section in package.json. We can run commands using these keys.

Example: Use npm run serve-json to start the JSON Server using the serve-json key.

**Routes Configuration:**
The routes.json file is used for URL rewriting. It adds /api/v1 prefix to all endpoints.

**How it works:**
- /api/v1* pattern matches any URL starting with /api/v1
- $1 replaces the matched part with everything after /api/v1
- Example: /api/v1/products → /products

**Result:**
- Old endpoint: localhost:3000/products (still works)
- New endpoint: localhost:3000/api/v1/products (redirects to /products)

## Step 2: Filtering 🔍

**by ID:**
Example: localhost:3000/products/1

**by specific parameter:**
Example: localhost:3000/products?category=electronics

Example: localhost:3000/products?price=4000

**Multiple Parameter:**
Example: localhost:3000/reviews?rating=4&productId=1

**Nested Parameter:**
Example: localhost:3000/newdetails?specifications.processor=Intel i5

## Step 3: Sorting 📊

To sort data, use _sort and _order parameters:

Example: localhost:3000/products?_sort=price&_order=asc (single field sorting)

Example: localhost:3000/products?_sort=price&_order=desc (single field sorting)

Example: localhost:3000/reviews?_sort=rating,productId&_order=desc,asc (multiple field sorting)

## Step 4: Pagination 📄

To limit the number of results, use _limit parameter:

Example: localhost:3000/products?_limit=2

To get a specific page, use _page parameter:

Example: localhost:3000/products?_limit=2&_page=4

Note: Without _sort, results are returned in default order (usually by ID ascending). To control order, combine with _sort:

Example: localhost:3000/products?_limit=2&_sort=price&_order=asc

## Step 5: Operators 🔢

To use comparison operators, add operator suffix to field name:

Example: localhost:3000/products?price_gte=4000 (greater than or equal - returns products with price >= 4000)

Example: localhost:3000/products?price_gt=4000 (greater than - returns products with price > 4000)

Example: localhost:3000/products?price_lte=5000 (less than or equal - returns products with price <= 5000)

Example: localhost:3000/products?price_lt=5000 (less than - returns products with price < 5000)

Example: localhost:3000/products?price=4000 (equal - returns products with price = 4000)

Example: localhost:3000/products?price_ne=4000 (not equal - returns products with price != 4000)

## Step 6: String Search 🔎

To search across all fields, use q parameter:

Example: localhost:3000/products?q=electronics (simple search - searches in all fields)

To search in a specific field, use _like operator:

Example: localhost:3000/products?title_like=Product (searches in title field)

Note: q parameter will give all results that match in any field

## Step 7: Relationship 🔗

To get associated details, use _embed parameter:

Example: localhost:3000/products/1?_embed=reviews (get product with its reviews)

Example: localhost:3000/products/1?_embed=newdetails (get product with its details)

To expand related data, use _expand parameter:

Example: localhost:3000/reviews/1?_expand=productId (get review with product information)
