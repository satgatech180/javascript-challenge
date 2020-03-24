// from data.js
var tableData = data
var tbody = d3.select('tbody');
var filters = d3.selectAll('input');
var btn = d3.select('button');
var filteredData = tableData;

showData(tableData);
filters.on('change', handleChange);
btn.on('click', handleClick);

function showData (data) {
  tbody.html('');
  data.forEach(function (weatherReport) {
    var row = tbody.append('tr')
    Object.entries(weatherReport).forEach(function ([key, value]) {
      var cell = row.append('td')
      cell.text(value)
    });
  });
};

function handleClick() {
  filteredData = tableData;
  showData(filteredData);
};

function handleChange() {
  Object.values(filters).forEach(val => {
    var key = d3.select(this).property('id');
    var value = d3.select(this).property('value');
    filteredData = filteredData.filter(row => row[key] == value);
  });
  showData(filteredData);
}

