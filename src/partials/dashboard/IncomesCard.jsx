import React, { useState, useEffect } from 'react';
import axios from '../../functions/axiosConfig'
import AddIncome from '../../pages/incomes/AddIncome';

function IncomesCard() {
  const [amount, setAmount] = useState(null);
  const token = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')).access : null;

  function fetchData(event = null) {
    if (event) {
      event.preventDefault();
    }

    axios.post('/incomes/fetch_user_incomes/', {}, {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      }
    }).then(response => {
      if (response.data.status === 200) {
        console.log({ 'month_revenues': response.data.month_revenues });
        setAmount(response.data.month_revenues);
      } else {
        console.log('Error:', response.data.message);
      }
    })
    .catch(error => {
      console.error('There was an error!', error);
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error('Error status:', error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response from server:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error:', error.message);
      }
    });
  }

  useEffect(() => {
    fetchData(); // Call fetchData when the component mounts
  }, []);

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5 flex flex-col items-center">
        <AddIncome />

        <h2 dir="rtl" className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">הכנסות (החודש)</h2>
        <div dir="rtl" className="flex flex-col items-center justify-center h-full w-full">
          {amount !== null ? (
            <>
              <div className="text-3xl font-bold text-slate-800 dark:text-slate-100">{amount}₪</div>
              {/* <div className="text-sm font-semibold text-white px-1.5 bg-emerald-500 rounded-full">+49%</div> */}
            </>
          ) : (
            <div className="text-lg font-semibold text-slate-800 dark:text-slate-100">אין נתונים</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default IncomesCard;
