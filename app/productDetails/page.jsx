"use client"

import Script from "next/script";
import 'bootstrap/dist/css/bootstrap.css'
import ClientOnly from "../components/ClientOnly";
import HomeListing from "../components/home/HomeListing";
import Navbar from "../components/navbar/Navbar";
import ProductInfo from "./components/ProductInfo";
import AboutProject, { EssentialDetail } from "./components/AboutProject";
import { useState } from "react";
import Image from "next/image";
import QnA from "./components/QnA";
import Footer from "../components/Footer";
import { SendEnquiryAPI } from '../../apis/API';
import { toast } from "react-hot-toast";

export default function ProductDetails() {
    const [mobilenumber, setMobilenumber] = useState("");
    const [description, setDescription] = useState("");
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        if (!name && !mobilenumber && !description) {
            toast.error("Please enter all fields");
            return;
        }
        setLoading(true);
        SendEnquiryAPI(
            mobilenumber,
            name,
            description,
            (res) => {
                setLoading(false);
                toast.success("Enquiry send successfully");
                alert("Enquiry send successfully")
                // if (res !== null) {
                //     toast.success("Enquiry send successfully");
                // } else {
                //     toast.success("Enquiry send successfully");
                //     alert("Enquiry send successfully")
                // }
            }
        )
    }

    return (
        <div>
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            />
            <Script
                id="bootstrap-cdn"
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
            />

            <Navbar text="text-black" />

            {/* <HomeBackground /> */}

            <div className="col-md-10 col-sm-10 col-11 mx-auto">
                <ClientOnly>

                    <ProductInfo />

                    <HomeListing />

                    {/* <RelatedCategories /> */}

                    <div className="row mx-auto">
                        <div className="col-md-9 col-sm-9 col-12 mx-auto p-0">
                            <AboutProject />
                        </div>

                        <div className="col-md-3 col-sm-3 col-12 mx-auto">
                            <div className="mt-5" style={enquiryToSupplierStyle}>
                                Send your enquiry to supplier
                            </div>
                            <hr style={dividerStyle} />

                            <div style={supplierNameStyle}>TO - NIDHI VISION INDIA PVT. LTD</div>

                            <label style={labelStyles}>Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name here"
                                onChange={(e) => { setName(e.target.value) }}
                                style={inputStyle}
                                value={name}
                                className="form-control aboutInput"
                            />

                            <label style={labelStyles}>Mobile Number</label>
                            <input
                                type="text"
                                placeholder="+91 | "
                                onChange={(e) => { setMobilenumber(e.target.value) }}
                                style={inputStyle}
                                value={mobilenumber}
                                className="form-control aboutInput"
                            />

                            <label style={labelStyles}>Description</label>
                            <textarea
                                placeholder="Enter description"
                                onChange={(e) => { setDescription(e.target.value) }}
                                style={inputStyle}
                                value={description}
                                className="form-control aboutInput"
                            />

                            <a className="btn col-md-12 col-sm-12 col-12 mt-3" style={sendQueryBtn}
                                onClick={handleClick}
                            >
                                {!loading
                                    ? "Send Query"
                                    : <Image
                                        src="/gif/loading.gif"
                                        alt='loading'
                                        width={12} height={12}
                                        className="mx-auto"
                                        style={{ width: "12px", height: "12px" }}
                                    />}
                            </a>
                        </div>
                    </div>

                    <div className="col-md-5 col-sm-6 col-12">
                        <div style={essentialdetailsStyles}>Essential details</div>
                        <EssentialDetail
                            label="Supply Ability"
                            value="10000 Piece/Pieces per Month"
                        />
                    </div>

                    <div className="col-md-5 col-sm-6 col-12">
                        <div style={essentialdetailsStyles}>Packaging & delivery</div>
                        <EssentialDetail
                            label="Packaging Details"
                            value="CARTON"
                        />
                    </div>

                    <div className="col-md-12 col-sm-12 col-12">
                        <div style={essentialdetailsStyles}>Image gallery</div>
                        <div className="row mx-auto">
                            <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                <Image
                                    src="/images/productImg.png"
                                    alt="productImg" width={300} height={300}
                                />
                            </div>

                            <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                <Image
                                    src="/images/productImg.png"
                                    alt="productImg" width={300} height={300}
                                />
                            </div>

                            <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                                <Image
                                    src="/images/productImg.png"
                                    alt="productImg" width={300} height={300}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 col-sm-12 col-12">
                        <div style={essentialdetailsStyles}>FAQ</div>
                        <QnA
                            question="Q1: Can I get a sample？"
                            answer="A1: Yes, and sample fees will charged according to our sample policies."
                        />

                        <QnA
                            question="Q2: Is the products original product?"
                            answer="A2: Yes, all of the products are from the brand warehouse, there are all original product."
                        />

                        <QnA
                            question="Q3: What about the lead time?"
                            answer="A3: In 3-5 days normally, and sometimes it will also depend on the order quantities."
                        />

                        <QnA
                            question="Q4:  What about the warranty?"
                            answer="A4: Please refer to the brand's official descriptions."
                        />

                        <QnA
                            question="Q5: What's your payment terms?"
                            answer="A5: We accept TT,Payoneer, Western Union,Cash etc…"
                        />
                    </div>

                </ClientOnly>
            </div>

            <Footer />
        </div>
    )
}

const enquiryToSupplierStyle = {
    fontSize: "16px",
    color: "#000",
    fontWeight: "700",
}

const dividerStyle = {
    backgroundColor: "#000000"
}

const supplierNameStyle = {
    fontSize: "14px",
    color: "#000",
    fontWeight: "700",
}

const inputStyle = {
    border: "1px solid #E4E7E9",
    fontSize: "14px",
    color: "#000",
    fontWeight: "600",
    borderRadius: "4px"
}

const labelStyles = {
    fontSize: "14px",
    color: "#000",
    fontWeight: "600",
    marginTop: "12px"
}

const sendQueryBtn = {
    padding: "9px",
    borderRadius: "0px",
    fontSize: "14px",
    fontWeight: "800",
    color: "#FFF",
    paddingTop: "12px",
    backgroundColor: "#000",
}

const essentialdetailsStyles = {
    fontSize: "12px",
    color: "#333",
    fontWeight: "900",
    marginTop: "24px"
}
