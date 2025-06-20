# 🧪 Week 2 Express.js RESTful API Assignment

This project is a simple RESTful API for managing products, built using **Express.js**.

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js (v18+)
- npm

### 📦 Installation

```bash
npm install

▶️ Running the Server
bash
Copy
Edit
npm start
The server will run on the port specified in your .env file (default is 5000).

🧩 API Endpoints
Base URL
bash
Copy
Edit
http://localhost:5000/api/products
Endpoints
Method	Endpoint	Description
GET	/	Get all products
GET	/:id	Get product by ID
POST	/	Create a product
PUT	/:id	Update a product
DELETE	/:id	Delete a product

🔐 Authentication
Protected routes (POST, PUT, DELETE) require an API key.

Add header to your request:

http
Copy
Edit
x-api-key: your_api_key_here
(Replace your_api_key_here with the value from your .env file)

🧰 Features
Custom middleware:

Logger

Auth (API Key)

Product validation

Global error handler

In-memory product storage (array-based)

Filtering, search, and pagination supported in GET requests

🔍 Filtering, Search & Pagination
You can use query parameters with the GET /api/products endpoint:

Parameter	Description
search	Search by product name (text match)
minPrice	Filter products ≥ this price
maxPrice	Filter products ≤ this price
page	Page number (pagination)
limit	Number of results per page

Example:

pgsql
Copy
Edit
GET /api/products?search=phone&minPrice=200&page=1&limit=5
📄 Example Requests
✅ Create Product
http
Copy
Edit
POST /api/products
x-api-key: your_api_key_here
Content-Type: application/json

{
  "name": "Laptop",
  "price": 999.99
}
🔄 Update Product
http
Copy
Edit
PUT /api/products/123
x-api-key: your_api_key_here
Content-Type: application/json

{
  "name": "Updated Laptop",
  "price": 899.99
}