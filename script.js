//When my calendar is opened, the current date is displayed.
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

moment().hour(Number);

//time-block hours

moment().fromNow();
var hourEl = document.getElementById("description");
var time = moment().format("hh:mm:ss");
var rows = 
$("hour").text(time);


// var timeblock = document.getElementById("timeBlocks");
// var workDayHours = ["H mm ", "9:00", "10:00", "11:00", "12:00", "1:00", "2:00", "3:00", "4:00", "5:00"];

// var hour8El = document.getElementById("8");
// var time= moment.duration().hours();

// $("timeBlocks").text(time.format("h", "mm",));

// function getTimeBlocks(start, end){
//     var startTime = moment(start, "HH:mm");
//     var endTime = moment(end, "HH:mm");
// }
//   getTimeBlocks();