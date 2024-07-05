import data from "/data.json" with { type: "json" };

var source = document.getElementById("mainContainer").innerHTML;
var template = Handlebars.compile(source);
d3.selectAll('input[name="bestOf"]').on('input', (e) => { 
    // sort(e.currentTarget.value)
    let clicked = e.currentTarget.value;
    console.log(clicked)
    let clickedValue = clicked.charAt(0).toUpperCase()
    let restofValue = clicked.slice(1)
    clickedValue = clickedValue + restofValue
    console.log(clickedValue)
    sort(clickedValue)
})

// const dropdownBtn = document.getElementById('btn')
// const dropdownMenu = document.getElementById("dropdown");
// const toggleArrow = document.getElementById("arrow");

// const toggleDropdown = function () {
//     dropdownMenu.classList.toggle("show");
//     toggleArrow.classList.toggle("arrow");
// };

// dropdownBtn.addEventListener("click", function (e) {
//     e.stopPropagation();
//     toggleDropdown();
// });

// document.documentElement.addEventListener("click", function () {
//     if (dropdownMenu.classList.contains("show")) {
//         toggleDropdown();
//     }
// });

d3.selectAll('input[name="sortbyLow"]').on('input', (e) => { 
    // console.log(e.currentTarget.value)
    sort(e.currentTarget.value)
    sort(isReversed = true)
})

d3.selectAll('input[name="dropdownfilterLow"]').on('input', (e) => { 
})

function sort(by="Overall", isReversed = false) {

    let sortedHighArray = data.sort((a, b) => {
        if (by in a) {
            return b[by] - a[by];
        } else {
            return b.avgScores[0][by] - a.avgScores[0][by];
        }})

    if(isReversed) {
        sortedHighArray.reverse();
    }

    var html = template(sortedHighArray);
    document.getElementById("mainContainer").innerHTML = html;

    sortedHighArray.forEach(function(d, i){
        let categories = d.avgScores[0]
        let bakeryData = d.avgScores

        let bakeryChart = d3.selectAll('.bakery-restOf').filter((dd, ii) => ii == i)

        if (i !== 0) {
            let labelsDiv = bakeryChart.select('.chart-restOf')
                .append('div')
                .classed('labels', true)
            let scoreBarDivs = bakeryChart.select('.chart-restOf')
                .append('div')
                .classed('scoreBarDivs', true)

            let cat_i = 0
            for (let categorie in categories) {
                let rowsLabels = bakeryChart.selectAll('.labels')
                    .append('div')
                    .classed('catLabel-result', true)
                    .text(categorie)

                let scoreBars = bakeryChart.selectAll('.scoreBarDivs')
                    .append('div')
                    .style('color', '#A58567')
                    .classed('scoreBars', true)
                    .style('border', '1px solid #A58567')
                    .style('background', (dd, ii) => `linear-gradient(to right, #A58567 0%, #A58567 ${(categories[categorie])*20}%, transparent ${(categories[categorie])*20}%, transparent 100%`)

                    cat_i++;
            }
        } 
        
        else {
        let colors = ['#502A27', '#E86663', '#EDB834', '#923F3D', '#99C983']
        let boxes = new Array(5).fill(null)

            let avgScoreRow = bakeryChart.select('.chart-restOf')
                .selectAll('div')
                .data(Object.keys(categories))
                .join(        
                    (enter) => enter
                        .append("div")
                        .classed('avgScoreRow', true)
                        .style("color", (d, i) => colors[i])
                    ,(update) => update
                    ,(exit) => exit.remove()
                    )

            avgScoreRow.each(function(d, i) {
                let catLabel = Object.keys(categories)
                    d3.select(this)
                        .append('div')
                        .classed('catLabel', true)
                        .style('color', '#502A27')
                        .text(catLabel[i])
                let score = categories[d]
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
            })
        }
    })




}

sort();


