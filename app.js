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


var source = document.getElementById("entry-template").innerHTML;
// Handlebars.registerPartial('bakeryprofile', bakeryprofile);
// console.log(bakeryprofile)
var template = Handlebars.compile(source);
var context = result;


var html = template(context);

document.getElementById("profile").innerHTML = html;

// AVERAGE SCORE AREA //

//creating the array for the 5 boxes so it's always a score of 5
let boxes = new Array(5).fill(null)
let colors = ['#502A27', '#E86663', '#EDB834', '#923F3D', '#99C983']

//creating the div for the chart to live in and linking the 5 categories of data so there are 5 rows of 5 boxes
let avgScoreRow = d3.select('#chart-average')
    .selectAll('div')
    .data(Object.keys(result.avgScores[0]))
    .join(
        (enter) => enter
            .append("div")
            .classed('avgScoreRow', true)
            .style("color", (d, i) => colors[i])
        ,(update) => update
        ,(exit) => exit.remove()
    )

//each "loop" so that for each row, for each 5 boxes, it finds the data and loops for each category
avgScoreRow.each(function(category, i) {
    // label to live within the same div but similar each idea so it reads one label for each row
    const catLabel = Object.keys(result.avgScores[0])
        d3.select(this)
            .append('div')
            .classed('catLabel', true)
            .text(category)
            .style('color', '#502A27')
    //finding the data for how much of each row to fill 
    const score = result.avgScores[0][category]
        d3.select(this)
            .append('div')
            .classed('scoreBoxDiv', true)
            .selectAll('div')
            .data(boxes)
            .join(
                (enter) => enter
                    .append('div')
                    .classed('scoreBoxes', true)
                    .style('border', '1px solid currentcolor')
                    .style('background', (category, i) => `linear-gradient(to right, currentcolor 0%, currentcolor ${Math.max(score - (i),0)*100}%, transparent  ${Math.min(score - (i),1)*100}%, transparent 100%`)
                ,(update) => update
                ,(exit) => exit.remove()
            )
    //value label for each row
    const valueLabel = result.avgScores[0][category]
        d3.select(this)
            .append('div')
            .classed('valueLabel', true)
            .text(valueLabel)
            .style('color', '#502A27')
     }
    )   

// TASTERS SCORE AREA //

let tasterBars = new Array(1).fill(null)

let tasterScore = d3.selectAll('.chart')
    .selectAll('div')
    .data(Object.keys(result.scores[0].person[0].votes[0]))
        .join(
        (enter) => enter
            .append('div')
            .classed('tastedScoreRow', true)
            .style("color", (d, i) => colors[i])
        ,(update) => update
        ,(exit) => exit.remove()
    )


tasterScore.each(function(category, i) {
    const catLabel = Object.keys(result.scores[0].person[0].votes[0])
        d3.select(this)
            .append('div')
            .classed('catLabel-taster', true)
            .text(category)
            .style('color', '#a58567')
    const score = result.scores[0].person[0].votes[0][category]
    console.log(score)
        // console.log(catLabel)
        d3.select(this)
            .append('div')
            .classed('scoreBarDiv', true)
            .selectAll('div')
            .data(tasterBars)
            .join(
                (enter) => enter
                    .append('div')
                    .classed('scoreBars', true)
                    .style('border', '1px solid currentcolor')
                    .style('background', (category, i) => `linear-gradient(to right, currentcolor 0%, currentcolor ${(score -i)*20}%, transparent ${(score -i)*20}%, transparent 100%`)
                ,(update) => update
                ,(exit) => exit.remove()
            )

})

