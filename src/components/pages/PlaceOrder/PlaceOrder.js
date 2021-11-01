import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import "./PlaceOrder.css";

const PlaceOrder = () => {
  const [singlePackage, setSinglePackage] = useState({});
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const onSubmit = (data) => console.log(data);

  // console.log(id);

  useEffect(() => {
    fetch(`http://localhost:5000/packages/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })

      .then((data) => setSinglePackage(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="section-margin py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="w-50 mx-auto text-center py-3">
              <h2>
                <span className="text-primary"> Placed</span> Your Order
              </h2>
              <p>
                Independent and unbiased travel reviews by The Travel Magazine. We test travel products, hotels,
                tours and activities.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="border border-success p-3">
              {" "}
              <div>
                <img className="img-fluid" src={singlePackage.image} alt="" />{" "}
              </div>
              <h4>{singlePackage.title}</h4>
              <p>{singlePackage.shortDes}</p>
              <h5>{singlePackage.price}</h5>
            </div>
          </div>

          <div className="col-md-6">
            <div className="w-75 mx-auto p-3">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-center py-3">
                  Your <span className="text-primary">Address</span>
                </h2>
                <input
                  className="form-control mb-3"
                  {...register("name", { required: true })}
                  placeholder="Name"
                />
                <input className="form-control mb-3" {...register("email")} placeholder="Email" />
                <input className="form-control mb-3" {...register("mobile")} placeholder="Mobile" />
                <textarea className="form-control mb-3" {...register("fullAddress")} placeholder="Full Address" />
                <button className="form-control mb-3 btn btn-success text-uppercase" type="submit">
                  Place Order
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
