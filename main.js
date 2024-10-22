let screenValues = document.querySelector("#values")
let buttons = document.querySelectorAll("button")


buttons.forEach(buttons => buttons.addEventListener("click",(e)=>{
    e.preventDefault()

    let butttonClick = e.target.innerHTML

    if(butttonClick == "C"){
        screenValues.value = ""
    } else if(butttonClick == '='){
        let answer = eval(screenValues.value)
        screenValues.value = answer
    } else {
        return screenValues.value += butttonClick

    }

}))

// buttons.forEach(buttons => buttons.addEventListener("click",(e)=>{
//     // e.preventDefault()

//     let btnValue= e.target.innerHTML
    

//     switch(btnValue){
//         case "C":
//             screenValues.value = ""
//             break;
//             case "=":
//                 screenValues.value = eval(screenValues.value)
//                 break;
//                 default:
//                     screenValues.value += btnValue;
//                     break;
//     }
// }))