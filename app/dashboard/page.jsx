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
    { name: 'Business Details' },
    { name: 'User Management' },
    { name: 'Tax Information' },
    { name: 'Type and Services' },
    { name: 'Admin details' },
    { name: 'Add Products' },
    { name: 'Product List' },
    { name: 'RFQ Income' },
];

const menus = [
    { name: 'Dashboards' },
    { name: 'Logout' },
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

    const returnUserName = () => {
        if (currentUserData) {
            return JSON?.parse(currentUserData)?.name
        }
    }

    return (
        <AppBar position="static" elevation={0}>
            <Container maxWidth="xl" style={{ backgroundColor: "#fff" }}>
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Link href="/" style={title}>
                            {returnUserName()}
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
                            <MenuItem onClick={handleCloseUserMenu}>
                                <a href="/dashboard/" style={menuItems}>{menus[0]?.name}</a>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <a href="/dashboard/" style={menuItems}>{menus[1]?.name}</a>
                            </MenuItem>
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
                            <MenuItem onClick={handleCloseUserMenu}>
                                <a href="/dashboard/businessDetail" style={menuItems}>{settings[0]?.name}</a>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <a href="/dashboard/userManagement" style={menuItems}>{settings[1]?.name}</a>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <a href="/dashboard/taxInformation" style={menuItems}>{settings[2]?.name}</a>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <a href="/dashboard/typeServices" style={menuItems}>{settings[3]?.name}</a>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <a href="/dashboard/adminDetail" style={menuItems}>{settings[4]?.name}</a>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <a href="/dashboard/addProduct" style={menuItems}>{settings[5]?.name}</a>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <a href="/dashboard/addProduct" style={menuItems}>{settings[6]?.name}</a>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <a href="/dashboard/rfqIncome" style={menuItems}>{settings[7]?.name}</a>
                            </MenuItem>
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
