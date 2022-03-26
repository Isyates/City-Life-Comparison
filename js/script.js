// objective is to compare two cities across all city indexes from the teleport API protocols and give you a comparison(either using arrows or percentages) of the two cities

// things we will need
// ability to call two separate inputs into two separate buttons
// pull the data for each city and list the information in a set of lists by numbers(using LIs in the HTML maybe for static parts maybe?)

// do a comparison of the data and an evaluation to determine if it is greater than or less than for each category.

// extra: build a few example people and rate the cities based on those criteria primarily

// comments from yanny - keep it simple, commit often, make your git commit messages meaningful, when asking questions reach out to peers, help channels then instructors/Yanny


const $buttonList1 = $('#buttonSearch1')

var bigList1
var bigList2

$buttonList1.on('click', () => {
    SelectCity(bigList1, bigList2)
})

function SelectCity() {

    let list1compare
    let List2compare



    // $.ajax(`https://api.teleport.org/api/urban_areas`).then((data)=> {

    // console.log(data)



    // $.each(data, function (index, value) {
    //     $('#fullList1').append($('<option/>', { 
    //         value: "test",
    //         text : "test2" 
    //     }));
    // });      

    // })






    const $option = $('#dropList1 option:selected').val() // gets the value from the selected item from the first list

    $.ajax(`https://api.teleport.org/api/urban_areas/slug:${$option}/scores`).then((data) => {
        list1compare = data.categories
    })

    const $option2 = $('#dropList2 option:selected').val() // gets the value from the selected item from the second list

    $.ajax(`https://api.teleport.org/api/urban_areas/slug:${$option2}/scores`).then((data) => {
        List2compare = data.categories
        CompareCity(list1compare, List2compare, $option, $option2)
    })
}



function CompareCity(entry1, entry2, name1, name2) {

    console.log(name1, name2 + " inside compare city function")
    console.log(entry1, entry2)

        for (let index = 0; index < entry1.length; index++) {
        if (entry1[index].score_out_of_10 > entry2[index].score_out_of_10) {
            console.log(`${entry1[index].name} availability is greater in ${name1} than ${name2}`)
        } else {
            console.log(`${entry1[index].name} availability is greater in ${name2} than ${name1}`)
        }
    }
}

// now have two working lists and the beginning of the city comparison working. also got 1 button to trigger the entire search which makes more sense
// city comparison will need to be able to confirm using a loop(?) each potion
// next steps: still need to try and work out how to get the full city entries without manually entering them all.
// need to figure out jquery/CSS to get character changes or maybe images displayed for showing the comparisons

// questions:
// how will i be able to get the data
// need to rethink the steps that this program will take