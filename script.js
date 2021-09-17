//document.querySelector('#chooseColor').addEventListener(onchange, selectBackground);

function selectBackground() {

    let select = document.querySelector('#chooseColor').value;

    if (select == "light") {
        document.querySelector("body").style.backgroundColor = "#FFFFE0";
        document.querySelector('#chooseColor').style.backgroundColor = "#FFFFE0";
    } 
    else if (select == "dark") {
        document.querySelector("body").style.backgroundColor  = '#2F4F4F';
        document.querySelector('#chooseColor').style.backgroundColor = '#2F4F4F';
    }
    else if (select == "blue") {
        document.querySelector("body").style.backgroundColor  = '#87CEEB';
        document.querySelector('#chooseColor').style.backgroundColor = '#87CEEB';
    }
    else if (select == "pink") {
        document.querySelector("body").style.backgroundColor  = '#FFC0CB';
        document.querySelector('#chooseColor').style.backgroundColor = '#FFC0CB';
    }
}
