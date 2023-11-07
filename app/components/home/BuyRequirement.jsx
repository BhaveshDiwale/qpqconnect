"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import CountrySelect from '../inputs/CountrySelect';

export default function BuyRequirement() {
    const [productName, setProductName] = useState("");
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [about, setAbout] = useState("");
    const [location, setLocation] = useState("");

    return (
        <div className="row mx-auto py-5" style={{ backgroundColor: "#F0F1F3", marginTop: "80px" }}>
            <div className="col-lg-5 col-md-5 col-sm-0 col-0 mx-auto">
                <Image
                    src="/svg/buyRequirement.svg"
                    alt="buy-requirement"
                    className="image-fluid col-lg-10 col-md-10 col-sm-0 col-0 mx-auto"
                    width={600} height={550}
                />
            </div>

            <div className="col-lg-5 col-md-5 col-sm-5 col-12 mx-auto">
                <div className="mt-4" style={{ fontSize: "32px", fontWeight: "700" }}>
                    {"Post Buy Requirement"}
                </div>

                <label style={labelStyle}>Enter Product / Service name *</label>
                <input
                    type="text"
                    placeholder='Text'
                    value={productName}
                    onChange={(e) => { setProductName(e?.target?.value) }}
                    className='form-control'
                    style={inputTextStyle}
                />

                <label style={labelStyle}>Name *</label>
                <input
                    type="text"
                    placeholder='Text'
                    value={name}
                    onChange={(e) => { setName(e?.target?.value) }}
                    className='form-control'
                    style={inputTextStyle}
                />

                <label style={labelStyle}>Mobile Number *</label>
                <div className="d-flex mt-1">
                    <CountrySelect
                        value={location}
                        onChange={(value) => {
                            setLocation(value)
                        }}
                    />
                    <input
                        type="text"
                        value={mobile}
                        placeholder="+91"
                        onChange={(e) => { setMobile(e.target.value) }}
                        // style={error ? inputErrorStyle : inputStyle}
                        className={"form-control ml-2"}
                    />
                </div>

                <label style={labelStyle}>Tell us about your requirement</label>
                <textarea
                    placeholder='A very long line of text which is expected to span more than two to three lines so it breaks as the text increases.'
                    value={about}
                    onChange={(e) => { setAbout(e?.target?.value) }}
                    className='form-control'
                    style={inputTextAreaStyle}
                />

                <button className="btn btn-dark mt-3 px-5 py-2" style={{ fontSize: "14px", fontWeight: "600", float: "right" }}>
                    Submit Your Requirement
                </button>
            </div>
        </div>
    )
}

const labelStyle = {
    fontSize: "14px",
    color: "#000",
    fontWeight: "600",
    marginTop: "12px",
}

const inputTextStyle = {
    fontSize: "14px",
    color: "#4C5C6B",
    fontWeight: "600",
    marginTop: "2px",
}

const inputTextAreaStyle = {
    fontSize: "14px",
    color: "#4C5C6B",
    fontWeight: "600",
    marginTop: "2px",
    height: "80px"
}
