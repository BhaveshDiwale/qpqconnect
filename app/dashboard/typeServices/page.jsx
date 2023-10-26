"use client"

import React, { useState } from 'react';
import './typeServices.scss'
import Sidebar from "../components/sidebar/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import { addTypeServiceAPI } from '../../../apis/API';
import { formatGroupLabel } from '../userManagement/page';

import Select from 'react-select';

const dayOptions = [
    { value: 'Monday', label: 'Monday' },
    { value: 'Tuesday', label: 'Tuesday' },
    { value: 'Wednesday', label: 'Wednesday' },
    { value: 'Thursday', label: 'Thursday' },
    { value: 'Friday', label: 'Friday' },
    { value: 'Saturday', label: 'Saturday' },
]

const timeOptions = [
    { value: '9:00 AM', label: '9:00 AM' },
    { value: '10:00 AM', label: '10:00 AM' },
    { value: '11:00 AM', label: '11:00 AM' },
    { value: '12:00 PM', label: '12:00 PM' },
    { value: '1:00 PM', label: '1:00 PM' },
    { value: '2:00 PM', label: '2:00 PM' },
    { value: '3:00 PM', label: '3:00 PM' },
    { value: '4:00 PM', label: '4:00 PM' },
    { value: '5:00 PM', label: '5:00 PM' },
    { value: '6:00 PM', label: '6:00 PM' },
]

const TypeServices = () => {
    const [businessTypes, setBusinessTypes] = useState("");
    const [modeOfPayments, setModeOfPayments] = useState("");
    const [workingDays, setWorkingDays] = useState("");
    const [startDay, setStartDay] = useState("");
    const [endDay, setEndDay] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [excludeBusinessCities, setExcludeBusinessCities] = useState("");
    const [includeBusinessCities, setIncludeBusinessCities] = useState("");
    const [companyDescription, setCompanyDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!businessTypes &&
            !modeOfPayments &&
            !startDay &&
            !endDay &&
            !startTime &&
            !endTime &&
            !excludeBusinessCities &&
            !includeBusinessCities &&
            !companyDescription) {
            return alert("Please select all fields")
        }

        const data = {
            businessTypes: businessTypes,
            modeOfPayments: modeOfPayments,
            workingDays: workingDays,
            excludeBusinessCities: excludeBusinessCities,
            includeBusinessCities: includeBusinessCities,
            companyDescription: companyDescription,
        }
        addTypeServiceAPI(data, (res) => {
            if (res !== null) {
                if (res?.status?.toString() === "true") {
                    alert(res?.message?.toString());
                    setBusinessTypes("");
                    setModeOfPayments("");
                    setWorkingDays("");
                    setExcludeBusinessCities("");
                    setIncludeBusinessCities("");
                    setCompanyDescription("");
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
                <h4 style={subTitle} className='mt-4'>My Profile</h4>
                {/* <h4 className='fw-bold'></h4> */}
                <div className='row mt-2'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-12 mx-auto'>
                        <div className='shadow-sm rounded-xl px-4 py-3'>
                            <form>
                                <div className="form-group mb-3">
                                    <label style={labelStyles}>Business Type</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Business Type"
                                        onChange={(e) => { setBusinessTypes(e.target.value) }}
                                        style={inputStyle}
                                        value={businessTypes}
                                        className="form-control aboutInput"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label style={labelStyles}>Mode of Payment</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Mode of Payment"
                                        onChange={(e) => { setModeOfPayments(e.target.value) }}
                                        style={inputStyle}
                                        value={modeOfPayments}
                                        className="form-control aboutInput"
                                    />
                                </div>

                                <label style={labelStyles}>Working days</label>
                                <div className='row mx-auto'>
                                    <div className='col-lg-6 col-md-6 col-sm-9 col-12 mx-auto p-0'>
                                        <div style={toStyles}>To</div>
                                        <div className="form-group mb-2 pb-1 pr-5">
                                            <Select
                                                onChange={(e) => setStartDay(e?.value)}
                                                options={dayOptions}
                                                placeholder="Monday"
                                                defaultValue={startDay}
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
                                                        ...base,
                                                        width: "100%",
                                                        border: "1px solid #E4E7E9",
                                                        borderRadius: "4px",
                                                        backgroundColor: "#F9F9FC",
                                                        fontSize: "13px",
                                                    }),
                                                    control: (base) => ({
                                                        ...base,
                                                        border: "0px",
                                                        backgroundColor: "#F9F9FC",
                                                        height: "24px",
                                                    }),
                                                }}
                                            />
                                        </div>
                                    </div>


                                    <div className='col-lg-6 col-md-6 col-sm-9 col-12 mx-auto p-0'>
                                        <div className="form-group mb-2 pb-1 pl-5">
                                            <Select
                                                onChange={(e) => setEndDay(e?.value)}
                                                options={dayOptions}
                                                placeholder="Saturday"
                                                defaultValue={endDay}
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
                                                        ...base,
                                                        width: "100%",
                                                        border: "1px solid #E4E7E9",
                                                        borderRadius: "4px",
                                                        backgroundColor: "#F9F9FC",
                                                        fontSize: "13px",
                                                    }),
                                                    control: (base) => ({
                                                        ...base,
                                                        border: "0px",
                                                        backgroundColor: "#F9F9FC",
                                                        height: "24px",
                                                    }),
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className='row mx-auto'>
                                    <div className='col-lg-6 col-md-6 col-sm-9 col-12 mx-auto p-0'>
                                        <div style={toStyles}>To</div>
                                        <div className="form-group mb-2 pb-1 pr-5">
                                            <Select
                                                onChange={(e) => setStartTime(e?.value)}
                                                options={timeOptions}
                                                placeholder="9:00 AM"
                                                defaultValue={startTime}
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
                                                        ...base,
                                                        width: "100%",
                                                        border: "1px solid #E4E7E9",
                                                        borderRadius: "4px",
                                                        backgroundColor: "#F9F9FC",
                                                        fontSize: "13px",
                                                    }),
                                                    control: (base) => ({
                                                        ...base,
                                                        border: "0px",
                                                        backgroundColor: "#F9F9FC",
                                                        height: "24px",
                                                    }),
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className='col-lg-6 col-md-6 col-sm-9 col-12 mx-auto p-0'>
                                        <div className="form-group mb-2 pb-1 pl-5">
                                            <Select
                                                onChange={(e) => setEndTime(e?.value)}
                                                options={timeOptions}
                                                placeholder="6:00 PM"
                                                defaultValue={endTime}
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
                                                        ...base,
                                                        width: "100%",
                                                        border: "1px solid #E4E7E9",
                                                        borderRadius: "4px",
                                                        backgroundColor: "#F9F9FC",
                                                        fontSize: "13px",
                                                    }),
                                                    control: (base) => ({
                                                        ...base,
                                                        border: "0px",
                                                        backgroundColor: "#F9F9FC",
                                                        height: "24px",
                                                    }),
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group mb-2 pb-1">
                                    <label style={labelStyles}>Exclude business cities</label>
                                    <input
                                        type="text"
                                        placeholder="City name"
                                        onChange={(e) => { setExcludeBusinessCities(e.target.value) }}
                                        style={inputStyle}
                                        value={excludeBusinessCities}
                                        className="form-control aboutInput"
                                    />
                                </div>
                                <div className="form-group mb-2 pb-1">
                                    <label style={labelStyles}>Include business cities</label>
                                    <input
                                        type="text"
                                        placeholder="City name"
                                        onChange={(e) => { setIncludeBusinessCities(e.target.value) }}
                                        style={inputStyle}
                                        value={includeBusinessCities}
                                        className="form-control aboutInput"
                                    />
                                </div>
                                <div className="form-group mb-2 pb-1">
                                    <label style={labelStyles}>Company description</label>
                                    <textarea
                                        placeholder="Type description here. . ."
                                        value={companyDescription}
                                        onChange={(e) => { setCompanyDescription(e.target.value) }}
                                        style={textAreaInputStyle}
                                        className="form-control aboutInput"
                                    />
                                </div>

                                <button className='btn btn-dark col-lg-12 col-md-12 col-sm-12 col-12 mx-auto py-3 mt-2'
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                    {/* <div className='col-12 col-md-3 mt-2'>
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
                    </div> */}
                </div>
                {/* <div className='shadow-sm rounded-xl mt-4 p-4'>
                    <div className='row '>
                        <div className='col-12 col-md-6'>
                            <label htmlFor="companyLogo" className='fw-bold ml-2 text-se text-secondary'>Company Logo</label>
                            <div className={`file-upload-container`}>
                                <div className="file-upload-dropzone">
                                    <CloudUploadIcon />
                                    <p className='text-secondary'>Drag and drop files here, or click to choose a file</p>
                                    <label className="custom-file-upload">
                                        <input
                                            type="file"
                                            multiple
                                            onChange={(e) => {}}
                                        />
                                        Add Image
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'></div>
                    </div>
                </div> */}
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


export default TypeServices;