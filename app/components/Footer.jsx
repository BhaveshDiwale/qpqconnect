import Image from 'next/image'
import { footerLinks } from '../../dummyData/dummyData'
import Link from 'next/link'
import React from 'react'

const socialList = [
    {
        icon: "/svg/Facebook.svg",
        nav: ""
    },
    {
        icon: "/svg/Instagram.svg",
        nav: ""
    },
    {
        icon: "/svg/Twiter.svg",
        nav: ""
    },
    {
        icon: "/svg/Youtube.svg",
        nav: ""
    },
]

const Footer = () => {
    return (
        <footer className='flex flex-col text-black-100 mt-5 py-5' style={{ marginBottom: "-10px", backgroundColor: "#EEEEEE" }}>
            <div className='d-flex max-md:flex-col sm:px-16 px-6 py-5'>
                <div className='col-lg-1'></div>
                <div className='col-lg-8'>
                    <div className='row text-black'>
                        {footerLinks.map((link) => (
                            <div key={link.title} className='footer__link col-md-3 col-11 mx-auto mt-0'>
                                <h6 className='bold text-sm' style={{ fontSize: "18px", fontWeight: "800" }}>
                                    {link.title}
                                </h6>
                                {link.links.map((item) => (
                                    <Link
                                        key={item.title}
                                        href={item.url}
                                        className='text-black my-0'
                                        style={{ fontSize: "16px", fontWeight: "400", textDecoration: "none" }}
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='col-lg-1'></div>

                <div className='col-lg-2'>
                    <a href="/" className="flex items-center">
                        <Image
                            src="/svg/logo_black.svg"
                            className="h-full mr-3"
                            width={40}
                            height={40}
                            alt="Logo"
                        />
                    </a>
                    <p className='text-base text-black mt-4'>
                        Canmart 2023 <br />
                        All rights reserved &copy;
                    </p>
                    <div className='d-flex mt-4'>
                        {
                            socialList?.map((item, indx) => {
                                return (
                                    <a href="/" className="flex items-center" key={indx}>
                                        <Image
                                            src={item?.icon}
                                            className="h-full mr-1"
                                            width={22}
                                            height={16}
                                            alt="Logo"
                                        />
                                    </a>
                                );
                            })
                        }
                    </div>
                </div>
            </div>

            {/* <div className='row mx-auto w-full text-white my-3 pb-2'>
                <p className='col-md-5 mx-auto text-sm'>@2023 CarHub. All Rights Reserved</p>
                <div className='footer__copyrights-link col-md-4 mx-auto '>
                    <Link href="/" className='text-white text-sm' style={{ textDecoration: "none" }}>
                        Privacy Policy
                    </Link>
                    <Link href="/" className='text-white text-sm' style={{ textDecoration: "none" }}>
                        Terms of Use
                    </Link>
                </div>
            </div> */}
        </footer>
    )
}

export default Footer