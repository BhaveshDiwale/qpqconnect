import React, { useState } from 'react'
import DashboardDropdown from '../../../components/inputs/DashboardDropdown';
import Image from 'next/image';

const options = [
    { value: 'manager', label: 'Manager' },
    { value: 'user', label: 'User' },
]

export default function ServiceBlock() {
    const [productName, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [photo, setPhoto] = useState([]);
    const [otherImage, setOtherImage] = useState([]);
    const [parentCategory, setParentCategory] = useState("");

    const handleSubmit = () => {
        const data = {
            productName: productName,
            description: description,
            parentCategory: parentCategory,
            photo: photo,
            otherImage: otherImage,
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
        <div>
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
                </div>

                <div className='col-lg-3 col-md-3 col-sm-12 col-12 mx-auto'>
                    <div className='shadow-sm rounded-xl px-4 py-3 mt-4'>
                        <div style={title}>Category</div>
                        <DashboardDropdown
                            label="Service Category"
                            placeholder="select here..."
                            value={parentCategory}
                            setValue={setParentCategory}
                            data={options}
                        />
                    </div>
                </div>
            </div>
            <button className='btn btn-dark col-lg-12 col-md-12 col-sm-12 col-12 mx-auto py-3 mt-4' onClick={handleSubmit}>
                Submit
            </button>
        </div>
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
