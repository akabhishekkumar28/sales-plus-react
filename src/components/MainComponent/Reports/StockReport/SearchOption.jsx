import React from "react";
import "./SearchOption.css";

const SearchOption = () => {
  return (
    <div className="search-box">
      <div className="search_txt"> Search Option</div>

      <div className="category">
        <h4>Category</h4>
      </div>

      <div className="box">
        <input type="checkbox"></input>Samsung
        <br />
        <input type="checkbox"></input>MI
        <br />
        <input type="checkbox"></input>Micromax
        <br />
        <input type="checkbox"></input>Nokia
        <br />
        <input type="checkbox"></input>Oppo
        <br />
        <input type="checkbox"></input>Realme
        <br />
        <input type="checkbox"/>Vivo
        <br />
        {/* <input type="checkbox"></input>Lenovo
        <br />
        <input type="checkbox"></input>Vivo */}
      </div>

     

      <div className="container">
        <div className="main_box mt-2">
          <div className="row">
            <div className="col-6">
              <div className="from_date">
                <label htmlFor="">From Date</label>
                <br />
                <input type={Date} style={{ width: "100px" }}></input>
              </div>
            </div>
            
            <div className="to_date">
              <label htmlFor="">To Date</label>
              <br />
              <input type={Text} style={{ width: "100px" }}></input>
            </div>
                    </div>
          </div>
        
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4" >
            {/* <div className="btn_go"> */}
              <button className="btn btn-primary mt-2 ">Go</button>
            {/* </div> */}

          </div>
            <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
};

export default SearchOption;
