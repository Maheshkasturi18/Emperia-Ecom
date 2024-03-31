import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADD } from "../../Redux/Actions/action";


export default function Product() {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  const send = (product) => {
    dispatch(ADD(product));
    toast.success("Item  added in your cart!"); // Show custom toast notification
  };

  useEffect(() => {
    // Define a function to fetch product data
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/products");
        setProducts(response.data); // Set the fetched product data in state
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors, such as displaying a toast message
        toast.error("Error fetching product data");
      }
    };

    fetchProducts(); // Call the fetchProducts function when the component mounts
  }, []); // Empty dependency array ensures this effect runs only once, when component mounts

  return (
    <div className="container-fluid bg-blue">
      <ToastContainer position="top-center" autoClose={2000} />{" "}
      {/* Container for toast notifications */}
      <div className="row py-5 px-3">
        {products.map((product) => (
          <div key={product.id} className="card col-lg-3 mb-4 border-0 p-0 bg-blue">
            <img src={product.image} alt="" className="img-fluid" style={{width:"280px"}}/>

            <div className="card-body ">
              <p>{product.title}</p>
              <h5>{product.description}</h5>
              <p>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </p>

              <p className="text-center fs-5">₹ {product.price}</p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => send(product)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
