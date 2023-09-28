"use client"

import { HomeCategoriesList, SellersByCityList } from '@/dummyData/dummyData';
import Image from 'next/image';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { makeStyles } from "@material-ui/core";

// qOaxvmWWz7pfyce6vXp3Qc5keVc_esD5SuYOOnk5

export default function FindSellersByCity() {
    const styles = useStyles();

    return (
        <div className='mt-20 col-md-12 col-10 mx-auto'>
            <h4 className='mb-4' style={{ fontSize: "32px", fontWeight: "600" }}>Find sellers by city</h4>
            <div className="row mx-auto mt-4">
                <Swiper
                    spaceBetween={50}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className='swiper-container'
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        400: {
                            slidesPerView: 3,
                        },
                        639: {
                            slidesPerView: 3,
                        },
                        865: {
                            slidesPerView: 4
                        },
                        1000: {
                            slidesPerView: 5
                        },
                        1500: {
                            slidesPerView: 6
                        },
                        1700: {
                            slidesPerView: 6
                        }
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                >
                    {SellersByCityList.map((item, indx) => {
                        return (
                            <SwiperSlide>
                                <div className="col-md-12 col-lg-8 col-sm-12 col-10 my-2 mx-auto" key={indx}>
                                    <div className="mx-auto text-center items-center">
                                        <Image
                                            src={item?.icon} width={120} height={120}
                                            className={`mx-auto img-fluid rounded mb-3 ${styles.ImgStyle}`}
                                            alt="..."
                                        />
                                        <h6 style={{ fontSize: "24px", fontWeight: "600" }}>{item?.name}</h6>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}

                    {/* <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide> */}
                </Swiper>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    ImgStyle: {
        [theme.breakpoints.down("xs")]: {
            width: "70px", height: "70px"
        },
        [theme.breakpoints.between("sm", "md")]: {
            width: "80px", height: "80px"
        },
        "@media (min-width: 1280px)": {
            width: "120px", height: "120px"
        }
    }
}));
