let buttonElem = document.getElementsByClassName('dice-placeholder')[0];
buttonElem.addEventListener('click', fetchAdvice);

function fetchAdvice() {
    let idElem = document.getElementsByClassName("advice-id")[0];
    let textElem = document.getElementsByClassName("advice-text")[0];

    fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
        idElem.innerText = "ADVICE #" + data["slip"]["id"];
        textElem.innerText = `"${data["slip"]["advice"]}"`;
    });
}

fetchAdvice();