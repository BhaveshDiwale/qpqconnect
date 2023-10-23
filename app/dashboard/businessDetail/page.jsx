"use client"

import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../components/sidebar/Sidebar";
import './businessDetail.scss'
import Image from 'next/image';

const BusinessDetail = () => {
    const [files, setFiles] = useState([]);
    const [companyName, setCompanyName] = useState("")

    return (
        <div className='home'>
            <Sidebar />
            <div className='homeContainer px-5 py-3'>
                <div style={title}>Welcome George</div>
                <div className='shadow-sm rounded-xl px-4 py-3 mt-4'>
                    <form>
                        <div className='row'>
                            <div className='col-12 col-md-6'>
                                <div className="form-group mb-2 pb-1">
                                    <label style={labelStyles}>Company Name</label>
                                    <input
                                        type="text"
                                        placeholder="Type name here. . ."
                                        onChange={(e) => { setCompanyName(e.target.value) }}
                                        style={inputStyle}
                                        value={companyName}
                                        className="form-control aboutInput"
                                    />
                                </div>
                                <div className="form-group mb-2 pb-1">
                                    <label style={labelStyles}>Phone Number</label>
                                    <input
                                        type="number"
                                        placeholder="Enter Phone Number"
                                        onChange={(e) => { setCompanyName(e.target.value) }}
                                        style={inputStyle}
                                        value={companyName}
                                        className="form-control aboutInput"
                                    />
                                </div>
                                <div className="form-group mb-2 pb-1">
                                    <label style={labelStyles}>Address</label>
                                    <textarea
                                        placeholder="Type Here... "
                                        onChange={(e) => { setCompanyName(e.target.value) }}
                                        style={textAreaInputStyle}
                                        value={companyName}
                                        className="form-control aboutInput"
                                    />
                                </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <div className="form-group mb-2 pb-1">
                                    <label style={labelStyles}>City</label>
                                    <input
                                        type="text"
                                        placeholder="Enter City Here"
                                        onChange={(e) => { setCompanyName(e.target.value) }}
                                        style={inputStyle}
                                        value={companyName}
                                        className="form-control aboutInput"
                                    />
                                </div>
                                <div className="form-group mb-2 pb-1">
                                    <label style={labelStyles}>Province</label>
                                    <input
                                        type="text"
                                        placeholder="Lorem"
                                        onChange={(e) => { setCompanyName(e.target.value) }}
                                        style={inputStyle}
                                        value={companyName}
                                        className="form-control aboutInput"
                                    />
                                </div>
                                <div className="form-group mb-2 pb-1">
                                    <label style={labelStyles}>Country</label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        onChange={(e) => { setCompanyName(e.target.value) }}
                                        style={inputStyle}
                                        value={companyName}
                                        className="form-control aboutInput"
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div className='shadow-sm rounded-xl mt-4 p-4'>
                    <div style={title}>Company media</div>

                    <div className='row mx-auto'>
                        <div className='col-md-6 col-lg-6 col-sm-10 col-12 mx-auto pl-0'>
                            <RenderPickerBox
                                title="Photo"
                                buttonText="Add Photo"
                                files={files}
                                setFiles={setFiles}
                            />
                        </div>
                        <div className='col-md-6 col-lg-6 col-sm-10 col-12 mx-auto pr-0'>
                            <RenderPickerBox
                                title="Other Image"
                                buttonText="Add Photo"
                                files={files}
                                setFiles={setFiles}
                            />
                        </div>
                    </div>
                    <RenderPickerBox
                        title="Video"
                        buttonText="Add Video"
                        files={files}
                        setFiles={setFiles}
                    />
                </div>
            </div>
        </div>
    )
}

function RenderPickerBox({ title, buttonText, files, setFiles }) {
    return (
        <div className='col-12 col-md-12 mt-4'>
            <label style={labelStyles}>{title}</label>
            <div className="file-upload-dropzone" style={dropZoneStyles}>
                <Image
                    src="/svg/SquareBadge.svg"
                    alt='SquareBadge'
                    width={40} height={40}
                    className="mx-auto mb-3"
                />
                <p style={labelStyles}>Drag and drop image here, or click add image</p>
                <label className="custom-file-upload">
                    <input
                        type="file"
                        onChange={(e) => {
                            const newFiles = [...files];
                            for (let i = 0; i < e.target.files.length; i++) {
                                newFiles.push(e.target.files[i]);
                            }
                            setFiles(newFiles);
                        }}
                    />
                    {buttonText}
                </label>
            </div>
        </div>
    );
}


const title = {
    fontSize: "24px",
    color: "#000",
    fontWeight: "800",
}

const inputStyle = {
    border: "1px solid #E4E7E9",
    fontSize: "14px",
    color: "#000",
    fontWeight: "600",
    borderRadius: "4px",
    backgroundColor: "#F9F9FC",
}

const labelStyles = {
    fontSize: "14px",
    color: "#777980",
    fontWeight: "700",
}

const textAreaInputStyle = {
    border: "1px solid #E4E7E9",
    fontSize: "14px",
    color: "#000",
    fontWeight: "600",
    borderRadius: "4px",
    height: "180px",
    backgroundColor: "#F9F9FC",
}

const dropZoneStyles = {
    backgroundColor: "#F9F9FC",
    fontSize: "14px",
    fontWeight: "700",
    color: "#000"
}

export default BusinessDetail;