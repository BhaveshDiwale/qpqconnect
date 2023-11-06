export const BASEURL = "https://backend.qpqconnect.com/";

export async function onSignupApiCalled(data: any, callback: Function) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("mobile", data?.phone);
    urlencoded.append("name", data?.name);
    urlencoded.append("email", data?.email);
    urlencoded.append("country_code", "+91");
    urlencoded.append("is_email", "true");
    urlencoded.append("is_company", "true");
    urlencoded.append("role", "Admin");

    try {
        const res = await fetch(BASEURL + 'signup', {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: urlencoded,
        })

        const data = await res.json();
        callback(data);
        console.log('\n\n onSignupApiCalled success: ', data);
    } catch (error) {
        console.log('\n\n onSignupApiCalled error: ', error);
        callback(null);
    }
}

export function SendEnquiryAPI(mobile: string, name: string, description: string, callback: Function) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("mobile", mobile);
    urlencoded.append("name", name);
    urlencoded.append("description", description);

    var requestOptions: RequestInit | undefined = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    fetch(BASEURL + "enquiry", requestOptions)
        .then(response => response.json())
        .then(result => {
            callback(result);
            console.log('\n\n SendEnquiryAPI success');
        })
        .catch(error => {
            callback(null)
            console.log('\n\n SendEnquiryAPI error: ', error)
        });
}


export async function addBusinessDetailsAPI(data: any, callback: Function) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("mobile", data?.phone);
    urlencoded.append("email", data?.email);
    urlencoded.append("company_name", data?.companyName);
    urlencoded.append("user_id", data?.userId);
    urlencoded.append("role", data?.role);
    urlencoded.append("address", data?.address);
    urlencoded.append("country", data?.country);
    urlencoded.append("logo", "dsd");
    urlencoded.append("images", "");

    try {
        fetch(BASEURL + 'addBusinessDetail', {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: urlencoded,
        })
        callback("data")
        console.log('\n\n addBusinessDetailsAPI success: ', data);
    } catch (error) {
        console.log('\n\n addBusinessDetailsAPI error: ', error)
        callback(null)
    }
}


export async function addUserAPI(data: any, callback: Function) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("mobile", data?.phone);
    urlencoded.append("name", data?.name);
    urlencoded.append("email", data?.email);
    urlencoded.append("country_code", "+91");
    urlencoded.append("is_email", "true");
    urlencoded.append("is_company", "true");
    urlencoded.append("role", data?.role);

    try {
        const res = await fetch(BASEURL + 'signup', {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: urlencoded,
        })

        const data = await res.json();
        callback(data)
        console.log('\n\n addUserAPI success: ', data);
    } catch (error) {
        console.log('\n\n addUserAPI error: ', error)
        callback(null)
    }
}


export async function getUserProfileAPI(data: any, callback: Function) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("user_id", data?.userId);

    try {
        const res = await fetch(BASEURL + 'getUserProfile', {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: urlencoded,
        })

        const data = await res.json();
        callback(data);
        console.log('\n\n getUserProfileAPI success: ', data);
    } catch (error) {
        console.log('\n\n getUserProfileAPI error: ', error)
        callback(null);
    }
}


export async function addTypeServiceAPI(data: any, callback: Function) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("user_id", data?.userId);
    urlencoded.append("business_type", data?.businessTypes);
    urlencoded.append("payment_type", data?.modeOfPayments);
    urlencoded.append("start_week", data?.startDay);
    urlencoded.append("end_week", data?.endDay);
    urlencoded.append("end_time", data?.startTime);
    urlencoded.append("start_time", data?.endTime)

    try {
        const res = await fetch(BASEURL + 'addTypeService', {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: urlencoded,
        })

        const data = await res.json();
        callback(data);
        console.log('\n\n addTypeServiceAPI success: ', data);
    } catch (error) {
        console.log('\n\n addTypeServiceAPI error: ', error);
        callback(null);
    }
}


export async function addTaxInformationAPI(data: any, callback: Function) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("user_id", data?.userId);
    urlencoded.append("business_number", data?.businessNumber);
    urlencoded.append("issued_date", data?.issueDate);

    try {
        const res = await fetch(BASEURL + 'addTaxInformation', {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: urlencoded,
        })

        const data = await res.json();
        callback(data);
        console.log('\n\n addTaxInformationAPI success: ', data);
    } catch (error) {
        console.log('\n\n addTaxInformationAPI error: ', error);
        callback(null);
    }
}


export async function getCompanyUserListAPI(data: any, callback: Function) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("user_id", data?.userId);

    try {
        const res = await fetch(BASEURL + 'getCompanyUserList', {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: urlencoded,
        })

        const data = await res.json();
        callback(data);
        console.log('\n\n getCompanyUserListAPI success: ', data);
    } catch (error) {
        console.log('\n\n getCompanyUserListAPI error: ', error);
        callback(null);
    }
}


export async function addProductAPI(data: any, callback: Function) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("name", data?.productName);
    urlencoded.append("description", data?.description);
    urlencoded.append("price", data?.description);
    urlencoded.append("quantity", data?.quantity);
    urlencoded.append("is_product", "1");
    urlencoded.append("parent_category_id", data?.parentCategory);
    urlencoded.append("user_id", data?.userId);
    urlencoded.append("child_category_id", data?.subCategory);
    urlencoded.append("product_code", data?.productCode);
    urlencoded.append("delivery_time", data?.deliveryTime);

    try {
        const res = await fetch(BASEURL + 'addProducts', {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: urlencoded,
        })

        const data = await res.json();
        callback(data);
        console.log('\n\n addProductAPI success: ', data);
    } catch (error) {
        console.log('\n\n addProductAPI error: ', error);
        callback(null);
    }
}

export async function FetchAllProductsAPI(data: any, callback: Function) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    try {
        const res = await fetch(BASEURL + 'getAllProducts', {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
        })

        const data = await res.json();
        callback(data);
        console.log('\n\n FetchAllProductsAPI success: ', data);
    } catch (error) {
        console.log('\n\n FetchAllProductsAPI error: ', error);
        callback(null);
    }
}
