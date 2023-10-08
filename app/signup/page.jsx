"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Heading from "../components/Heading";
import "bootstrap/dist/css/bootstrap.min.css";
import { getOTPService } from "../../apis/auth";
import { toast } from "react-hot-toast";
import Image from "next/image";
import CountrySelect, { CountrySelectValue } from "../components/inputs/CountrySelect";
import { makeStyles } from "@material-ui/core";

export default function SignupPage() {
    const router = useRouter();
    const [email, setEmail] = React.useState("");
    const [companyName, setCompanyName] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [location, setLocation] = useState();
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = useState(false);

    const onRegisterSubmit = () => {
        if (!phone && !email && !companyName) {
            setError(true);
            return;
        }
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("mobile", phone);
        urlencoded.append("first_name", companyName);
        urlencoded.append("last_name", companyName);
        urlencoded.append("email", email);
        urlencoded.append("country_code", "+91");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        setLoading(true);
        fetch("https://canada-mart.onrender.com/signup", requestOptions)
            .then(response => response.json())
            .then(result => {
                getOTPService(phone, (res) => {
                    setLoading(false);
                    console.log("Signup success", result);
                    alert("OTP sent Successfully");
                    toast.success("Signup success");
                    router.push("/verifyOTP");
                })
            })
            .catch(error => {
                setLoading(false);
                console.log('error', error);
                // callback(null)
            });
    }

    const styles = useStyles();

    return (
        <div className="row mx-auto">
            <div className="col-lg-3 col-md-3 col-sm-0 col-0 mx-auto p-0">
                <div style={{
                    backgroundImage: "url('/svg/authbg.svg')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }} className={styles.authBgImage} />
            </div>
            <div className={`col-lg-9 col-md-9 col-sm-12 col-12 mx-auto ${styles.paddingAtForm}`}>
                <div style={{ position: "absolute", top: "28px", marginLeft: "-48px" }}>
                    <Image
                        src="/svg/auth-logo.svg"
                        alt="auth-logo"
                        width={120} height={50}
                    />
                </div>
                <form className="mt-24 col-lg-6 col-md-10 col-sm-10 col-12 mx-auto shadow-sm p-5 rounded-2xl">
                    <Heading
                        title="Sign In"
                        subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    />

                    <label style={error ? errorlabelStyles : labelStyles}>Company Name</label>
                    <input
                        type="text"
                        value={companyName}
                        placeholder="Enter your name here"
                        onChange={(e) => { setCompanyName(e.target.value) }}
                        style={error ? inputErrorStyle : inputStyle}
                        className={error ? "form-control inputError mt-1" : "form-control mt-1"}
                    />

                    <label style={error ? errorlabelStyles : labelStyles}>Mobile Number</label>
                    <div className="d-flex mt-1">
                        <CountrySelect
                            value={location}
                            onChange={(value) => {
                                setLocation(value)
                            }}
                        />
                        <input
                            type="text"
                            value={phone}
                            placeholder="+91"
                            onChange={(e) => { setPhone(e.target.value); setError(false) }}
                            style={error ? inputErrorStyle : inputStyle}
                            className={error ? "form-control ml-2 inputError" : "form-control ml-2"}
                        />
                    </div>

                    <label style={error ? errorlabelStyles : labelStyles}>Email</label>
                    <input
                        type="text"
                        value={email}
                        placeholder="Enter your email address here"
                        onChange={(e) => { setEmail(e.target.value) }}
                        style={error ? inputErrorStyle : inputStyle}
                        className={error ? "form-control inputError mt-1" : "form-control mt-1"}
                    />

                    <a
                        className="btn col-md-12 col-sm-12 col-12 mt-3"
                        style={sendQueryBtn}
                        onClick={onRegisterSubmit}
                    >
                        Create an account
                    </a>

                    <div style={DontHaveAccount} className="text-center">Already have an account ?
                        <a onClick={() => { router.push("/login"); }}
                            className="btn"
                            style={registerWithUs}
                        >
                            {!loading
                                ? "Sign In"
                                : <Image
                                    src="/gif/loading.gif"
                                    alt='loading'
                                    width={12} height={12}
                                    className="mx-auto"
                                    style={{ width: "12px", height: "12px" }}
                                />}
                        </a>
                    </div>
                </form>
            </div>
            {/* <div className="col-lg-6 col-md-7 col-sm-0 col-0 p-0 mx-auto">
                    <Image
                        src="/images/signup_bg.avif"
                        width={400} height={400}
                        alt="auth-bg"
                        className="col-lg-12 col-md-12 col-sm-0 col-0"
                        style={{ height: "570px" }}
                    />
                </div> */}
        </div>
    );
}

const labelStyles = {
    fontSize: "16px",
    color: "#000",
    fontWeight: "600",
    marginTop: "12px"
}

const errorlabelStyles = {
    fontSize: "16px",
    color: "#F43F5E",
    fontWeight: "600",
    marginTop: "12px"
}

const inputStyle = {
    border: "1px solid #E4E7E9",
    fontSize: "16px",
    color: "#000",
    fontWeight: "600",
    borderRadius: "4px",
}

const inputErrorStyle = {
    border: "1px solid #F43F5E",
    fontSize: "16px",
    color: "#000",
    fontWeight: "600",
    borderRadius: "4px",
}

const sendQueryBtn = {
    padding: "9px",
    borderRadius: "4px",
    fontSize: "16px",
    fontWeight: "700",
    color: "#FFF",
    paddingTop: "12px",
    backgroundColor: "#000",
}

const checkStyle = {
    backgroundColor: "#E5E5E5",
    width: "14px",
    height: "14px",
    marginTop: "12px",
    marginRight: "8px",
    outline: "none"
}

const remembermeText = {
    fontSize: "14px",
    color: "#8E8E8E",
    fontWeight: "500",
    marginTop: "8px",
}

const loginWithEmail = {
    fontSize: "16px",
    color: "#8E8E8E",
    fontWeight: "500",
    marginTop: "4px",
    marginLeft: "-12px",
    textDecoration: "none"
}

const DontHaveAccount = {
    fontSize: "16px",
    color: "#000",
    fontWeight: "700",
    marginTop: "4px",
}

const registerWithUs = {
    fontSize: "16px",
    color: "#000",
    fontWeight: "700",
    marginLeft: "-8px"
}

const useStyles = makeStyles((theme) => ({
    paddingAtForm: {
        [theme.breakpoints.down("xs")]: {
            padding: "0 40px"
        },
        [theme.breakpoints.between("sm", "md")]: {
            padding: "0 40px"
        },
        "@media (min-width: 1280px)": {
            padding: "40px 100px",
            borderRadius: "40px",
            backgroundColor: "#FFF",
        }
    },
    authBgImage: {
        [theme.breakpoints.down("xs")]: {
            width: 0,
            height: 0
        },
        [theme.breakpoints.between("sm", "md")]: {
            width: 0,
            height: 0
        },
        "@media (min-width: 1280px)": {
            width: "110%",
            height: "707px",
        }
    }
}));
