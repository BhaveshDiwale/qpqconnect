import { footerLinks } from '../../dummyData/dummyData'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='flex flex-col text-black-100 mt-5 py-5 bg-black' style={{ marginBottom: "-10px" }}>
            <div className='d-flex max-md:flex-col sm:px-16 px-6 py-5'>
                <div className='col-lg-3'>
                    <h1 className='text-white'>LOGO</h1>
                    {/* <Image
                        src="/logo.svg"
                        alt="logo"
                        width={118}
                        height={18}
                        className='object-contain'
                    /> */}
                    <p className='text-base text-white mt-4'>
                        Canmart 2023 <br />
                        All rights reserved &copy;
                    </p>
                </div>

                <div className='col-lg-9'>
                    <div className='row text-white'>
                        {footerLinks.map((link) => (
                            <div key={link.title} className='footer__link col-md-3 col-11 mx-auto mt-3'>
                                <h6 className='bold text-sm' style={{ fontSize: "20px", fontWeight: "700" }}>
                                    {link.title}
                                </h6>
                                {link.links.map((item) => (
                                    <Link
                                        key={item.title}
                                        href={item.url}
                                        className='text-white my-1'
                                        style={{ fontSize: "18px", fontWeight: "300", textDecoration: "none" }}
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        ))}
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