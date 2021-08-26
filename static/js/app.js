// Var for the select element (dropdown menu)
var selDataset = d3.select("#selDataset");

// Var for selecting demographics table
var table = d3.select("#sample-metadata");

// Var for selecting bar chart
var barChart = d3.select("#bar");

// Var for selecting bubble chart
var bubbleChart = d3.select("#bubble");

// Var for selecting samples.json
var samples = d3.json("samples.json");

// Populating dropdownMenu
function init() {
    
    // Fetch the JSON data
    // Arrow functoins to add options to the select html elemnt and population each option with names
    samples.then((data) => {
        data.names.forEach((name) => {
            var option = selDataset.append("option");
            option.text(name).property('value', name);
        });
    });
};

// initialize dropdownMenu
init();


// Write out showTable function to show the demographics for each newName
function showTable(data) {

    // Fetch JSON again
    samples.then((data) => {
        // Var to select metadata in samples.json
        var metadata = data.metadata;
        // Var to select an individual metadata from the gorup
        var individualMetadata = metadata.filter(subject => subject.id == data);
        console.log(individualMetadata);
        var filterData = individualMetadata[0];
        // Start process to create demographics table\

        // reset demographics table metadata
        table.html('');

        // Object.entries
        Object.entries(filterData).forEach(([key, value]) => {
            metadisplay.append('h6').text(`${key} ${value}`);
        });

    });
};

// Using optionChanged function to update graph when new id/name is selected
function optionChanged() {
    // will update the demographics info
    showTable();
    // will update the bar and bubble charts
    // plotPlots();
};





