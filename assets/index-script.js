//===============================================


var hostUrl = "https://enigmatic-citadel-24557.herokuapp.com/";

var url =
  "https://api.yelp.com/v3/businesses/search?location=NYC&categories=coffee";
//fetch(hostUrl + YOUR_URL + parameters)

fetch(hostUrl + url, {
  headers: {
    Authorization:
      "Bearer BK_fUw1pcA-IgUqrycMskSWkpwUNoXrWWGTx9AO5IIzMTjeed_nikV7wdb_PZMGVwR7216XznMJrNwRLz3YVQDIm5QLV8Iap7wBknYLU6ahP7DaYvLmZGXob5LpUYXYx",
  },
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

var id = "gR9DTbKCvezQlqvD7_FzPw";
var newUrl = "https://api.yelp.com/v3/businesses/";

fetch(hostUrl + newUrl + id, {
  headers: {
    Authorization:
      "Bearer BK_fUw1pcA-IgUqrycMskSWkpwUNoXrWWGTx9AO5IIzMTjeed_nikV7wdb_PZMGVwR7216XznMJrNwRLz3YVQDIm5QLV8Iap7wBknYLU6ahP7DaYvLmZGXob5LpUYXYx",
  },
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

///=============================================================================
/// populating cards in main section of home page

function populateCardsWithJobs(parentDivId, filteredList) {
  var parentDiv = document.getElementById(parentDivId);

  parentDiv.innerHTML = '';

  for (let i = 0; i < filteredList.length; i++) {
    var newCardDiv = document.createElement("div");

    newCardDiv.innerHTML = `
        <div class="card list-card">
            <div class="card-body">
                <h4 class="card-title">${filteredList[i].title}</h4>
                <h5>${filteredList[i].company}</h5>
                <p>${filteredList[i].location}</p>
                <a href="./homes.html" id="detail-1" class="btn btn-primary see-detail">See Detail</a>
            </div>
        </div>
        `;

    parentDiv.append(newCardDiv);
  }
}

///=============================================================================
/// searching jobs array

function searchArrayByTitle(arr, searchTerm) {
  var filteredArray = [];

  filteredArray = arr.filter((el) => el.title == searchTerm);

  return filteredArray;
}
///=============================================================================
// handle dropdown menu

function handleDropdown(e) {
  e.preventDefault();
  var dropdownEl = document.getElementById("jobTitle");
  var filterResult = searchArrayByTitle(jobs, dropdownEl.value);
  populateCardsWithJobs("job-list-cards", filterResult);
}

///=============================================================================
// function calls
var filterResult = searchArrayByTitle(jobs, "Web Developer");
populateCardsWithJobs("job-list-cards", filterResult);

document
  .getElementById("dropDownMenu")
  .addEventListener("submit", (event) => handleDropdown(event));
