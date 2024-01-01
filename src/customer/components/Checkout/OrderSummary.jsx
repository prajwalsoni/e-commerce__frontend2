import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import CartItem from '../Cart/CartItem'
import { Button } from '@mui/base'

const OrderSummary = () => {
    return (
        <div>
            <div className='p-5 shadow-lg rounded-s-md border'>
              <AddressCard/>
            </div>
            <div className="lg:grid grid-cols-3 relative">
            <div className="lg:col-span-2  bg-white">
                <div className=" space-y-3">
                    {[1,1,1,1].map((item)=><CartItem/>)}
                </div>
            </div>
            <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
                <div className="border p-5 bg-white shadow-lg rounded-md">
                    <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
                    <hr />
                    <div className="space-y-3 font-semibold mb-10">
                        <div className="flex justify-between pt-3 text-black ">
                            <span>Price </span>
                            <span>₹4697</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Discount</span>
                            <span className="text-green-700">₹3419</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Delivery Charges</span>
                            <span className="text-green-700">Free</span>
                        </div>
                        <hr />
                        <div className="flex justify-between font-bold text-lg">
                            <span>Total Amount</span>
                            <span className="text-green-700">₹1278</span>
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