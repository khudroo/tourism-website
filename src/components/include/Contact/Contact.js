import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact-area" className="py-3">
      <div className="container">

        <div className="row justify-content-center">
          
          <div className="col-md-6">
            <div className="form-b">
              <form>
                <h3 className="text-center text-capitalize py-3"> <span className="text-warning">contact</span>  form</h3>
                <input
                  class="form-control mb-3 text-capitalize"
                  type="text"
                  name=""
                  id=""
                  placeholder="your name"
                />
                <input
                  class="form-control mb-3 text-capitalize"
                  type="email"
                  name=""
                  id=""
                  placeholder="your email"
                />
                <input
                  class="form-control mb-3 text-capitalize"
                  type="number"
                  name=""
                  id=""
                  placeholder="your phone no"
                />
                <textarea
                  class="form-control mb-3 text-capitalize"
                  name=""
                  id=""
                  placeholder="Leave a comment here"
                ></textarea>
                <input
                  class="form-control mb-3 text-capitalize bg-warning fw-bold"
                  type="submit"
                  value="send message"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
