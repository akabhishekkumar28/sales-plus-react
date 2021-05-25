import React from "react";
import '../Common/search.css';
const CommonDropdownSearch = ({ dropDownType }) => {
  return (
    <div className="search-box">
      <div className="search_txt" > Search Option</div>
      
      <div style={{padding : "10px  20px"}}>{dropDownType}</div>

      <div className="cal">
        <label htmlFor="">From Date</label>
        <br />
        <input type={Date} style={{width : '92%'}}></input>
        <br />
        
        <label htmlFor="">To Date</label>
        <br />
        <input type={Text} style={{width : '92%'}}></input>
      </div>
      <div className="btn_go">
        <button className="btn btn-primary  ">Go</button>
      </div>
    </div>
  );
};

export default CommonDropdownSearch;
