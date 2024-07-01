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
            .style('color', '#502A27')
        ,(update) => update
        ,(exit) => exit.remove()
    )

let boxes = new Array(1).fill(null)
    // console.log(sortedHighArray)

avgScoreRow.each(function(category, i) {
    const catLabel = Object.keys(sortedHighArray[0].avgScores[0])
        d3.select(this)
            .append('div')
            .classed('catLabel', true)
            .text(category)
            .style('color', '#502A27')

    const score = sortedHighArray[i].avgScores[0][category]
    console.log(score)
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
                .style('background', `linear-gradient(to right, #502A27 0%, #502A27 ${score*20}%, transparent ${score*20}%, transparent 100%`)
            ,(update) => update
            ,(exit) => exit.remove()

        )
})

    // for (let i = 0; i < sortedHighArray.length; i++){
    //     const score = sortedHighArray[i].avgScores[0]
    //     console.log(score)
    //     let bakery = d3.selectAll('.avgScoreRow')
    //             .append('div')
    //             .classed('scoreBoxDiv', true)
    //             .selectAll('div')
    //             .data(boxes)
    //             .join(
    //                 (enter) => enter
    //                 .append('div')
    //                     .classed('scoreBoxes', true)
    //                     .style('border', '1px solid #502A27')
    //                     .style('background', `linear-gradient(to right, #502A27 0%, #502A27 50%, transparent  50%, transparent 100%`)
    //                 ,(update) => update
    //             ,(exit) => exit.remove()
    //             )
    //       }

// let outerloop = result.scores
// let bakery = sortedHighArray
// console.log(bakery)

// // outerloop.forEach(function(d, i){
// //     let people = d.person

//  bakery.forEach(function(d, i){
//        let categories = bakery;
//        console.log(categories)
//        let personsChart = d3.selectAll('.scores').filter((dd, ii) => ii == person_i)

//         let labelsDiv = personsChart.select('.chart')
//                 .append('div')
//                 .classed('labels', true)
//         let scoreBarDivs = personsChart.select('.chart')
//                 .append('div')
//                 .classed('scoreBarDivs', true)

//         let cat_i = 0;
//         for (let categorie in categories) {
//             // console.log(`${categories[categorie]}`)
//             let rowsLabels = personsChart.selectAll('.labels')
//                 .append('div')
//                 .classed('catLabel-taster', true)
//                 .text(categorie)

//             let scoreBars = personsChart.selectAll('.scoreBarDivs')
//                 .append('div')
//                 .style('color', colors[cat_i])
//                 .classed('scoreBars', true)
//                 .style('border', '1px solid currentcolor')
//                 .style('background', (dd, ii) => `linear-gradient(to right, currentcolor 0%, currentcolor ${(categories[categorie])*20}%, transparent ${(categories[categorie])*20}%, transparent 100%`)

//                 cat_i++;

//         }
//        })
    // })