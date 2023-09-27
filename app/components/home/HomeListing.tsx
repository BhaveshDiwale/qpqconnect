"use client"

import React, { useEffect, useState } from 'react'
import ListingCard from '../listings/ListingCard'
import { FetchAllProductsAPI } from '@/apis/API';

export default function HomeListing() {
    const [allListings, setAllListings] = useState([]);

    useEffect(() => {
        FetchAllProductsAPI("8770389198", (res: any) => {
            if (res !== null) {
                setAllListings(res?.data)
            }
        })
    }, []);

    return (
        <div className='pt-24 '>
            <h4 className='mb-4' style={{ fontSize: "32px", fontWeight: "600" }}>Featured Products</h4>

            <div className="
                grid 
                grid-cols-2
                sm:grid-cols-2
                md:grid-cols-3 
                lg:grid-cols-4
                xl:grid-cols-4
                2xl:grid-cols-4
                gap-4
            ">

                {allListings?.map((item: any, indx: number) => (
                    <ListingCard key={indx} item={item} />
                ))}

            </div>
        </div>
    )
}
