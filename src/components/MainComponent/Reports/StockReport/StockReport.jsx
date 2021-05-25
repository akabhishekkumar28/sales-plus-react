import React, { useState } from "react";
import SearchOption from "./SearchOption";
import "./StockReport.css";
const StockReport =  ()=> {
  const [ showSearch , setSearch]= useState(false);
  
  const handleSearch = () => {
    console.log("clicked");
    // alert('hello')
    setSearch(!showSearch)
  };
 
    return (
      <div>
        <i className="fa fa-search-plus search fa-2x " >
          <span onClick={handleSearch} style={{color:'red'}}>Search</span>
        </i>
        <div className="container-fluid stock">
          <table className="table table-bordered mt-5">
            <thead className="thead-dark">
              <tr>
                <th scope="col" rowSpan="2">
                  SL.No
                </th>
                <th scope="col" rowSpan="2">
                  Product Description
                </th>
                <th scope="col" rowSpan="2">
                  Last
                </th>
                <th scope="col" rowSpan="2">
                  Previous Rate
                </th>
                <th scope="col" rowSpan="2">
                  {" "}
                  Current Rate
                </th>
                <th scope="col" rowSpan="2">
                  Opening Stock
                </th>
                <th scope="col" rowSpan="2">
                  Purchase{" "}
                </th>
                <th scope="col" colSpan="3">
                  Sales
                </th>
                <th scope="col" rowSpan="2">
                  Purchase Return
                </th>
                <th scope="col" rowSpan="2">
                  Sales Return{" "}
                </th>
                <th scope="col"colSpan="2">
                  Closing Stock
                </th>
                <th scope="col" rowSpan="2">
                  Profit Amount
                </th>
              </tr>
              <tr>
                <th scope="col">Qty</th>
                <th scope="col">Rate</th>
                <th scope="col">Amount</th>
                <th scope="col">Qty </th>
                <th scope="col">Amount</th>
              </tr>
            </thead>

            <tr>
              <td>abhi</td>
              <td>bhar</td>
              <td>abhi</td>
              <td>bhar</td>
              <td>abhi</td>
              <td>bhar</td>
              <td>abhi</td>
              <td>bhar</td>
              <td>abhi</td>
              <td>bhar</td>
              <td>abhi</td>
              <td>bhar</td>
              <td>abhi</td>
              <td>bhar</td>
              <td>abhishek kumar </td>
            </tr>
          </table>
          {showSearch && <SearchOption/>}
        </div>
      </div>
    );
  
}

export default StockReport;
