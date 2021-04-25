currentDate = moment().format('dddd, MMMM Do YYYY');
var currentTime = moment().format("H A");
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

        if (userData !== null) {
            textAreaElement[0].children[1].innerHTML = userData;
        }
    }
}

function highlightNow(time) {
    var currentActivity = moment(currentTime, "H A");
    var entryActivity = moment(time, "H A")
    if (currentActivity.isBefore(entryActivity) === true) {
        return "future";
    } else if (currentActivity.isAfter(entryActivity) === true) {
        return "past"
    } else {
        return "present";
    }
}