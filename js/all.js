var search = document.querySelector("img");

function openURL(e) {
  var input = document.querySelector("input");
  var value = input.value;
  if(value == ""){
    e.preventDefault();
  } else {
    var url = "./search.php?query=" + value;
    window.open(url, "_parent");
    value = "";
  }
}

search.addEventListener("click", openURL);

var inputdelete = document.getElementById("inputdelete");
inputdelete.addEventListener("click", function(){
  var input = document.querySelector("input");
  input.value = "";
});