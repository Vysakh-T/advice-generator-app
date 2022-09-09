const getNewAdvice = async() => {

    // debounce
    const request = await fetch("https://api.adviceslip.com/advice");
    const data = await request.json();
    updateAdvice(data.slip.id, data.slip.advice)
}

const updateAdvice = (id, advice) => {
    slipId = document.getElementById("slip_id")
    slipAdvice = document.getElementById("slip_advice")

    slipId.innerHTML = id;
    slipAdvice.innerHTML = advice;
}