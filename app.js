require("dotenv").config();

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT;

mongoose
  .connect(
    `mongodb+srv://yoennis:${process.env.MONGO_DB_PASS}@cluster0.vrhznwn.mongodb.net/stock-app?retryWrites=true&w=majority`
  )
  .then((result) => {
    console.log("MongoDB connection successful");
    app.listen(PORT, () => {
      console.log(`Servidor listening on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error.message || error));

app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   console.log("Request received");

//   res.status(200).sendFile("index.html", { root: __dirname });
// });

const productShema = mongoose.Schema(
  {
    name: { type: String, require: true },
    price: Number,
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productShema);

app.use(express.json());

app.post("/api/v1/products", async (req, res) => {
  console.log("Peticion POST recibida");
  console.log({ body: req.body });

  const newProduct = new Product(req.body);
  await newProduct.save();

  res.status(201).json({ ok: true });
});
