import axios from '../axiosConfig'
import swal from 'sweetalert'
import fetchSavingsData from './fetchSavingsData';

export default function deleteSaving(id,token,setSavings) {
    swal({
      title: "האם אתה בטוח?",
      text: "ברגע שתלחץ על אישור לא יהיה ניתן לשחזר את המידע",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios.delete(`/savings/delete_saving/${id}/`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          }
        }).then((response) => {
          swal({
            title: "🗑️!החסכון נמחק בהצלחה",
            icon: "success",
            timer:2000,
            button: false,
          }).then(() => {
          fetchSavingsData(token,setSavings);
          });
        }).catch((error) => {
          console.error("Error deleting saving:", error);
          swal({
            title: "Ⅹ!שגיאה ",
            text: "An error occurred while deleting the saving.",
            icon: "warning",
            button: "אישור",
          });
        });
      } else {
        swal("הנתונים שלך בטוחים");
      }
    });
  }