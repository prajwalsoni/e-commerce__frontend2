import { ThemeProvider } from "@emotion/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../customer/pages/HomePage";
import Checkout from "../customer/components/Checkout/Checkout";
import OrderDetails from "../customer/components/Order/OrderDetails";
import Order from "../customer/components/Order/Order";
import Navigation from "../customer/components/Navigation/Navigation";
import Product from "../customer/components/Product/Product";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import Cart from "../customer/components/Cart/Cart";
import Footer from "../customer/components/Footer/Footer";
const CustomerRoutes = () => {
    return (
        <div>
        
        <div>
            <Navigation />
        </div>
       
         <Routes>
         
    
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product />}></Route>
            <Route path="/product/:productId" element={<ProductDetails />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="/account/order" element={<Order/>}></Route>
            <Route path="/account/order/:orderId" element={<OrderDetails />}></Route>
           
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
          <div>
            <Footer/>
        </div>
          
        </div>
      );
    };
    
    export default CustomerRoutes;