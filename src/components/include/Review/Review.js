import React from "react";
import "./Review.css";

const Review = () => {
  return (
    <div className="py-5" id="review">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="text-center py-3">
              <h2>
                What Our <span className="text-warning">Client</span> Say
              </h2>
              <p>
                Independent and unbiased travel reviews by The Travel Magazine. We test travel products, hotels,
                tours and activities to help you make an informed decision.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="single-clint p-3 border mb-2">
              <div className="">
                <img
                  className="img-fluid"
                  src="https://s2.glbimg.com/7W8s0BN-5ICwCN13nalPHKsAECw=/e.glbimg.com/og/ed/f/original/2021/09/20/gettyimages-96211522.jpg"
                  alt="profile img"
                />
              </div>
              <p className="p-2 mt-2">
              One of the most recent discussions surrounding the use of technology by children and teenagers is the time they spend on smartphones and iPads. Steve Jobs I was part of the group that didn’t think it was a good idea for children to grow up addicted to these devices.
              </p>
               <p  className="p-2">
               Part of AccorHotels the building is just beautiful. It was designed by E. Keynes Purchase
                in association with Durward Brown and was completed in 1923. It had a long life as a bank for many
                years before the French hotel group took it over and turned it into this fabulous hotel.
               </p> 
              
              <h5 className="p-2">Steve Jobs</h5>
            </div>
          </div>
       

       
          <div className="col-md-6">
            <div className="single-clint p-3 border">
              <div className="">
                <img
                  className="img-fluid"
                  src="https://ceduema.com/wp-content/uploads/2014/01/college-student-520x378.jpg"
                  alt="profile img"
                />
              </div>
              <p  className="p-2 mt-2">
                The dark marble reception desk with its green cushioned backdrop and seemingly sky-high ceilings
                suggest that pleasure is a serious business delivered with precision. Staff are amazingly attentive
                and as this is a French hotel you are greeted in both French and English. 
              </p>
              <p  className="p-2">
               Part of AccorHotels the building is just beautiful. It was designed by E. Keynes Purchase
                in association with Durward Brown and was completed in 1923. It had a long life as a bank for many
                years before the French hotel group took it over and turned it into this fabulous hotel.
               </p> 
              <h5   className="p-2">Julius Starna</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
