import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ADD, REMOVE, DLT } from "../Redux/Actions/action";

export default function Cart() {
  const getdata = useSelector((state) => state.cartreducer.carts);
  // console.log(getdata);

  const dispatch = useDispatch();

  const [price, setPrice] = useState(0);
  // console.log(price);

  // total
  const total = () => {
    let price = 0;
    getdata.map((ele, k) => {
      price = ele.price * ele.qnty + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

  // add data

  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
  };

  // remove one
  const remove = (item) => {
    dispatch(REMOVE(item));
  };

  // delete btn
  const dlt = (id) => {
    dispatch(DLT(id));
  };

  return (
    <section className="bg-blue">
      <div className="container  py-4 ">
        <h2>Cart</h2>
        {getdata.length ? (
          <div class="add-to-cart my-4">
            <table className="mb-5">
              <thead>
                <tr>
                  <th className="text-center"></th>
                  <th className="text-center"></th>
                  <th className="text-center fs-5">Product</th>
                  <th className="text-center fs-5">Price</th>
                  <th className="text-center fs-5">Quantity</th>
                  <th className="text-center fs-5">Subtotal</th>
                </tr>
              </thead>

              <tbody>
                {getdata.map((e) => {
                  console.warn("map", e.qnty);

                  return (
                    <>
                      <tr key={e.id}>
                        <td className="text-center">
                          <i
                            className="fa-solid fa-trash"
                            style={{
                              color: "red",
                              padding: "5px",
                              cursor: "pointer",
                            }}
                            onClick={() => dlt(e.id)}
                          ></i>
                        </td>
                        <td className="text-center">
                          <Link to={`/cardDetails/${e.id}`}>
                            <img
                              src={e.image}
                              style={{ width: "5rem", height: "5rem" }}
                            />
                          </Link>
                        </td>
                        <td className="text-center fs-5">{e.description}</td>
                        <td className="text-center">₹ {e.price}.00</td>

                        <td className="text-center">
                          <div
                            className="d-flex justify-content-between align-items-center"
                            style={{
                              width: 100,
                              cursor: "pointer",
                              border: "1px solid black",
                              color: "#111",
                              padding: "5px 10px",
                              margin: "auto",
                            }}
                          >
                            <span
                              style={{ fontSize: 24 }}
                              onClick={
                                e.qnty <= 1 ? () => dlt(e.id) : () => remove(e)
                              }
                            >
                              -
                            </span>
                            <span style={{ fontSize: 22 }}>{e.qnty}</span>
                            <span
                              style={{ fontSize: 24 }}
                              onClick={() => send(e)}
                            >
                              +
                            </span>
                          </div>
                        </td>

                        <td className="text-center">₹ {e.price * e.qnty}.00</td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>

            <div className="row">
              <div className="col-lg-7"></div>
              <div className="col-lg-5">
                <table>
                  <thead>
                    <tr>
                      <th className="fs-3 px-4 py-3">Cart totals</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className="text-center fw-bold p-4">₹ {price}.00</td>
                    </tr>
                    <tr>
                      <td className="p-4">
                        <button
                          type="button"
                          id="button"
                          className="btn btn-sm fs-5 px-4 py-2 py-lg-2 rounded-pill  fw-semibold"
                        >
                          Procced to checkout
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="d-flex px-3 py-4 my-4 cart-empty">
              <i className="fa-solid fa-store me-3 mt-1"></i>
              <h5 className="m-0">Your cart is currently empty</h5>
            </div>

            <Link to="/products" className="">
              <button
                type="button"
                id="button"
                className="btn btn-sm fs-5 px-4 py-2 py-lg-2 rounded-pill  fw-semibold"
              >
                Return to Shop
              </button>
            </Link>
          </>
        )}
      </div>
    </section>
  );
}
