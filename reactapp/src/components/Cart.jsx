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
  useEffect(() => {
  const total = () => {
    let price = 0;
    getdata.forEach((ele, k) => {
      price = ele.price * ele.qnty + price;
    });
    setPrice(price);
  };

  total();
}, [getdata]); // Assuming getdata is the dependency that triggers the useEffect


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
          <div className="add-to-cart my-lg-4">
            {/*  desktop view cart */}
            <div className="mb-5 d-lg-block d-none">
              <table>
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
                              className="fa-solid fa-trash delete-btn"
                              onClick={() => dlt(e.id)}
                            ></i>
                          </td>
                          <td className="text-center">
                            <Link to={`/innerdetails/${e.id}`}>
                              <img
                                src={e.image}
                                className="img-cart"
                                alt="" 
                              />
                            </Link>
                          </td>
                          <td className="text-center fs-5">{e.description}</td>
                          <td className="text-center">₹ {e.price}.00</td>

                          <td className="text-center">
                            <div className="d-flex justify-content-between align-items-center qnty-btn">
                              <span
                                style={{ fontSize: 24 }}
                                onClick={
                                  e.qnty <= 1
                                    ? () => dlt(e.id)
                                    : () => remove(e)
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

                          <td className="text-center">
                            ₹ {e.price * e.qnty}.00
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* mobiel view cart */}

            <div className="d-block d-lg-none my-4">
              <table>
                <tbody>
                  {getdata.map((e) => {
                    console.warn("map", e.qnty);

                    return (
                      <>
                        <tr>
                          <td className="text-end">
                            <i
                              className="fa-solid fa-trash delete-btn"
                              onClick={() => dlt(e.id)}
                            ></i>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">
                            <Link to={`/innerdetails/${e.id}`}>
                              <img
                                src={e.image}
                                className="img-cart"
                                alt=""
                              />
                            </Link>
                          </td>
                        </tr>
                        <tr className="d-flex justify-content-between p-lg-3 p-2 ">
                          <td className="fw-bold">Product :</td>
                          <td>{e.description}</td>
                        </tr>
                        <tr className="d-flex justify-content-between p-lg-3 p-2 ">
                          <td className="fw-bold">Price :</td>
                          <td>₹ {e.price}.00</td>
                        </tr>
                        <tr className="d-flex justify-content-between p-lg-3 p-2 ">
                          <td className="fw-bold">Quantity :</td>
                          <td>
                            <div className="d-flex justify-content-between align-items-center qnty-btn">
                              <span
                                
                                className="inc-btn"
                                onClick={
                                  e.qnty <= 1
                                    ? () => dlt(e.id)
                                    : () => remove(e)
                                }
                              >
                                -
                              </span>
                              <span style={{ fontSize: 22 }}>{e.qnty}</span>
                              <span
                                
                                className="dec-btn"
                                onClick={() => send(e)}
                              >
                                +
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr className="d-flex justify-content-between p-lg-3 p-2 ">
                          <td className="fw-bold">Subtotal :</td>
                          <td>₹ {e.price * e.qnty}.00</td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* cart totals */}
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
                    <tr className="d-flex justify-content-between p-lg-3 p-2 fw-bold">
                      <td>Subtotal :</td>
                      <td>₹ {price}.00</td>
                    </tr>
                    <tr className="d-flex justify-content-between p-lg-3 p-2 fw-bold">
                      <td>Total :</td>
                      <td>₹ {price}.00</td>
                    </tr>
                    <tr>
                      <td className="p-4">
                        <Link to="/checkout"
                          type="button"
                          id="button"
                          className="btn btn-sm fs-5 px-4 py-2 py-lg-2 rounded-pill w-100 fw-semibold"
                        >
                          Procced to checkout
                        </Link>
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
