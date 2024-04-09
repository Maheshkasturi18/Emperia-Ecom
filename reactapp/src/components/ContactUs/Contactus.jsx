import React, { useState } from "react";
import "./Contactus.css";
import * as Yup from "yup";

export default function Contactus() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    subject: "",
    comment: "",
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
    subject: Yup.string().required("Subject is required"),
    comment: Yup.string().required("Comment / Message is required")
  });

  const resetForm = () => {
    // Assuming formData is a state variable representing the form data
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      contactNumber: "",
      subject: "",
      comment: ""
    }); // Reset formData to an empty object or to initial values
    // Optionally, reset any other form-related state variables here

    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      console.log("Form Submitted", formData);
      resetForm();
    } catch (error) {
      const newErrors = {};

      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });

      setErrors(newErrors);
    }
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
    <section className="contact-us">
      <div className="container py-5 ">
        <div className="row">
          <div className="col-lg-6 p-5">
            <h1>Get In Touch</h1>

            <div className="row border-bottom py-5">
              <div className="col-md-2 mb-4 mb-md-0">
                <i class="fa-solid fa-location-dot p-3 rounded-circle bg-info text-white fs-5"></i>
              </div>

              <div className="col-md-10">
                <h6>CORPORATE OFFICE</h6>
                <p>
                  Empire Industries Limited – Hygiene Care, Empire Complex, 414,
                  Senapati Bapat Marg, Lower Parel (W), Mumbai – 400013
                </p>

                <h5 className="fw-bold text-center mb-3">Regional Offices</h5>
                <div className="row">
                  <div className="col ">
                    <p className="border-end  border-black border-2 ">Mumbai</p>
                  </div>
                  <div className="col ">
                    <p className="border-end border-black border-2 ">Delhi</p>
                  </div>
                  <div className="col ">
                    <p className="border-end  border-black border-2 ">
                      Kolkata
                    </p>
                  </div>
                  <div className="col ">
                    <p className="">Bengaluru</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row py-4 border-bottom">
              <div className="col-md-2 ">
                <i class="fa-solid fa-phone p-3 rounded-circle bg-info text-white fs-5"></i>
              </div>
              <div className="col-md-10 mb-4 mb-md-0">
                <h6>CALL US</h6>
                <p>1800 209 2526</p>
              </div>
            </div>

            <div className="row py-4 ">
              <div className="col-md-2 ">
                <i class="fa-solid fa-envelope p-3 rounded-circle bg-info text-white fs-5"></i>
              </div>

              <div className="col-md-10 mb-4 mb-md-0">
                <h6>EMAIL US</h6>
                <p>care@grabbitempire.com</p>
              </div>
            </div>
          </div>

          {/* form */}
          <div className="col-lg-6 ">
            <form
              class=" border border-light p-5 bg-white"
              action="#!"
              onSubmit={handleSubmit}
            >
              <div className="row mb-4">
                <div className="form-text fw-bold text-black fs-5">
                  Name <span className="text-danger">*</span>
                </div>

                <div className="col">
                  <input
                    type="text"
                    id="firstName"
                    className="form-control bg-light-subtle"
                    aria-describedby="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  <label for="firstName" className="form-label m-0">
                    First
                  </label>
                  {errors.firstName && (
                    <div className="error">{errors.firstName}</div>
                  )}
                </div>

                <div className="col">
                  <input
                    type="text"
                    id="lastName"
                    className="form-control bg-light-subtle"
                    aria-describedby="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  <label for="lastName" className="form-label m-0">
                    Last
                  </label>
                  {errors.lastName && (
                    <div className="error">{errors.lastName}</div>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label for="number" className="form-label fw-bold fs-5">
                  Contact Number <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="number"
                  className="form-control bg-light-subtle"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                />
                {errors.contactNumber && (
                  <div className="error">{errors.contactNumber}</div>
                )}
              </div>

              <div className="mb-4">
                <label for="email" className="form-label fw-bold fs-5">
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-control bg-light-subtle "
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className="error">{errors.email}</div>
                )}
              </div>

              <div className="mb-4">
                <label for="subject" className="form-label fw-bold fs-5">
                  Subject <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  className="form-control bg-light-subtle"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
                {errors.subject && (
                  <div className="error">{errors.subject}</div>
                )}
              </div>

              <div className="form-group mb-4">
                <label for="comment" className="form-label fw-bold fs-5">
                  Comment or Message <span className="text-danger">*</span>
                </label>
                <textarea
                  className="form-control  bg-light-subtle"
                  id="comment"
                  rows="3"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                ></textarea>
                {errors.comment && (
                  <div className="error">{errors.comment}</div>
                )}
              </div>

              <div className="custom-control  custom-checkbox mb-4 v">
                <input
                  type="checkbox"
                  className="custom-control-input me-3 mb-3 mb-md-0 bg-light-subtle"
                  id="defaultContactFormCopy"
                  required
                />
                <label
                  className="custom-control-label "
                  for="defaultContactFormCopy"
                >
                  I consent to receive communication from EMPERIA 1900
                  <span className="text-danger">*</span>
                </label>
              </div>

              <button
                className="btn btn-outline-info btn-block rounded-5 px-3 py-2 border-2 fw-bold"
                type="submit"
               
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            width="100%"
            height="100%"
            title="map"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=emperia+1900&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
          <a href="https://www.tabclocktab.com/">clock tab</a>
          <br />
          <a href="https://www.clock-alarm.com/">{/* dd */}</a>
          <br />
        </div>
      </div>
    </section>
  );
}
