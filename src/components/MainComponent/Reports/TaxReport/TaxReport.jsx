import React, {useState} from 'react';
import Search from "../../../Common/Search";
import '../StockReport/StockReport.css'
const TaxReport = () => {
    const [ showSearch , setSearch]= useState(false);

    const handleSearch = () =>{
        setSearch(!showSearch)
    }
    return (
        <div>
            <div>
             <i className="fa fa-search-plus search fa-2x"onClick={handleSearch} ><span style={{color:'red'}}>Search</span></i>
             </div>
             <div className="table-responsive" >
                <table className="table table-bordered " >
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">SL.No</th>
                            <th scope="col">Invoice No</th>
                            <th scope="col">Date</th>
                            <th scope="col">ItemName</th>
                            <th scope="col">Qty</th>
                            <th scope="col">Basic Rate</th>
                            <th scope="col">Tax%</th>
                            <th scope="col">Tax Amount</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                </table>
                </div>  
               {showSearch && <Search/>}
        </div>
      );
}
 
export default TaxReport;