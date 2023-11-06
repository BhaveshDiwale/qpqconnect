"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-hot-toast";
import Image from "next/image";
import { makeStyles } from "@material-ui/core";
import Heading from "../../../app/components/Heading";
import { onSignupApiCalled } from "../../../apis/API";
import { setCookie } from "cookies-next";
import CircularProgress from '@material-ui/core/CircularProgress';

export default function VerifyOTPSignUp({ codeResult, phone, name, email }) {
    const router = useRouter();
    const [loading, setLoading] = React.useState(false);
    const [otpVal, setOTPVal] = React.useState("");
    const [error, setError] = useState(false);

    const styles = useStyles();

    function codeVerify() {
        setLoading(true);
        codeResult.confirm(otpVal).then(function () {
            console.log('OTP Verified');
            alert("OTP Verified")
            handleSubmit();
        }).catch(function () {
            console.log('OTP Not correct');
            alert('OTP Not correct');
            setLoading(false);
        })
    }

    const handleSubmit = () => {
        if (!phone && !email && !name) {
            setError(true);
            return;
        }
        setLoading(true);

        const data = {
            name: name,
            email: email,
            phone: phone
        }
        console.log("Login api called");
        onSignupApiCalled(data, (result) => {
            if (result !== null) {
                if (result?.status?.toString() === "true") {
                    setCookie('userData', result.data);
                    console.log("SignUp success", result);
                    toast.success("SignUp success");
                    alert("SignUp Success");
                    router.push("/dashboard");
                } else {
                    console.log("SignUp failed", result);
                    alert(result?.message);
                    setLoading(false);
                }
            } else {
                console.log("Signup failed");
                alert("Signup failed");
                setLoading(false);
            }
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
                        onClick={codeVerify}
                    >
                        {!loading
                            ? "Verify"
                            : <CircularProgress
                                size={18}
                                thickness={5}
                                color="#fff"
                                className="mt-1"
                            />}
                    </a>

                    <a onClick={() => { router.push("/login"); }}
                        className="btn btn-link mt-2"
                        style={loginWithEmail}
                    >
                        Change Phone number
                    </a>
                </form>
            </div>
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
