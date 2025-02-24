require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/post");
const cartRoutes = require("./routes/cartRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials:true }));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error(err));

app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));