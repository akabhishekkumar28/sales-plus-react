import React, { useState } from 'react';
// import Card from '../../Navbar/Card';
import'../StockReport/StockReport.css'
import Search from "../../../Common/Search";
import './MonthlySummary.css'

const MonthlySummary =()=> {
   
    const [ showSearch , setSearch]= useState(false);

   const handleSearch=()=>{
                    setSearch(!showSearch)

    }
    
        return ( 
            <div className='monthly'>
                <i className="fa fa-search-plus search fa-2x" onClick={handleSearch}> <span style={{color:'red'}}>Search</span></i>
                <div className="container-fluid stock">
                <table className="table table-bordered mt-5" >
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">SL.No</th>
                            <th scope="col">Month</th>
                            <th scope="col">Sales</th>
                            <th scope="col">Cash</th>
                            <th scope="col">Card</th>
                            <th scope="col">Cash+Card<br></br>  </th>
                            <th scope="col">Discount</th>
                            <th scope="col">Credit Sales</th>
                            <th scope="col">Purchase</th>
                            <th scope="col">Payments</th>
                            <th scope="col">Customer Receipts</th>
                            <th scope="col">Profit </th>
                            <th scope="col">Expense</th>
                            <th scope="col">Salary</th>
                            <th scope="col">Net Profit</th>
                            <th scope="col">View </th>
                        </tr>
                    </thead>
                </table>
                </div>
                {showSearch && <Search/>}
            </div>
         );
    }

 
export default MonthlySummary;