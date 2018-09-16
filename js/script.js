function test() {
  console.log("HI");
  $("#partner").focus();
}

/*Works only with Chrome 
Inspired by Erik Deiner's concept :
http://dribbble.com/shots/435827-Concept-for-budget-price-slider
*/
$("#range")
  .on("input", function() {
    $(".output").val(this.value);
  })
  .trigger("change");
