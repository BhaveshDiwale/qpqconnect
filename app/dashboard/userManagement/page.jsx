"use client"

import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../components/sidebar/Sidebar";
import './userManagement.scss';
import UserListingTable from './components/UserListingTable';
import { addUserAPI, getUserProfileAPI } from '../../../apis/API';

import Select from 'react-select';

const options = [
    { value: 'manager', label: 'Manager' },
    { value: 'user', label: 'User' },
]

export const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
};

export const groupBadgeStyles = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
};

export const formatGroupLabel = (data) => (
    <div style={groupStyles}>
        <span>{data.label}</span>
        <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
);


const UserManagement = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [role, setRole] = useState("");

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        getUserProfileAPI({}, (res) => {
            if (res !== null) {
                if (res?.status?.toString() === "true") {
                    setUserData(res?.data[0]);
                } else if (res?.status?.toString() === "false") {
                    alert(res?.message?.toString());
                } else {
                    alert("Something went wrong");
                }
            }
        })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name && !email && !phone && !role) {
            return alert("Please select all fields")
        }

        const data = {
            name: name,
            email: email,
            phone: phone,
            role: role,
        }

        addUserAPI(data, (res) => {
            if (res !== null) {
                if (res?.status?.toString() === "true" || res?.status?.toString() === "false") {
                    alert(res?.message?.toString());
                    setName("");
                    setEmail("");
                    setPhone("");
                    setRole("");
                } else {
                    alert("Something went wrong");
                }
            }
        })
    }

    return (
        <div className='home'>
            <Sidebar />
            <div className='homeContainer px-5 py-3'>
                <div style={title}>Welcome George</div>
                <h4 style={subTitle} className='mt-4 pt-1'>Admin profile</h4>
                <div className='col-12 col-md-12'>
                    <div className='shadow-sm rounded-xl px-4 py-3 mt-2'>
                        <form>
                            <div className="form-group mb-2 pb-1">
                                <label style={labelStyles}>User name</label>
                                <input
                                    type="text"
                                    placeholder="Enter Name"
                                    onChange={(e) => { }}
                                    style={inputStyle}
                                    value={userData?.name}
                                    className="form-control aboutInput"
                                />
                            </div>
                            <div className="form-group mb-2 pb-1">
                                <label style={labelStyles}>Mobile Number</label>
                                <input
                                    type="number"
                                    placeholder="Mobile Number"
                                    onChange={(e) => { }}
                                    style={inputStyle}
                                    value={userData?.mobile}
                                    className="form-control aboutInput"
                                />
                            </div>
                            <div className="form-group mb-2 pb-1">
                                <label style={labelStyles}>User Role</label>
                                <input
                                    type="text"
                                    placeholder="Enter User Role"
                                    onChange={(e) => { }}
                                    style={inputStyle}
                                    value={userData?.role}
                                    className="form-control aboutInput"
                                />
                            </div>
                        </form>
                    </div>
                </div>

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
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    style={inputStyle}
                                    value={email}
                                    className="form-control aboutInput"
                                />
                            </div>
                            <div className="form-group mb-2 pb-1">
                                <label style={labelStyles}>Mobile Number</label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    onChange={(e) => { setPhone(e.target.value) }}
                                    style={inputStyle}
                                    value={phone}
                                    className="form-control aboutInput"
                                />
                            </div>

                            <div className="form-group mb-2 pb-1">
                                <label style={labelStyles}>User Role</label>
                                <Select
                                    onChange={(e) => setRole(e?.value)}
                                    options={options}
                                    formatGroupLabel={formatGroupLabel}
                                    placeholder="Role"
                                    defaultValue={role}
                                    styles={{
                                        input: (base) => ({
                                            ...base,
                                            fontSize: "13px",
                                            color: "#000",
                                            fontWeight: "600",
                                        }),
                                        menu: (base) => ({
                                            ...base,
                                            fontSize: "13px",
                                        }),
                                        container: (base) => ({
                                            width: "100%",
                                            border: "1px solid #E4E7E9",
                                            borderRadius: "4px",
                                            backgroundColor: "#F9F9FC",
                                            fontSize: "13px",
                                        }),
                                        control: (base) => ({
                                            ...base,
                                            // width: "100%",
                                            border: "0px",
                                            // borderRadius: "4px",
                                            backgroundColor: "#F9F9FC",
                                            height: "24px",
                                            // fontSize: "13px",
                                        }),
                                    }}
                                />
                            </div>

                            <button className='btn btn-dark col-lg-12 col-md-12 col-sm-12 col-12 mx-auto py-3 mt-2' onClick={handleSubmit}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-4 pt-4">
                    <UserListingTable />
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

const subTitle = {
    fontSize: "18px",
    color: "#000",
    fontWeight: "800",
}

const inputStyle = {
    border: "1px solid #E4E7E9",
    fontSize: "13px",
    color: "#000",
    fontWeight: "600",
    borderRadius: "4px",
    backgroundColor: "#F9F9FC",
    height: "38px"
}

const labelStyles = {
    fontSize: "13px",
    color: "#777980",
    fontWeight: "600",
}

export default UserManagement;