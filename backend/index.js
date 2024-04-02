const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(express.json());
app.use(cors()); // Use the cors middleware
const PORT = process.env.PORT || 8000;

mongoose.connect(
  "mongodb+srv://kmahesh18001:maheshdb@dbmahesh.eigv8fl.mongodb.net/emperiaproducts"
);

const productSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  price: Number,
  image: String,
  qnty: Number,
});
const Product = mongoose.model("Product", productSchema);

const seedDatabase = async () => {
  try {
    await Product.deleteMany(); // Clear existing data
    const products = [
      {
        id: 1,
        title: "Uncategorized",
        description: "ARMSX",
        price: 1999.0,
        image:
          "https://emperia1900.com/wp-content/uploads/2023/07/ARMSX_FOP-300x300.jpg",
        qnty: 0,
      },
      {
        id: 2,
        title: "General Care",
        description: "Emperia 1900 Carpet Detergent 5 Litres",
        price: 1999.0,
        image:
          "https://emperia1900.com/wp-content/uploads/2023/04/Carpet-Detergent-01-300x300.jpg",
        qnty: 0,
      },
      {
        id: 3,
        title: "General Care",
        description: "Emperia 1900 Carpet Shampoo 5 Litres",
        price: 1999.0,
        image:
          "https://emperia1900.com/wp-content/uploads/2023/04/Carpet-Shampoo-01-300x300.jpg",
        qnty: 0,
      },
      {
        id: 4,
        title: "Kitchen Care",
        description: "Emperia 1900 K-Pro Descaler 5 Litres",
        price: 1999.0,
        image:
          "https://emperia1900.com/wp-content/uploads/2023/04/Descaler_K-Pro-01-300x300.jpg",
        qnty: 0,
      },
      {
        id: 5,
        title: "Kitchen Care",
        description: "Emperia 1900 K-Pro Dish Wash Liquid (5L)",
        price: 999.0,
        image:
          "https://emperia1900.com/wp-content/uploads/2023/04/Dishwash-Liquid_K-Pro-01-300x300.jpg",
        qnty: 0,
      },
      {
        id: 6,
        title: "Kitchen Care",
        description: "Emperia 1900 K-Pro Heavy - Duty Degreaser 5 Litres",
        price: 999.0,
        image:
          "https://emperia1900.com/wp-content/uploads/2023/04/Heavy-Duty-Decreaser_K-Pro-01-300x300.jpg",
        qnty: 0,
      },
      {
        id: 7,
        title: "Kitchen Care",
        description: "Emperia 1900 K-Pro Machine Dish Wash 5 Litres",
        price: 2999.0,
        image:
          "https://emperia1900.com/wp-content/uploads/2023/04/Machine-Dish-Wash_K-Pro-01-300x300.jpg",
        qnty: 0,
      },
      {
        id: 8,
        title: "Kitchen Care",
        description: "Emperia 1900 K-Pro Machine Rinse 5 Litres",
        price: 3999.0,
        image:
          "https://emperia1900.com/wp-content/uploads/2023/04/Machine-Rinse_K-Pro-01-300x300.jpg",
        qnty: 0,
      },
      {
        id: 9,
        title: "Kitchen Care",
        description: "Emperia 1900 K-Pro Multi-Purpose Cleaner (5L)",
        price: 999.0,
        image:
          "https://emperia1900.com/wp-content/uploads/2023/04/Multi-Purpose-Cleaner_K-Pro-01-300x300.jpg",
        qnty: 0,
      },
      {
        id: 10,
        title: "Kitchen Care",
        description: "Emperia 1900 K-Pro Oven & Grill Cleaner 5 Litres",
        price: 1999.0,
        image:
          "https://emperia1900.com/wp-content/uploads/2023/04/Oven-Grill-Cleaner_K-Pro-01-300x300.jpg",
        qnty: 0,
      },
      {
        id: 11,
        title: "General Care",
        description: "Emperia 1900 SS Shine 5 Litres",
        price: 2999.0,
        image:
          "https://emperia1900.com/wp-content/uploads/2023/04/SS-Shine-01-300x300.jpg",
        qnty: 0,
      },
      {
        id: 12,
        title: "Bathroom Care",
        description: "Emperia 1900 Vol 1 Bathroom Cleaner 5 Litres",
        price: 1499.0,
        image:
          "https://emperia1900.com/wp-content/uploads/2023/04/Bathroom-Cleaner_Vol-1-01-300x300.jpg",
        qnty: 0,
      },
      {
        id: 13,
        title: "Floor & Surface Care",
        description: "Emperia 1900 Vol 2 Hard Surface Cleaner 5 Litres",
        price: 1499.0,
        image:
          "https://emperia1900.com/wp-content/uploads/2023/04/Hard-Surface-Cleaner_Vol-2-01-300x300.jpg",
        qnty: 0,
      },
      {
        id: 14,
        title: "General Care",
        description: "Emperia 1900 Vol 3 Glass Cleaner 5 Litres",
        price: 1999.0,
        image:
          "https://emperia1900.com/wp-content/uploads/2023/04/Glass-Cleaner_Vol-3-01-300x300.jpg",
        qnty: 0,
      },
      {
        id: 15,
        title: "General Care",
        description: "Emperia 1900 Vol 4 Wood Maintainer 5 Litres",
        price: 2999.0,
        image:
          "https://emperia1900.com/wp-content/uploads/2023/04/Wood-Maintainer_Vol-4-01-300x300.jpg",
        qnty: 0,
      },
      {
        id: 16,
        title: "General Care",
        description: "Emperia 1900 Vol 5 Air Freshener 5 Litres",
        price: 1499.0,
        image:
          "https://emperia1900.com/wp-content/uploads/2023/04/Air-Freshner_Yellow-01-300x300.jpg",
        qnty: 0,
      },
      {
        id: 17,
        title: "General Care",
        description: "Emperia 1900 Vol 5 Air Freshener Blossom 5 Litres",
        price: 1499.0,
        image:
          "https://emperia1900.com/wp-content/uploads/2023/04/Air-Freshner_Pink-01-300x300.jpg",
        qnty: 0,
      },
      {
        id: 18,
        title: "Bathroom Care",
        description: "Emperia 1900 Vol 6 Toilet Cleaner 5 Litres",
        price: 999.0,
        image:
          "https://emperia1900.com/wp-content/uploads/2023/04/Toilet-Cleaner_Vol-6-01-300x300.jpg",
        qnty: 0,
      },
      {
        id: 19,
        title: "Floor & Surface Care",
        description: "Emperia 1900 Vol 7 Floor Cleaner 5 Litres",
        price: 999.0,
        image:
          "https://emperia1900.com/wp-content/uploads/2023/04/Floor-Cleaner_Vol-7-01-300x300.jpg",
        qnty: 0,
      },
      {
        id: 20,
        title: "Bathroom Care",
        description: " Emperia 1900 Vol 9 Shine & Descaler 5 Litres",
        price: 1499.0,
        image:
          "https://emperia1900.com/wp-content/uploads/2023/04/Descaler-Shine_Vol-9-01-300x300.jpg",
        qnty: 0,
      },
      {
        id: 21,
        title: "Personal Care",
        description: "Grabbit First Hand Sanitizer 5 Litres",
        price: 999.0,
        image:
          "https://emperia1900.com/wp-content/uploads/2023/04/Hand-Sanitizer_Grabbit-First-01-300x300.jpg",
        qnty: 0,
      },
      {
        id: 22,
        title: "Personal Care",
        description: "Grabbit First Hand wash 5 Litres",
        price: 999.0,
        image:
          "https://emperia1900.com/wp-content/uploads/2023/04/Hand-Wash_Grabbit-First-01-300x300.jpg",
        qnty: 0,
      },
    ];
    await Product.insertMany(products);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Seed the database on server startup
seedDatabase();

// Define API endpoint for fetching all products
app.get("/api/products", async (req, res) => {
  try {
    const { title } = req.query;

    let allProducts;

    if (title) {
      // If the title query parameter is provided, filter products by title
      allProducts = await Product.find({ title });
    } else {
      // If no title parameter provided, fetch all products
      allProducts = await Product.find();
    }
    // Send the entire products array as JSON response
    res.json(allProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
