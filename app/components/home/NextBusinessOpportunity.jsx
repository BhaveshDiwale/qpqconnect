"use client"

import React, { useEffect, useState } from 'react'
import ListingCard from '../listings/ListingCard'
import { FetchAllProductsAPI } from '../../../apis/API';
import BusinessCard from './BusinessCard';

const businessList = [
    {
        title: "Electronic Gadgets Seller",
        image: "/images/business1.png",
        subImages: [
            { name: "USB Flash Drive", img: "/images/business/b1.png" },
            { name: "Gift Box", img: "/images/business/b2.png" },
            { name: "Barbecue Grill", img: "/images/business/b3.png" },
        ],
    },
    {
        title: "Top ranking Furniture Seller",
        image: "/images/business2.png",
        subImages: [
            { name: "Industrial Equipment &…", img: "/images/business/b4.png" },
            { name: "Electrical & Electronics", img: "/images/business/b5.png" },
            { name: "Construction & Decoration", img: "/images/business/b6.png" },
        ],
    },
    {
        title: "Deals on Best Apparel Sellers",
        image: "/images/business3.png",
        subImages: [
            { name: "Apparel & Textile", img: "/images/business/b7.png" },
            { name: "Gifts & Sports", img: "/images/business/b8.png" },
            { name: "Transportation", img: "/images/business/b9.png" },
        ],
    }
]

export default function NextBusinessOpportunity() {
    const [allListings, setAllListings] = useState([]);

    useEffect(() => {
        FetchAllProductsAPI("8770389198", (res) => {
            if (res !== null) {
                setAllListings(res?.data)
            }
        })
    }, []);

    return (
        <div style={{ backgroundColor: "#EDF0F5" }} className='mt-20'>
            <div className='py-5 col-lg-11 col-md-11 col-sm-11 col-12 mx-auto'>
                <h4 className='mb-4 ml-2' style={{ fontSize: "28px", fontWeight: "700" }}>
                    Discover your next business opportunity
                </h4>

                <div className='row mx-auto'>
                    {businessList?.map((item, indx) => (
                        <BusinessCard key={indx} item={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}
