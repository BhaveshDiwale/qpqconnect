"use client";

import "./dashboard.scss";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/navigation";
import Sidebar from "./components/sidebar/Sidebar";
import DashboardTable from "./components/table/DashboardTable";
import DashBoardCard from "./components/card/dashBoardCard";


export default function ProfilePage() {
    const router = useRouter()
    const [data, setData] = useState("nothing");
    const [tabs, setTabs] = useState("last-week")
    const logout = async () => {
        try {
            // await axios.get('/api/users/logout')
            toast.success('Logout successful')
            router.push('/login')
        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message)
        }
    }

    const getUserDetails = async () => {
        const res = await axios.get('/api/users/me')
        console.log(res.data);
        setData(res.data.data._id)
    }

    return (
        <div className='home' >
            <Sidebar />
            <div className='homeContainer'>
                {/*<DashboardNav />*/}
                {/*<DashboardInfo*/}
                {/*    tabs={tabs}*/}
                {/*    setTabs={setTabs}*/}
                {/*/>*/}
                {/*<div className="widgets">*/}
                {/*    <DashboardWidget type="user" />*/}
                {/*    <DashboardWidget type="order" />*/}
                {/*    <DashboardWidget type="earning" />*/}
                {/*    <DashboardWidget type="balance" />*/}
                {/*</div>*/}
                {/*<div className="charts">*/}
                {/*    <DashboardFeatured />*/}
                {/*    <DashboardChart title="Last 6 Months (Revenue)" aspect={2 / 1} />*/}
                {/*</div>*/}
                <DashBoardCard />
                <div className="listContainer">
                    {/*<h5 className="fw-bold">All Inquiry</h5>*/}
                    <DashboardTable />
                </div>
            </div>
        </div>
    )
}

