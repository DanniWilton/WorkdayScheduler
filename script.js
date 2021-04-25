currentDate = moment().format('dddd, MMMM Do YYYY');

var planWorkDay = [
    { time: "9am", event:""}
];
$("#currentDay").text(currentDate);

$(document).ready(function() {
    displayLocalStorage();
});

// when viewing timeblocks for the day, each time block is color coded to indicate whether it is in the past, present or future

//local storage
$("button").click(function() {
    var hourBlock = $(this).parent().attr("id")
    var userInput = $(this).siblings("textarea").val()
    localStorage.setItem(hourBlock, userInput)
});

function displayLocalStorage() {
    for (let i = 9; i <= 18; i++) {
        var userData = localStorage.getItem(`hour-${i}`);
        var textAreaElement = $(`#hour-${i}`);
        console.log(textAreaElement)
        if (userData !== null) {
            textAreaElement.val(userData)
            console.log(textAreaElement.val())
        }
    }
}