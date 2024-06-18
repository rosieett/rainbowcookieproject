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


//CHART AVERAGE AREA IN d3
let width = document.getElementById("chart-average").offsetWidth
let height = document.getElementById("chart-average").offsetHeight

// console.log(Object.keys(result.avgScores[0]))


let boxes = new Array(5).fill(null)
let colors = ['#502A27', '#E86663', '#EDB834', '#923F3D', '#99C983']


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


// let labels = d3.selectAll('.avgScoreRow')
// const label = Object.keys(result.avgScores[0])
//     console.log(label)
//         .append('div')
//         .classed('catLabel', true)
//         .selectAll('div')
//         .data(label)
//         .join(
//             (enter) => enter
//                 .append('p')
//                 .text((d) => label[i])
//             ,(update) => update
//             ,(exit) => exit.remove()
//         )




avgScoreRow.each(function(category, i) {
const label = Object.keys(result.avgScores[0])
    d3.select(this)
        .append('div')
        .text((category))
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
                .style('background', (d, i) => `linear-gradient(to right, currentcolor 0%, currentcolor ${Math.max(score - (i),0)*100}%, transparent  ${Math.min(score - (i),1)*100}%, transparent 100%`)
            ,(update) => update
            ,(exit) => exit.remove()
        )
 })   





//  avgScoreRow.each(function(category, i){
//     const label = Object(result.avgScores[0][category])
//     console.log(label)
//     d3.select(this)
//         .append('div')
//         .classed('catLabel', true)
//         .selectAll('div')
//         .data(boxes)
//         .join(
//             (enter) => enter
//                 .append('p')
//                 .text((d, i) => label)
//             ,(update) => update
//             ,(exit) => exit.remove()
//         )
//         console.log(label)

// })






