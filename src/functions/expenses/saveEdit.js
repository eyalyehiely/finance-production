import axios from '../axiosConfig'
import swal from 'sweetalert';
import fetchExpensesData from '/src/functions/expenses/fetchExpensesData.js';

export default function saveEdit(token, editedExpense, editingExpenseId, setExpenses) {
  if (!editedExpense || !token || !editingExpenseId) {
    console.error('Invalid input to saveEdit:', { editedExpense, token, editingExpenseId });
    return;
  }

  const editedData = {
    payment_method: editedExpense.payment_method || '',
    date_and_time: editedExpense.date_and_time || '',
    name: editedExpense.name || '',
    price: editedExpense.price ? String(editedExpense.price).replace(/,/g, '') : '',
    credit_card: editedExpense.credit_card || '',
    category: editedExpense.category || '',
    expense_type: editedExpense.expense_type || '',
  };

  axios.put(`/expenses/edit_expense/${editingExpenseId}/`, editedData, {
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
  })
    .then(response => {
      if (response.data.status === 200) {
        swal({
          title: "Success!",
          title: "הוצאה נשמרה בהצלחה !",
          icon: "success",
          timer:2000,
          button: false,
        });
        setExpenses(expenses => expenses.map(expense => expense.id === editingExpenseId ? response.data.expense : expense));
        fetchExpensesData(token, setExpenses);
        window.location.reload()
      } else {
        console.log('Error:', response.data.message);
        // Adjust error handling as needed
      }
    })
    .catch(error => {
      console.error('There was an error!', error);

    });
}
