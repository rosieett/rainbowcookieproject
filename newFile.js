import { outerloop } from "./app";

outerloop.forEach(function (d, i) {
  let people = d.person;

  people.forEach(function (d, i) {
    let categories = d.votes[0];
    let personsChart = d3.selectAll(".scores").filter((dd, ii) => ii == i);
    let labelsDiv = personsChart
      .select(".chart")
      .append("div")
      .classed("labels", true);
    let scoreBarDivs = personsChart
      .select(".chart")
      .append("div")
      .classed("scoreBarDivs", true);

    for (let categorie in categories) {
      // console.log(`${categories[categorie]}`)
      let rowsLabels = personsChart
        .selectAll(".labels")
        .append("div")
        .classed("catLabel-taster", true)
        .text(categorie);

      let scoreBars = personsChart
        .selectAll(".scoreBarDivs")
        .append("div")
        .classed("scoreBars", true)
        .style("border", "1px solid currentcolor");
      // .style('background', (d, i) => `linear-gradient(to right, currentcolor 0%, currentcolor ${(categories[categorie])*20}%, transparent ${(categories[categorie])*20}%, transparent 100%`)
      console.log(categories[categorie]);
      console.log(scoreBars);

      // .selectAll('div')
      // .style('border', '1px solid currentcolor')
      // .style('background', (d, i) => `linear-gradient(to right, currentcolor 0%, currentcolor ${(categories[categorie])*20}%, transparent ${(categories[categorie])*20}%, transparent 100%`)
      //     .data(categorie)
      //     .join(
      //         (enter) => enter
      //         .append('div')
      //         .classed('scoreBars', true)
      //         .style('border', '1px solid currentcolor')
      //         .style('background', (d, i) => `linear-gradient(to right, currentcolor 0%, currentcolor ${(categories[categorie])*20}%, transparent ${(categories[categorie])*20}%, transparent 100%`)
      //     ,(update) => update
      //     ,(exit) => exit.remove()
      // )
    }
  });
});
