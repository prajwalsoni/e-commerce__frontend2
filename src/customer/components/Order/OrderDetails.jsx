import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { StarIcon } from '@heroicons/react/24/outline'
import { deepPurple } from '@mui/material/colors'

const OrderDetails = () => {
    return (
        <div className='px-5 lg:px-20'>
            <div>
                <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
                <AddressCard />
            </div>

            <div className='py-20'>
                <OrderTracker activeStep={3} />
            </div>
            <Grid className='space-y-5' container>
                {[1,1,1,1,1].map((item)=><Grid item container className='shadow-xl rounded-md p-5 border' sx={{ alignItems: "center", justifyContent: 'space-between' }}>
                    <Grid item xs={6}>
                        <div className='flex items-center space-x-4'>
                            <img className='w-[8rem] h-[8rem] object-cover object-top' src="https://rukminim2.flixcart.com/image/832/832/xif0q/kurta/7/w/l/l-foil-printed-kurta-cellux-original-imagnbf2rrzdykr9.jpeg?q=70" alt="" />

                            <div className='space-y-2 ml-5'>
                                <p className='font-semibold'>Men Slim Rise Kurta</p>
                                <p className='space-x-5 opacity-50 text-xs font-semibold'><span>Color:Pink</span><span>Size:M</span></p>
                                <p>Seller:Soni Enterprises</p>
                                <p>₹1099</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item>
              {
                <Box
                  sx={{ color: deepPurple[500] }}
                 
                  className="flex items-center cursor-pointer"
                >
                  <StarIcon
                    sx={{ fontSize: "2rem" }}
                    className="px-2 text-5xl"
                  />
                  <span>Rate & Review Product</span>
                </Box>
              }
            </Grid>
                </Grid>)}
                
            </Grid>


        </div>
    )
}
export default OrderDetails