import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import CartItem from '../Cart/CartItem'
import { Button } from '@mui/base'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../../../State/Order/Action'
import { useLocation } from 'react-router-dom'

const OrderSummary = () => {
    const dispatch=useDispatch();
    const location = useLocation();
    const{order}=useSelector(store=>store);
    const searchParams = new URLSearchParams(location.search);
    const orderId = searchParams.get("order_id");
    
    

    useEffect(()=>{
        dispatch(getOrderById(orderId))
    },[orderId])
    
    return (
        <div>
            <div className='p-5 shadow-lg rounded-s-md border'>
              <AddressCard address={order.order?.shippingAddress}/>
            </div>
            <div className="lg:grid grid-cols-3 relative">
            <div className="lg:col-span-2  bg-white">
                <div className=" space-y-3">
                    {order.order?.orderItems.map((item)=>(<CartItem item={item}/>))}
                </div>
            </div>
            <div className="px-1 py-1 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
                <div className="border p-5 bg-white shadow-lg rounded-md">
                    <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
                    <hr />
                    <div className="space-y-3 font-semibold mb-9">
                        <div className="flex justify-between pt-3 text-black ">
                            <span>Price </span>
                            <span>₹{order.order?.totalPrice}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Discount</span>
                            <span className="text-green-700">₹{order.order?.discounte}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Delivery Charges</span>
                            <span className="text-green-700">Free</span>
                        </div>
                        <hr />
                        <div className="flex justify-between font-bold text-lg">
                            <span>Total Amount</span>
                            <span className="text-green-700">₹{order.order?.totalDiscountedPrice}</span>
                        </div>
                        <Button
                            variant="contained"
                            className='w-full mt-5'
                            style={{ backgroundColor: "#ffa500", padding: "0.7rem 2.5rem" }}
                        >
                            CheckOut
                        </Button>

                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default OrderSummary