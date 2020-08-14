// from data.js
var tableData = data;

// // YOUR CODE HERE!
// select tbody 
tbody = d3.select("tbody");


// loop through data and append to a table
function displayData(ufoData){ 
    tbody.text("")
    ufoData.forEach(function(ufoSighting){
    new_tr = tbody.append("tr")
    Object.entries(ufoSighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}

displayData(tableData)


// Select the filter button
var button = d3.select("#filter-btn");

button.on("click", function() {
    

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element 
  var dateInput = d3.select("#datetime");


  // Get the value property of the input element
  console.log(dateInput.property("value"));

  //create a variable which filters the table based on user's entry

  var filtered=tableData.filter(ufoSighting => ufoSighting.datetime === dateInput.property("value"));
//  console.log(filtered);
 //run the filtered entries through the displayData function to update the table
 displayData(filtered);
});



