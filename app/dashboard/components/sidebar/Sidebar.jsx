import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WidgetsIcon from '@mui/icons-material/Widgets';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Sidebar = () => {
    const [dashboardWidth, setDashboardWidth] = useState(false)

    function handleClick() {
        setDashboardWidth(!dashboardWidth)
    }

    return (
        <div className='pr-5 pl-2' style={{ backgroundColor: "#000" }}>
            <div className="sidebar pr-5" style={{ backgroundColor: "#000", width: dashboardWidth ? "150px" : "260px" }}>
                <div className="top mt-3">
                    <Link href="/" className="pl-2">
                        <Image
                            src="/svg/logo.svg"
                            alt="logo"
                            width={110} height={40}
                        />
                    </Link>

                    <button style={{ marginRight: "-20px" }} onClick={handleClick}>
                        <Image
                            src="/svg/indent-decrease.svg"
                            alt="indent-decrease"
                            width={28} height={28}
                        />
                    </button>
                </div>
                <hr />
                <div className="center">
                    <ul>
                        <p className="title mt-4 text-white" style={{ fontSize: 11, fontWeight: "400" }}>MAIN MENU</p>
                        <Link href="/dashboard" style={{ textDecoration: "none" }}>
                            <li className='mb-2 dashboard-item'>
                                <DashboardIcon className="icon" style={{ color: "#FFF" }} />
                                <span className="text-white dashboard-text my-1" style={{ fontSize: 15, fontWeight: "400" }}>
                                    Dashboard
                                </span>
                            </li>
                        </Link>
                        <p className="title mt-4 pt-2 text-white" style={{ fontSize: 11, fontWeight: "400" }}>PROFILE</p>
                        <Link href="/dashboard/businessDetail" style={{ textDecoration: "none" }}>
                            <li className='mb-2 dashboard-item'>
                                <AddCircleOutlineIcon className="icon" style={{ color: "#FFF" }} />
                                <span className="text-white dashboard-text my-1" style={{ fontSize: 15, fontWeight: "400" }}>
                                    Business details
                                </span>
                            </li>
                        </Link>
                        <Link href="/dashboard/userManagement" style={{ textDecoration: "none" }}>
                            <li className='mb-2 dashboard-item'>
                                <WidgetsIcon className="icon" style={{ color: "#FFF" }} />
                                <span className="text-white dashboard-text my-1" style={{ fontSize: 15, fontWeight: "400" }}>
                                    User Management
                                </span>
                            </li>
                        </Link>
                        <Link href="/dashboard/taxInformation" style={{ textDecoration: "none" }}>
                            <li className='mb-2 dashboard-item'>
                                <WidgetsIcon className="icon" style={{ color: "#FFF" }} />
                                <span className="text-white dashboard-text my-1" style={{ fontSize: 15, fontWeight: "400" }}>
                                    Tax Information
                                </span>
                            </li>
                        </Link>
                        <Link href="/dashboard/typeServices" style={{ textDecoration: "none" }}>
                            <li className='mb-2 dashboard-item'>
                                <WidgetsIcon className="icon" style={{ color: "#FFF" }} />
                                <span className="text-white dashboard-text my-1" style={{ fontSize: 15, fontWeight: "400" }}>
                                    Type and Services
                                </span>
                            </li>
                        </Link>
                        <Link href="/dashboard/adminDetail" style={{ textDecoration: "none" }}>
                            <li className='mb-2 dashboard-item'>
                                <WidgetsIcon className="icon" style={{ color: "#FFF" }} />
                                <span className="text-white dashboard-text my-1" style={{ fontSize: 15, fontWeight: "400" }}>
                                    Admin Details
                                </span>
                            </li>
                        </Link>
                        <p className="title mt-4 pt-2 text-white" style={{ fontSize: 11, fontWeight: "400" }}>Product</p>
                        <Link href="/products" style={{ textDecoration: "none" }}>
                            <li className='mb-2 dashboard-item'>
                                <AddCircleOutlineIcon className="icon" style={{ color: "#FFF" }} />
                                <span className="text-white dashboard-text my-1" style={{ fontSize: 15, fontWeight: "400" }}>
                                    Add Products
                                </span>
                            </li>
                        </Link>
                        <Link href="/products" style={{ textDecoration: "none" }}>
                            <li className='mb-2 dashboard-item'>
                                <WidgetsIcon className="icon" style={{ color: "#FFF" }} />
                                <span className="text-white dashboard-text my-1" style={{ fontSize: 15, fontWeight: "400" }}>
                                    Product List
                                </span>
                            </li>
                        </Link>
                        <p className="title mt-4 pt-2 text-white" style={{ fontSize: 11, fontWeight: "400" }}>Lead Center</p>
                        <Link href="/dashboard/rfqIncome" style={{ textDecoration: "none" }}>
                            <li className='mb-2 dashboard-item'>
                                <ShoppingCartIcon className="icon" style={{ color: "#FFF" }} />
                                <span className="text-white dashboard-text my-1" style={{ fontSize: 15, fontWeight: "400" }}>
                                    RFQ Income
                                </span>
                            </li>
                        </Link>
                        <Link href="/products" style={{ textDecoration: "none" }}>
                            <li className='mb-2 dashboard-item'>
                                <WidgetsIcon className="icon" style={{ color: "#FFF" }} />
                                <span className="text-white dashboard-text my-1" style={{ fontSize: 15, fontWeight: "400" }}>
                                    Product List
                                </span>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;