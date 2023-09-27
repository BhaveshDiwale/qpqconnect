import { useRouter } from "next/router";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";

export const getOTPService = (phone: string, successCallBack: Function) => {
    fetch(`https://2factor.in/API/V1/f49b57a2-047f-11ea-9fa5-0200cd936042/SMS/${phone}/AUTOGEN2/IICBS`)
        .then(response => response.text())
        .then(result => { console.log(result); successCallBack(result) })
        .catch(error => { console.log('error', error); successCallBack(error) });
}

export const compareOTPService = (phone: string, otp: string, successCallBack: Function) => {
    fetch(`https://2factor.in/API/V1/f49b57a2-047f-11ea-9fa5-0200cd936042/SMS/VERIFY3/${phone}/${otp}`)
        .then(response => response.text())
        .then(result => { console.log(result); successCallBack(result) })
        .catch(error => { console.log('error', error); successCallBack(error) });
}