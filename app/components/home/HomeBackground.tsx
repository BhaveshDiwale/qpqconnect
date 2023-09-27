"use client"

import 'bootstrap/dist/css/bootstrap.css'
import Image from "next/image";
import { CSSProperties } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../navbar/Navbar';

const HomeBackground = () => {
    const styles = useStyles();

    return (
        <div>
            <Image
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80" width={700} height={500}
                className={`d-block w-100 home_bg ${styles.backgroundImgStyle}`} alt="..."
            />
            <div style={{ position: "absolute", top: 0, width: "100%" }}>
                <Navbar text="text-white" />

                <div style={contentStyles}>
                    <div className={styles.titleText}>
                        The leading B2B ecommerce platform for global trade
                    </div>
                    <div style={subTitleStyle} className='mx-auto mt-3'>
                        Search for products & find verified sellers near you
                    </div>

                    <div className="d-flex justify-content-center h-100">
                        <div className="searchbar col-lg-5 col-md-5 col-sm-9 col-12">
                            <input className="search_input col-lg-9 col-md-9 col-sm-9 col-8" type="text" name="" placeholder="Search..."
                                style={{ width: "70%" }}
                            />
                            <a href="#" className="search_icon col-lg-3 col-md-3 col-sm-3 col-3">
                                Search
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const contentStyles: CSSProperties = {
    marginTop: "80px",
}

const subTitleStyle: CSSProperties = {
    fontSize: 18,
    fontWeight: "500",
    color: "#FFF",
    textAlign: "center",
    alignSelf: "center"
}

const useStyles = makeStyles((theme) => ({
    titleText: {
        [theme.breakpoints.down("xs")]: {
            fontSize: '24px',
            fontWeight: '700',
            color: "#FFF",
            lineHeight: "32px",
            textAlign: "center",
            width: "90%",
            alignSelf: "center",
            margin: "auto"
        },
        [theme.breakpoints.between("sm", "md")]: {
            fontSize: '46px',
            fontWeight: '700',
            color: "#FFF",
            lineHeight: "66px",
            textAlign: "center",
            width: "80%",
            alignSelf: "center",
            margin: "auto"
        },
        "@media (min-width: 1280px)": {
            fontSize: '60px',
            fontWeight: '600',
            color: "#FFF",
            lineHeight: "81px",
            textAlign: "center",
            width: "60%",
            alignSelf: "center",
            margin: "auto"
        }
    },
    backgroundImgStyle: {
        [theme.breakpoints.down("xs")]: {
            height: "440px", borderRadius: "0 0 50px 50px"
        },
        [theme.breakpoints.between("sm", "md")]: {
            height: "400px", borderRadius: "0 0 50px 50px"
        },
        "@media (min-width: 1280px)": {
            height: "620px", borderRadius: "0 0 50px 50px"
        }
    }
}));

export default HomeBackground;


// 1. Decluttering of signup & signin screen
// 2. On Signup when entering the email id and password check for email and password
// 3. OTP verification
// 4. Arrange bottom tabs icons
// 5. Add location in event details
// 6. Add Register now button in event details - Floating
// 7. Remove 2 events and add events from same organizer - Under Discussion
// 8. Add My group events after my events
// 9. Make Home screen configurable from beckend
// 10. Create Group Screen missing in figma
// 11. Create event design has to be aligned in figma
// 12. Add old payment, payment reciepts, payment invoices screens in figma
// 13. Paid event with cash payment mode in figma
// 14. Approval / Failure regristration screen missing in figma