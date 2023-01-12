$(document).ready(function () {
  var todayDate = dayjs().format("dddd, MMMM D");
  $("#currentDay").html(todayDate);

  // click event listener for button
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // local storage
    localStorage.setItem(time, text);
  });
    // colorChange based on past, present, future for blockTime
  function colorChange() {
    var currentTime = parseInt(dayjs().format("HH"));

    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id"));

      if (blockTime < currentTime) {
        $(this).addClass("past");
      } else if (blockTime === currentTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  colorChange();
  // Individual blockTime 
  $("#9 .description").text(localStorage.getItem("9"));
  $("#10 .description").text(localStorage.getItem("10"));
  $("#11 .description").text(localStorage.getItem("11"));
  $("#12 .description").text(localStorage.getItem("12"));
  $("#13 .description").text(localStorage.getItem("13"));
  $("#14 .description").text(localStorage.getItem("14"));
  $("#15 .description").text(localStorage.getItem("15"));
  $("#16 .description").text(localStorage.getItem("16"));

 // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // Apply styling to elements based on time block through the ID
  // for loop to determine current time vs time blocks

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // localStorage.getItem(key) to collect saved data from line 47
  // fetch and .textContent to grab data from each key and display to screen using forloop
});
