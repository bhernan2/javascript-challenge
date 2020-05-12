// from data.js
var tableData = data;

// YOUR CODE HERE!

//set variables
var button = d3.select("#filter-btn");
var inputfield1 = d3.select("#datetime");
var inputfield2 = d3.select("#city");
var tbody = d3.select("#body");
var resetbtn = d3.select("#reset-btn")
var columns = ["datetime", "city", "state", "country", "sahpe", "durationMinutes", "comments"]

var populate = (data) => {
    data.ForEach(ufo_sightings => {
        var row = tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufo_sightings[column]))
    }); 
}