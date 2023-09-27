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