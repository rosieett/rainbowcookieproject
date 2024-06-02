import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm"

let chart = d3.select('body')
    .append("div")
    .classed('smallMultiple', true)
    .append("svg")
    .attr('width', '100%')
    .attr("height", "100%")
    .style('background-color', 'blue')


const width = chart.svg.node().getBoundingClientRect().width;
const height = chart.svg.node().getBoundingClientRect().height;
const marginLeft = 100;
const marginRight = 50;
const marginTop = 100;
const marginBottom = 150;
const bottom = height - marginBottom;