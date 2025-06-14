let button =document.getElementById("btn")
      let input = document.getElementById("input")
      let list = document.getElementById("todo")
      button.addEventListener("click",function(){
    if (input.value === "") {
        alert("plz enter the task name ")
    }else{
        let newelement = document.createElement("ul")
        list.append(newelement)
         newelement.innerHTML = `${input.value} <ion-icon name="trash-sharp"></ion-icon>`
         input.value =""
        let selector = newelement.querySelector("ion-icon")
        selector.addEventListener("click",function(){
        newelement.remove();
    })
    }
})