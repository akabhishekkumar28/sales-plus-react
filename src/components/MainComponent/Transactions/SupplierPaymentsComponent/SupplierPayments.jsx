import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CalendarFromTo from '../../../Common/calendarFromTo';
import SimpleCalendar from './../../../Common/simpleCalendar';

const SupplierPayments = () => {
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
                            Supplier Payments
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
                            Supplier Ledger
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
                                <Link to="/supplier-payments" className="closebtn text-danger" onClick={handleCloseBtn}>&times;</Link>
                                <div className="text-warning">
                                    <h5 className="side-title">Search Option</h5>
                                    <div className="col-sm-9">
                                        <div className="form-group">
                                            Supplier Name
                        <select name="" id="" className="form-control">
                                                <option value="- All Supplier-">- All -</option>
                                                <option value="2">Sri Laxmi Trader</option>
                                                <option value="1">Nalavaadi and Co.</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-9">
                                        <div className="form-group">
                                            <CalendarFromTo />
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
                                <table style={{ clear: 'both' }} className="table table-dark table-striped table-sm">
                                    <tbody>
                                        <tr className="hr">
                                            <th align="center" style={{ width: 120 + 'px' }}>
                                                Date
                            </th>
                                            <th align="center" style={{ width: 200 + 'px' }}>
                                                Supplier Name
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
                                <div style={{ height: 350 + 'px', overflow: 'scroll', backgroundColor: 'beige' }}>
                                    <div>
                                        <table className="table table-light table-striped table-sm" cellSpacing="0" rules="all" border="1" id="" style={{ borderCollapse: 'collapse' }}>
                                            <tbody>
                                                <tr>
                                                    <td style={{ width: 50 + 'px' }}>03/04/2021</td>
                                                    <td style={{ width: 180 + 'px' }}>Sri Laxmi Trader</td>
                                                    <td style={{ width: 200 + 'px' }}>imps</td>
                                                    <td align="left" style={{ width: 100 + 'px' }}>Bank</td>
                                                    <td align="right" style={{ width: 100 + 'px' }}>7000.00</td>
                                                    <td align="center" style={{ width: 50 + 'px' }}>
                                                        <i className="fa fa-pencil" style={{ cursor: 'pointer' }} onClick="return Edit(this)"></i>
                                                    </td>
                                                </tr>
                                                <tr className="alt">
                                                    <td style={{ width: 50 + 'px' }}>02/04/2021</td>
                                                    <td style={{ width: 180 + 'px' }}>Nalavaadi and Co.</td>
                                                    <td style={{ width: 200 + 'px' }}>IMPS 33424</td>
                                                    <td align="left" style={{ width: 100 + 'px' }}>Bank</td>
                                                    <td align="right" style={{ width: 100 + 'px' }}>25000.00</td>
                                                    <td align="center" style={{ width: 50 + 'px' }}>
                                                        <i className="fa fa-pencil" style={{ cursor: 'pointer' }} onClick="return Edit(this)"></i>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <table style={{ clear: 'both' }} className="table table-bordered table-dark table-sm">
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
                                        <h4 className="modal-title">Supplier Payments</h4>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body">
                                        <form action="">

                                            <div className="row p-2">
                                                <div className="col-sm-8">
                                                    <div className="form-group">
                                                        <label>Supplier Name</label>
                                                        <select name="" id="" className="form-control">
                                                            <option value="2">Nalavaadi and Co.</option>
                                                            <option value="1">Sri Laxmi Trader</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row p-2">
                                                <div className="col-sm-5">
                                                    <div className="form-group">
                                                        <label>Pay Mode</label>
                                                        <select name="" id="" className="form-control" onFocus="HideMsg();" onChange="">
                                                            <option value="Cash">Cash</option>
                                                            <option value="Bank">Bank</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-sm-5">
                                                    <div className="form-group">
                                                        <label>Date</label>
                                                        <SimpleCalendar />
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
                                            <div className="row p-2">
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
                                        <button type="button" className="btn btn-success" data-dismiss="modal">Submit</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-monthlySalesReturn" role="tabpanel" aria-labelledby="nav-monthlySalesReturn-tab">
                        <div className="m-2">
                            <div className="row">
                                <div className="col-sm-6 pl-3">
                                    <Link className="btn btn-info btn-squared" data-toggle="modal" data-target="#mySupplier">
                                        <i className="fa fa-book"></i>
                                &nbsp;
                                View Supplier Payables
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
                            <Link to="/supplier-payments" className="closebtn text-danger" onClick={handleCloseBtn}>&times;</Link>
                            <div className="text-warning">
                                <h5 className="side-title">Search Option</h5>
                                <div className="col-sm-9">
                                    <div className="form-group">
                                        Supplier Name
                        <select name="" id="" className="form-control">
                                            <option value="- All Supplier-">- All -</option>
                                            <option value="2">Sri Laxmi Trader</option>
                                            <option value="1">Nalavaadi and Co.</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-9">
                                    <div className="form-group">
                                        <CalendarFromTo />
                                    </div>
                                </div>
                                <div className="col-sm-8"></div>
                                <div className="col-sm-4">
                                    <input type="submit" name="" value="Go" id="" className="btn btn-info btn-squared" />
                                </div>

                            </div>
                        </div>
                        <div onClick={handleCloseBtn}>
                            <table style={{ clear: 'both' }} className="table table-dark table-striped table-sm">
                                <tbody>
                                    <tr className="hr">
                                        <th align="center" style={{ width: 120 + 'px' }}>
                                            Date
                            </th>
                                        <th align="center" style={{ width: 200 + 'px' }}>
                                            Remarks
                            </th>
                                        <th align="center" style={{ width: 200 + 'px' }}>
                                            Credit
                            </th>
                                        <th align="center" style={{ width: 100 + 'px' }}>
                                            Debit
                            </th>
                                        <th align="center" style={{ width: 50 + 'px' }}>
                                            Balance
                            </th>
                                    </tr>
                                    <tr className="table-bordered" style={{ fontWeight: 'bold' }}>
                                        <td style={{ textAlign: 'right' }} colSpan="2">
                                            Opening Balance as on :
                                                <span id=""></span>
                                        </td>
                                        <td colSpan="2"></td>
                                        <td style={{ width: 150 + 'px', textAlign: 'right', paddingRight: 20 + 'px' }}>
                                            <span id="" className="black"></span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div style={{ height: 350 + 'px', overflow: 'scroll', backgroundColor: 'beige' }}>
                                <div>
                                    <table className="table table-light table-striped table-sm" cellSpacing="0" rules="all" border="1" id="" style={{ borderCollapse: 'collapse' }}>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <table style={{ clear: 'both' }} className="table table-bordered table-dark table-sm">
                                <tbody>
                                    <tr className="float-right" style={{ fontWeight: 'bold' }}>
                                        <td style={{ textAlign: 'right', paddingRight: 10 + 'px' }}>
                                            Total
                            </td>
                                        <td style={{ width: 200 + 'px', textAlign: 'right', paddingRight: 50 + 'px' }}>
                                            <span id="">0.00</span>
                                        </td>
                                        <td style={{ width: 100 + 'px', textAlign: 'right', paddingRight: 50 + 'px' }}>
                                            <span id="">0.00</span>
                                        </td>
                                        <td style={{ width: 50 + 'px', textAlign: 'right', paddingRight: 50 + 'px' }}>
                                            <span id="">0.00</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Add Form Modal */}
                        <div id="mySupplier" className="modal fade" role="dialog" style={{ marginTop: 50 + 'px' }}>
                            <div className="modal-dialog">

                                <div className="modal-content" style={{ width: 116 + '%' }}>
                                    <div className="modal-header bg-info text-light">
                                        <h4 className="modal-title">Supplier Payables</h4>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body">
                                        <form action="">

                                            <div className="row p-1">
                                                <table className="table table-dark table-sm" style={{ clear: 'both', marginTop: 5 + 'px' }}>
                                                    <tbody>
                                                        <tr class="hr">
                                                            <th style={{ width: 50 + 'px' }}>Sl No
                                </th>
                                                            <th>Supplier Name
                                </th>
                                                            <th style={{ width: 150 + 'px' }}>Payable Amount
                                </th>
                                                            <th style={{ width: 87 + 'px' }}>No. of Days
                                </th>

                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div className="col pl-0 pr-1" style={{ height: 250 + 'px', overflow: 'scroll' }}>
                                                    <div>
                                                        <table className="table table-striped table-sm" cellspacing="0" rules="all" border="1" id="" style={{ borderCollapse: 'collapse' }}>
                                                            <tbody>
                                                                <tr>
                                                                    <td style={{ width: 50 + 'px' }}>1</td>
                                                                    <td>Nalavaadi and Co</td>
                                                                    <td align="right" style={{ width: 150 + 'px' }}>34,995.00</td>
                                                                    <td align="right" style={{ width: 70 + 'px', backgroundColor: 'green', color: 'white' }}>8</td>
                                                                </tr>
                                                                <tr class="alt">
                                                                    <td style={{ width: 50 + 'px' }}>2</td>
                                                                    <td>Sri Laxmi Trader</td>
                                                                    <td align="right" style={{ width: 150 + 'px' }}>53,750.00</td>
                                                                    <td align="right" style={{ width: 70 + 'px', backgroundColor: 'green', color: 'white' }}>7</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <table style={{ clear: 'both' }} className="table table-dark table-sm table-bordered">
                                                    <tbody>
                                                        <tr class="fr" style={{ fontWeight: 'bold' }}>
                                                            <td style={{ textAlign: 'right', paddingRight: 10 + 'px' }}>Total Payables</td>
                                                            <td style={{ width: 237 + 'px', textAlign: 'right', paddingRight: 90 + 'px' }}>
                                                                <span id="" class="black">88,745.00</span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                        </form>
                                    </div>
                                    <div className="modal-footer p-0">
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div >
                </div >
            </div >
        </>
    );
}

export default SupplierPayments;