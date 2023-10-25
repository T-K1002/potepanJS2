function clickbutton(target) {
let result = document.getElementById("result")
let targetValue = target.innerHTML;

if(targetValue == "AC"){
  result.innerHTML ="0"
}
else if(targetValue == "="){
  result.innerHTML = eval(result.innerHTML)
}
else{
  if(result.innerHTML =="0"){
    if(targetValue == "."){
    result.innerHTML += targetValue
    }
    else{
    result.innerHTML = targetValue 
    }
  }
  else if(result.innerHTML =="00"){
    result.innerHTML = targetValue 
  }
  else{
    result.innerHTML += targetValue
  }
}
}