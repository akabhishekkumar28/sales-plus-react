import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./SalesReturn.css";

const SalesReturn = () => {
  return (
    <>
      <div className="container-fluid">
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              className="nav-link active"
              id="nav-salesReturn-tab"
              data-toggle="tab"
              data-target="#nav-salesReturn"
              type="button"
              role="tab"
              aria-controls="nav-salesReturn"
              aria-selected="true"
            >
              Sales Return
            </button>
            <button
              className="nav-link"
              id="nav-monthlySalesReturn-tab"
              data-toggle="tab"
              data-target="#nav-monthlySalesReturn"
              type="button"
              role="tab"
              aria-controls="nav-monthlySalesReturn"
              aria-selected="false"
            >
              Monthly Sales Return
            </button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-salesReturn"
            role="tabpanel"
            aria-labelledby="nav-salesReturn-tab"
          >
            <div className="row">
              <div className="col-4"></div>
              <div className="col-2"></div>
              <div className="col-6">
                <div className="row">
                  <div className="col-6">
                    <p>Invoice No : </p>
                    <div className="input-group input-group-sm mb-3">
                      <input
                        type="text"
                        className="form-control disabled"
                        placeholder="RI 96-101/21-22"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                  <p>Date : </p>
                    <div className="input-group input-group-sm mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="07/04/2021"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="table-container">
              <div className="table">
                <table className="table table-striped table-sm">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Sl No</th>
                      <th scope="col">Item Name</th>
                      <th scope="col">MRP</th>
                      <th scope="col">Disc(%)</th>
                      <th scope="col">Qty</th>
                      <th scope="col">Rate</th>
                      <th scope="col">Tax(%)</th>
                      <th scope="col">Amount</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Oneplus Nord</td>
                      <td>23499.00</td>
                      <td>0</td>
                      <td>2</td>
                      <td>46,998</td>
                      <td>12.00</td>
                      <td>73196</td>
                      <td>
                        <i className="fa fa-times" aria-hidden="true"></i>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Vivo Y20 4/64GB</td>
                      <td>12990.00</td>
                      <td>0</td>
                      <td>3</td>
                      <td>11598.21</td>
                      <td>12.00</td>
                      <td>34794.63</td>
                      <td>
                        <i className="fa fa-times" aria-hidden="true"></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-monthlySalesReturn"
            role="tabpanel"
            aria-labelledby="nav-monthlySalesReturn-tab"
          >
            <div className="table-container">
              <div className="table">
                <table className="table table-sm">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Invoice No</th>
                      <th scope="col">Date</th>
                      <th scope="col">Remarks</th>
                      <th scope="col">Total Amount</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">RI 96-101/21-22</th>
                      <td>12-02-21</td>
                      <td>Oneplus Nord</td>
                      <td>46,998</td>
                      <td>
                        <i className="fa fa-pencil" aria-hidden="true"></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesReturn;
