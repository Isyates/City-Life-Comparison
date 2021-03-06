
const $buttonList1 = $('#buttonSearch1')
var bigList1
var bigList2

$.ajax(`https://api.teleport.org/api/urban_areas`).then((data)=> { // this pulls the data

    for (const iterator of data._links["ua:item"]) {
        
        var optionSelect = $(`<option value=${iterator.name.toLowerCase().replaceAll(' ','-').replaceAll('.','').replaceAll(',','')}> ${iterator.name} </option>`)
        $(".fullList").append(optionSelect).append()

    }
})
$buttonList1.on('click', () => {

    SelectCity(bigList1, bigList2)
})
function SelectCity() {

    let list1compare = []
    let List2compare = []

    const $option = $('#dropList1 option:selected').val() // gets the value from the selected item from the first list

    $.ajax(`https://api.teleport.org/api/urban_areas/slug:${$option}/scores`).then((data) => {
        list1compare = data.categories

        const $option2 = $('#dropList2 option:selected').val() // gets the value from the selected item from the second list

        $.ajax(`https://api.teleport.org/api/urban_areas/slug:${$option2}/scores`).then((data) => {
            List2compare = data.categories
            console.log(list1compare)
            CompareCity(list1compare, List2compare, $option, $option2)
        })
    
        
    })
}



function CompareCity(entry1, entry2, name1, name2) {
    $(".indexvalue").remove()
    $(".primaryvalue").css("color,black")

    var listOfScores1
    var listOfScores2
    var displayScores1
    var displayScores2

        for (let index = 0; index < entry1.length; index++) {
            displayScores1 = $(`<ul class=indexvalue id=1primaryvalue${index} >${entry1[index].score_out_of_10.toFixed(2)}</ul>`)
            // this should create the variable that is a UL with an ID of primary value at index with internal information being the score out of 10 at the index

            listOfScores1 = entry1[index].score_out_of_10

            $(`#infoList1`).append(displayScores1)
            // this should append the information to the infolist
        }

        for (let index = 0; index < entry2.length; index++) {
            displayScores2 = $(`<ul class=indexvalue id=2primaryvalue${index}>${entry2[index].score_out_of_10.toFixed(2)}</ul>`)
            // this should create the variable that is a UL with an ID of primary value at index with internal information being the score out of 10 at the index

            listOfScores2 = entry1[index].score_out_of_10

            $(`#infoList2`).append(displayScores2)
            // this should append the information to the infolist


            if (entry1[index].score_out_of_10 > entry2[index].score_out_of_10) {
            $(`#1primaryvalue${index}`).css("color","MediumSeaGreen")

        } else if (entry1[index].score_out_of_10 < entry2[index].score_out_of_10) {
            console.log(`${entry1[index].name} availability is greater in ${name2} than ${name1}`)
            $(`#2primaryvalue${index}`).css("color","MediumSeaGreen")
        } else  if (entry1[index].score_out_of_10 == entry2[index].score_out_of_10){
            $(`#1primaryvalue${index}`).css("color","Khaki")
            $(`#2primaryvalue${index}`).css("color","Khaki")
        }
        }


        



$.ajax(`https://api.teleport.org/api/urban_areas/slug:${name1}/images/`).then((data) => {

console.log(data)

$("#cityImage1").attr('src', data.photos[0].image.web)

})

$.ajax(`https://api.teleport.org/api/urban_areas/slug:${name2}/images/`).then((data) => {

console.log(data)

$("#cityImage2").attr('src', data.photos[0].image.web)

})

}