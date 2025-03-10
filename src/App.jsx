import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Fintech from './pages/Fintech';
import AllExpenses from './pages/expenses/AllExpenses';
import AllDebts from './pages/expenses/AllDebts';
import CreditCards from './pages/creditCards/CreditCards';
import AllIncomes from './pages/incomes/AllIncomes';
import AllSavings from './pages/incomes/AllSavings';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import ButtonPage from './pages/component/ButtonPage';
import FormPage from './pages/component/FormPage';
import DropdownPage from './pages/component/DropdownPage';
import AlertPage from './pages/component/AlertPage';
import ModalPage from './pages/component/ModalPage';
import PaginationPage from './pages/component/PaginationPage';
import TabsPage from './pages/component/TabsPage';
import BreadcrumbPage from './pages/component/BreadcrumbPage';
import BadgePage from './pages/component/BadgePage';
import AvatarPage from './pages/component/AvatarPage';
import TooltipPage from './pages/component/TooltipPage';
import AccordionPage from './pages/component/AccordionPage';
import IconsPage from './pages/component/IconsPage';
import ChangePassword from './pages/changePasswordPage.jsx'
import Calander from './pages/Calendar'
import AccountPanel from './pages/settings/AccountPanel'
import Information from './pages/Information';
// import Stocks from './components/Stocks';




function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
    
      <Routes>
        
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/dashboard/fintech" element={<Fintech />} />

        {/* expenses */}
        <Route path="/expenses/all-expenses" element={<AllExpenses />} />


        {/* debts */}
        <Route path="/expenses/all-debts" element={<AllDebts />} />

        {/* credit cards */}
        <Route path="/creditcards/all-cards" element={<CreditCards />} />

        {/* savings */}
        <Route path="/incomes/all-savings" element={<AllSavings />} />
        


        {/* incomes */}
        <Route path="/incomes/all-incomes" element={<AllIncomes />} />

       
        {/* authentication */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/auth/change_password/:email/:token/" element={<ChangePassword />} />


        {/* components */}
        {/* <Route path="/calendar" element={<Calander />} /> */}
        <Route path="/component/button" element={<ButtonPage />} />
        <Route path="/component/form" element={<FormPage />} />
        <Route path="/component/dropdown" element={<DropdownPage />} />
        <Route path="/component/alert" element={<AlertPage />} />
        <Route path="/component/modal" element={<ModalPage />} />
        <Route path="/component/pagination" element={<PaginationPage />} />
        <Route path="/component/tabs" element={<TabsPage />} />
        <Route path="/component/breadcrumb" element={<BreadcrumbPage />} />
        <Route path="/component/badge" element={<BadgePage />} />
        <Route path="/component/avatar" element={<AvatarPage />} />
        <Route path="/component/tooltip" element={<TooltipPage />} />
        <Route path="/component/accordion" element={<AccordionPage />} />
        <Route path="/component/icons" element={<IconsPage />} />

        <Route path="/settings/account" element={<AccountPanel/>} />
        <Route path="/info" element={<Information/>} />
        {/* <Route path="/stocks" element={<Stocks/>} /> */}
        <Route path="/calander" element={<Calander/>} />
      </Routes>
    </>
  );
  
}

export default App;
