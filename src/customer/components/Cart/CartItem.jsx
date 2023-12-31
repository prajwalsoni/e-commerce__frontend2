import React from 'react'

const CartItem = () => {
    return (
        <div className='p-5 shadow-lg border rounded-md'>
            <div className='flex items-center'>
            
            <div className='w-[5rem] h-[10rem] lg:w-[9rem] lg:h[9rem]'>
                <img className='w-full h-full object-cover object-top' src="https://rukminim2.flixcart.com/image/832/832/xif0q/kurta/7/w/l/l-foil-printed-kurta-cellux-original-imagnbf2rrzdykr9.jpeg?q=70" alt=""/>
        
            </div>
             <div className='ml-5 space-y-1'>
                <p className='font-semibold'>Men Slim Kurta </p>
                <p className='opacity-70'>Size : L , White</p>
                <p className='opacity-70 mt-2'>Seller: Soni Fashions</p>
                <div className='flex space-x-5 items-center text-gray-900 mt-g'>
                                <p className='font-semibold'>₹199</p>
                                <p className='opacity-50 line-through'>₹211</p>
                                <p className='text-green-600 font-semibold'>5% off</p>
                            </div>

             </div>
            </div>
            
        </div>
    )
}
export default CartItem