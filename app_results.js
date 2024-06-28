import data from "/data.json" with { type: "json" };

//get the bakery number for the profile that was selected
let url = new URL(document.location);
let params = url.searchParams;
let bakeryID = params.get("bakeryNumber");

//set up a filter to filter the array for objects whos bakeryID matches the bakeryNumber then grab the first object from that filtered set
let sortedHighArray = data.sort((a, b) => b.Overall - a.Overall)

var source = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);
var context = data;

var html = template(context);

document.getElementById("profile").innerHTML = html;

//find the highest overall
let highestOverall = sortedHighArray[0]
let highestOverallHed = sortedHighArray[0].bakeryhed
document.getElementById("best-hedbakery").innerHTML = highestOverallHed;

//get the highest overall chart
// let restOfHighArray = sortedHighArray.slice(1)
// let restOfHighArrayHed = restOfHighArray
// document.getElementById("bakery-item").innerHTML = restOfHighArrayHed;

let colors = ['#502A27', '#E86663', '#EDB834', '#923F3D', '#99C983']

// Other bakeries area //

let avgScoreRow = d3.selectAll('#chart-restOf')
    .selectAll('div')
    .data(Object.keys(sortedHighArray[0].avgScores[0]))
    .join(
        (enter) => enter
            .append("div")
            .classed('avgScoreRow', true)
            .style("color", (d, i) => colors[i])
        ,(update) => update
        ,(exit) => exit.remove()
    )

let boxes = new Array(1).fill(null)

//each "loop" so that for each row, for each 5 boxes, it finds the data and loops for each category
avgScoreRow.each(function(category, i) {
    // label to live within the same div but similar each idea so it reads one label for each row
    const catLabel = Object.keys(sortedHighArray[0].avgScores[0])
        d3.select(this)
            .append('div')
            .classed('catLabel', true)
            .text(category)
            .style('color', '#502A27')
    //finding the data for how much of each row to fill 
        d3.select(this)
            .append('div')
            .classed('scoreBoxDiv', true)
            .selectAll('div')
            .data(boxes)
            .join(
                (enter) => enter
                  .append('div')
                    .classed('scoreBoxes', true)
                    .style('border', '1px solid #502A27')
                    .style('background', `linear-gradient(to right, #502A27 0%, #502A27 50%, transparent 50%, transparent 100%`)
                ,(update) => update
             ,(exit) => exit.remove()
            )
          


})