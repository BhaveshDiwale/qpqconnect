"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Heading from "../components/Heading"; import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import CountrySelect, { CountrySelectValue } from "../components/inputs/CountrySelect";
import { makeStyles } from "@material-ui/core";

import { initializeApp } from "firebase/app";
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import toast from "react-hot-toast";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNa6g4vGbPuStWN91cM0mFsBjLcglKjYg",
    authDomain: "canmart-3b042.firebaseapp.com",
    projectId: "canmart-3b042",
    storageBucket: "canmart-3b042.appspot.com",
    messagingSenderId: "648451992770",
    appId: "1:648451992770:web:f2ac6a0f4faeaba0529f5b",
    measurementId: "G-ZQ9W4J16J4"
};


export default function LoginPage() {
    const router = useRouter();
    const [phone, setPhone] = React.useState("");
    const [location, setLocation] = useState();
    const [loading, setLoading] = React.useState(false);
    const [useEmail, setUseEmail] = useState(false);
    const [error, setError] = useState(false);
    const app = initializeApp(firebaseConfig);

    function onCaptchVerify() {
        const app = initializeApp(firebaseConfig);
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(
                getAuth(),
                "recaptcha-container",
                {
                    size: "invisible",
                    callback: (response) => {
                        opsignInSubmit();
                    },
                    "expired-callback": () => { },
                    'appVerificationDisabledForTesting': false // Remove or set to false for production
                },

            );
        }
    }

    const opsignInSubmit = (event) => {
        onCaptchVerify();

        const appVerifier = window.recaptchaVerifier;

        const formatPh = "+" + '91' + phone;

        signInWithPhoneNumber(getAuth(), formatPh, appVerifier)
            .then((confirmationResult) => {
                setLoading(false);
                toast.success("Login success");
                alert("OTP sent Successfully");
                router.push("/verifyOTP", { query: { phone: phone, confirmationResult: confirmationResult } });
                // router.push('/verifyOTP', { scroll: false })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const onLoginSubmit = (e) => {
        setLoading(true);
        opsignInSubmit();
        // const router = useRouter();
        // if (!phone) {
        //     setError(true);
        //     return;
        // }
        // var myHeaders = new Headers();
        // myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        // var urlencoded = new URLSearchParams();
        // urlencoded.append("mobile", phone);

        // var requestOptions: RequestInit | undefined = {
        //     method: 'POST',
        //     headers: myHeaders,
        //     body: urlencoded,
        //     redirect: 'follow'
        // };

        // setLoading(true);
        // getOTPService(phone, (res: any) => {
        //     fetch("https://canada-mart.onrender.com/login", requestOptions)
        //         .then(response => response.json())
        //         .then(result => {
        //             setLoading(false);
        //             console.log('====================================');
        //             console.log(typeof result?.status);
        //             console.log('====================================');
        //             if (result?.status?.toString() === "true") {
        //                 console.log("Login success", res);
        //                 toast.success("Login success");
        //                 alert("Login Success");
        //                 router.push("/verifyOTP");
        //             } else {
        //                 console.log("Login failed", res);
        //                 toast.error("Login failed");
        //             }
        //         })
        //         .catch(error => {
        //             console.log("Login failed", error.message);
        //             toast.error(error.message);
        //         });
        // })
    }

    const styles = useStyles();

    return (
        <>
            <script src="https://www.google.com/recaptcha/api.js" async defer></script>

            <div className="row mx-auto">
                <div className="col-lg-3 col-md-3 col-sm-0 col-0 mx-auto p-0">
                    <div style={{
                        backgroundImage: "url('/svg/authbg.svg')",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }} className={styles.authBgImage} />
                </div>
                <div className={`col-lg-9 col-md-9 col-sm-12 col-12 mx-auto ${styles.paddingAtForm}`}>
                    <div id='recaptcha-container'></div>
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

                        {!useEmail && <div>
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
                        </div>}

                        {useEmail && <div>
                            <label style={error ? errorlabelStyles : labelStyles}>Email</label>
                            <input
                                type="text"
                                value={phone}
                                placeholder="Enter your email address here"
                                onChange={(e) => { setPhone(e.target.value); setError(false) }}
                                style={error ? inputErrorStyle : inputStyle}
                                className={error ? "form-control inputError" : "form-control"}
                            />
                        </div>}

                        <div className="d-flex my-2">
                            <input
                                type="checkbox"
                                value=""
                                onChange={(e) => { }}
                                style={checkStyle}
                            />
                            <label style={remembermeText}>
                                Remember me?
                            </label>
                        </div>

                        <a
                            className="btn col-md-12 col-sm-12 col-12 mt-3 py-3"
                            style={sendQueryBtn}
                            onClick={onLoginSubmit}
                            id="sign-in-button"
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

                        <button onClick={(e) => { e.preventDefault(); setUseEmail(!useEmail) }}
                            className="btn btn-link mt-2"
                            style={loginWithEmail}
                        >
                            Login with {useEmail ? "phone" : "email"}
                        </button>

                        <div style={DontHaveAccount} className="text-center">Don’t have account?
                            <a onClick={() => { router.push("/signup"); }}
                                className="btn"
                                style={registerWithUs}
                            >
                                Register with us
                            </a>
                        </div>
                    </form>
                </div>
            </div>
            <div style={{ marginBottom: "-30px" }} />
        </>
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
    fontSize: "18px",
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


// "use client";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import Heading from "../components/Heading"; import "bootstrap/dist/css/bootstrap.min.css";
// import Image from "next/image";
// import CountrySelect, { CountrySelectValue } from "../components/inputs/CountrySelect";
// import { makeStyles } from "@material-ui/core";
// import { initializeApp } from "firebase/app";

// // Your web app's Firebase configuration
// export const firebaseConfig = {
//     apiKey: "AIzaSyDNa6g4vGbPuStWN91cM0mFsBjLcglKjYg",
//     authDomain: "canmart-3b042.firebaseapp.com",
//     projectId: "canmart-3b042",
//     storageBucket: "canmart-3b042.appspot.com",
//     messagingSenderId: "648451992770",
//     appId: "1:648451992770:web:f2ac6a0f4faeaba0529f5b",
//     measurementId: "G-ZQ9W4J16J4"
// };

// export default function LoginPage() {
//     const router = useRouter();
//     const [phone, setPhone] = React.useState("");
//     const [location, setLocation] = useState();
//     const [loading, setLoading] = React.useState(false);
//     const [useEmail, setUseEmail] = useState(false);
//     const [error, setError] = useState(false);
//     const app = initializeApp(firebaseConfig);

//     function onCaptchVerify() {
//         const app = initializeApp(firebaseConfig);
//         if (!window.recaptchaVerifier) {
//             window.recaptchaVerifier = new RecaptchaVerifier(
//                 getAuth(),
//                 "recaptcha-container",
//                 {
//                     size: "invisible",
//                     callback: (response) => {
//                         opSignInSubmit();
//                     },
//                     "expired-callback": () => { },
//                     'appVerificationDisabledForTesting': false // Remove or set to false for production
//                 },
//             );
//         }
//     }

//     const opSignInSubmit = () => {
//         if (!phone) {
//             setError(true);
//             return;
//         }
//         setLoading(true);
//         onCaptchVerify();

//         const appVerifier = window.recaptchaVerifier;
//         const formatPh = "+" + '91' + phone;

//         signInWithPhoneNumber(getAuth(), formatPh, appVerifier)
//             .then((confirmationResult) => {
//                 setLoading(false);
//                 toast.success("Login success");
//                 alert("OTP sent Successfully");
//                 router.push("/verifyOTP", { query: { phone: phone, confirmationResult: confirmationResult } });
//                 // router.push('/verifyOTP', { scroll: false })
//             })
//             .catch((error) => {
//                 setLoading(false);
//                 console.log(error);
//             });
//     }

//     const styles = useStyles();

//     return (
//         <>
//             <script src="https://www.google.com/recaptcha/api.js" async defer></script>

//             <div className="row mx-auto">
//                 <div className="col-lg-3 col-md-3 col-sm-0 col-0 mx-auto p-0">
//                     <div style={{
//                         backgroundImage: "url('/svg/authbg.svg')",
//                         backgroundSize: "cover",
//                         backgroundRepeat: "no-repeat",
//                     }} className={styles.authBgImage} />
//                 </div>
//                 <div className={`col-lg-9 col-md-9 col-sm-12 col-12 mx-auto ${styles.paddingAtForm}`}>
//                     <div id='recaptcha-container'></div>
//                     <div style={{ position: "absolute", top: "28px", marginLeft: "-48px" }}>
//                         <Image
//                             src="/svg/auth-logo.svg"
//                             alt="auth-logo"
//                             width={120} height={50}
//                         />
//                     </div>
//                     <form className="mt-24 col-lg-6 col-md-10 col-sm-10 col-12 mx-auto shadow-sm p-5 rounded-2xl">
//                         <Heading
//                             title="Sign In"
//                             subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
//                         />

//                         {!useEmail && <div>
//                             <label style={error ? errorlabelStyles : labelStyles}>Mobile Number</label>
//                             <div className="d-flex mt-1">
//                                 <CountrySelect
//                                     value={location}
//                                     onChange={(value) => {
//                                         setLocation(value)
//                                     }}
//                                 />
//                                 <input
//                                     type="text"
//                                     value={phone}
//                                     placeholder="+91"
//                                     onChange={(e) => { setPhone(e.target.value); setError(false) }}
//                                     style={error ? inputErrorStyle : inputStyle}
//                                     className={error ? "form-control ml-2 inputError" : "form-control ml-2"}
//                                 />
//                             </div>
//                         </div>}

//                         {useEmail && <div>
//                             <label style={error ? errorlabelStyles : labelStyles}>Email</label>
//                             <input
//                                 type="text"
//                                 value={phone}
//                                 placeholder="Enter your email address here"
//                                 onChange={(e) => { setPhone(e.target.value); setError(false) }}
//                                 style={error ? inputErrorStyle : inputStyle}
//                                 className={error ? "form-control inputError" : "form-control"}
//                             />
//                         </div>}

//                         <div className="d-flex my-2">
//                             <input
//                                 type="checkbox"
//                                 value=""
//                                 onChange={(e) => { }}
//                                 style={checkStyle}
//                             />
//                             <label style={remembermeText}>
//                                 Remember me?
//                             </label>
//                         </div>

//                         <a
//                             className="btn col-md-12 col-sm-12 col-12 mt-3 py-3"
//                             style={sendQueryBtn}
//                             onClick={opSignInSubmit}
//                             id="sign-in-button"
//                         >
//                             {!loading
//                                 ? "Sign In"
//                                 : <Image
//                                     src="/gif/loading.gif"
//                                     alt='loading'
//                                     width={12} height={12}
//                                     className="mx-auto"
//                                     style={{ width: "12px", height: "12px" }}
//                                 />}
//                         </a>

//                         <button onClick={(e) => { e.preventDefault(); setUseEmail(!useEmail) }}
//                             className="btn btn-link mt-2"
//                             style={loginWithEmail}
//                         >
//                             Login with {useEmail ? "phone" : "email"}
//                         </button>

//                         <div style={DontHaveAccount} className="text-center">Don’t have account?
//                             <a onClick={() => { router.push("/signup"); }}
//                                 className="btn"
//                                 style={registerWithUs}
//                             >
//                                 Register with us
//                             </a>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//             <div style={{ marginBottom: "-30px" }} />
//         </>
//     );
// }

// const labelStyles = {
//     fontSize: "16px",
//     color: "#000",
//     fontWeight: "600",
//     marginTop: "12px"
// }

// const errorlabelStyles = {
//     fontSize: "16px",
//     color: "#F43F5E",
//     fontWeight: "600",
//     marginTop: "12px"
// }

// const inputStyle = {
//     border: "1px solid #E4E7E9",
//     fontSize: "16px",
//     color: "#000",
//     fontWeight: "600",
//     borderRadius: "4px",
// }

// const inputErrorStyle = {
//     border: "1px solid #F43F5E",
//     fontSize: "16px",
//     color: "#000",
//     fontWeight: "600",
//     borderRadius: "4px",
// }

// const sendQueryBtn = {
//     padding: "9px",
//     borderRadius: "4px",
//     fontSize: "18px",
//     fontWeight: "700",
//     color: "#FFF",
//     paddingTop: "12px",
//     backgroundColor: "#000",
// }

// const checkStyle = {
//     backgroundColor: "#E5E5E5",
//     width: "14px",
//     height: "14px",
//     marginTop: "12px",
//     marginRight: "8px",
//     outline: "none"
// }

// const remembermeText = {
//     fontSize: "14px",
//     color: "#8E8E8E",
//     fontWeight: "500",
//     marginTop: "8px",
// }

// const loginWithEmail = {
//     fontSize: "16px",
//     color: "#8E8E8E",
//     fontWeight: "500",
//     marginTop: "4px",
//     marginLeft: "-12px",
//     textDecoration: "none"
// }

// const DontHaveAccount = {
//     fontSize: "16px",
//     color: "#000",
//     fontWeight: "700",
//     marginTop: "4px",
// }

// const registerWithUs = {
//     fontSize: "16px",
//     color: "#000",
//     fontWeight: "700",
//     marginLeft: "-8px"
// }

// const useStyles = makeStyles((theme) => ({
//     paddingAtForm: {
//         [theme.breakpoints.down("xs")]: {
//             padding: "0 40px"
//         },
//         [theme.breakpoints.between("sm", "md")]: {
//             padding: "0 40px"
//         },
//         "@media (min-width: 1280px)": {
//             padding: "40px 100px",
//             borderRadius: "40px",
//             backgroundColor: "#FFF",
//         }
//     },
//     authBgImage: {
//         [theme.breakpoints.down("xs")]: {
//             width: 0,
//             height: 0
//         },
//         [theme.breakpoints.between("sm", "md")]: {
//             width: 0,
//             height: 0
//         },
//         "@media (min-width: 1280px)": {
//             width: "110%",
//             height: "707px",
//         }
//     }
// }));
