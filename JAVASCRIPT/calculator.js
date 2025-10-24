let display = "";
let result = document.getElementById("r-box");
function clicks(val) {
    switch (val) {
        case "Ac":
            display = "";
            break;
        case "del":
            display = display.slice(0, -1);
            break;
        case "=":
            display = eval(display);
            break;
        default:
            display += val;
    }
    result.textContent = display;
}
