// Jobs Array


var business = 'north-india-restaurant-san-francisco'
var city = 'NYC'
var category = 'coffee'

var url = 'https://api.yelp.com/v3/businesses/search?location='+city+'&categories='+category;
var hostUrl = 'https://enigmatic-citadel-24557.herokuapp.com/';

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
    var businessID = data.id;
    console.log(data);
});

