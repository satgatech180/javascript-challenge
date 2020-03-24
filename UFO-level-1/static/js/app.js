// from data.js
var tableData = data
var tbody = d3.select('tbody');
var filter = d3.select('input');
var btn = d3.select('button');

showData(tableData);
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
  var filteredData = tableData;
  var date = filter.property('value');

  if (date) {
      filteredData = filteredData.filter(row => row.datetime === date)
  };
  filter.property('value','');
  showData(filteredData);
};

