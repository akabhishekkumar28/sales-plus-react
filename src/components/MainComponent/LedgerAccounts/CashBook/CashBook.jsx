import React, { useState, useEffect } from "react";
import Search from "../../../Common/Search";
import "../../Reports/StockReport/StockReport.css";
import "./Cashbook.css";
import print from "print-js";
import axios from "axios";

function newData(id) {
  return {
    id: id,
    date: "20 / 10 /2019",
    remarks: "good",
    debit: "2000",
    credit: "700",
    balance: "500",
  };
}

function updatedData() {
  return {
    date: "20 / 10 /2019",
    remarks: "khskjh good",
    debit: "2000",
    credit: "700",
    balance: "500000",
  };
}

const CashBook = () => {
  const [tableData, setTableData] = useState([]);
  const [showSearch, setSearch] = useState(false);
  useEffect(() => {
    // to read a data
    axios.get("http://localhost:3000/cashBook/").then((res) => {
      setTableData(res.data);
    });
   
  }, [tableData]);

  const handleCrud = () => {

    const len = tableData.length + 1
    
    axios.post("http://localhost:3000/cashBook/", newData(len)).then((res) => {
      console.log(res.data);
    });
  };

  const handleSearch = () => {
    console.log("clicked");
    setSearch(!showSearch);
  };
  const handlePrint = () => {
    print("printCashBook", "html");
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/cashBook/${id}/`);
  };
  const handleUpdate = (id) =>{
    console.log(id);
    axios.put(`http://localhost:3000/cashBook/${id}/`, updatedData())
  }

  return (
    <div>
      <div className="fir_row">
        <div>
          <i className="fa fa-print print fa-2x" onClick={handlePrint}>
            {" "}
          </i>
          <i className="fa fa-save print fa-2x ml-2" onClick={handleCrud}>
            {" "}
          </i>
        </div>
        <div>
          <i className="fa fa-search-plus search fa-2x" onClick={handleSearch}>
            {" "}
            <span style={{ color: "red" }}>Search</span>
          </i>
        </div>
      </div>
      <div className="container-fluid stock" id="printCashBook">
        <table className="table table-bordered mt-5">
          <thead className="thead-dark">
            <tr>
              <th scope="col">SL.No</th>
              <th scope="col">Date</th>
              <th scope="col">Remarks</th>
              <th scope="col">Debit</th>
              <th scope="col">Credit</th>
              <th scope="col">
                Balance<br></br>{" "}
              </th>
            </tr>
          </thead>
          {tableData.map((data, index) => {
            const { id, date, remarks, debit, credit, balance } = data;
            return (
              <tr key={id}>
                <td>{index}</td>
                <td>{date}</td>
                <td>{remarks}</td>
                <td>{debit}</td>
                <td>{credit}</td>
                <td>{balance}</td>
                <td onClick={() => handleDelete(id)}>delete</td>
                <td onClick ={() => handleUpdate(id)}>Update</td>
              </tr>
            );
          })}
        </table>
      </div>
      {showSearch && <Search />}
    </div>
  );
};

export default CashBook;
