import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { useSelector } from "react-redux";

export default function Checkout() {
  const getdata = useSelector((state) => state.cartreducer.carts);
  // console.log(getdata);

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

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    contactNumber: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    contactNumber: Yup.string()
      // regex expression 10digits forcontact number
      .matches(/^\d{10}$/, "Contact Number must be 10 digits")
      .required(),
    email: Yup.string().required("Email is required").email("invalid email"),
    address: Yup.string().required("Address is required"),
    pincode: Yup.string().required("Pincode is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
  });

  const resetForm = () => {
    // Assuming formData is a state variable representing the form data
    setFormData({
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      contactNumber: "",
      email: "",
    }); // Reset formData to an empty object or to initial values
    // Optionally, reset any other form-related state variables here

    setErrors({});
  };

  const handleSubmit = async () => {
    // e.preventDefault();

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      console.log("order placed", formData);
      resetForm();
    } catch (error) {
      const newErrors = {};

      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });

      setErrors(newErrors);
    }
  };

  const handlePlaceOrderClick = () => {
    handleSubmit(); // Trigger form submission and validation
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      //  (...)  returns attributes inside input field i.e name and value
      ...formData,
      [name]: value,
      // object has been passed
    });
  };

  return (
    <section className="checkout">
      <div className="container ">
        <h2 className="">Checkout</h2>
        <div className="row py-5">
          {/* form */}

          <div className="col-lg-7">
            <h4 className="pb-3 fw-bold border-bottom border-red">
              Billing Details
            </h4>
            <form className="py-3" action="#!" onSubmit={handleSubmit}>
              <div className="row mb-4">
                

                <div className="col">
                  <label
                    for="firstName"
                    className="form-label  text-black fw-bold"
                  >
                    First name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="form-control bg-light-subtle p-2"
                    aria-describedby="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />

                  {errors.firstName && (
                    <div className="error">{errors.firstName}</div>
                  )}
                </div>

                <div className="col">
                  <label
                    for="lastName"
                    className="form-label  text-black fw-bold"
                  >
                    Last name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="form-control bg-light-subtle p-2"
                    aria-describedby="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />

                  {errors.lastName && (
                    <div className="error">{errors.lastName}</div>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label for="compname" className="form-label  fw-bold">
                  Company name (optional)
                </label>
                <input
                  type="text"
                  id="compname"
                  className="form-control bg-light-subtle p-2"
                  name="compname"
                />
              </div>

              <div className="mb-4">
                <label for="country" className="form-label  fw-bold">
                  Country/Region <span className="text-danger">*</span>
                </label>
                {/* <input
                  type="text"
                  id="country"
                  className="form-control bg-light-subtle"
                  name="country"
                  value="India"
                /> */}
                <p className="m-0 fw-semibold">India</p>

              </div>

              <div className="mb-4">
                <label for="address" className="form-label  fw-bold">
                  Street address <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="address"
                  className="form-control bg-light-subtle mb-3 p-2"
                  name="address"
                  placeholder="House number and stree name"
                  value={formData.address}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  id="address"
                  className="form-control bg-light-subtle p-2"
                  name="address"
                  placeholder="Apartment,suite,unit,etc. (optional)"
                  value={formData.address}
                  onChange={handleChange}
                />
                {errors.address && (
                  <div className="error">{errors.address}</div>
                )}
              </div>

              <div className="mb-4">
                <label for="city" className="form-label  fw-bold">
                  Town / City <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  className="form-control bg-light-subtle p-2"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
                {errors.city && (
                  <div className="error">{errors.city}</div>
                )}
              </div>

              <div className="mb-4">
                <label for="state" className="form-label  fw-bold">
                  State <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="state"
                  className="form-control bg-light-subtle p-2"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                />
                {errors.state && (
                  <div className="error">{errors.state}</div>
                )}
              </div>

              <div className="form-group mb-4">
                <label for="pincode" className="form-label  fw-bold">
                  PIN Code <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control  bg-light-subtle p-2"
                  id="pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                ></input>
                {errors.pincode && (
                  <div className="error">{errors.pincode}</div>
                )}
              </div>

              <div className="mb-4">
                <label for="number" className="form-label  fw-bold">
                  Phone <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="number"
                  className="form-control bg-light-subtle p-2"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                />
                {errors.contactNumber && (
                  <div className="error">{errors.contactNumber}</div>
                )}
              </div>

              <div className="mb-4">
                <label for="email" className="form-label  fw-bold">
                  Email address <span className="text-danger">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-control bg-light-subtle p-2"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="error">{errors.email}</div>}
              </div>

              <div className="mb-4">
                <label for="notes" className="form-label  fw-bold">
                  Order notes (optional)
                </label>
                <textarea
                  id="notes"
                  type="notes"
                  className="form-control bg-light-subtle p-2"
                  name="notes"
                  placeholder="Notes about your order ,eg. special notes for delivery"
                  rows="2"
                />
              </div>
            </form>
          </div>

          <div className="col-lg-5  ">
            <div className="p-4 border border-2 border-lightgrey checkout">
              <h4 className="fw-bold">Your order</h4>

              <table className="t1 mt-4">
                <thead>
                  <tr>
                    <th className=" fs-5">Product</th>
                    <th></th>

                    <th className="text-end fs-5">Subtotal</th>
                  </tr>
                </thead>

                <tbody>
                  {getdata.map((e) => {
                    return (
                      <>
                        <tr key={e.id}>
                          <td>{e.description}</td>

                          <td> x{e.qnty}</td>

                          <td className="text-end">₹ {e.price * e.qnty}.00</td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>

              <table className="t2 mb-5">
                <tbody>
                  <tr className="d-flex justify-content-between ">
                    <td>Subtotal</td>
                    <td>₹ {price}.00</td>
                  </tr>
                  <tr className="d-flex justify-content-between">
                    <td>Total</td>
                    <td>₹ {price}.00</td>
                  </tr>
                </tbody>
              </table>

              <h6>Paytm Payment Gateway</h6>
              <img src="images/checkout_img.svg" alt="" />
              <p className="p-3 bg-secondary bg-opacity-25 my-4">
                The best payment gateway provider in India for e-payment through
                credit card, debit card & netbanking.
              </p>

              <p>
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our privacy policy.
              </p>

              <button
                type="button"
                id="button"
                className="btn btn-sm fs-5 px-4 py-2 py-lg-2 rounded-pill w-100 fw-semibold"
                onClick={handlePlaceOrderClick}
              >
                Place order
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
