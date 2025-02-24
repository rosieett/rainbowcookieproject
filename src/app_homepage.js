import data from "../data/data.json" with { type: "json" };



let category = d3.selectAll('input[name="awardCat"]');
category.on('input', (e) => {
    let cat = document.querySelector("input[name='awardCat']:checked").value;
    window.document.location = 'results.html' + "?defaultSort=" + cat;
})

