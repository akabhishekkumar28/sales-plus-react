import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CalendarFromTo from '../../../Common/calendarFromTo';
import '../expense.css';

const EmployeeSalary = () => {
    let [width, setWidth] = useState(0);


    const handleSearchBtn = () => {
        // setStatus(!status);
        // setWidth( (status)? '350px':'0px' );
        setWidth(400);
    }
    const handleCloseBtn = () => {
        // setStatus(!status);
        setWidth(0);
    }
    let searchBoxStyle = {
        height: 65 + '%',
        width: width + 'px', 
        position: 'fixed',
        zIndex: 1,
        top: 180 + 'px',
        right: -60 + 'px',
        backgroundColor: '#' + 111,
        overflow: 'hidden',
        paddingTop: 60 + 'px',
        paddingLeft: 30 + 'px',
        transition: 0.5 + 's',
        borderRadius: 10 + 'px'
    }
    return (
        <>
            <h1 classNameName="mb-4">Employee Salary</h1>
            <div className="min-height">
                <div className="m-2">
                    <div className="row">
                        <div className="col-sm-6 pl-3">
                            <Link className="btn btn-info btn-squared" data-toggle="modal" data-target="#myModal">
                                <i className="fa fa-plus"></i>
                                &nbsp;
                                Add New
                            </Link>

                        </div>
                        <div className="col-sm-6">
                            <div className="top-nav-search m-3">
                                <ul className="nav pull-right top-search" onClick={handleSearchBtn} style={{ marginTop: -10 + 'px' }}>
                                    <li className="sb-toggle-right">
                                        <i className="fa  fa-search-plus "></i>
                                        <i style={{ marginTop: -20 + 'px', marginLeft: 8 + 'px', fontSize: 15 + 'px', color: 'brown' }}>Search</i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="mySearch" className="searchBox" style={searchBoxStyle}>
                    <Link to="/employee-salary" className="closebtn text-danger" onClick={handleCloseBtn}>&times;</Link>
                    <div className="text-warning">
                        <h5 className="side-title">Search Option</h5>
                        <div className="col-sm-9">
                            <div className="form-group">
                                Customer Name
                        <select name="" id="" className="form-control">
                                    <option value="- All -">- All -</option>
                                    <option value="3">Santosh</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-9">
                            <div className="form-group">
                                <CalendarFromTo  />
                            </div>
                        </div>
                        <div className="col-sm-8"></div>
                        <div className="col-sm-4">
                            <input type="submit" name="" value="Go" id="" className="btn btn-info btn-squared" />
                        </div>

                    </div>
                </div>
                {/* <Search/> */}

                <div onClick={handleCloseBtn}>
                    <table style={{ clear: 'both' }} className="table table-dark table-striped">
                        <tbody>
                            <tr className="hr">
                                <th align="center" style={{ width: 120 + 'px' }}>
                                    Date
                            </th>
                                <th align="center" style={{ width: 200 + 'px' }}>
                                    Employee Name
                            </th>
                                <th align="center" style={{ width: 200 + 'px' }}>
                                    Remarks
                            </th>
                                <th align="center" style={{ width: 100 + 'px' }}>
                                    Pay Mode
                            </th>
                                <th align="center" style={{ width: 100 + 'px' }}>
                                    Amount
                            </th>
                                <th align="center" style={{ width: 50 + 'px' }}>
                                    Action
                            </th>
                            </tr>
                        </tbody>
                    </table>
                    <div style={{ height: 450 + 'px', overflow: 'scroll', backgroundColor: 'beige' }}>
                        <div>
                            <table className="table table-light table-striped" cellSpacing="0" rules="all" border="1" id="" style={{ borderCollapse: 'collapse' }}>
                                <tbody>
                                    <tr>
                                        <td style={{ width: 50 + 'px' }}>03/04/2021</td>
                                        <td style={{ width: 180 + 'px' }}>Shubhendu</td>
                                        <td style={{ width: 200 + 'px' }}>salary</td>
                                        <td align="left" style={{ width: 100 + 'px' }}>Cash</td>
                                        <td align="right" style={{ width: 100 + 'px' }}>299.00</td>
                                        <td align="center" style={{ width: 50 + 'px' }}>
                                            <i className="fa fa-pencil" style={{ cursor: 'pointer' }} onClick="return Edit(this)"></i>
                                        </td>
                                    </tr>
                                    <tr className="alt">
                                        <td style={{ width: 50 + 'px' }}>02/04/2021</td>
                                        <td style={{ width: 180 + 'px' }}>Rashmi</td>
                                        <td style={{ width: 200 + 'px' }}>Salary</td>
                                        <td align="left" style={{ width: 100 + 'px' }}>Cash</td>
                                        <td align="right" style={{ width: 100 + 'px' }}>749.00</td>
                                        <td align="center" style={{ width: 50 + 'px' }}>
                                            <i className="fa fa-pencil" style={{ cursor: 'pointer' }} onClick="return Edit(this)"></i>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <table style={{ clear: 'both' }} className="table table-bordered table-dark">
                        <tbody>
                            <tr className="float-right" style={{ fontWeight: 'bold' }}>
                                <td style={{ textAlign: 'right', paddingRight: 10 + 'px' }}>
                                    Total
                            </td>
                                <td style={{ width: 150 + 'px', textAlign: 'right', paddingRight: 50 + 'px' }}>
                                    <span id="">1,048.00</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add Form Modal */}
            <div id="myModal" className="modal fade" role="dialog" style={{ marginTop: 50 + 'px' }}>
                <div className="modal-dialog">

                    <div className="modal-content" style={{ width: 116 + '%' }}>
                        <div className="modal-header bg-info text-light">
                            <h4 className="modal-title">Salary Expenses</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <form action="">

                                <div className="row">
                                    <div className="col-sm-8">
                                        <div className="form-group">
                                            <label>Employee Name</label>
                                            <select name="" id="" className="form-control">
                                                <option value="2">Shubhendu</option>
                                                <option value="1">Rashmi</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <br />
                                            <Link className="btn btn-secondary" data-toggle="modal" data-target="#myModalCategory">
                                                <i className="fa fa-plus"></i>&nbsp;New Employee
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Pay Mode</label>
                                            <select name="" id="" className="form-control" onFocus="HideMsg();" onChange="">
                                                <option value="Cash">Cash</option>
                                                <option value="Bank">Bank</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Date</label>

                                            <input name="" type="text" value="07/04/2021" id="" className="form-control" />

                                        </div>
                                    </div>
                                </div>
                                <div className="form-group" id="bank" style={{ display: 'none' }}>
                                    <label>Bank Name / Account No</label>
                                    <select name="" id="" className="form-control">
                                        <option value="2">Canara Bank - xxxxxx7485</option>
                                        <option value="1">Federal Bank - xxxxxxx9570</option>

                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Remarks</label>
                                    <textarea name="" rows="2" cols="20" id="" className="form-control"></textarea>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Amount</label>
                                            <input name="" type="text" id="" className="form-control" />
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer p-0">
                            <button type="button" className="btn btn-success" data-dismiss="modal">Save</button>
                        </div>
                    </div>

                </div>
            </div>

            {/*Category Modal  */}

            <div id="myModalCategory" className="modal fade" role="dialog" style={{ marginTop: 50 + 'px' }}>
                <div className="modal-dialog">

                    <div className="modal-content" style={{ width: 118 + '%' }}>
                        <div className="modal-header bg-info text-light">
                            <h4 className="modal-title">Employee</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <form action="">
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-sm-9">
                                            <div className="form-group">
                                                <input name="" type="text" id="" className="form-control" placeholder="Employee?" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <input type="submit" name="" value="Save" id="" className="btn btn-success" />
                                        </div>
                                    </div>
                                    <table style={{ clear: 'both' }} className="table table-dark mb-1">
                                        <tbody>
                                            <tr className="hr">
                                                <th style={{ width: 50 + 'px' }}>Sl No</th>
                                                <th align="center">Employee Name</th>
                                                <th style={{ width: 40 + 'px' }}>Action</th>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div style={{ minHeight: 280 + 'px' }}>
                                        <div>
                                            <table className="table table-striped" cellSpacing="0" rules="all" border="1" id="" style={{ borderCollapse: 'collapse' }}>
                                                <tbody>
                                                    <tr>
                                                        <td style={{ width: 50 + 'px' }}>1</td>
                                                        <td>Shubhendu</td>
                                                        <td align="center" style={{ width: 40 + 'px' }}>
                                                            <i className="fa fa-pencil"></i>
                                                        </td>
                                                    </tr>
                                                    <tr className="alt">
                                                        <td style={{ width: 50 + 'px' }}>2</td>
                                                        <td>Rashmi</td>
                                                        <td align="center" style={{ width: 40 + 'px' }}>
                                                            <i className="fa fa-pencil"></i>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer p-0">
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default EmployeeSalary;