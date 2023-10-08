import React from 'react'

export default function AboutProject() {
    return (
        <div className='mt-5'>
            <div style={descriptionStyles}>Description</div>
            <div style={descriptionInfoStyles}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>

            <div style={descriptionStyles} className='mt-4'>Essential details</div>

            <div className='row mx-auto mt-1'>
                <div className='col-lg-6 col-md-6 col-sm-8 col-10 mx-auto p-0'>
                    <EssentialDetail
                        label="Warranty(Year):"
                        value="3-Years"
                    />
                    <EssentialDetail
                        label="Display Ratio:"
                        value="16:9"
                    />
                    <EssentialDetail
                        label="Aspect Ratio:"
                        value="16:9"
                    />
                    <EssentialDetail
                        label="Horizontal Viewing Angle:"
                        value="178°"
                    />
                    <EssentialDetail
                        label="After-sales Service:"
                        value="Return and Replacement, Others"
                    />
                    <EssentialDetail
                        label="Application:"
                        value="Desktop"
                    />
                    <EssentialDetail
                        label="Brightness:"
                        value="250cd/㎡"
                    />
                    <EssentialDetail
                        label="Contrast Ratio:"
                        value="3000:1"
                    />
                    <EssentialDetail
                        label="Brightness:"
                        value="250cd/㎡"
                    />
                    <EssentialDetail
                        label="Panel Type:"
                        value="VA"
                    />
                    <EssentialDetail
                        label="Feature:"
                        value="Curved"
                    />
                    <EssentialDetail
                        label="Product Name:"
                        value="PC Monitor"
                    />
                    <EssentialDetail
                        label="Panel size:"
                        value="23.8"
                    />
                </div>

                <div className='col-lg-6 col-md-6 col-sm-8 col-10 mx-auto p-0'>
                    <EssentialDetail
                        label="Color:"
                        value="black"
                    />
                    <EssentialDetail
                        label="Series:"
                        value="For Home & Student"
                    />
                    <EssentialDetail
                        label="Screen Type:"
                        value="LED"
                    />
                    <EssentialDetail
                        label="Built-in Speaker:"
                        value="Yes"
                    />
                    <EssentialDetail
                        label="Vertical Viewing Angle:"
                        value="178°"
                    />
                    <EssentialDetail
                        label="Products Status:"
                        value="New, brandnew"
                    />
                    <EssentialDetail
                        label="Response Time:"
                        value="4ms"
                    />
                    <EssentialDetail
                        label="Interface Type:"
                        value="HDMI, VGA"
                    />
                    <EssentialDetail
                        label="Widescreen:"
                        value="Yes"
                    />
                    <EssentialDetail
                        label="Place of Origin:"
                        value="China"
                    />
                    <EssentialDetail
                        label="Use:"
                        value="For Home and Student"
                    />
                    <EssentialDetail
                        label="Style:"
                        value="COMMON"
                    />
                </div>
            </div>
        </div>
    )
}

export const EssentialDetail = ({ label, value }) => {
    return (
        <div className='d-flex mx-auto my-2'>
            <div style={labelStyle} className='col-lg-3 col-md-3 col-sm-3 col-3'>{label}</div>
            <div style={valueStyle}>{value}</div>
        </div>
    );
}

const descriptionStyles = {
    fontSize: "24px",
    color: "#000",
    fontWeight: "700",
}

const descriptionInfoStyles = {
    fontSize: "16px",
    color: "#5E7384",
    fontWeight: "600",
    lineHeight: "26px",
    marginTop: "8px"
}

const labelStyle = {
    fontSize: "14px",
    color: "#5E7384",
    fontWeight: "600",
}

const valueStyle = {
    fontSize: "14px",
    color: "#333",
    fontWeight: "800",
    width: "50%",
    textAlign: "left",
    marginLeft: "8px"
}
