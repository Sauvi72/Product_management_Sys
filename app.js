const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

const Product = require("./models/Product");

const app = express();

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/productDB")
  .then(() => console.log("📦 MongoDB Connected Successfully"))
  .catch((err) => console.log("MongoDB Connection Error: ", err));

// View Engine & Middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"));

// HOME + SEARCH + SORT
app.get("/", async (req, res) => {
  try {
    const search = req.query.search || "";
    const sort = req.query.sort || "";

    let filter = {};
    if (search) {
      filter.name = {
        $regex: search,
        $options: "i",
      };
    }

    let sortOption = {};
    if (sort === "asc") {
      sortOption.price = 1;
    } else if (sort === "desc") {
      sortOption.price = -1;
    }

    const products = await Product.find(filter).sort(sortOption);

    res.render("home", {
      products,
      search,
      sort,
    });
  } catch (err) {
    console.log(err);
    res.send("Something went wrong while fetching products.");
  }
});

// ADD PAGE
app.get("/add", (req, res) => {
  res.render("add");
});

// SAVE PRODUCT
app.post("/add", async (req, res) => {
  try {
    const { name, category, company, price, stock } = req.body;

    const product = new Product({
      name,
      category,
      company,
      price,
      stock,
    });

    await product.save();
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.send("Unable to Add Product. Please check all input fields.");
  }
});

// EDIT PAGE
app.get("/edit/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.redirect("/");
    res.render("edit", { product });
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
});

// UPDATE PRODUCT
app.put("/edit/:id", async (req, res) => {
  try {
    const { name, category, company, price, stock } = req.body;

    await Product.findByIdAndUpdate(
      req.params.id,
      { name, category, company, price, stock },
      { new: true, runValidators: true }
    );
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
});

// DELETE PRODUCT
app.delete("/delete/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
});

// SERVER
app.listen(3000, () => {
  console.log("🚀 Server Running On http://localhost:3000");
});