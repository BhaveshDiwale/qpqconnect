"use client";

import "./dashboard.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/sidebar/Sidebar";
import DashboardTable from "./components/table/DashboardTable";
import DashBoardCard from "./components/card/dashBoardCard";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from "next/link";
import { getCookie } from 'cookies-next';
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function ProfilePage() {
    return (
        <>
            <div className='home'>
                <Sidebar />
                <div className='homeContainer'>
                    <DashboardNavbar />
                    <DashBoardCard />
                    <div className="listContainer">
                        <DashboardTable />
                    </div>
                </div>
            </div>
        </>
    )
}

const settings = [
    { name: 'Business Details', nav: "/dashboard/businessDetails" },
    { name: 'User Management', nav: "/dashboard/userManagement" },
    { name: 'Tax Information', nav: "/dashboard/taxInformation" },
    { name: 'Type and Services', nav: "/dashboard/typeAndServices" },
    { name: 'Admin details', nav: "/dashboard/adminDetails" },
    { name: 'Add Products', nav: "/dashboard/addProducts" },
    { name: 'Product List', nav: "/dashboard/productList" },
    { name: 'RFQ Income', nav: "/dashboard/rfqIncome" },
];

const menus = [
    { name: 'Dashboards', nav: "/dashboard" },
    { name: 'Logout', nav: "/dashboard/userManagement" },
];

export const DashboardNavbar = () => {
    const router = useRouter();
    const currentUserData = getCookie("userData");
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleBellPress = () => {
        router.push("/notifications")
    }

    return (
        <AppBar position="static" elevation={0}>
            <Container maxWidth="xl" style={{ backgroundColor: "#fff" }}>
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Link href="/" style={title}>
                            {JSON.parse(currentUserData)?.name}
                        </Link>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open Notifications">
                            <IconButton onClick={handleBellPress} sx={{ p: 0 }} className="mx-4">
                                <Image src="/svg/bell.svg" width={32} height={32} alt="Bell Icon" />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Open Menu">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Image src="/images/avatar.png" width={38} height={38} alt="Profile Icon" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {menus.map((setting, key) => (
                                <MenuItem key={key} onClick={handleCloseUserMenu}>
                                    <Link href={setting?.nav} style={menuItems}>{setting?.name}</Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="#000"
                            className="ms-auto"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            // keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {settings.map((setting, key) => (
                                <MenuItem key={key} onClick={handleCloseUserMenu}>
                                    <Link href={setting?.nav} style={menuItems}>{setting?.name}</Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

const title = {
    fontSize: "24px",
    color: "#000",
    fontWeight: "800",
    textDecoration: "none"
}

const menuItems = {
    fontSize: "14px",
    color: "#000",
    fontWeight: "400",
    textDecoration: "none"
}
