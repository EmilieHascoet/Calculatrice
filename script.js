let calc_est_base = true;


function TemplateCalc() {
    if (calc_est_base) {
        document.getElementById("templateCalc").style.gridTemplateColumns = "repeat(5, 1fr)";
        document.getElementById("templateCalc").style.gridTemplateRows = "auto repeat(7, 1fr) 1px";
        calc_est_base = false;
    } else {
        document.getElementById("templateCalc").style.gridTemplateColumns = "repeat(4, 1fr)";
        document.getElementById("templateCalc").style.gridTemplateRows = "auto repeat(5, 1fr) 1px";
        calc_est_base = true;
    }
}

function Convert() {
    let text = document.getElementById("convert").textContent;
    if (text == "deg") {
        document.getElementById("convert").innerHTML = "rad";
    } else {
        document.getElementById("convert").innerHTML = "deg";
    }
}