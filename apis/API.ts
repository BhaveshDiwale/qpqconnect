export function FetchAllProductsAPI(mobile: string, callback: Function) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    // var urlencoded = new URLSearchParams();
    // urlencoded.append("mobile", mobile);

    var requestOptions: RequestInit | undefined = {
        method: 'GET',
        headers: myHeaders,
        // body: urlencoded,
        redirect: 'follow'
    };

    fetch("https://canada-mart.onrender.com/getAllProducts", requestOptions)
        .then(response => response.json())
        .then(result => {
            callback(result);
            console.log('\n\n FetchAllProductsAPI success');
        })
        .catch(error => {
            callback(null)
            console.log('\n\n FetchAllProductsAPI error: ', error)
        });
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

    fetch("https://canada-mart.onrender.com/enquiry", requestOptions)
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


export function addBusinessDetailsAPI(data: any, callback: Function) {
    console.log("7777");
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    console.log("8888");

    var urlencoded = new URLSearchParams();
    urlencoded.append("mobile", "9090909090");
    urlencoded.append("email", "ankitjain@gmail.com");
    urlencoded.append("company_name", "Ankit Jain");
    urlencoded.append("user_id", "40");
    urlencoded.append("role", " User");
    urlencoded.append("address", "Local street 120");
    urlencoded.append("country", "ded");
    urlencoded.append("logo", "dsd");
    urlencoded.append("images", "");
    console.log("9999");

    var requestOptions: RequestInit = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };
    console.log("1010");

    try {
        console.log("1111111");
        fetch('http://65.1.148.252:8036/addBusinessDetail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(urlencoded),
        })
            .then(response => { response.json(); console.log("json json"); })
            .then(result => {
                console.log('\n\n addBusinessDetailsAPI success: ', result);
                callback(result);
            })
            .catch(error => {
                console.log('\n\n addBusinessDetailsAPI error: ', error)
                callback(null);
            });
    } catch (error) {
        console.log("Error of the catch addBusinessDetailsAPI: ", error);
    }
}


export async function addUserAPI(data: any, callback: Function) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("mobile", data?.phone);
    urlencoded.append("name", data?.name);
    urlencoded.append("email", data?.email);
    urlencoded.append("country_code", "21");
    urlencoded.append("is_email", "true");
    urlencoded.append("is_company", "true");
    urlencoded.append("role", data?.role);

    try {
        const res = await fetch('http://65.1.148.252:8036/signup', {
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
    urlencoded.append("user_id", "39");

    try {
        const res = await fetch('http://65.1.148.252:8036/getUserProfile', {
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
    urlencoded.append("user_id", "38");
    urlencoded.append("business_type", "Product");
    urlencoded.append("payment_type", "COD");
    urlencoded.append("start_week", "Monday");
    urlencoded.append("end_week", "Saturday");
    urlencoded.append("end_time", "9:00 AM");
    urlencoded.append("start_time", "10:00 PM")

    try {
        const res = await fetch('http://65.1.148.252:8036/addTypeService', {
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
    urlencoded.append("user_id", "38");
    urlencoded.append("business_number", data?.businessNumber);
    urlencoded.append("issued_date", data?.issueDate);

    try {
        const res = await fetch('http://65.1.148.252:8036/addTaxInformation', {
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
    urlencoded.append("user_id", "38");

    try {
        const res = await fetch('http://65.1.148.252:8036/getCompanyUserList', {
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
    urlencoded.append("quantity", "1");
    urlencoded.append("is_product", "1");
    urlencoded.append("parent_category_id", data?.parentCategory);
    urlencoded.append("user_id", "2");
    urlencoded.append("child_category_id", data?.subCategory);
    urlencoded.append("product_code", data?.productCode);
    urlencoded.append("delivery_time", data?.deliveryTime);

    try {
        const res = await fetch('http://65.1.148.252:8036/addProducts', {
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
