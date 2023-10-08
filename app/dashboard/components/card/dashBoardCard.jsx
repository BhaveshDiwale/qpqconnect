"use client"

import React, { useState } from 'react';
import './card.scss'
import Rating from '@mui/material/Rating';
import Image from 'next/image';

const DashBoardCard = () => {
    const [value, setValue] = React.useState(2);

    const rows = [
        {
            id: 1143155,
            name: "Acer Nitro 5",
            img: "https://images.unsplash.com/photo-1568739253582-afa48fbcea47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
            role: "Michael Doe",
        },
        {
            id: 2235235,
            name: "Playstation 5",
            img: "https://images.unsplash.com/photo-1532170579297-281918c8ae72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1784&q=80",
            role: "Michael Doe",

        },
    ]
    return (
        <div className='p-4'>
            <div style={title}>Welcome Gorge</div>
            <div className='container row mx-auto p-2 rounded pb-3 mt-4' style={{ border: "1px solid #F4F4F4" }}>
                <div className='col-md-4 col-12'>
                    <div className="shadow-sm rounded p-4 desktop-card mt-2">
                        <div className="card-body">
                            <div style={companyDetail}>Company Detail</div>
                            <h4 style={userName} className='mt-3'>Nidhi Vision pvt Ltd</h4>
                            <p style={infoStyle}>254, Nabalia para Road, Basisha, Gr, Floor Flat No. G2, Near Behala Chowrasta, Pluse, Diagonstics, Kolkata, West Bangal, 700008 </p>
                            <Image
                                src="/svg/verified.svg"
                                alt="id-badge"
                                // style={iconStyle}
                                width={70} height={22}
                            />
                            <a href="#" className="btn d-flex justify-content-end text-black">Add Business Detail</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-12'>
                    <div className="shadow-sm rounded p-4 desktop-card mt-2">
                        <div className="card-body">
                            <h4 style={companyDetail}>Admin Detail</h4>
                            <div className='row mt-3'>
                                {rows.map((row) => (
                                    <div className='d-flex justify-content-center mt-2' key={row.id}>
                                        <div className='col-3 mt-1'>
                                            <Image
                                                src={row.img}
                                                alt={row.img}
                                                className='admin-detail-profile'
                                                width={40} height={40}
                                            />
                                        </div>
                                        <div className='col-9 mt-2'>
                                            <h6 style={adminInfo}>{row.name}</h6>
                                            <h6 style={adminName}>{row.role}</h6>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-12'>
                    <div className="shadow-sm rounded p-4 desktop-card mt-2">
                        <div className="card-body">
                            <div className='row'>
                                <div className='col-md-6 col-12'>
                                    <h4 style={companyDetail}>Member Since</h4>
                                    <p style={infoStyle}>2 Year</p>
                                    <div className="d-flex flex-column mb-3">
                                        <h4 style={companyDetail}>Rating</h4>
                                        <Rating
                                            name="simple-controlled"
                                            value={value}
                                            size="small"
                                            onChange={(event, newValue) => {
                                                setValue(newValue);
                                            }}
                                        />
                                    </div>
                                    <h4 style={companyDetail}>Business Type</h4>
                                    <p style={infoStyle}>Clothing</p>
                                </div>
                                <div className='col-md-6 col-12 text-center'>
                                    <h4 style={companyDetail}>Profile complete</h4>
                                    <Image
                                        src="/svg/Sharts.svg"
                                        alt="id-badge"
                                        width={120} height={120}
                                        className='mx-auto mt-4'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const title = {
    fontSize: "24px",
    color: "#000",
    fontWeight: "800",
}

const companyDetail = {
    fontSize: "18px",
    color: "#000",
    fontWeight: "700",
}

const userName = {
    fontSize: "18px",
    color: "#000",
    fontWeight: "600",
}

const infoStyle = {
    color: "#8B909A",
    fontSize: "14px",
    fontWeight: "500",
}

const adminInfo = {
    color: "#1D1F2C",
    fontSize: "16px",
    fontWeight: "700",
}

const adminName = {
    color: "#1D1F2C",
    fontSize: "14px",
    fontWeight: "500",
}

export default DashBoardCard;