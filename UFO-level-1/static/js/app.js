// from data.js
var tableData = data;

// YOUR CODE HERE!
//console.log(tableData)

//set variables
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var tbody_ = d3.select("#tbody");
var columns = ["datetime", "city", "state", "country", "sahpe", "durationMinutes", "comments"]

//input data into HTML
var populateData = (dataInput) => {
    dataInput.forEach(ufo_sightings => {
        var row = tbody_.append("tr");
        columns.forEach(column => row.append("td").text(ufo_sightings[column]))
    }); 
}
//populate the table
populateData(tableData);

//filter by attribute
button.on("click", () => {
    d3.event.preventDefault();
    var inputdate = inputFieldDate.property("value").trim();
    var inputcity = inputFieldCity.property("value").toLowerCase().trim();
    //filter by matching input values
    var filterdate = data.filter(data => data.datetime === inputdate);
    console.log(filterdate)
    var filtercity = data.filter(data => data.city === inputcity);
    console.log(filtercity)
    var filterdata = data.filter(data => data.datetime === inputdate && data.city === inputcity);
    console.log(filterdata)
//add filtered attributes to table
    let response = {
        filterdata, filtercity, filterdate
    }
    if (response.filterdata.length !==0) {
        populateDate(filterdata);
    }
    else if (response.filterdata.length === 0 && (response.filtercity.length !==0 || response.filterdate.length !== 0)){
        populateData(filtercity) || ppopulateData(filterdate);
    }
    else {
        tbody_.append("tr").append("td").text("No results found!");

    }
})
