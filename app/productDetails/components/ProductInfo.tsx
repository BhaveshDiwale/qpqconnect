"use client"

import Image from 'next/image';
import React, { useState } from 'react'
import ProductSellerInfo from './ProductSellerInfo';
import { makeStyles } from '@material-ui/core';

export default function ProductInfo() {
    const styles = useStyles();

    return (
        <div className="row mx-auto mt-5">
            <div className="col-lg-5 col-md-5 col-sm-10 col-11 mx-auto mt-3">
                <Image
                    src="/images/productImg.png"
                    alt="productImg" width={300} height={300}
                    className={`mx-auto col-lg-8 col-md-8 col-sm-6 col-6 ${styles.productImgStyle}`}
                />

                <div className="row mx-auto">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item, indx) => {
                        return (
                            <div className="col-md-3 col-sm-3 col-3 mx-auto" key={indx}>
                                <Image
                                    src="/images/productImg.png"
                                    alt="productImg" width={90} height={90}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-11 mx-auto mt-3 px-5">
                <h2 style={productTitle}>Havic HV G-92565651 Gamepad</h2>
                <div style={productPrice}>
                    Price: $180 <span style={productPieces}>For 50 pieces</span>
                </div>
                <div style={orderQuantity}>Minimum order quantity - 50 Piece/Pieces</div>
                <div style={orderDescription}>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</div>

                {/* <div style={orderDescription} className='mt-2'>Delivery Time</div>
                <div style={daysCount}>7 Days</div> */}

                <div className='mt-2' />
                <a style={viewDetails} href="#">View full Details</a>

                <hr />

                <div className="row mx-auto mb-4">
                    <div className="col-md-5 col-sm-5 col-5 p-3" style={borderBox}>
                        <div style={deliveryTime}>Delivery Time</div>
                        <div style={deliveryTimeCount}>7 days</div>
                    </div>

                    <div className="col-md-6 col-sm-6 col-6 ml-4 p-3" style={borderBox}>
                        <div style={deliveryTime}>Return & Refunds</div>
                        <div style={deliveryTimeCount}>30 days</div>
                    </div>
                </div>

                <a className="btn col-md-12 col-sm-12 col-12" style={getLatestPriceBtn}>
                    Get Latest Price
                </a>
                <a className="btn col-md-12 col-sm-12 col-12 my-3" style={sendQueryBtn}>
                    Send Query
                </a>

                <div style={orderQuantity}>Payment Options</div>

                <div className='mt-2'>
                    <div className='d-flex'>
                        <Image
                            src="/svg/digital-payment.svg"
                            alt="productImg" width={80} height={25}
                        />
                        <Image
                            src="/svg/cash-payment.svg"
                            alt="productImg" width={80} height={25}
                            style={{ marginLeft: "6rem" }}
                        />
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-11 mx-auto mt-3 px-2">
                <ProductSellerInfo />
            </div>
        </div>
    )
}

const productTitle: React.CSSProperties | undefined = {
    fontSize: "24px",
    color: "#000",
    fontWeight: "700",
}

const productPrice: React.CSSProperties | undefined = {
    fontSize: "20px",
    color: "#000",
    fontWeight: "700",
}

const productPieces: React.CSSProperties | undefined = {
    fontSize: "10px",
    color: "#5E7384",
    fontWeight: "800",
}

const orderQuantity: React.CSSProperties | undefined = {
    fontSize: "14px",
    color: "#5E7384",
    fontWeight: "500",
    marginTop: "10px",
}

const orderDescription: React.CSSProperties | undefined = {
    fontSize: "14px",
    color: "#5E7384",
    fontWeight: "400",
    marginTop: "8px"
}

const daysCount: React.CSSProperties | undefined = {
    fontSize: "16px",
    color: "#5E7384",
    fontWeight: "700",
    // marginTop: "5px"
}

const viewDetails: React.CSSProperties | undefined = {
    fontSize: "14px",
    color: "#000",
    fontWeight: "400",
    marginTop: "10px"
}

const deliveryTime: React.CSSProperties | undefined = {
    fontSize: "14px",
    color: "#5E7384",
    fontWeight: "600",
    textAlign: "center"
}

const deliveryTimeCount: React.CSSProperties | undefined = {
    fontSize: "14px",
    color: "#000",
    fontWeight: "700",
    textAlign: "center"
}

const borderBox: React.CSSProperties | undefined = {
    border: "0.8px solid #F0F1F3",
    padding: "8px 8px",
}

const getLatestPriceBtn: React.CSSProperties | undefined = {
    border: "0.8px solid #F0F1F3",
    padding: "9px",
    borderRadius: "50px",
    fontSize: "14px",
    fontWeight: "800",
    color: "#000",
    paddingTop: "12px",
}

const sendQueryBtn: React.CSSProperties | undefined = {
    padding: "9px",
    borderRadius: "50px",
    fontSize: "14px",
    fontWeight: "800",
    color: "#FFF",
    paddingTop: "12px",
    backgroundColor: "#000",
}

const useStyles = makeStyles((theme) => ({
    productImgStyle: {
        [theme.breakpoints.down("xs")]: {
            height: "200px"
        },
        [theme.breakpoints.between("sm", "md")]: {
            height: "300px"
        },
        "@media (min-width: 1280px)": {
            height: "335px"
        }
    }
}));
