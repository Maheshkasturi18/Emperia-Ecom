import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { ADD } from "../../Redux/Actions/action";

export default function PersonalCare() {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  const send = (product) => {
    dispatch(ADD(product));
    toast.success("Item added in your cart!");
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://emperia-ecom.onrender.com/api/products", {
        params: {
          title: "Personal Care"
        }
      });
        setProducts(response.data); // Set the fetched product data in state
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors, such as displaying a toast message
        toast.error("Error fetching product data");
      }
    };

    fetchProducts();
  }, []);


  return (
    <section className="bg-blue">
      <div className="container py-5">
        <ToastContainer position="top-center" autoClose={1000} />

        <div className="d-flex justify-content-between align-items-center">
          <h5 className="m-0">Showing all {products.length} results</h5>

          <select className="filter-sort">
            <option>Default sorting</option>
            <option>Sort by popularity</option>
            <option>Sort by average rating</option>
            <option>Sort by latest</option>
            <option>Sort by price:low to high</option>
            <option>Sort by price:high to low</option>
          </select>
        </div>

        <div className="row py-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="card col-lg-3 col-md-4 col-6 mb-4 border-0 bg-blue product-card"
            >
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
                  className="btn btn-sm fs-5 px-md-4  py-md-2 rounded-pill  fw-semibold"
                  onClick={() => send(product)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
