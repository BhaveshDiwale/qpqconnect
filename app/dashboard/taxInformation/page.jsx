"use client"

import React, { useState } from 'react';
import './taxInformation.scss'
import Sidebar from "../components/sidebar/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import { addTaxInformationAPI } from '../../../apis/API';
import { getCookie } from 'cookies-next';

const TaxInformation = () => {
    const [businessNumber, setBusinessNumber] = useState("");
    const [issueDate, setIssueDate] = useState("");
    const currentUserData = getCookie("userData");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!businessNumber && !issueDate) {
            return alert("Please select all fields")
        }

        const data = {
            businessNumber: businessNumber,
            issueDate: issueDate,
            userId: JSON.parse(currentUserData)?.id
        }
        addTaxInformationAPI(data, (res) => {
            if (res !== null) {
                if (res?.status?.toString() === "true") {
                    alert(res?.message?.toString());
                    setBusinessNumber("");
                    setIssueDate("");
                } else if (res?.status?.toString() === "false") {
                    alert(res?.message?.toString());
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
                <h4 style={subTitle} className='mt-4'>Tax information</h4>
                <div className='row mt-2'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-12 mx-auto'>
                        <div className='shadow-sm rounded-xl px-4 py-3'>
                            <form>
                                <div className='row mx-auto'>
                                    <div className='col-lg-6 col-md-6 col-sm-9 col-12 mx-auto p-0'>
                                        <div className="form-group mb-3 pr-2">
                                            <label style={labelStyles}>Business number</label>
                                            <input
                                                type="text"
                                                placeholder="Enter here"
                                                onChange={(e) => { setBusinessNumber(e.target.value) }}
                                                style={inputStyle}
                                                value={businessNumber}
                                                className="form-control aboutInput"
                                            />
                                        </div>
                                    </div>

                                    <div className='col-lg-6 col-md-6 col-sm-9 col-12 mx-auto p-0'>
                                        <div className="form-group mb-3 pl-2">
                                            <label style={labelStyles}>Issue date</label>
                                            <input
                                                type="text"
                                                placeholder="Enter here"
                                                onChange={(e) => { setIssueDate(e.target.value) }}
                                                style={inputStyle}
                                                value={issueDate}
                                                className="form-control aboutInput"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <button className='btn btn-dark col-lg-12 col-md-12 col-sm-12 col-12 mx-auto py-2'
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </button>
                            </form>
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

const subTitle = {
    fontSize: "18px",
    color: "#000",
    fontWeight: "700",
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

const textAreaInputStyle = {
    border: "1px solid #E4E7E9",
    fontSize: "14px",
    color: "#000",
    fontWeight: "600",
    borderRadius: "4px",
    height: "180px",
    backgroundColor: "#F9F9FC",
}

const labelStyles = {
    fontSize: "13px",
    color: "#777980",
    fontWeight: "600",
}

const toStyles = {
    fontSize: "13px",
    color: "#777980",
    fontWeight: "600",
    textAlign: "center",
    marginTop: "10px",
    position: "absolute",
    right: "40%"
}


export default TaxInformation;