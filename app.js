import data from "/data.json" with { type: "json" };
// import bakeryprofile from "./bakeryprofile.hbs" with { type: "json"}
// import test from "./test.js" 
// console.log(test)
// import hbs from 'hbs'; 


//get the bakery number for the profile that was selected
let url = new URL(document.location);
let params = url.searchParams;
let bakeryID = params.get("bakeryNumber");

//set up a filter to filter the array for objects whos bakeryID matches the bakeryNumber then grab the first object from that filtered set
let result = data.filter((b) => b.bakeryNumber == bakeryID)[0]
console.log(result)


var source = document.getElementById("entry-template").innerHTML;
// Handlebars.registerPartial('bakeryprofile', bakeryprofile);
// console.log(bakeryprofile)
var template = Handlebars.compile(source);
var context = result;

var html = template(context);

document.getElementById("profile").innerHTML = html;


//CHART AVERAGE AREA IN d3
// let width = document.getElementById("chart-average").offsetWidth

// let height = document.getElementById("chart-average").offsetHeight

// var svg = d3.select('#chart-average')
//     .append('svg')
//         .attr("width", width)
//         .attr("height", height)
//     .append('g')

// var rows = result.avgScores;
// var value = [0, 1, 2, 3, 4, 5]

// const x = d3.scaleBand()
//     .range([0, width])
//     .domain(rows)
//     .padding(0.01)
// svg.append("g")
//     .attr("transform", "translate(0," + height + ")")
//     .call(d3.axisBottom(x))

// const y = d3.scaleBand()
//     .range([height, 0])
//     .domain([0,5])
//     .padding(0.01)
// svg.append("g")
//     .call(d3.axisLeft(y))

// svg.selectAll()
//     .data(data, function(d) {
//         return d.row+':'+d.value
//     })
//     .enter()
//     .append("rect")
//     .attr("x", function(d) {
//         return x(d.value)
//     })
//     .attr("y", function(d) {
//         return y(d.row)
//     })
//     .attr("width", x.bandwidth())
//     .attr("height", y.bandwidth())
//     .style("fill", "#dddddd")