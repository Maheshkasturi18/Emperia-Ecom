import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ADD, REMOVE, DLT } from "../Redux/Actions/action";

export default function InnerDetails() {
  const [products, setProducts] = useState(null);
  const { id } = useParams();
  const history = useNavigate();
  const getdata = useSelector((state) => state.cartreducer.carts);
  const dispatch = useDispatch();

  const compare = (id) => {
    let comparedata = getdata.filter((e) => {
      return e.id == id;
    });
    setProducts(comparedata);
  };

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
    history("/");
  };

  useEffect(() => {
    compare(id);
  }, [id]);

  return (
    <section className="bg-blue">
      <div className="container py-5 ">
        <div className="itemsDetails ">
          {products && (
            <div className="row">
              <div className="col-lg-5 text-center">
                <img
                  alt=""
                  src={products.image}
                  className="mb-5"
                  style={{ height: "440px" }}
                />

                <p className="me-2  fs-5 mb-5">
                  MRP <b className="ms-2 fs-4"> ₹{products.price}.00</b>{" "}
                </p>

                <div className="d-flex justify-content-center align-items-center qnty-btn">
                  <span
                    className="inc-btn"
                    onClick={
                      products.qnty <= 1
                        ? () => dlt(products.id)
                        : () => remove(products)
                    }
                  >
                    -
                  </span>
                  <span style={{ fontSize: 22 }}>{products.qnty}</span>
                  <span className="dec-btn" onClick={() => send(products)}>
                    +
                  </span>
                </div>
              </div>
              <div className="col-lg-7">
                <h1>{products.description}</h1>

                <div className="lh-lg fs-18">
                  <p>
                    ARMSX is a brand of Empire Industries Limited, a century-old
                    conglomerate with a repertoire of business interests and a
                    legacy of trust.
                  </p>
                  <p>
                    ARMSX is a Broad Spectrum, no-rinse, hard surface
                    disinfectant cleaner and deodorant. ARMSX is based on 5th
                    Generation Quat Chemistry and kills 99.99% of bacteria at a
                    low concentration (2mL/L) within just 3 minutes of contact
                    time.
                  </p>
                  <p>
                    ARMSX is a robust, broad-spectrum multipurpose disinfectant
                    cleaner and deodorant that provides excellent results in
                    one-step application. ARMSX is ideal for usage in wellness
                    centers, hospitals (critical and non-critical areas), dining
                    and food preparation areas, educational institutions and
                    damp places like restrooms and swimming pools.
                  </p>
                  <p>
                    ARMSX is effective against various disease-causing
                    pathogens. Its ability to disinfect and deodorize while
                    being safe and non-corrosive makes ARMSX an excellent choice
                    for maintaining cleanliness and hygiene in a wide range of
                    environments. However, it’s important to follow the user
                    manual instructions for proper usage and dilution to ensure
                    optimal effectiveness and safety.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
