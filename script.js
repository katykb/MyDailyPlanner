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
//function all() {
  // //console.log(this);
  // var time = $(this).parent().attr("id");
  // var text = $(this).siblings().val();

  $(".saveBtn").on("click", function (event) {
    event.preventDefault();
    var storedDescriptionEl = $(this).siblings(".description");
    //var hourEl = $(".hour");

    let input = storedDescriptionEl.val();
    console.log("text: " ,input);

    var time = $(this).parent().attr("id");
    console.log("time: " + time);
    console.log("button clicked");
     localStorage.setItem(time, input);

    // $("8.description").val(localStorage.getItem("8"));
  });

  function plannerHours() {
    //var currentHour: calculated from momentJS
    var currentHour = moment().hour();
    //".hourBlock" pulled in from HTML
    //runs constantly through the hour blocks
    $(".hourBlock").each(function () {
      //converts the string into an integer and assigns an attribute and splits the array
      var hourBlockEl = $(this).attr("id")
      var descriptionEl=localStorage.getItem(hourBlockEl);
      console.log(currentHour, hourBlockEl, descriptionEl);
      $(this).children(".description").val(descriptionEl);
      
      if (hourBlockEl < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
      } else if (hourBlockEl == currentHour) {
        $(this).addClass("present");
        $(this).removeClass("future");
        $(this).removeClass("past");
      } else if (hourBlockEl > currentHour) {
        $(this).addClass("future");
        $(this).addClass("past");
        $(this).addClass("present");
      }
    });
  }

  plannerHours();
  //storedDescriptionEl = localStorage.getItem(JSON.stringify( storedDescriptionEl));
  //console.log(storedDescriptionEl);
//}
//all();
