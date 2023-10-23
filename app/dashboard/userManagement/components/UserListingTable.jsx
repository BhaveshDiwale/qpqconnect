"use client"

import React from 'react';
import './UserListingTable.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "bootstrap/dist/css/bootstrap.min.css";
import Typography from "@mui/material/Typography";


const rows = [
    {
        id: 1,
        img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
        customer: "John Smith",
        role: "owner",
        phone: 987654321,
    },
    {
        id: 2,
        img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
        customer: "Michael Doe",
        role: "owner",
        phone: 987654321,
    },
    {
        id: 3,
        img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
        customer: "John Smith",
        role: "owner",
        phone: 987654321,
    },
    {
        id: 4,
        img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
        customer: "Jane Smith",
        role: "owner",
        phone: 987654321,
    },
    {
        id: 5,
        img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
        customer: "Harold Carol",
        role: "owner",
        phone: 987654321,
    },
];

const UserListingTable = () => {
    return (
        <TableContainer component={Paper} className="table rounded">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell colSpan={4} className="tableCell fw-bold custom-header-cell">
                            User Listing
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="tableCell fw-bold ml-5">Profile</TableCell>
                        <TableCell className="tableCell fw-bold text-center">Name</TableCell>
                        <TableCell className="tableCell fw-bold text-center">Role</TableCell>
                        <TableCell className="tableCell fw-bold text-center">Phone Number</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id} style={{ border: "0" }}>
                            <TableCell className="tableCell">
                                <div className="cellWrapper">
                                    <img src={row.img} alt="" className="image" />
                                </div>
                            </TableCell>
                            <TableCell className="tableCell text-center">{row.customer}</TableCell>
                            <TableCell className="tableCell text-center">{row.role}</TableCell>
                            <TableCell className="tableCell text-center">{row.phone}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UserListingTable;