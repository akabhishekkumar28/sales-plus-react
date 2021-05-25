import React , {useState}from 'react';
import CommonDropdownSearch from '../../../Common/CommonDropdownSearch';
import '../../Reports/StockReport/StockReport.css'
import './SalesLedger.css'

const SalesLedger = () => {

    const [ showSearch , setSearch]= useState(false);

    const handleSearch=()=>{
        console.log('clicked');
                        setSearch(!showSearch)
    
        }
        const dropDownSales = (
            <select className="form-control" id="exampleFormControlSelect1">
              <option>--Select Tax Rates--</option>
              <option>GST @ 12% </option>
              <option>GST @ 5%</option>
            </select>
          );
    return (
        <div>
                   <div c="fir_row">
                 <div>
                 <i className="fa fa-desktop print fa-2x" onClick={handleSearch}> </i>
                 </div>
                 <div>
                 <i className="fa fa-search-plus search fa-2x" onClick={handleSearch}> <span style={{color:'red'}}> Search</span></i>
                 </div>
                 
                 </div>
                <div className="container-fluid stock">
                <table className="table table-bordered mt-5" >
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">SL.No</th>
                            <th scope="col">Invoice No</th>
                            <th scope="col">Date</th>
                            <th scope="col">Item Name</th>
                            <th scope="col">Qty</th>
                            <th scope="col">Rate </th>
                            <th scope="col">Tax Rate</th>
                            <th scope="col">Basic Amount</th>
                            <th scope="col">Tax Amount </th>
                            <th scope="col">CGST</th>
                            <th scope="col">SGST</th>
                            
                           
                            
                        </tr>
                    </thead>
                       
                        
                </table>
                </div>
                {showSearch && <CommonDropdownSearch dropDownType={dropDownSales} />}
        </div>
      );
}
 
export default SalesLedger;