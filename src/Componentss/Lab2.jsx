import React from 'react';
import "./Lab2.css"
const Lab2 = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="heading">KL UNIVERSITY</div>
          <div className="menu">
            <span>Home </span>
            <span>Portfolio </span>
            <span>About </span>
            <span>Login </span>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="logo">
          <img width={100} height={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy5k7nP3PFx3pKm5_ywTjf30jgbFnwOFgAXQ&s" alt="logo" />
        </div>
        <div className="details">
          <p>Project Name</p>
          <p>Domain</p>
          <p>Batch</p>
          <p>Year</p>
          <p>id</p>
          <p>course</p>
        </div>
      </div>

      <div className="footer">
        <div className="s_footer">
          <i className="fa fa-facebook">
            
          </i>
          <i className="fa fa-twitter">  </i>
          <i className="fa fa-instagram">  </i>
          <i className="fa fa-linkedin">  </i>
        </div>
      </div>
    </>
  );
};

export default Lab2;