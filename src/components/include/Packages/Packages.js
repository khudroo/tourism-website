import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Packages.css";

const Packages = () => {
  const [packagesData, setPackagesData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/packages`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => setPackagesData(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  

  return (
    <div className="packages-area py-4" id="packages-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="text-center py-3">
              <h2>
                Our <span className="text-warning">Packages</span>
              </h2>
              <p>
                Independent and unbiased travel reviews by The Travel Magazine. We test travel products, hotels,
                tours and activities to help you make an informed decision.
              </p>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {packagesData.map((singlePackage) => (
            <div className="col-md-4" key={singlePackage._id}>
              <div className="single-package rounded p-2 shadow">
                <div>
                  <img className="img-fluid" src={singlePackage.image} alt="img" />
                </div>
                <h4 className="p-2">{singlePackage.title}</h4>
                <p className="p-2">{singlePackage.shortDes}</p>
                <h5 className="">{singlePackage.price}</h5>

                <Link to={`/packages/${singlePackage._id}`}>
                  <button className="btn btn-outline-warning text-capitalize text-dark">book now</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
