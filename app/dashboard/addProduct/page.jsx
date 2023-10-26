"use client"

import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../components/sidebar/Sidebar";
import './addProduct.scss'
import Image from 'next/image';
import { addTypeServiceAPI } from '../../../apis/API';
import DashboardDropdown from '../../components/inputs/DashboardDropdown';

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

const AddProduct = () => {
    const [productName, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [photo, setPhoto] = useState([]);
    const [otherImage, setOtherImage] = useState([]);

    const [basePrice, setBasePrice] = useState("");
    const [supplyAbility, setSupplyAbility] = useState("");
    const [deliveryTime, setDeliveryTime] = useState("");
    const [parentCategory, setParentCategory] = useState("");
    const [subCategory, setSubCategory] = useState("");
    const [productCode, setProductCode] = useState("");
    const [paymentOptions, setPaymentOptions] = useState("");

    const handleSubmit = () => {
        const data = {
            productName: productName,
            description: description,
            basePrice: basePrice,
            supplyAbility: supplyAbility,
            deliveryTime: deliveryTime,
            parentCategory: parentCategory,
            photo: photo,
            otherImage: otherImage,
            subCategory: subCategory,
            productCode: productCode,
            paymentOptions: paymentOptions,
        }
        addTypeServiceAPI(data, (res) => {
            if (res !== null) {
                if (res?.success?.toString() === "true") {
                    alert("Data submitted successfully");
                }
            }
        });
    }

    return (
        <div className='home'>
            <Sidebar />
            <div className='homeContainer px-5 py-3'>
                <div style={title}>Welcome George</div>
                <div className='row mx-auto'>
                    <div className='col-lg-9 col-md-9 col-sm-12 col-12 mx-auto'>
                        <div className='shadow-sm rounded-xl px-4 py-3 mt-4'>
                            <form>
                                <div className='row'>
                                    <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                                        <div className="form-group mb-2 pb-1">
                                            <label style={labelStyles}>Product Name</label>
                                            <input
                                                type="text"
                                                value={productName}
                                                placeholder="Type name here. . ."
                                                onChange={(e) => { setProductName(e.target.value) }}
                                                style={inputStyle}
                                                className="form-control aboutInput"
                                            />
                                        </div>
                                        <div className="form-group mb-2 pb-1">
                                            <label style={labelStyles}>Description</label>
                                            <textarea
                                                placeholder="Type product description here. . ."
                                                value={description}
                                                onChange={(e) => { setDescription(e.target.value) }}
                                                style={textAreaInputStyle}
                                                className="form-control aboutInput"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className='shadow-sm rounded-xl mt-4 p-4'>
                            <div style={title}>Media</div>
                            <RenderPickerBox
                                title="Photo"
                                buttonText="Add Photo"
                                files={photo}
                                setFiles={setPhoto}
                            />
                        </div>

                        <div className='shadow-sm rounded-xl px-4 py-3 mt-4'>
                            <div className='row mx-auto'>
                                <div className='col-lg-4 col-md-4 col-sm-12 col-12 mx-auto'>
                                    <DashboardDropdown
                                        label="Base Price"
                                        placeholder="$ 80 for 100 piece"
                                        value={basePrice}
                                        setValue={setBasePrice}
                                        data={options}
                                    />
                                </div>

                                <div className='col-lg-4 col-md-4 col-sm-12 col-12 mx-auto'>
                                    <DashboardDropdown
                                        label="Supply Ability"
                                        placeholder="100000 Per Week"
                                        value={supplyAbility}
                                        setValue={setSupplyAbility}
                                        data={options}
                                    />
                                </div>

                                <div className='col-lg-4 col-md-4 col-sm-12 col-12 mx-auto'>
                                    <DashboardDropdown
                                        label="Delivery Time"
                                        placeholder="7 Days"
                                        value={deliveryTime}
                                        setValue={setDeliveryTime}
                                        data={options}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-3 col-sm-12 col-12 mx-auto'>
                        <div className='shadow-sm rounded-xl px-4 py-3 mt-4'>
                            <div style={title}>Category</div>
                            <DashboardDropdown
                                label="Parent Category"
                                placeholder="select here..."
                                value={parentCategory}
                                setValue={setParentCategory}
                                data={options}
                            />
                            <DashboardDropdown
                                label="Sub Category"
                                placeholder="select here..."
                                value={subCategory}
                                setValue={setSubCategory}
                                data={options}
                            />
                            <div className="form-group mb-2 pb-1">
                                <label style={labelStyles}>Product Code</label>
                                <input
                                    type="text"
                                    value={productCode}
                                    placeholder="Type code here. . ."
                                    onChange={(e) => { setProductCode(e.target.value) }}
                                    style={inputStyle}
                                    className="form-control aboutInput"
                                />
                            </div>
                            <DashboardDropdown
                                label="Payment options"
                                placeholder="select here..."
                                value={paymentOptions}
                                setValue={setPaymentOptions}
                                data={options}
                            />
                        </div>
                    </div>
                </div>

                <button className='btn btn-dark col-lg-12 col-md-12 col-sm-12 col-12 mx-auto py-3 mt-4' onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div >
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
    fontSize: "20px",
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

const labelStyles = {
    fontSize: "13px",
    color: "#777980",
    fontWeight: "600",
}

const textAreaInputStyle = {
    border: "1px solid #E4E7E9",
    fontSize: "13px",
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

export default AddProduct;