// Yelp API Parameters
var business = $('.head-custom h5').text();
// Jobs Array

// From job posting
var city = 'Los Angelas, CA'
// var city = localStorage.getItem('location');

// From job posting
var city = 'Los Angelas, CA'
// var city = localStorage.getItem('location');

function locationFormat(location) {
    var city = location;
    city = city.toLowerCase();
    // console.log(city);
    var cityArray = city.split(", ");
    // console.log(cityArray);
    var cityName = cityArray[0].split(" ");
    var cityUrl = cityName.concat(cityArray[1]);
    var cityUrlFormat = cityUrl.join("-");
    console.log(cityUrlFormat);
}

locationFormat(city);

// From Dropdown
var category = 'coffee'

var getYelp = function (category) {
    category=window.category;
    console.log(category);

    var url = 'https://api.yelp.com/v3/businesses/search?location='+city+'&term='+category;
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
        var businessID = data.id;
        console.log(data);
        for (i=0; i<10;i++) {
            var businessName = data.businesses[i].name;
            var businessReviews = data.businesses[i].rating;
            $('.row div:nth-child('+i+') .businessName').text(businessName + ' ('+businessReviews+ ' ⭐)');
            var businessImage = data.businesses[i].image_url;
            $('.row div:nth-child('+i+') .businessImage').attr('src', businessImage);
            var businessPrice = data.businesses[i].price;
            $('.row div:nth-child('+i+') .businessPrice').text(businessPrice);
            var yelpLink = data.businesses[i].url;
            $('.row div:nth-child('+i+') a').attr('href', yelpLink);
        }
    });
}

getYelp();

// Functions and Event Listeners for Yelp Categories Dropdown
$(function () {
    $('#select').select();
});

$( function() {
    $( "#category" ).selectmenu();
} );

$( "#category" ).on( "selectmenuchange", function() {} );

$( "#category" ).selectmenu({
    change: function() {
        var category = $('#category').val();
        window.category = category;
        getYelp(category);
    }
});

// Function to update header with job info from index page
var jobsInfo = function () {
    console.log(jobs);
    

}

jobsInfo();

// Save job to favorites
favoriteBtnEl = $('.btn-primary')
favoriteBtnEl.on('click', function (){
favoritesList = localStorage.getItem('favorite')
// push job id to favorites list array
favoritesList.push();
localStorage.setItem('favorite', favoritesList); 