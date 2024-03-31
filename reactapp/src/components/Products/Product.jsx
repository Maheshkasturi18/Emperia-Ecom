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
    <div className="container-fluid bg-blue px-5">
      <ToastContainer position="top-center" autoClose={1000} />{" "}
      {/* Container for toast notifications */}
      <div className="row py-5 px-4 mx-1 gap-4">
        {products.map((product) => (
          <div key={product.id} className="card col-lg-3 mb-4 border-0 p-0 bg-blue " style={{width:"280px"}}>
            <img src={product.image} alt="" className="img-fluid" />

            <div className="card-body px-0">
              <p className="text-secondary">{product.title}</p>
              <h5>{product.description}</h5>
              <p>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </p>

              <p className="text-center fw-bold">₹ {product.price}.00</p>
              <button
                type="button"
                id="button"
                className="btn btn-sm fs-5 px-4 py-2 py-lg-2 rounded-pill  fw-semibold"
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
