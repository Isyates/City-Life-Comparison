// objective is to compare two cities across all city indexes from the teleport API protocols and give you a comparison(either using arrows or percentages) of the two cities

// things we will need
// ability to call two separate inputs into two separate buttons
// pull the data for each city and list the information in a set of lists by numbers(using LIs in the HTML maybe for static parts maybe?)

// do a comparison of the data and an evaluation to determine if it is greater than or less than for each category.

// extra: build a few example people and rate the cities based on those criteria primarily

// comments from yanny - keep it simple, commit often, make your git commit messages meaningful, when asking questions reach out to peers, help channels then instructors/Yanny


// console.log("JS is connected")


const $buttonList1 = $('#buttonSearch1')
const $buttonList2 = $('#buttonSearch2')



function SelectCity(){

    var list1compare

$buttonList1.on('click', () => {
    const $option = $('#dropList1 option:selected').val() // gets the value from the selected item from the first list
    console.log($option)
$.ajax(`https://api.teleport.org/api/urban_areas/slug:${$option}/scores`).then((data)=> {

list1compare = data.categories[0]



})
console.log(list1compare)
})

$buttonList2.on('click', () => {
    const $option2 = $('#dropList2 option:selected').val() // gets the value from the selected item from the second list
    console.log($option2)
$.ajax(`https://api.teleport.org/api/urban_areas/slug:${$option2}/scores`).then((data)=> {

var List2compare = data.categories[0]

})
console.log(list1compare, List2compare)
})



}


SelectCity()

//CompareCity(list1compare, List2compare)

function CompareCity(entry1,entry2){

    console.log(entry1)


}

// currently have semi working functions for both selecting the values from the lists and then attempting to pull the data from them into the second CompareCity function.

// next steps: test pulling data into an object array and returning it to  pull it into the CompareCity function.

// questions: 
// how come i cannot pull the data from the ajax pulls into variables even while inside the function for it

// how can i pull the information into an array of objects and call for it into the comparecity function