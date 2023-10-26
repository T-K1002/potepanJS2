function clickbutton(target) {
let result = document.getElementById("result")
let targetValue = target.innerHTML;


if(targetValue == "AC"){
  result.innerHTML ="0"
}
else if(targetValue == "="){
  result.innerHTML = eval(result.innerHTML)
}
else if(result.innerHTML.slice(-1) == "+"){
  if(targetValue == "+"){
  let result2 = result.innerHTML.slice(0,-1)
  result.innerHTML = result2 + targetValue
  }
  else if(targetValue == "-"){
  let result2 = result.innerHTML.slice(0,-1)
  result.innerHTML = result2 + targetValue
  }
  else if(targetValue == "*"){
  let result2 = result.innerHTML.slice(0,-1)
  result.innerHTML = result2 + targetValue
  }
  else if(targetValue == "/"){
  let result2 = result.innerHTML.slice(0,-1)
  result.innerHTML = result2 + targetValue
  }
  else if(targetValue == "."){
  let result2 = result.innerHTML.slice(0,-1)
  result.innerHTML = result2 + targetValue
  }
  else if(targetValue == "00"){
  let result3 = result.innerHTML
  result.innerHTML = result3
  }
  
  else{
  result.innerHTML += targetValue
  }
}
else if(result.innerHTML.slice(-1) == "-"){
  if(targetValue == "+"){
  let result2 = result.innerHTML.slice(0,-1)
  result.innerHTML = result2 + targetValue
  }
  else if(targetValue == "-"){
  let result2 = result.innerHTML.slice(0,-1)
  result.innerHTML = result2 + targetValue
  }
  else if(targetValue == "*"){
  let result2 = result.innerHTML.slice(0,-1)
  result.innerHTML = result2 + targetValue
  }
  else if(targetValue == "/"){
  let result2 = result.innerHTML.slice(0,-1)
  result.innerHTML = result2 + targetValue
  }
  else if(targetValue == "."){
  let result2 = result.innerHTML.slice(0,-1)
  result.innerHTML = result2 + targetValue
  }
  else if(targetValue == "00"){
  let result3 = result.innerHTML
  result.innerHTML = result3
  }
  
  else{
  result.innerHTML += targetValue
  }
}
else if(result.innerHTML.slice(-1) == "*"){
  if(targetValue == "+"){
  let result2 = result.innerHTML.slice(0,-1)
  result.innerHTML = result2 + targetValue
  }
  else if(targetValue == "-"){
  let result2 = result.innerHTML.slice(0,-1)
  result.innerHTML = result2 + targetValue
  }
  else if(targetValue == "*"){
  let result2 = result.innerHTML.slice(0,-1)
  result.innerHTML = result2 + targetValue
  }
  else if(targetValue == "/"){
  let result2 = result.innerHTML.slice(0,-1)
  result.innerHTML = result2 + targetValue
  }
  else if(targetValue == "."){
  let result2 = result.innerHTML.slice(0,-1)
  result.innerHTML = result2 + targetValue
  }
  else if(targetValue == "00"){
  let result3 = result.innerHTML
  result.innerHTML = result3
  }
  
  else{
  result.innerHTML += targetValue
  }
}
else if(result.innerHTML.slice(-1) == "/"){
  if(targetValue == "+"){
  let result2 = result.innerHTML.slice(0,-1)
  result.innerHTML = result2 + targetValue
  }
  else if(targetValue == "-"){
  let result2 = result.innerHTML.slice(0,-1)
  result.innerHTML = result2 + targetValue
  }
  else if(targetValue == "*"){
  let result2 = result.innerHTML.slice(0,-1)
  result.innerHTML = result2 + targetValue
  }
  else if(targetValue == "/"){
  let result2 = result.innerHTML.slice(0,-1)
  result.innerHTML = result2 + targetValue
  }
  else if(targetValue == "."){
  let result2 = result.innerHTML.slice(0,-1)
  result.innerHTML = result2 + targetValue
  }
  else if(targetValue == "00"){
  let result3 = result.innerHTML
  result.innerHTML = result3
  }
  
  else{
  result.innerHTML += targetValue
  }
}
else if(result.innerHTML.slice(-1) == "."){
  if(targetValue == "+"){
  let result2 = result.innerHTML.slice(0,-1)
  result.innerHTML = result2 + targetValue
  }
  else if(targetValue == "-"){
  let result2 = result.innerHTML.slice(0,-1)
  result.innerHTML = result2 + targetValue
  }
  else if(targetValue == "*"){
  let result2 = result.innerHTML.slice(0,-1)
  result.innerHTML = result2 + targetValue
  }
  else if(targetValue == "/"){
  let result2 = result.innerHTML.slice(0,-1)
  result.innerHTML = result2 + targetValue
  }
  else if(targetValue == "."){
  let result2 = result.innerHTML.slice(0,-1)
  result.innerHTML = result2 + targetValue
  }
  else if(targetValue == "00"){
  let result3 = result.innerHTML
  result.innerHTML = result3
  }
  
  else{
  result.innerHTML += targetValue
  }
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