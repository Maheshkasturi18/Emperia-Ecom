import { useState, useEffect, useRef } from "react";
import axios from "axios";
import ReactDOM from "react-dom/client";

export default function Product() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/products")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="container ">
      <div className="row">
        <div className="col-lg-3">
          {data &&
            data.map((product) => (
              <div key={product.id}>
                <img
                  src={product.image}
                  alt=""
                  className="img"
                  style={{ width: "100px" }}
                />
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p>{product.price}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
