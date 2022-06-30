


$("select")
.change(function () {
  // $('#paragraph').text($.text());
  // $('#paragraph').text($('#opt-2').text());
  // $('#paragraph').text($('#opt-3').text());
  let selectedText = "";
  $("select option:selected").each(function () {
    selectedText += $(this).text() + "";
    
  });
  $("#paragraph").html(selectedText);
})
.trigger("change");