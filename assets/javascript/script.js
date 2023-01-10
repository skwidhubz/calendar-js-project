var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var savedNotes = localStorage.getItem("savedNotes")
// Initial display of the day/time before refresh occurs
$("#currentDay").text(dayjs().format('MMMM D, YYYY h:mm:ss A'));

// Prevent code from running untill page is loaded
$(document).ready(function () {
  setInterval(function() {
    $("#currentDay").text(days[dayjs().day()] + ", " + dayjs().format('MMMM D, YYYY h:mm:ss A'));
    timeTracker()}, 1000); 

  // Track time and apply styles to hour-blocks
  function timeTracker() {
    var currentHour = dayjs().hour();
    $(".time-block").each(function() {
      timeBlock = $(this).attr("id");
      if (currentHour < timeBlock) {
        $(this).addClass("future");}
      else if (currentHour >  timeBlock) {
        $(this).addClass("past");}
      else {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      }})}

  // Save-Button to save notes in hour-blocks
  $(".saveBtn").on("click", function() {
    var hourNote = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");
    localStorage.setItem(hour, hourNote)
  })

  // Get local storage data for each hour-block
  $("#8 .description").val(localStorage.getItem("8"));
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));
  $("#18 .description").val(localStorage.getItem("17"));
  timeTracker()
})
