
var tableData = data;
var inputdate = d3.select("#datetime")
var button = d3.select("#filter-btn")

// select tbody 
var tbody = d3.select("tbody");

// using Object.entries to get key, value data inside of the table
// and loop through them to add to the table in html
function displayData(data){ 
    tbody.html("");
    //loop through each object in the ufo sighting data 
    data.forEach(function(ufo){
        //first, append new row to table
    data_tr = tbody.append("tr")
    //use object.entries to get value coresponding to key 
    Object.entries(ufo).forEach(function([key, value]){
        //append value to table
        new_td = data_tr.append("td").text(value)	
    })
})}

displayData(data)


function handleclick(){
    //prevent refreshing 
    d3.event.preventDefault();
    console.log(inputdate.property("value"));
    //apply filter to the table data, where inputdate = datetime value 
    var new_table = tableData.filter(ufo => ufo.datetime===inputdate.property("value"))
    //display new table
    displayData(new_table);
}

button.on("click",handleclick)
