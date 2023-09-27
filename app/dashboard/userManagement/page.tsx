"use client"

import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../components/sidebar/Sidebar";
import Typography from "@mui/material/Typography";
import './userManagement.scss';


const UserManagement = () => {
    const [name, setName] = useState("");

    return (
        <div className='home'>
            <Sidebar />
            <div className='homeContainer px-5 py-3'>
                <div style={title}>Welcome George</div>
                <h4 style={subTitle} className='mt-4 pt-1'>Add User</h4>
                <div className='col-12 col-md-12'>
                    <div className='shadow-sm rounded-xl px-4 py-3 mt-2'>
                        <form>
                            <div className="form-group mb-2 pb-1">
                                <label style={labelStyles}>Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter Name"
                                    onChange={(e) => { setName(e.target.value) }}
                                    style={inputStyle}
                                    value={name}
                                    className="form-control aboutInput"
                                />
                            </div>
                            <div className="form-group mb-2 pb-1">
                                <label style={labelStyles}>Email address</label>
                                <input
                                    type="email"
                                    placeholder="Enter email"
                                    onChange={(e) => { setName(e.target.value) }}
                                    style={inputStyle}
                                    value={name}
                                    className="form-control aboutInput"
                                />
                            </div>
                            <div className="form-group mb-2 pb-1">
                                <label style={labelStyles}>Mobile Number</label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    onChange={(e) => { setName(e.target.value) }}
                                    style={inputStyle}
                                    value={name}
                                    className="form-control aboutInput"
                                />
                            </div>
                            <div className="form-group mb-2 pb-1">
                                <label style={labelStyles}>User Role</label>
                                <input
                                    type="text"
                                    placeholder="Enter User Role"
                                    onChange={(e) => { setName(e.target.value) }}
                                    style={inputStyle}
                                    value={name}
                                    className="form-control aboutInput"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

const title: React.CSSProperties | undefined = {
    fontSize: "24px",
    color: "#000",
    fontWeight: "800",
}

const subTitle: React.CSSProperties | undefined = {
    fontSize: "18px",
    color: "#000",
    fontWeight: "800",
}

const inputStyle: React.CSSProperties | undefined = {
    border: "1px solid #E4E7E9",
    fontSize: "14px",
    color: "#000",
    fontWeight: "600",
    borderRadius: "4px",
    backgroundColor: "#F9F9FC"
}

const labelStyles: React.CSSProperties | undefined = {
    fontSize: "14px",
    color: "#777980",
    fontWeight: "700",
}

export default UserManagement;