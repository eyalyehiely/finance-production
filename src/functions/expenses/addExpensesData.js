import axios from '../axiosConfig';
import swal from 'sweetalert';
import fetchExpensesData from './fetchExpensesData';

export default async function addExpensesData(token, setExpenses, data, handleClose) {
  try {
    const response = await axios.post('/expenses/add_expense/', data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    // Add the new expense to the state
    setExpenses((prevExpenses) => [...prevExpenses, response.data]);

    swal({
      title: "💰!הוצאה נוספה בהצלחה",
      icon: "success",
      timer: 2000,
      button: false,
    }).then(() => {
      handleClose();
      // Optionally re-fetch data if you want to ensure state consistency
      fetchExpensesData(token, setExpenses);
    });
  } catch (error) {
    console.error('Error:', error.response?.data?.message || error.message);
    swal({
      title: "Ⅹ!שגיאה",
      text: error.response?.data?.message || "!שגיאת BACKEND",
      icon: "warning",
      button: "אישור",
    });
  }
}
