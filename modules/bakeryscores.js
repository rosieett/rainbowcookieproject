import data from "../data/data.json" with { type: "json" };




export function bakeryinfo () {


    let bakeryChart = d3.selectAll('.bakery-chart')
        
    let colors = ['#502A27', '#E86663', '#EDB834', '#923F3D', '#99C983']

    let labelsDiv = bakeryChart.select('.chart-restOf')
                .append('div')
                .classed('labels', true)
    }

console.log('working')