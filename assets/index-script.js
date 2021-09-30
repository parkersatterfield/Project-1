// var url ="http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=X1-ZWz16hs353nimj_5cfwc&address=2114+Bigelow+Ave&citystatezip=Seattle%2C+WA";

var hostUrl = 'https://enigmatic-citadel-24557.herokuapp.com/';

var url = "https://api.yelp.com/v3/businesses/search?location=NYC&categories=coffee";
//fetch(hostUrl + YOUR_URL + parameters)


fetch(hostUrl+url, {
    headers : {
        'Authorization': 'Bearer BK_fUw1pcA-IgUqrycMskSWkpwUNoXrWWGTx9AO5IIzMTjeed_nikV7wdb_PZMGVwR7216XznMJrNwRLz3YVQDIm5QLV8Iap7wBknYLU6ahP7DaYvLmZGXob5LpUYXYx'
    }
})
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
});

var id = "gR9DTbKCvezQlqvD7_FzPw"
var newUrl = "https://api.yelp.com/v3/businesses/"

fetch(hostUrl+newUrl+id, {
    headers : {
        'Authorization': 'Bearer BK_fUw1pcA-IgUqrycMskSWkpwUNoXrWWGTx9AO5IIzMTjeed_nikV7wdb_PZMGVwR7216XznMJrNwRLz3YVQDIm5QLV8Iap7wBknYLU6ahP7DaYvLmZGXob5LpUYXYx'
    }
})
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
});

