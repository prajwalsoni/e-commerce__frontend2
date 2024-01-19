import { Box, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import InboxIcon from '@mui/icons-material/Inbox';
import EmailIcon from '@mui/icons-material/Email';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreateProductForm from './components/CreateProductForm';
import Dashboard from './components/AdminDashboard';
import ProductsTable from './components/ProductsTable';
import OrdersTable from './components/OrdersTable';
import CustomersTable from './components/CustomersTable';
import AdminDashboard from './components/AdminDashboard';





const menu = [
    { name: "Dashboard", path: "/admin", icon: <SpaceDashboardIcon /> },
    { name: "Products", path: "/admin/products", icon: <SpaceDashboardIcon /> },
    { name: "Customers", path: "/admin/customers", icon: <SpaceDashboardIcon /> },
    { name: "Orders", path: "/admin/orders", icon: <SpaceDashboardIcon /> },
    { name: "Add Product", path: "/admin/product/create", icon: <SpaceDashboardIcon /> },
    // {name:"",path: " "},
];

const Admin = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible, setSideBarVisible] = React.useState(false);
    const navigate = useNavigate();
    const drawer = (
        <Box
            sx={{
                overflow: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%"
            }}
        >
            <>
                {/* {isLargeScreen && <Toolbar />} */}
                <List>
                    {menu.map((item, index) => (
                        <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
                            <ListItemButton>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.name} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </>

            <List >
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText>Account</ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
    return (
        <div>
            <div className='flex h-[100vh]'>
                <CssBaseline />
                <div className='w-[15%]'>
                    {drawer}
                </div>
                <div className='w-[85%] border border-r-gray-300 h-full'>
                    <Routes>
                        <Route path="/" element={<AdminDashboard />}></Route>
                        <Route path="/product/create" element={<CreateProductForm />}></Route>
                        <Route path="/products" element={<ProductsTable />}></Route>
                        <Route path="/orders" element={<OrdersTable />}></Route>
                        <Route path="/customers" element={<CustomersTable />}></Route>
                    </Routes>

                </div>
            </div>
        </div>
    )
}
export default Admin