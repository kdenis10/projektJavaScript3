// pobieram przycisk button z klasą "js":
const btnJS = document.querySelector('.js');

// tworzę funkcję która będzie wywoławać się za każdyn kliknięciem "button-a":
function addSquare(){
    // tworzę element - "div"
    const divItem = document.createElement('div');

    //dodaję klasę "box" do nowostworzonego "div-a":
    // 1) divItem.className = "box";
    // 2) divItem.setAttribute("class", "box");
    /* 3) */ divItem.classList.add("box");

    // dodaję go jako dziecko do "body" HTML:
    document.body.appendChild(divItem);
}

// za każdym kliknięciem wywołuję funkcję, 
// która tworzy kolejny element - "div" 
btnJS.addEventListener("click", addSquare);