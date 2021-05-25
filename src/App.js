import React from "react";
import * as s from "./App.styles";
import * as Palette from "./colors";
import printJS from "print-js"

// Components

import Navbar from "./components/NavbarComponent/Navbar";
import Sidebar from "./components/SidebarComponent/Sidebar";
import MainView from "./components/MainComponent/MainView";

const App = () => {
  // const [isSidebarOpen, setSidebarState] = useState(true);
  // const backgroundImage = 'images/mountain.jpg';
  const sidebarHeader = {
    // fullName: 'Sales Plus',
    // shortName: 'SP'
    fullName: (
      <img
        src="/images/sales-plus-logo-transparent.png"
        alt="N/A"
        height="40px"
        className="p-0"
      />
    ),
    shortName: (
      <img src="/images/splus.png" alt="N/A" height="34px" className="p-0" />
    ),
  };
  const menuItems = [

    { name: 'Dashboard', to: '/', icon: '/icons/home.svg', subMenuItems: [] },
    {
      name: 'Settings', to: '/Settings', icon: '/icons/settings.svg', subMenuItems: [
        { name: 'Tax Settings', to: '/tax-settings' },
        { name: 'Financial Year', to: '/financial-year' },
        { name: 'User Permission', to: '/user-permission' },
      ]
    },
    {
      name: 'Master', icon: '/icons/about.svg',
      subMenuItems: [
        { name: 'Inventory Items', to: '/master/inventory-items' },
        { name: 'Supplier / Vendor', to: '/master/supplier-vendor' },
        { name: 'Customers', to: '/master/customers' },
        { name: 'Business Banking', to: '/master/business-banking' },
        { name: 'Loans / Finance', to: '/master/loans-finance' }
      ]
    },
    {
      name: 'Invoices', to: '/invoices', icon: '/icons/invoice.svg', subMenuItems: [
        { name: 'Inventory Items', to: '/inventory-items' },
        { name: 'Customer Sales', to: '/customer-sales' },
        { name: 'Dealer Purchase', to: '/dealer-purchase' },
      ]
    },
    {
      name: 'Returns', to: '/returns', icon: '/icons/destinations.svg', subMenuItems: [
        { name: 'Sales Return', to: '/sales-return' },
        { name: 'Purchase Return', to: '/purchase-return' },
      ]
    },
    {
      name: 'Transactions',  icon: '/icons/rupees.svg', subMenuItems: [
        { name: 'Banking', to: '/banking' },
        { name: 'NEFT Banking', to: '/neft-banking' },
        { name: 'Card Settlement', to: '/card-settlement' },
        { name: 'Customer Receipts', to: '/customer-receipts' },
        { name: 'Supplier Payments', to: '/supplier-payments' },
        { name: 'Loans/Advances', to: '/loans-advances' },
      ]
    },
    {
      name: "Ledger / Accounts",
      icon: "/icons/contacts.svg",
      subMenuItems: [
        { name: "Cash Book", to: "/ledger-accounts/cash-book" },
        { name: "Sales Ledger", to: "/ledger-accounts/sales-ledger" },
        { name: "Brandwise Sales Ledger", to: "/ledger-accounts/brandwise-sales-ledger" },
      ],
    },
    {
      name: 'Credit / Debit Note', to: '/credit-debit-note', icon: '/icons/services.svg', subMenuItems: [
        { name: 'Price Drop', to: '/Price Drop' },
        { name: 'Supplier', to: '/supplier' },
        { name: 'Cash Account', to: '/cash-account' },
      ]
    },
    {
      name: 'Expense', icon: '/icons/blog.svg', subMenuItems: [
        { name: 'Company Expenses', to: '/company-expenses' },
        { name: 'Employee Salary', to: '/employee-salary' },
      ]
    },
    {
      name: 'Reports', icon: '/icons/expenses.svg', subMenuItems: [
        { name: 'Stock Report', to: '/reports/stock-reports' },
        { name: 'Monthly Summary', to: '/reports/monthly-summary' },
        { name: 'Profit & Loss', to: '/reports/profit-loss' },
        { name: 'Tax Report', to: '/reports/tax-report' },
      ]
    },
  ];

  const fonts = {
    // header: 'ZCOOL KuaiLe',
    header: "Montserrat , sans-serif",
    menu: "Poppins",
  };

  return (
    <>
      <Navbar />
      <s.App>
        <Sidebar
          // backgroundImage={backgroundImage}
          sidebarHeader={sidebarHeader}
          menuItems={menuItems}
          fonts={fonts}
          // colorPalette={Palette.dejaVu}
          // colorPalette={Palette.pinkAndBlue}
          // colorPalette={Palette.julyBlue}
          // colorPalette={Palette.silver}

          colorPalette={Palette.preDark}
        // colorPalette={Palette.brown}
        // colorPalette={Palette.swampy}
        />
        <MainView />
      </s.App>
    </>
  );
};



export default App;
