function calc(){
  var a = parseInt(document.querySelector("#value01").value);
  var b = parseInt(document.querySelector("#value02").value);

  var op;

  if (document.querySelector("#add").checked){
    op = "add";
  } else if (document.querySelector("#min").checked){
    op = "min";
  } else if (document.querySelector("#mul").checked){
    op = "mul";
  } else if (document.querySelector("#div").checked){
    op = "div";
  }
/*
  var id = document.querySelector(id).value;
*/

  var calculate;

  if (op == "add") {
    calculate = a + b;
  } else if (op == "min"){
    calculate = a - b;
  }
  else if (op == "div"){
    calculate = a / b;
  }
  else if (op == "mul"){
    calculate = a * b;
  }
  else {
    "No result";
  }

  document.querySelector("#result").innerHTML = calculate;
}
