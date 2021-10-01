///=============================================================================
/// populating cards in main section of home page

function populateCardsWithJobs(parentDivId, filteredList) {
  var parentDiv = document.getElementById(parentDivId);

  parentDiv.innerHTML = "";

  for (let i = 0; i < filteredList.length; i++) {
    var newCardDiv = document.createElement("div");

    newCardDiv.innerHTML = `
        <div class="card list-card">
            <div class="card-body">
                <h4 class="card-title">${filteredList[i].title}</h4>
                <h5>${filteredList[i].company}</h5>
                <p>${filteredList[i].location}</p>
                <p>${filteredList[i].id}</p>
                <a href="./homes.html" id="${filteredList[i].id}" class="btn btn-primary see-detail">See Detail</a>
            </div>
        </div>
        `;
    parentDiv.append(newCardDiv);
    //=========================
    // local storage job id
    var detailBtnEl = $(".see-detail");
    detailBtnEl.each(function () {
      $(this).on("click", function () {
        var companyID = Number($(this).attr("id"));
        //console.log(companyID);
        localStorage.setItem("id", companyID);
      });
    });
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

//===============================================================================
//add event listener to a button, when click the button, it will go to the home page and card job info will stored in local storage

var detailBtnEl = $("#detail-1");
detailBtnEl.on("click", function (event) {
  //event.preventDefault();
  console.log(event);
  var jobInfo = {
    jobTitle: $(this).siblings("h5").text(),
    companyName: $(this).siblings("h6").text(),
    jobLocation: $(this).siblings("p").text(),
  };
  localStorage.setItem("jobCard", JSON.stringify(jobInfo));
});
