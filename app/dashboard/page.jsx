"use client";

import "./dashboard.scss";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/sidebar/Sidebar";
import DashboardTable from "./components/table/DashboardTable";
import DashBoardCard from "./components/card/dashBoardCard";


export default function ProfilePage() {
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

