import { Grid } from '@mui/material'
import React from 'react'
import Achievements from './Achievements'
import MonthlyOverview from './MonthlyOverview'
import OrdersTableVu from './OrdersTable'
import ProductsTable from './ProductsTable'
import OrdersTable from './OrdersTable'
import OrderTableView from '../view/OrderTableView'
import ProductTableView from '../view/ProductTableView'

const AdminDashboard = () => {
    return(
        <div className='px-10'>
            <Grid container spacing = {3} >
                <Grid item  xs={12} md={4}>
                    <div className='shadow-lg shadow-gray-600'>
                    <Achievements/>
                    </div>
                </Grid>    
                <Grid  
                 item  xs = {12}  md={8} >
                    <div className='shadow-lg shadow-gray-600' >
                    <MonthlyOverview/>
                    </div>
                </Grid>      
                 <Grid 
                 item xs = {12}  md={6} >
                    <div className='shadow-lg shadow-gray-600'>
                    <OrderTableView/>
                    </div>
                </Grid>    
                <Grid 
                 item xs = {12}  md={6} >
                    <div className='shadow-lg shadow-gray-600'>
                    <ProductTableView/>
                    </div>
                </Grid>    
            </Grid>
        </div>
    )
}
export default AdminDashboard