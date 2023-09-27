"use client"

import React, { useState } from 'react';
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import './typeServices.scss'
import Typography from "@mui/material/Typography";
import Sidebar from "../components/sidebar/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'next/image';

const typeServices = () => {
    const [files, setFiles] = useState([]);
    const [dragging, setDragging] = useState(false);
    const [userName, setUserName] = useState("");

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragging(false);

        const newFiles = [...files];
        for (let i = 0; i < e.dataTransfer.files.length; i++) {
            newFiles.push(e.dataTransfer.files[i]);
        }
        setFiles(newFiles);
    };

    const handleFileRemove = (index) => {
        const newFiles = [...files];
        newFiles.splice(index, 1);
        setFiles(newFiles);
    };

    return (
        <div className='home'>
            <Sidebar />
            <div className='homeContainer px-5 py-3'>
                <div style={title}>Welcome George</div>
                <h4 style={subTitle} className='mt-4'>My Profile</h4>
                {/* <h4 className='fw-bold'></h4> */}
                <div className='row mt-2'>
                    <div className='col-12 col-md-9'>
                        <div className='shadow-sm rounded-xl px-4 py-3'>
                            <form>
                                <div className="form-group mb-2 pb-1">
                                    <label style={labelStyles}>User name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter User name"
                                        onChange={(e) => { setUserName(e.target.value) }}
                                        style={inputStyle}
                                        value={userName}
                                        className="form-control aboutInput"
                                    />
                                </div>
                                <div className="form-group mb-2 pb-1">
                                    <label style={labelStyles}>Mobile number</label>
                                    <input
                                        type="number"
                                        placeholder="Enter Mobile Number"
                                        onChange={(e) => { setUserName(e.target.value) }}
                                        style={inputStyle}
                                        value={userName}
                                        className="form-control aboutInput"
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <label style={labelStyles}>User role</label>
                                    <input
                                        type="number"
                                        placeholder="Enter User Role"
                                        onChange={(e) => { setUserName(e.target.value) }}
                                        style={inputStyle}
                                        value={userName}
                                        className="form-control aboutInput"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='col-12 col-md-3 mt-2'>
                        <div className="col justify-content-center">
                            <div style={profilePicture} className='mx-auto'>
                                <Image
                                    src="/svg/userProfile.svg"
                                    alt='userProfile'
                                    width={150} height={150}
                                    className="mx-auto"
                                />
                            </div>
                            <div style={{ paddingLeft: "80px" }}>
                                <Image
                                    src="/svg/ic_round-add.svg"
                                    alt='ic_round'
                                    width={44} height={44}
                                    className="mx-auto"
                                    style={{ marginTop: "-30px" }}
                                />
                            </div>
                        </div>
                        <h4 className='text-center mt-2'>Profile Picture</h4>
                    </div>
                </div>
                <div className='shadow-sm rounded-xl mt-4 p-4'>
                    <div className='row '>
                        <div className='col-12 col-md-6'>
                            <label htmlFor="companyLogo" className='fw-bold ml-2 text-se text-secondary'>Company Logo</label>
                            <div
                                className={`file-upload-container ${dragging ? "dragging" : ""}`}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                            >
                                <div className="file-upload-dropzone">
                                    <CloudUploadIcon />
                                    <p className='text-secondary'>Drag and drop files here, or click to choose a file</p>
                                    <label className="custom-file-upload">
                                        <input
                                            type="file"
                                            multiple
                                            onChange={(e) => {
                                                const newFiles = [...files];
                                                for (let i = 0; i < e.target.files.length; i++) {
                                                    newFiles.push(e.target.files[i]);
                                                }
                                                setFiles(newFiles);
                                            }}
                                        />
                                        Add Image
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <form>
                                <div className="form-group mb-3">
                                    <label style={labelStyles}>Business Type</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Business Type"
                                        onChange={(e) => { setUserName(e.target.value) }}
                                        style={inputStyle}
                                        value={userName}
                                        className="form-control aboutInput"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label style={labelStyles}>Mode of Payment</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Mode of Payment"
                                        onChange={(e) => { setUserName(e.target.value) }}
                                        style={inputStyle}
                                        value={userName}
                                        className="form-control aboutInput"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label style={labelStyles}>Working Day</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Working Day"
                                        onChange={(e) => { setUserName(e.target.value) }}
                                        style={inputStyle}
                                        value={userName}
                                        className="form-control aboutInput"
                                    />
                                </div>
                            </form>
                        </div>
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
    fontWeight: "700",
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
    // marginTop: "4px"
}

const profilePicture: React.CSSProperties | undefined = {
    border: "1px solid #CFCFCF",
    padding: "8px",
    width: "160px",
    height: "160px",
    borderRadius: "100px"
}


export default typeServices;