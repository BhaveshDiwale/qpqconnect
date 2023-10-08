import Image from 'next/image'
import React from 'react'

export default function FeaturedSeller() {
    return (
        <div className='col-lg-11 col-md-11 col-sm-10 col-11 mx-auto'>
            <div className='row mx-auto mt-5 pt-4'>
                <div className='col-lg-5 col-md-5 col-sm-10 col-12 mx-auto'>
                    <div style={topBorder} />
                    <h1 style={titleStyle}>Featured</h1>
                    <h1 style={titleStyle}>Seller</h1>

                    <p style={infoStyles}>
                        Problems trying to resolve the conflict between
                        the two major realms of Classical physics:
                        Newtonian mechanics
                    </p>

                    <a style={learnMore} href="#">
                        Learn More
                        <Image
                            src="/svg/arrow-next-sm.svg"
                            alt='arrow-next-sm'
                            width={6} height={8}
                            className='ml-2'
                        />
                    </a>
                </div>
                <div className='col-lg-7 col-md-7 col-sm-10 col-12 mx-auto mt-4'>
                    <div className='row mx-auto'>
                        <RenderIconBlock
                            name={
                                <div>
                                    100% Verified<br />
                                    Customer
                                </div>
                            }
                            icon='/svg/verified-customers.svg'
                        />
                        <RenderIconBlock
                            name={
                                <div>
                                    Trusted<br />
                                    Seller
                                </div>
                            }
                            icon='/svg/Trophy.svg'
                        />
                        <RenderIconBlock
                            name={
                                <div>
                                    Buy<br />
                                    Leads
                                </div>
                            }
                            icon='/svg/CreditCard.svg'
                        />
                        <RenderIconBlock
                            name={
                                <div>
                                    Support 24/7<br />
                                    Contact
                                </div>
                            }
                            icon='/svg/Headphones.svg'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

const RenderIconBlock = ({ name, icon }) => {
    return (
        <div className='col-lg-6 col-md-6 col-sm-6 col-6 mx-auto my-4 py-1'>
            <div className='d-flex'>
                <div style={iconBackground}>
                    <Image
                        src={icon}
                        alt='arrow-next-sm'
                        width={24} height={24}
                        className='m-auto'
                    />
                </div>

                <div style={iconNameStyle}>
                    {name}
                </div>
            </div>
        </div>
    );
}

// verified-customers

const topBorder = {
    width: "84px",
    height: "6px",
    backgroundColor: "#000",
    marginBottom: "24px",
    borderRadius: "20px"
}

const titleStyle = {
    fontSize: "42px",
    color: "#000",
    fontWeight: "700",
    textAlign: "left"
}

const infoStyles = {
    fontSize: "11px",
    color: "#737373",
    fontWeight: "500",
    textAlign: "left",
    width: "240px",
    marginTop: "20px"
}

const learnMore = {
    fontSize: "14px",
    color: "#000",
    fontWeight: "700",
    textAlign: "left",
    width: "240px",
    marginTop: "6px",
    display: "inline-flex",
    textDecoration: "none"
}

const iconBackground = {
    width: "42px",
    height: "42px",
    borderRadius: "100px",
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "10px"
}

const iconNameStyle = {
    fontSize: "13px",
    color: "#000",
    fontWeight: "500",
    marginTop: "2px",
    marginLeft: "12px"
}
