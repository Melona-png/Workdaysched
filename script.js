// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

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

  $("#9 .description").text(localStorage.getItem("9"));
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  //Pseudocode- create eventListener for click event on the save button.
  //What is blockTime- where do I call this function

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

  // TODO: Add code to display the current date in the header of the page.
});
