import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Dashboard from './components/MainComponent/Dashboard/Dashboard';
import Settings from './components/MainComponent/Settings/Settings';

// import Banking from './components/MainComponent/Transactions/Transaction/Banking'

import Inventory from './components/MainComponent/Master/Inventory';
import Customer from './components/MainComponent/Master/Customers';
import SupplierandVendor from './components/MainComponent/Master/Supplierandvendor';
import BussinessBanking from './components/MainComponent/Master/Businessbanking';
import LoanFinance from './components/MainComponent/Master/Loanandfinance';

import Invoices from './components/MainComponent/Invoices/Invoices';


import SalesReturn from './components/MainComponent/Returns/SalesReturn/SalesReturn';
import PurchaseReturn from './components/MainComponent/Returns/PurchaseReturn/PurchaseReturn';


import BrandwiseSalesLedger from './components/MainComponent/LedgerAccounts/BrandwiseSalesLedger/BrandwiseSalesLedger';
import CashBook from './components/MainComponent/LedgerAccounts/CashBook/CashBook';
import SalesLedger from './components/MainComponent/LedgerAccounts/SalesLedger/SalesLedger';


import CreditDebitNote from './components/MainComponent/CreditDebitNote/CreditDebitNote';


import CompanyExpenses from './components/MainComponent/Expense/CompanyExpenses/companyExpenses';
import EmployeeSalary from './components/MainComponent/Expense/EmployeeSalary/employeeSalary';
import LoansAdvances from './components/MainComponent/Transactions/LoansAdvancesComponent/LoansAdvances';
import SupplierPayments from './components/MainComponent/Transactions/SupplierPaymentsComponent/SupplierPayments';

import StockReport from './components/MainComponent/Reports/StockReport/StockReport';
import MonthlySummary from './components/MainComponent/Reports/MonthlySummary/MonthlySummary';
import TaxReport from './components/MainComponent/Reports/TaxReport/TaxReport';
import Profit from './components/MainComponent/Reports/Profit&Loss/Profit';

import CardSettlement from './components/MainComponent/Transactions/CardSettlement/CardSettlements';
import NeftBanking from './components/MainComponent/Transactions/NeftBanking/NeftBanking';


const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Dashboard} />
      <Route exact path='/Settings' component={Settings} />

      {/* =============Master Module Routing============= */}
      <Route exact path="/master/inventory-items" component={Inventory} />
      <Route path="/master/supplier-vendor" component={SupplierandVendor} />
      <Route path="/master/customers" component={Customer} />
      <Route path="/master/business-banking" component={BussinessBanking} />
      <Route path="/master/loans-finance" component={LoanFinance} />

      {/*============= Invoices Module Routing =============*/}
      <Route exact path='/invoices' component={Invoices} />


      {/*============= Returns Module Routing =============*/}
      <Route exact path='/returns/sales-return' component={SalesReturn} />
      <Route exact path='/returns/purchase-return' component={PurchaseReturn} />

      {/* =============Transaction Module Routing =============*/}
      <Route exact path='/card-settlement' component={CardSettlement} />
      <Route exact path='/neft-banking' component={NeftBanking} />
      <Route exact path='/supplier-payments' component={SupplierPayments} />
      <Route exact path='/loans-advances' component={LoansAdvances} />


      {/* =============Credit/Debit Module Routing =============*/}
      <Route exact path='/credit-debit-note' component={CreditDebitNote} />

      {/* ============Ledger-Accounts========= */}
      <Route exact path='/ledger-accounts/cash-book' component={CashBook} />
      <Route exact path='/ledger-accounts/sales-ledger' component={SalesLedger} />
      <Route exact path='/ledger-accounts/brandwise-sales-ledger' component={BrandwiseSalesLedger} />


      {/* =============Expense Module Routing =============*/}
      <Route exact path='/company-expenses' component={CompanyExpenses} />
      <Route exact path='/employee-salary' component={EmployeeSalary} />

      {/*============= Reports Module========== */}
      <Route path="/reports/stock-reports" component={StockReport} />
      <Route path="/reports/monthly-summary" component={MonthlySummary} />
      <Route path="/reports/tax-report" component={TaxReport} />
      <Route path='/reports/profit-loss' component={Profit} />
    </Switch>
  )
}

export default Routes