"use client"

import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../components/sidebar/Sidebar";
import './addProduct.scss'
import ProductBlock from './components/ProductBlock'
import ServiceBlock from './components/ServiceBlock'

const AddProduct = () => {
    const [tabType, setTabType] = useState("product");

    return (
        <div className='home'>
            <Sidebar />
            <div className='homeContainer px-5 py-3'>
                <div style={title}>Welcome George</div>
                <div className='d-flex mx-auto'>
                    <button className='btn'
                        style={tabType === "product" ? selectedTabStyle : tabStyle}
                        onClick={() => { setTabType('product') }}
                    >
                        Add Product
                    </button>
                    <button className='btn'
                        style={tabType === "service" ? selectedTabStyle : tabStyle}
                        onClick={() => { setTabType('service') }}
                    >
                        Add Service
                    </button>
                </div>
                {tabType === "product" ? <ProductBlock /> : <ServiceBlock />}
            </div>
        </div>
    )
}

const title = {
    fontSize: "20px",
    color: "#000",
    fontWeight: "700",
}

const tabStyle = {
    fontSize: "14px",
    fontWeight: "700",
    color: "#000",
    borderBottom: "2px solid white",
    borderRadius: "0px"
}

const selectedTabStyle = {
    fontSize: "14px",
    fontWeight: "700",
    color: "#000",
    borderBottom: "2px solid black",
    borderRadius: "0px"
}

export default AddProduct;