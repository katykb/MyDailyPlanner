//When my calendar is opened, the current date is displayed.
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

moment().hour(Number);

//time-block hours

// moment().fromNow();
// var hourEl = document.getElementById("description");
// var time = moment().format("hh:mm:ss");
// var rows = 
// $("hour").text(time);
function all(){

var storedDescriptionEl = $(".description");
var hourEl = $(".hour");


$(".saveBtn").on("click", function (event) {
  event.preventDefault();
  console.log("button clicked");
  localStorage.setItem("input", JSON.stringify(storedDescriptionEl));
})
  
  //storedDescriptionEl = localStorage.getItem(JSON.stringify( storedDescriptionEl));
  //console.log(storedDescriptionEl);

}
all ();