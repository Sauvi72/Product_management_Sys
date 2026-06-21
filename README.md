# 🛒 Product Management System

A simple and responsive **Product Management System** built using **Node.js, Express.js, MongoDB, Mongoose, EJS, and CSS**. This project allows users to perform complete **CRUD (Create, Read, Update, Delete)** operations on products along with search and sorting functionality.

---

## 📌 About the Project

Managing product information is one of the most common tasks in any inventory or e-commerce system. This project was developed to understand how CRUD operations work with MongoDB using Node.js and Express.

Users can easily:

- Add a new product
- View all products
- Edit product details
- Delete a product
- Search products by name
- Sort products by price

The project follows a clean MVC-like folder structure, making the code easy to understand and maintain.

---

# 🚀 Features

- ✅ Add New Product
- ✅ Display All Products
- ✅ Update Product Details
- ✅ Delete Product
- ✅ Search Product by Name
- ✅ Sort Products by Price (Ascending & Descending)
- ✅ Responsive User Interface
- ✅ MongoDB Database Integration
- ✅ Clean and Simple Design

---

# 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS (Embedded JavaScript Templates)
- HTML5
- CSS3

---

# 📂 Project Structure

```
Product-Management-System/
│
├── models/
│   └── Product.js
│
├── public/
│   └── style.css
│
├── views/
│   ├── home.ejs
│   ├── add.ejs
│   └── edit.ejs
│
├── app.js
├── package.json
└── README.md
```

---

# ⚙️ How It Works

### 1️⃣ Home Page

When the application starts, it displays all the products stored in the MongoDB database.

From the home page, users can:

- View all products
- Search products
- Sort products by price
- Edit products
- Delete products
- Navigate to the Add Product page

---

### 2️⃣ Add Product

Users can add a new product by filling in the following details:

- Product Name
- Category
- Company
- Price
- Stock

After submitting the form, the product is saved in MongoDB and displayed on the home page.

---

### 3️⃣ Edit Product

Users can update any product information.

Editable fields include:

- Product Name
- Category
- Company
- Price
- Stock

Once updated, the latest data is stored in the database.

---

### 4️⃣ Delete Product

Users can permanently remove a product from the database with a single click.

---

### 5️⃣ Search Product

The application allows users to search products by product name.

Search is implemented using MongoDB's **Regular Expression (`$regex`)**, making it easy to find matching products.

Example:

```
iphone
```

Returns:

```
iPhone 15
iPhone 16
```

---

### 6️⃣ Sort Products

Products can be sorted based on price.

Available options:

- Price Low → High
- Price High → Low

---

# 🗄️ Database

The project uses **MongoDB** as the database.

Each product contains the following fields:

| Field | Type |
|--------|------|
| Name | String |
| Category | String |
| Company | String |
| Price | Number |
| Stock | Number |

---
# 🎯 Learning Outcomes

This project helped me understand:

- Express.js Routing
- CRUD Operations
- MongoDB Integration
- Mongoose Schema & Model
- EJS Templating
- Form Handling
- Search using MongoDB Regex
- Sorting Data
- Organizing Project Structure
- Building Responsive User Interfaces

---


# 👨‍💻 Author

----------------------** Saurav Kumar **----------------

If you found this project useful, feel free to ⭐ this repository.
