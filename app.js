let btnArr = document.querySelectorAll(".btn-js")
let display = document.querySelector(".upper-text_box")
let result = document.querySelector(".result")


btnArr.forEach(btn => {
    btn.addEventListener("click", function (e) {
        

        switch (e.target.innerText) {
            case "C":
                display.innerText = ""
            break;
            
            case '←':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1)
                    if (display.innerText.length == 0) {
                        result.innerText = ""
                    }
                    if (display.innerText == "undefine") {
                        display.innerText = ""
                        result.innerText = ""
                    }
                    break
                }

                case "=":
                    result.innerText = eval(display.innerText)
                    display.innerText = result.innerText
                    break

                default:
                    display.innerText += e.target.innerText
        }


    })
});