"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Heading from "../components/Heading";
import "bootstrap/dist/css/bootstrap.min.css";
import { getOTPService } from "../../apis/auth";
import { toast } from "react-hot-toast";
import Image from "next/image";
import { makeStyles } from "@material-ui/core";
import { RecaptchaVerifier, getAuth, signInWithPhoneNumber } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase/firebaseConfig";

// const handleSubmit = useCallback((e: any) => {
//     e.preventDefault();
//     setLoading(true);
//     compareOTPService(phone, otpVal, () => {
//         setLoading(false);
//         alert("Successfully Registered")
//         router.push("/dashboard")
//     }) 

// }, [otpVal, router]);

export default function VerifyOTPPage() {
    const router = useRouter();
    const [loading, setLoading] = React.useState(false);
    const [otpVal, setOTPVal] = React.useState("");
    const phone = router?.query;
    const confirmationResult = router?.query?.confirmationResult;

    const [error, setError] = useState(false);

    const styles = useStyles();

    // function onCaptchVerify() {
    //     const app = initializeApp(firebaseConfig);
    //     if (!window.recaptchaVerifier) {
    //         window.recaptchaVerifier = new RecaptchaVerifier(
    //             getAuth(),
    //             "recaptcha-container",
    //             {
    //                 size: "invisible",
    //                 callback: (response) => {
    //                     otpSubmit();
    //                 },
    //                 "expired-callback": () => { },
    //                 'appVerificationDisabledForTesting': false // Remove or set to false for production
    //             },
    //         );
    //     }
    // }

    // const opSignInSubmit = () => {
    //     setLoading(true);
    //     onCaptchVerify();

    //     const appVerifier = window.recaptchaVerifier;
    //     const formatPh = "+" + '91' + phone;

    //     signInWithPhoneNumber(getAuth(), formatPh, appVerifier)
    //         .then((confirmationResult) => {
    //             setLoading(false);
    //             toast.success("Login success");
    //             alert("OTP sent Successfully");
    //             // router.push("/verifyOTP", { query: { phone: phone, confirmationResult: confirmationResult } });
    //         })
    //         .catch((error) => {
    //             setLoading(false);
    //             console.log(error);
    //         });
    // }

    const otpSubmit = (e) => {
        e.preventDefault();
        // setLoading(true);
        // onCaptchVerify()

        let opt_number = otpVal;
        router.push("/dashboard");

        // try {
        //     confirmationResult
        //         .confirm(opt_number)
        //         .then((confirmationResult) => {
        //             setLoading(false);
        //             console.log(confirmationResult);
        //             onLoginSubmit()
        //         })
        //         .catch((error) => {
        //             // User couldn't sign in (bad verification code?)
        //             setLoading(false);
        //             console.log(error.message);
        //         });
        // } catch (error) {
        //     setLoading(false);
        //     console.log(error.message);
        // }
    };

    const onLoginSubmit = () => {
        if (!phone) {
            setError(true);
            return;
        }
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("mobile", phone);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        setLoading(true);
        getOTPService(phone, (res) => {
            fetch("https://canada-mart.onrender.com/login", requestOptions)
                .then(response => response.json())
                .then(result => {
                    setLoading(false);
                    if (result?.status?.toString() === "true") {
                        console.log("Login success", res);
                        toast.success("Login success");
                        alert("Login success");
                        router.push("/dashboard");
                    } else {
                        console.log("Login failed", res);
                        toast.error("Login failed");
                    }
                })
                .catch(error => {
                    setLoading(false);
                    console.log("Login failed", error.message);
                    toast.error(error.message);
                });
        })
    }

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
                        title="Verify OTP"
                        subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    />

                    <div>
                        <label style={error ? errorlabelStyles : labelStyles}>Verification Code</label>
                        <input
                            type="text"
                            value={otpVal}
                            placeholder="Enter OTP"
                            onChange={(e) => { setOTPVal(e.target.value); setError(false) }}
                            style={error ? inputErrorStyle : inputStyle}
                            className={error ? "form-control inputError mt-2" : "form-control mt-2"}
                        />
                    </div>

                    <a onClick={() => { router.push("/signup"); }}
                        className="btn"
                        style={ResendCode}
                    >
                        Resend Code
                    </a>

                    <a
                        className="btn col-md-12 col-sm-6 col-12 mt-3"
                        style={sendQueryBtn}
                        onClick={otpSubmit}
                    >
                        {!loading
                            ? "Verify"
                            : <Image
                                src="/gif/loading.gif"
                                alt='loading'
                                width={12} height={12}
                                className="mx-auto"
                                style={{ width: "12px", height: "12px" }}
                            />}
                    </a>

                    {/* <div style={DontHaveAccount} className="text-center">
                        <a onClick={() => { router.push("/login"); }}
                            className="btn"
                            style={registerWithUs}
                        >
                            Change Phone number
                        </a>
                    </div> */}

                    <a onClick={() => { router.push("/login"); }}
                        // onClick={(e) => { e.preventDefault(); setUseEmail(!useEmail) }}
                        className="btn btn-link mt-2"
                        style={loginWithEmail}
                    >
                        Change Phone number
                        {/* Login with {useEmail ? "phone" : "email"} */}
                    </a>
                </form>
            </div>
            {/* <div className="col-lg-6 col-md-6 col-sm-0 col-0">
                    <Image
                        src="/images/auth-bg.png"
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
    fontSize: "14px",
    color: "#000",
    fontWeight: "600",
    borderRadius: "4px",
}

const inputErrorStyle = {
    border: "1px solid #F43F5E",
    fontSize: "14px",
    color: "#000",
    fontWeight: "600",
    borderRadius: "4px",
}

const sendQueryBtn = {
    padding: "9px",
    borderRadius: "4px",
    fontSize: "14px",
    fontWeight: "800",
    color: "#FFF",
    paddingTop: "12px",
    backgroundColor: "#000",
}

const DontHaveAccount = {
    fontSize: "16px",
    color: "#000",
    fontWeight: "700",
    marginTop: "4px",
}

const registerWithUs = {
    fontSize: "14px",
    color: "#000",
    fontWeight: "700",
    marginLeft: "-8px"
}

const ResendCode = {
    fontSize: "12px",
    color: "#2DA5F3",
    fontWeight: "600",
    marginLeft: "-12px"
}

const loginWithEmail = {
    fontSize: "16px",
    color: "#8E8E8E",
    fontWeight: "500",
    marginTop: "4px",
    marginLeft: "-12px",
    textDecoration: "none"
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
