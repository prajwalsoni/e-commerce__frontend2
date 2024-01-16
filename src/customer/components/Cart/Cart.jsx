import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/base'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../../../State/Cart/Action'
import { store } from '../../../State/store'
const Cart = () => {

    const navigate=useNavigate();
    const {cart}=useSelector(store=>store)
    const dispatch=useDispatch()
    const handleCheckout=()=>{
        navigate("/checkout?step=2")
    }

    useEffect(() => {
        dispatch(getCart())
    },[cart.updateCartItem,cart.deleteCartItem])
    return (
        <div className="lg:grid grid-cols-3 lg:px-16 relative">
            <div className="lg:col-span-2 lg:px-5 bg-white">
                <div className=" space-y-3">
                    {cart.cart?.cartItems.map((item)=><CartItem item ={item}/>)}
                </div>
            </div>
            <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
                <div className="border p-5 bg-white shadow-lg rounded-md">
                    <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
                    <hr />
                    <div className="space-y-3 font-semibold mb-10">
                        <div className="flex justify-between pt-3 text-black ">
                            <span>Price </span>
                            <span>₹{cart.cart?.totalPrice}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Discount</span>
                            <span className="text-green-700">₹{cart.cart?.discounte}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Delivery Charges</span>
                            <span className="text-green-700">Free</span>
                        </div>
                        <hr />
                        <div className="flex justify-between font-bold text-lg">
                            <span>Total Amount</span>
                            <span className="text-green-700">₹{cart.cart?.totalDiscountedPrice}</span>
                        </div>
                        <Button onClick={handleCheckout}
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
    )
}
export default Cart