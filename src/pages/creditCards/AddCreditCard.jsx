// import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';
// import getCreditCardData from '../../functions/credit_cards/getCreditCardData';
// import addCreditCard from '../../functions/credit_cards/addCreditCard';

// function AddCreditCard() {
//   const [show, setShow] = useState(false);
//   const [creditCards, setCreditCards] = useState([]);
//   const [data, setData] = useState({
//     name:'',
//     day_of_charge:'',
//     credit_type: '',
//     line_of_credit: '',
//     last_four_digits:'',
//     status: '',
//   });

//   const token = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')).access : null;

//   useEffect(() => {
//     if (token) {
//       getCreditCardData(token, setCreditCards);
//     }
//   }, [token]);

//   const handleClose = () => {
//     setShow(false);
//     setData({
//       name:'',
//       day_of_charge:'',
//       credit_type: '',
//       line_of_credit: '',
//       last_four_digits:'',
//       status: '',
//     });
//   };

//   const handleShow = () => setShow(true);

//   const handleChange = (e) => {
//     setData({
//       ...data,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted');
//     addCreditCard(token, setCreditCards, data, handleClose);
//   };

//   return (
//     <>
//      <Button onClick={handleShow} variant="outline-primary" type="button" className="d-flex align-items-center">
//         <span className="ml-2">הוסף אשראי</span>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="16"
//           height="16"
//           fill="currentColor"
//           className="bi bi-plus-lg"
//           viewBox="0 0 16 16"
//         >
//           <path
//             fillRule="evenodd"
//             d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
//           />
//         </svg>
//       </Button>

   
//       <Modal show={show} onHide={handleClose} centered dir="rtl">
//         <Modal.Header>
//           <Modal.Title>פרטי אשראי</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="formName">
//               <Form.Label>שם האשראי<span className="text-rose-500">*</span></Form.Label>
//               <Form.Control
//                 as="select"
//                 name="name"
//                 value={data.name}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value=""></option>
//                 <option value="Visa">Visa</option>
//                 <option value="Mastercard">Mastercard</option>
//                 <option value="American Express">American Express</option>
//                 <option value="Diners">Diners</option>
//               </Form.Control>
//             </Form.Group>

//             <Form.Group controlId="formDayOfCharge">
//               <Form.Label>יום חיוב<span className="text-rose-500">*</span></Form.Label>
//               <Form.Control
//                 as='select'
//                 name="day_of_charge"
//                 value={data.day_of_charge}
//                 onChange={handleChange}
//                 required
//                 >
//                 <option value=""></option>
//                 <option value="2">2</option>
//                 <option value="10">10</option>
//                 <option value="15">15</option>

//                 </Form.Control>

//             </Form.Group>



//             <Form.Group controlId="formCreditType">
//               <Form.Label>סוג הכרטיס<span className="text-rose-500">*</span></Form.Label>
//               <Form.Control
//                 as='select'
//                 name="credit_type"
//                 value={data.credit_type}
//                 onChange={handleChange}
//                 required
//                 >
//                 <option value=""></option>
//                 <option value="Debit">Debit</option>
//                 <option value="Credit">Credit</option>
//                 </Form.Control>
//             </Form.Group>

//             <Form.Group controlId="formLineOfCredit">
//               <Form.Label>מסגרת אשראי<span className="text-rose-500">*</span></Form.Label>
//               <Form.Control
//                 type="number"
//                 name="line_of_credit"
//                 value={data.line_of_credit}
//                 onChange={handleChange}
//                 required
//               />


//             </Form.Group>

//             <Form.Group controlId="formLastFourDigits">
//               <Form.Label>4 ספרות אחרונות<span className="text-rose-500">*</span></Form.Label>
//               <Form.Control
//                 type="input"
//                 name="last_four_digits"
//                 value={data.last_four_digits}
//                 onChange={handleChange}
//                 required
//                 minLength={4}
//                 maxLength={4}
//               />

//             </Form.Group>
//             <Form.Group controlId="formStatus">
//               <Form.Label>סטטוס<span className="text-rose-500">*</span></Form.Label>
//               <Form.Control
//                 as="select"
//                 name="status"
//                 value={data.status}
//                 onChange={handleChange}
//                 required
//               >
//                  <option value=""></option>
//                 <option value="פעיל">פעיל</option>
//                 <option value="חסום">חסום</option>
//               </Form.Control>
//             </Form.Group>

//             <Button variant="success" type="submit" className="mt-3">
//               הוסף
//             </Button>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" type="submit" onClick={handleClose}>
//             סגור
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default AddCreditCard;
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import getCreditCardData from '../../functions/credit_cards/getCreditCardData';
import addCreditCard from '../../functions/credit_cards/addCreditCard';

function AddCreditCard({ onCardAdded }) {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    name: '',
    day_of_charge: '',
    credit_type: '',
    line_of_credit: '',
    last_four_digits: '',
    status: '',
  });

  const [creditCards, setCreditCards] = useState([]);

  const token = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')).access : null;

  useEffect(() => {
    if (token) {
      getCreditCardData(token, setCreditCards);
    }
  }, [token]);

  const handleClose = () => {
    setShow(false);
    setData({
      name: '',
      day_of_charge: '',
      credit_type: '',
      line_of_credit: '',
      last_four_digits: '',
      status: '',
    });
  };

  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting credit card data:', data); // Debugging
    try {
      await addCreditCard(token, setCreditCards, data, handleClose);
      if (onCardAdded) onCardAdded(); // Notify parent component about the new card
    } catch (error) {
      console.error('Failed to add credit card:', error);
    }
  };

  return (
    <>
      <Button onClick={handleShow} variant="outline-primary" type="button" className="d-flex align-items-center">
        <span className="ml-2">הוסף אשראי</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-plus-lg"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
          />
        </svg>
      </Button>

      <Modal show={show} onHide={handleClose} centered dir="rtl">
        <Modal.Header closeButton>
          <Modal.Title>פרטי אשראי</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>שם האשראי<span className="text-rose-500">*</span></Form.Label>
              <Form.Control
                as="select"
                name="name"
                value={data.name}
                onChange={handleChange}
                required
              >
                <option value="">בחר</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="American Express">American Express</option>
                <option value="Diners">Diners</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formDayOfCharge">
              <Form.Label>יום חיוב<span className="text-rose-500">*</span></Form.Label>
              <Form.Control
                as='select'
                name="day_of_charge"
                value={data.day_of_charge}
                onChange={handleChange}
                required
              >
                <option value="">בחר</option>
                <option value="2">2</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formCreditType">
              <Form.Label>סוג הכרטיס<span className="text-rose-500">*</span></Form.Label>
              <Form.Control
                as='select'
                name="credit_type"
                value={data.credit_type}
                onChange={handleChange}
                required
              >
                <option value="">בחר</option>
                <option value="Debit">Debit</option>
                <option value="Credit">Credit</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formLineOfCredit">
              <Form.Label>מסגרת אשראי<span className="text-rose-500">*</span></Form.Label>
              <Form.Control
                type="number"
                name="line_of_credit"
                value={data.line_of_credit}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formLastFourDigits">
              <Form.Label>4 ספרות אחרונות<span className="text-rose-500">*</span></Form.Label>
              <Form.Control
                type="input"
                name="last_four_digits"
                value={data.last_four_digits}
                onChange={handleChange}
                required
                minLength={4}
                maxLength={4}
              />
            </Form.Group>

            <Form.Group controlId="formStatus">
              <Form.Label>סטטוס<span className="text-rose-500">*</span></Form.Label>
              <Form.Control
                as="select"
                name="status"
                value={data.status}
                onChange={handleChange}
                required
              >
                <option value="">בחר</option>
                <option value="פעיל">פעיל</option>
                <option value="חסום">חסום</option>
              </Form.Control>
            </Form.Group>

            <Button variant="success" type="submit" className="mt-3">
              הוסף
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            סגור
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCreditCard;
