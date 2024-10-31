import React from "react";
import homeIcon from "../images/bx-home.svg";
import { Link, useLocation } from "react-router-dom";

const BreadCrum = () => {

  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)






  return (
    <section className="breadcrum">
      <div className="container ">
        <div className="bread">
          {/* <h1>{pathnames[pathnames.length -1]?.replace(/-/g, ' ') || 'Home'}</h1> */}
          <img src={homeIcon} alt="" />
          <ul className="bread">
            <li><Link to="/">Homepage</Link></li>
            {
              pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join('/')}`

                return (
                  <li key={to}>
                    {'>>'}
                    { index === pathnames.length -1
                    ? (<span>{value.replace(/-/g, ' ')}</span>)
                    : (<Link to={to}>{value.replace(/-/g, ' ')}</Link>)}
                  </li>
                )
              })
            }
          </ul>
  
          
        </div>
      </div>
    </section>
  );
};

export default BreadCrum;
