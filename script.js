//When my calendar is opened, the current date is displayed.
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

moment().hour(Number);

//when the save button is clicked on each hour the input is logged to console
//the button click sets info to local storage with time var
  $(".saveBtn").on("click", function (event) {
    event.preventDefault();
    var storedDescriptionEl = $(this).siblings(".description");
   
    let input = storedDescriptionEl.val();
    console.log("text: " ,input);

    var time = $(this).parent().attr("id");
    console.log("time: " + time);
    console.log("button clicked");
     localStorage.setItem(time, input);

    });

  function plannerHours() {
    var currentHour = moment().hour();
    //var currentHour: calculated from momentJS
    //".hourBlock" pulled in from HTML
    //runs constantly through the hour blocks
    //gets items from local storage so they will stay on calendar after refresh
    $(".hourBlock").each(function () {
      var hourBlockEl = $(this).attr("id")
      var descriptionEl=localStorage.getItem(hourBlockEl);
      console.log(currentHour, hourBlockEl, descriptionEl);
      $(this).children(".description").val(descriptionEl);
      
      //colors hours according to current time
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
  