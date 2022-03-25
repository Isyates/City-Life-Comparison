// objective is to compare two cities across all city indexes from the teleport API protocols and give you a comparison(either using arrows or percentages) of the two cities

// things we will need
// ability to call two separate inputs into two separate buttons
// pull the data for each city and list the information in a set of lists by numbers(using LIs in the HTML maybe for static parts maybe?)

// do a comparison of the data and an evaluation to determine if it is greater than or less than for each category.

// extra: build a few example people and rate the cities based on those criteria primarily

// comments from yanny - keep it simple, commit often, make your git commit messages meaningful, when asking questions reach out to peers, help channels then instructors/Yanny


console.log("JS is connected")

const $button = $('button')
const $input = $('input')

// this allows you to type in a city and get the information.
$button.on('click', () => {
    const city = $input.val()
    const cityLower = city.toLowerCase();
$.ajax(`https://api.teleport.org/api/urban_areas/slug:${cityLower}/scores`).then((data)=> {

console.log(data)
})




})
