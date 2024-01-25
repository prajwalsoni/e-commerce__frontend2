import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../../State/Admin/Order/Action'
import { Avatar, AvatarGroup, Button, Card, CardHeader, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { Start } from '@mui/icons-material'

const OrdersTable = () => {
      const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    const dispatch = useDispatch()
    const { adminOrder } = useSelector(store => store)

    useEffect(() => {
        dispatch(getOrders())
    }, [])
    console.log("admin Orders", adminOrder)
    return (
        <div className='p-10'>
            <Card className="mt-2">
                <CardHeader
                    title="All Products"
                    sx={{ fontFamily: 'Gill Sans, sans-serif' }}
                />

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Image</TableCell>
                                <TableCell align="left">Title</TableCell>
                                <TableCell align="left">Id</TableCell>
                                <TableCell align="left">Price</TableCell>
                                <TableCell align="left">Status</TableCell>
                                <TableCell align="left">Update</TableCell>
                                <TableCell align="left">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {adminOrder.orders?.map((item) => (
                                <TableRow
                                    key={item.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="" className=''>
                                        <AvatarGroup max={3} sx={{ justifyContent: "start" }}>
                                            {item.orderItems.map((orderItem) => <Avatar src={orderItem.product.imageUrl}></Avatar>)}
                                        </AvatarGroup>
                                    </TableCell>
                                    <TableCell align="left" scope="row">
                                        
                                            {item.orderItems.map((orderItem) =>
                                                <p>
                                                    {orderItem.product.title}
                                                </p>)}
                                       
                                        {/* {item.title} */}
                                    </TableCell>
                                    <TableCell align="left">{item.id}</TableCell>
                                    <TableCell align="left">{item.totalPrice}</TableCell>
                                    <TableCell align="left"><span className={`text-white px-5 py-2 rounded-full
                                        ${item.orderStatus==="CONFIRMED"?"bg-[#45CE30]":
                                        item.orderStatus==="SHIPPED"?"bg-[#0ABDE3]":
                                        item.orderStatus==="PLACED"?"bg-[#7CEC9F]":
                                        item.orderStatus=="PENDING"?"bg-[gray]":
                                        "bg-[#EA7773]"}`}
                                        >{item.orderStatus}</span></TableCell>
                                    <TableCell align="left">
                                    <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Status
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Confirmed</MenuItem>
        <MenuItem onClick={handleClose}>Order Shipped</MenuItem>
        <MenuItem onClick={handleClose}>Delivered</MenuItem>
      </Menu>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Button
                                            variant='outlined'>Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card></div>
    )
}
export default OrdersTable