import Image from 'next/image'
import React from 'react'

export default function ProductSellerInfo() {
    return (
        <div className='shadow p-4'>
            <div style={title}>Seller Details</div>

            <Image
                src="/images/Avatar.png"
                alt="Avatar"
                className='mx-auto mt-3'
                width={90} height={90}
            />

            <div style={sellerName} className='text-center mt-3'>
                NIDHI VISION INDIA PVT. LTD<br />
                <div style={{ marginTop: "8px" }} />
                <a style={activeBtn} className='mx-auto'>Active</a>
            </div>


            <hr />

            <IconTextBox
                icon="/svg/id-badge.svg"
                text1="GST"
                text2="2465465116464"
            />

            <IconTextBox
                icon="/svg/location.svg"
                text1="Address"
                text2="Unity Park, Shop No. 4, Narpatgiri Chowk, Near Hdfc Bank, Somwar Peth, Pune, Maharashtra, 411011, India"
            />

            <IconTextBox
                icon="/svg/time-check.svg"
                text1="Member Since"
                text2="3 Years"
            />

            <Image
                src="/svg/verified.svg"
                alt="id-badge"
                // style={iconStyle}
                width={70} height={22}
            />

            <a className="btn col-md-12 mt-3 py-2" style={viewNumberBtn}>View Number</a>
            <a className="btn col-md-12 mt-2 py-2" style={contactSellerBtn}>Contact Seller</a>
        </div>
    )
}

const IconTextBox = ({ icon, text1, text2 }) => {
    return (
        <div className='d-flex mx-auto' style={{ marginBottom: "10px" }}>
            <div style={iconBox}>
                <Image
                    src={icon}
                    alt="id-badge"
                    style={iconStyle}
                    width={13} height={13}
                />
            </div>

            <div className='ml-2' style={{ width: "80%" }}>
                <div style={gstStyles}>{text1}</div>
                <div style={gstValStyles}>{text2}</div>
            </div>
        </div>
    );
}

const title = {
    fontSize: "20px",
    color: "#000",
    fontWeight: "800",
}

const sellerName = {
    fontSize: "14px",
    color: "#1D1F2C",
    fontWeight: "700",
}

const activeBtn = {
    backgroundColor: "#E9FAF7",
    padding: "4px 8px",
    fontSize: "9px",
    fontWeight: "800",
    color: "#1A9882",
    borderRadius: "5px",
    width: "62px",
    height: "28px",
    alignSelf: "center"
}

const iconBox = {
    backgroundColor: "#F0F1F3",
    // padding: "8px",
    borderRadius: "100px",
    width: "25px", height: "25px",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2px"
}

const iconStyle = {
    // width: "100%",
    // height: "100%",
    marginTop: "5px",
    marginLeft: "6.5px"
}

const gstStyles = {
    fontSize: "12px",
    color: "#667085",
    fontWeight: "700",
}

const gstValStyles = {
    fontSize: "12px",
    color: "#1D1F2C",
    fontWeight: "700",
}

const viewNumberBtn = {
    border: "0.8px solid #F0F1F3",
    padding: "6px",
    borderRadius: "8px",
    fontSize: "12px",
    fontWeight: "600",
    color: "#000",
}

const contactSellerBtn = {
    padding: "6px",
    borderRadius: "8px",
    fontSize: "12px",
    fontWeight: "600",
    color: "#FFF",
    backgroundColor: "#000",
}
