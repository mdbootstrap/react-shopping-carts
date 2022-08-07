import React from 'react';
import { createRoot } from "react-dom/client";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import reportWebVitals from './reportWebVitals';
import Basic from './basic/Basic';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import QuantityEdit from './quantityEdit/QuantityEdit';
import PaymentMethods from './paymentMethods/PaymentMethods';
import ProductCards from './productCards/ProductCards';
import CartCheckout from './cartCheckout/CartCheckout';
import ReviewPage from './reviewPage/ReviewPage';
import SummaryPage from './summaryPage/SummaryPage';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/basic" element={<Basic />} />
        <Route path="/quantity" element={<QuantityEdit />} />
        <Route path="/payment" element={<PaymentMethods />} />
        <Route path="/product-cards" element={<ProductCards />} />
        <Route path="/cart-checkout" element={<CartCheckout />} />
        <Route path="/review-page" element={<ReviewPage />} />
        <Route path="/summary-page" element={<SummaryPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
