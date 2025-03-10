
// import axios from '../axiosConfig'
// import swal from 'sweetalert';

// export default function fetchIncomesData(token,setIncomes) {
//     axios.post('/incomes/get_all_incomes/', {}, {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       }
//     }).then(response => {
//       if (response.data.status === 200) {
//         setIncomes(response.data.all_incomes);
        
//       } else {
//         console.log('Error:', response.data.message);
//         swal({
//           title: "Ⅹ!שגיאה ",
//           text: `שגיאת frontend: ${response.data.message}`,
//           icon: "warning",
//           button: "אישור",
//         });
//       }
//     }).catch(error => {
//       console.error('There was an error!', error);
//       swal({
//         title: "שגיאה!",
//         text: "שגיאת BACKEND",
//         icon: "warning",
//         button: "אישור",
//       });
//     });
//   }
import axios from '../axiosConfig';
import swal from 'sweetalert';

export default function fetchIncomesData(token, setIncomes) {
  axios.post('/incomes/get_all_incomes/', {}, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then(response => {
    // Check the status code directly if your backend uses HTTP status codes
    if (response.status === 200) {
      // Assuming 'response.data.all_incomes' contains the array of incomes
      setIncomes(response.data.all_incomes);
    } else {
      console.log('Error:', response.data.message);
      swal({
        title: "Ⅹ!שגיאה",
        text: `שגיאת frontend: ${response.data.message}`,
        icon: "warning",
        button: "אישור",
      });
    }
  }).catch(error => {
    console.error('There was an error!', error);
    swal({
      title: "שגיאה!",
      text: "שגיאת BACKEND",
      icon: "warning",
      button: "אישור",
    });
  });
}

