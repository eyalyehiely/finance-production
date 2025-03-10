import axios from '../axiosConfig'
import swal from 'sweetalert';
import fetchDebtData from './fetchDebtData';

export default function deleteDebt(id,token,setDebts) {
    swal({
      title: "האם אתה בטוח?",
      text: "ברגע שתלחץ על אישור לא יהיה ניתן לשחזר את המידע",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios.delete(`/debts/delete_debt/${id}/`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          }
        }).then((response) => {
          swal({
            title: " !🗑️החוב נמחק בהצלחה",
            icon: "success",
            timer:2000,
            button: false,
          }).then(() => {
            fetchDebtData(token,setDebts);  
          });
        }).catch((error) => {
          console.error("Error deleting debt:", error);
          swal({
            title: "Ⅹ!שגיאה ",
            text: "An error occurred while deleting the debt.",
            icon: "warning",
            button: "אישור",
          });
        });
      } else {
        swal("הנתונים שלך בטוחים");
      }
    });
  }