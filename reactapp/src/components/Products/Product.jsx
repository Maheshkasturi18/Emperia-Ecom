import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { ADD } from "../../Redux/Actions/action";
import { Link } from "react-router-dom";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(2);
  const itemsPerPage = 12;

  const dispatch = useDispatch();

  const send = (product) => {
    dispatch(ADD(product));
    toast.success("Item added in your cart!");
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://emperia-ecom.onrender.com/api/products"
        );
        setProducts(response.data); // Set the fetched product data in state
        setTotalPages(Math.ceil(response.data.length / itemsPerPage));
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors, such as displaying a toast message
        toast.error("Error fetching product data");
      }
    };

    fetchProducts();
  }, []);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const visibleProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="bg-blue">
      <div className="container py-5">
        <ToastContainer position="top-center" autoClose={1000} />

        <div className="d-flex justify-content-between align-items-center">
          <h5 className="m-0">
            Showing
            {currentPage === 1 ? " 1-12 " : " 13-22 "}
            results
          </h5>

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
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className="card col-lg-3 col-md-4 col-6 mb-4 border-0 bg-blue product-card"
            >
              <Link to={`/innerdetails/${product.id}`}>
                <img src={product.image} alt="" className="img-fluid" />
              </Link>
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

        <div>
          {/* Render previous button only if currentPage is not 1 */}
          {currentPage !== 1 && (
            <button onClick={prevPage} className="page-btn">
              <i class="fa-solid fa-arrow-left-long"></i>
            </button>
          )}

          {(() => {
            const buttons = [];
            for (let num = 1; num <= totalPages; num++) {
              const isActive = num === currentPage;
              const buttonClass = isActive
                ? "page-num-btn active"
                : "page-num-btn";
              buttons.push(
                <button
                  key={num}
                  onClick={() => setCurrentPage(num)}
                  className={buttonClass}
                >
                  {num}
                </button>
              );
            }
            return buttons;
          })()}

          {/* Render next button only if currentPage is not equal to totalPages */}
          {currentPage !== totalPages && (
            <button onClick={nextPage} className="page-btn">
              <i class="fa-solid fa-arrow-right-long"></i>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
