$(document).ready(function () {
    let result = 2;
    $("#paragraph").text(result);
    $("#division").change(function () {
      let result = $("input:checked");
      $("#paragraph").text(result.length);
    });
  });