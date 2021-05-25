import React, { useState } from "react";
import CommonDropdownSearch from "../../../Common/CommonDropdownSearch";

const BrandwiseSalesLedger = () => {
  const [showSearch, setSearch] = useState(false);

  const handleSearch = () => {
    console.log("clicked");
    setSearch(!showSearch);
  };

  // =============================

  const dropDown = (
    <select className="form-control" id="exampleFormControlSelect1">
      <option>--Select Category--</option>
      <option>samsung</option>
      <option>mi</option>
      <option>Lenovo</option>
      <option>oppo</option>
    </select>
  );

  //==============================

  return (
    <div>
      <div className="fir_row">
        <i className="fa fa-search-plus search fa-2x" onClick={handleSearch}>
          {" "}
          <span style={{color:'red'}}>Search</span>
        </i>
      </div>
      <div className="container-fluid stock">
        <table className="table table-bordered mt-5">
          <thead className="thead-dark">
            <tr>
              <th scope="col">SL.No</th>
              <th scope="col">Invoice No</th>
              <th scope="col">Date</th>
              <th scope="col">Item Name</th>
              <th scope="col">IMEI / Serial No</th>
              <th scope="col">Purchase Rate </th>
              <th scope="col">Qty</th>
              <th scope="col">Solid Rate </th>
              <th scope="col">Profit Amount</th>
            </tr>
          </thead>
        </table>
      </div>
      {showSearch && <CommonDropdownSearch dropDownType={dropDown} />}
    </div>
  );
};

export default BrandwiseSalesLedger;
