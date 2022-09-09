const getNewAdvice = async() => {
    console.log("New Advice");
    loadAdvice();
    // debounce
    const request = await fetch("https://api.adviceslip.com/advice");
    const data = await request.json();
    updateAdvice(data.slip.id, data.slip.advice);
}

const loadAdvice = () => {
    console.log("HERE")
    card = document.getElementsByClassName("card");
    for (let el of card[0].childNodes) {
        if (el.classList && !(el.classList.contains("dice"))) {
            el.classList.add("hide")
        }
        if (el.classList && el.classList.contains("lds-ellipsis")) {
            el.classList.remove("hide")
                // el.classList.add("show")
        }
    }
}

const updateAdvice = (id, advice) => {
    card = document.getElementsByClassName("card");
    for (let el of card[0].childNodes) {
        if (el.classList && !(el.classList.contains("dice") || el.classList.contains("lds-ellipsis"))) {
            el.classList.remove("hide")
        }
        if (el.classList && el.classList.contains("lds-ellipsis")) {
            el.classList.add("hide")
                // el.classList.remove("show")
        }
    }
    slipId = document.getElementById("slip_id");
    slipAdvice = document.getElementById("slip_advice");
    slipId.innerHTML = id;
    slipAdvice.innerHTML = advice;
}