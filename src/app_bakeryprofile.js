import data from "../data/data.json" with { type: "json" };
import { mobileMenu } from "../modules/mobileMenu.js";


//get the bakery number for the profile that was selected
let url = new URL(document.location);
let params = url.searchParams;
let bakeryID = parseInt(params.get("bakeryNumber"))



//set up a filter to filter the array for objects whos bakeryID matches the bakeryNumber then grab the first object from that filtered set
let result = data.filter((b) => b.bakeryNumber == bakeryID)[0]

let source = document.getElementById("entry-template").innerHTML;
// Handlebars.registerPartial('bakeryprofile', bakeryprofile);
// console.log(bakeryprofile)
let template = Handlebars.compile(source);
let context = result;

let html = template(context);
document.getElementById("profile").innerHTML = html;

//NEXT BUTTON
//find the main part of the url that wont change
let mainURL = window.location.href.split('=')[0];

//find the button
let nextButton = document.getElementById('next')

//add one to the bakeryId that it's currently on
let nextBakery = bakeryID+1

//when you click the next button, take the part of the url that doesnt change, and add in an = then next bakery number
nextButton.addEventListener('click', (e) => {
    window.location.href = mainURL + '=' + nextBakery;
})

//when you hit the end of the data set, hide the next button
if (bakeryID === data.length){
    let hidden = d3.select('#nextLabel')
        .style('display', 'none')
}


// AVERAGE SCORE AREA //

//creating the array for the 5 boxes so it's always a score of 5
let boxes = new Array(5).fill(null)
let colors = ['#502A27', '#E86663', '#EDB834', '#923F3D', '#99C983']

// console.log(Object.keys(result.avgScores[0]))
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

let outerloop = result.scores

outerloop.forEach(function(d, i){
    let people = d.person

 people.forEach(function(d, i){
       let categories = d.votes[0];
       let personsChart = d3.selectAll('.scores').filter((dd, ii) => ii == i)

        let labelsDiv = personsChart.select('.chart')
                .append('div')
                .classed('labels', true)
        let scoreBarDivs = personsChart.select('.chart')
                .append('div')
                .classed('scoreBarDivs', true)

        let cat_i = 0;
        for (let categorie in categories) {
            // console.log(`${categories[categorie]}`)
            let rowsLabels = personsChart.selectAll('.labels')
                .append('div')
                .classed('catLabel-taster', true)
                .text(categorie)

            let scoreBars = personsChart.selectAll('.scoreBarDivs')
                .append('div')
                .style('color', colors[cat_i])
                .classed('scoreBars', true)
                .style('border', '1px solid currentcolor')
                .style('background', (dd, ii) => `linear-gradient(to right, currentcolor 0%, currentcolor ${(categories[categorie])*20}%, transparent ${(categories[categorie])*20}%, transparent 100%`)

                cat_i++;

        }
       })
    })

mobileMenu();