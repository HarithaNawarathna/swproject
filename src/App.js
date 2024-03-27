import React, { useState, useEffect } from 'react';
import './App.css';

function CheckoutButton() {
  return (
    <button className="checkoutButton">
      <span className="checkoutButtonText">Checkout</span>
    </button>
  );
}

const TicketType = ({ price, ticketPrice, updateOrderSummary }) => {
    const [quantity, setQuantity] = useState(0);
  
    const increaseQuantity = () => {
      setQuantity(prevQuantity => prevQuantity + 1);
    };
  
    const decreaseQuantity = () => {
      setQuantity(prevQuantity => prevQuantity - 1);
    };
  
    useEffect(() => {
      updateOrderSummary(price, quantity);
    }, [quantity]);  // Update on any quantity change
  

  return (
    <div className="ticketType">
      <span className="ticketTypePrice">{price}</span>
      <div className="quantityContainer">
        <button onClick={decreaseQuantity}>-</button>
        <span className="quantity">{quantity}</span>
        <button onClick={increaseQuantity}>+</button>
      </div>
    </div>
  );
};

// ... the rest of the code remains unchanged


const Selecttickets = ({ navigation }) => {
    const [orderSummary, setOrderSummary] = useState({
        totalQuantity: 0,
        totalPrice: 0,
    });
    const ticketPrice = 1000; // replace with the actual ticket price

    const updateOrderSummary = (price, quantity) => {
        const totalPrice = orderSummary.totalPrice + (quantity * ticketPrice);
        const totalQuantity = orderSummary.totalQuantity + quantity;
        setOrderSummary({ totalQuantity, totalPrice });
    };

    const ticketTypes = ["Price 01", "Price 02", "Price 03"];

    return (
        <div className="container">
            <div className="header">
                <span className="headerText">Select Your Tickets</span>
            </div>

            <div className="ticketContainer">
                <div className="ticketDetails">
                    <span className="typetext">Type</span>
                    <span className="pricetext">Price</span>
                    <span className="selectTicketstext">Select Tickets</span>
                    <span className="amounttext">Amount</span>
                </div>
            </div>

            

            <div className="ticketTypeTitle">
                {ticketTypes.map((price, index) => (
                    <TicketType key={index} price={price} ticketPrice={ticketPrice} updateOrderSummary={updateOrderSummary} />
                ))}
            </div>

            <div className="orderSummaryContainer">
                <span className="orderSummaryTitle">Order Summary</span>
                <div className="orderSummaryItem">
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <span className="orderSummaryText">Quantity</span>
                        <span className="orderSummaryText">{orderSummary.totalQuantity}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <span className="orderSummaryText">Total</span>
                        <span className="orderSummaryText">{orderSummary.totalPrice}</span>
                    </div>
                </div>
            </div>

            <CheckoutButton />
        </div>
    );
}

export default Selecttickets;
