import { HomeCategoriesList, SellersByCityList } from '@/dummyData/dummyData';
import Image from 'next/image';
import React from 'react'

// qOaxvmWWz7pfyce6vXp3Qc5keVc_esD5SuYOOnk5

export default function FindSellersByCity() {
    return (
        <div className='mt-20 col-md-12 col-10 mx-auto'>
            <h4 className='mb-4' style={{ fontSize: "32px", fontWeight: "600" }}>Find sellers by city</h4>
            <div className="row mx-auto mt-4">
                {SellersByCityList.map((item, indx) => {
                    return (
                        <div className="col-md-2 col-lg-2 col-sm-3 col-4 my-2" key={indx}>
                            <div className="mx-auto rounded text-center">
                                <Image
                                    src={item?.icon} width={100} height={100}
                                    className="image-fluid mx-auto mb-3" alt="..." style={{ width: "100px" }}
                                />
                                <h6 style={{ fontSize: "24px", fontWeight: "600" }}>{item?.name}</h6>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
