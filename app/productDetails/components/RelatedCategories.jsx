import { HomeCategoriesList } from '../../../dummyData/dummyData';
import Image from 'next/image';
import React from 'react'

// qOaxvmWWz7pfyce6vXp3Qc5keVc_esD5SuYOOnk5

export default function RelatedCategories() {
    return (
        <div className='mt-20'>
            <h4 className='mb-4' style={{ fontSize: "32px", fontWeight: "600" }}>Trending Categories</h4>
            <div className="row mx-auto">
                {HomeCategoriesList.map((item, indx) => {
                    return (
                        <div className="col-md-2 col-lg-2 col-sm-3 col-6 p-2" key={indx}>
                            <div className="mx-auto text-center border p-3 pt-4" style={{ height: "178px" }}>
                                <Image
                                    src={item?.icon} width={68} height={68}
                                    className="image-fluid mx-auto mb-3" alt="..." style={{ width: "68px" }}
                                />
                                <h6 style={{ fontSize: "20px", fontWeight: "600", lineHeight: "28px" }}>{item?.name}</h6>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
