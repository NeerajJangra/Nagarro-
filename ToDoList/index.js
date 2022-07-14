// to add task item in the list
$("#addBtn").click(function () {
  if ($("input").val().length == 0) {
    alert("Please enter the task");
  } else {
    var toAdd = $("input[name=ListItem]").val();
    $("ul").append(
      "<li>" +
        toAdd +
        "<button class='delBtn'>" +
        "Delete" +
        "</button>" +
        "</li>"
    );
  }
});
// delete task item
$("ul").on("click", ".delBtn", function () {
  $(this).parent("li").slideUp();
});
