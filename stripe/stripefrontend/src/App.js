import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import StripeCheckout from 'react-stripe-checkout'

function App() {
        const [product, setProduct] = useState({
          name: 'Name of the selling product',
          price: 10,
          powerdBy: 'Branding name like itc, xyz, etc.'
        })

        const makePayment = token =>{
          const body ={
            token,
            product
          }

          const header ={
            'Content-Type':'application/json'
          }

          return fetch("http://localhost:8484/payment", {
            method: 'POST',
            header,
            body:JSON.stringify(body)
          })
          .then(response => {
            console.log("RESPONSE ", response);
            const { status } = response;
            console.log("STATUS ", status);
          })
          .catch(error => console.log(error));

        };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Payment Gatway Test.
        </p>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <StripeCheckout 
        stripeKey='pk_test_51KsFmaSA7yTnk5MFU7PDTrApzfWxqoBVFWM3hRZC4guqmENojbDIkS0VNU441Hmjn9ZVrkFLyu62IH7YdeX7P0l000ZhSfSP7q'
        token={makePayment}
        name='Buy Stuff'
        amount={product.price*100}>
        <button className='btn-large blue'> Buy Now {product.price} $</button>
        </StripeCheckout>
      </header>
    </div>
  );
}

export default App;
