import { Grid } from '@mui/material'
import React from 'react'
import { Box } from '@mui/material';
import AdjustIcon from '@mui/icons-material/Adjust';
const OrderCard = ({ item, order }) => {

    return (
        <Box className="p-5 shadow-lg hover:shadow-2xl border ">
            <Grid spacing={2} container sx={{ justifyContent: "space-between" }}>
                <Grid item xs={6}>
                    <div

                        className="flex cursor-pointer"
                    >
                        <img
                            className="w-[5rem] h-[5rem] object-cover object-top"
                            src="https://rukminim2.flixcart.com/image/832/832/xif0q/kurta/7/w/l/l-foil-printed-kurta-cellux-original-imagnbf2rrzdykr9.jpeg?q=70"
                            alt=""
                        />
                        <div className="ml-5">
                            <p className="mb-2">Men Slim Mid Rise Black Kurta</p>
                            <p className="opacity-50 text-xs font-semibold space-x-5">
                                <span>Size: M</span>
                            </p>
                            <p className="opacity-50 text-xs font-semibold space-x-5">Color: Multi </p>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={2}>
                    <p>₹1099</p>
                </Grid>
                <Grid item xs={4}>
                    {true &&<div><p>
                        <AdjustIcon
                            sx={{ width: "15px", height: "15px" }}
                            className="text-green-600 p-0 mr-2 text-sm"
                        />
                        <span>
                            Delivered on March 13
                        </span>
                        
                    </p></div> }
                    <p className='text-xs'>
                         Your Item Has Been Delivered
                    </p>
                    {false && <p>
                        <span>
                            Expected Delivery on March 03
                        </span>
                    </p>}
                </Grid>

            </Grid>
        </Box>
    );
};

export default OrderCard;
