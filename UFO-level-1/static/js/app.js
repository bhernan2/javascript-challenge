// from data.js
var tableData = data;

// YOUR CODE HERE!

//set variables
var button = d3.select("#filter-btn");
var inputField1 = d3.select("#datetime");
var inputField2 = d3.select("#city");
var $tbody = d3.select("tbody");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

var ufodata = (dataInput) => {

  dataInput.forEach(ufo_sightings => {
    var row = $tbody.append("tr");
    columns.forEach(column => row.append("td").text(ufo_sightings[column])
    )
  });
}

//populate table 
ufodata(data);

//filter by attribute
button.on("click", () => {
  d3.event.preventDefault();
  var inputDate = inputField1.property("value").trim();
  var inputCity = inputField2.property("value").toLowerCase().trim();
  //filter by matching input values
  var filterDate = data.filter(data => data.datetime === inputDate);
  console.log(filterDate)
  var filterCity = data.filter(data => data.city === inputCity);
  console.log(filterCity)
  var filterData = data.filter(data => data.datetime === inputDate && data.city === inputCity);
  console.log(filterData)

  //add filtered ufo sightings to table
  $tbody.html("");

  let response = {
    filterData, filterCity, filterDate
  }

  if (response.filterData.length !== 0) {
    ufodata(filterData);
  }
    else if (response.filterData.length === 0 && ((response.filterCity.length !== 0 || response.filterDate.length !== 0))){
      ufodata(filterCity) || ufodata(filterDate);
  
    }
    else {
      $tbody.append("tr").append("td").text("No results found!"); 
    }
})

